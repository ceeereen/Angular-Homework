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
public class PostController<postService> { //postService?
    

    @Autowired
    private PostRepository postRepository;
  

   @GetMapping("/posts")
    public List<Posts> getPosts() {
        List<Posts> posts = (List<Posts>) postRepository.findAll();
        
        // Kullanıcıların id değerlerini güncelleyelim
        for (Posts post : posts) {
            post.setCategoryID(post.getCategoryID());
        }
        
        return posts;
}

    @PostMapping("/posts")
    public void addPost(@RequestBody Posts post) {
        postRepository.save(post);
    }
    
    @GetMapping("/posts/{postID}")
    public ResponseEntity<Posts> getPostByID(@PathVariable Long postID) throws RelationNotFoundException {
        Posts post = postRepository.findById(postID)
                .orElseThrow(() -> new RelationNotFoundException("User does not exist"));

        return ResponseEntity.ok(post);
    }

    @PutMapping("/posts/{postID}")
    public ResponseEntity<Posts> updatePost(@PathVariable Long postID, @RequestBody Posts postDetails) throws RelationNotFoundException {
        Posts post = postRepository.findById(postID)
                .orElseThrow(() -> new RelationNotFoundException("Post does not exist"));

        post.setPostID(postDetails.getPostID());
        post.setUserID(postDetails.getUserID());
        post.setCategoryID(postDetails.getCategoryID());
        post.setTitle(postDetails.getTitle());
        post.setContent(postDetails.getContent());
        post.setViewCount(postDetails.getViewCount());
        post.setCreationDate(postDetails.getCreationDate());
        post.setIsPublished(postDetails.getIsPublished());

        Posts updatedPost = postRepository.save(post);
        return ResponseEntity.ok(updatedPost);
    }

    @DeleteMapping("/posts/{postID}")
    public ResponseEntity<Map<String, Boolean>> deletePost(@PathVariable Long postID) throws RelationNotFoundException {
        Posts post = postRepository.findById(postID)
                .orElseThrow(() -> new RelationNotFoundException("Post does not exist"));

        postRepository.delete(post);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
