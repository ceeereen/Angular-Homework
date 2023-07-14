import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categories } from 'src/app/categories';
import { CategoryService } from 'src/app/category.service';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent {


  categoryID!: number;
  category: Categories = new Categories();

  
  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  private getCategoryById() {
    this.categoryID = this.route.snapshot.params['categoryID'];
    this.categoryService.getCategoryByID(this.categoryID).subscribe({
      next: (data) => {
        this.category = data;
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  ngOnInit(): void {
    this.getCategoryById();
  }

  updateCategory() {
    this.categoryService.updateCategory(this.categoryID, this.category).subscribe({ //takes data from backend and updates it
      next: (data) => {                                         //subscribe watches response
        console.log(data);
        this.redirectToCategoryList();
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  //turn back to users
  redirectToCategoryList() {
    this.router.navigate(['/categories']);
  }

  //after click update user
  onSubmit() {
    console.log(this.category);
    this.updateCategory();
  }

}
