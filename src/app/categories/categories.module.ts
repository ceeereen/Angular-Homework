import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryListComponent } from './category-list/category-list.component';
import { AddCategoriesComponent } from './add-categories/add-categories.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { FormsModule } from '@angular/forms';
import { UpdateCategoryComponent } from './update-category/update-category.component';



@NgModule({
  declarations: [
    CategoryListComponent,
    AddCategoriesComponent,
    CategoryDetailsComponent,
    UpdateCategoryComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    CategoryListComponent,
    AddCategoriesComponent,
    CategoryDetailsComponent,
    UpdateCategoryComponent]
})
export class CategoriesModule { }
