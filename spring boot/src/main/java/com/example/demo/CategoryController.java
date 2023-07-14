package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.management.relation.RelationNotFoundException;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class CategoryController<categoryService> { 
    

    @Autowired
    private CategoryRepository categoryRepository;
  

   @GetMapping("/categories")
    public List<Categories> getCategories() {
        List<Categories> categories = (List<Categories>) categoryRepository.findAll();
        
        // Kullanıcıların id değerlerini güncelleyelim
        
        for (Categories category : categories) {
            category.setCategoryID(category.getCategoryID());
        }

        return categories;
        
}

    @PostMapping("/categories")
    public void addCategory(@RequestBody Categories category) {
        categoryRepository.save(category);
    }
    
    @GetMapping("/categories/{categoryID}")
    public ResponseEntity<Categories> getCategoryByID(@PathVariable Long categoryID) throws RelationNotFoundException {
        Categories category = categoryRepository.findById(categoryID)
                .orElseThrow(() -> new RelationNotFoundException("Category does not exist"));

        return ResponseEntity.ok(category);
    }

    
      @PutMapping("/categories/{categoryID}")
        public ResponseEntity<Categories> updateCategory(@PathVariable Long categoryID, @RequestBody Categories categoryDetails) throws RelationNotFoundException {
        Categories category = categoryRepository.findById(categoryID)
                .orElseThrow(() -> new RelationNotFoundException("category does not exist"));

        category.setCategoryID(categoryDetails.getCategoryID());
        category.setName(categoryDetails.getName());
        category.setCreationDate(categoryDetails.getCreationDate());

        Categories updatedCategory = categoryRepository.save(category);
        return ResponseEntity.ok(updatedCategory);
    }


    @DeleteMapping("/categories/{categoryID}")
    public ResponseEntity<Map<String, Boolean>> deleteCategory(@PathVariable Long categoryID) throws RelationNotFoundException {
        Categories category = categoryRepository.findById(categoryID)
                .orElseThrow(() -> new RelationNotFoundException("category does not exist"));

        categoryRepository.delete(category);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
