import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categories } from 'src/app/categories';
import { CategoryService } from 'src/app/category.service';

@Component({
  selector: 'app-add-categories',
  templateUrl: './add-categories.component.html',
  styleUrls: ['./add-categories.component.css']
})
export class AddCategoriesComponent {
  
  category: Categories = new Categories();
  categories: Categories[] = [];
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService,
  ) {}
  
 
  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.findAll().subscribe(categories => {
      this.categories = categories as Categories[];
    });
  }
  
  onSubmit() {
    this.categoryService.save(this.category).subscribe(result => this.gotoCategoryList());
  }

  gotoCategoryList() {
    this.router.navigate(['/categories']);
  }
}
