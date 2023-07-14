import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { Categories } from 'src/app/categories';
import { CategoryService } from 'src/app/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {

  categories!: Observable<Categories[]>;
 

  constructor(private categoriesService: CategoryService, private router: Router) {}
  ngOnInit() {
    this.categories = this.categoriesService.findAll();
  }

  updateCategory(categoryID: number | null) {
    if (categoryID !== null) {
      this.router.navigate(['/updatecategory', categoryID]);
    }
  }


  deleteCategory(categoryID: number) {
    this.categoriesService.deleteCategory(categoryID).subscribe(data => { //subscribe fonksiyonu, sunucudan gelen yanıtı (data) alır
      console.log(data);
      this.ngOnInit(); //refresh user list
    });
  }

  categoryDetails(categoryID: number){
    if (categoryID !== null) {
      this.router.navigate(['/categorydetails', categoryID]);
    }
  }

}
