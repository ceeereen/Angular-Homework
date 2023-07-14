import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/category.service';
import { Categories } from 'src/app/categories';
import { PostService } from 'src/app/post.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {
  categoryID!: number;
  category!: Categories;
  postCount: number = 0;
  
  constructor(
    private route: ActivatedRoute,
    private categoryService: CategoryService,
    private postService: PostService
  ) {}

  ngOnInit(): void {
    this.categoryID = this.route.snapshot.params['categoryID'];
    this.categoryService.getCategoryByID(this.categoryID).subscribe(data => {
      this.category = data;

      //if category.categoryID and postID matches, it returns to posts and by length postcount is calculated.
      this.postService.getPostsByCategoryID(this.category.categoryID).subscribe(posts => {
        this.postCount = posts.length;
      });
    });
  }
}
