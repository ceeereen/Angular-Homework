import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { commentService } from 'src/app/comment.service';
import { PostService } from 'src/app/post.service';
import { Posts } from 'src/app/posts';
import { Observable } from 'rxjs';
import { CategoryService } from 'src/app/category.service';
import { User } from 'src/app/user';
import { Categories } from 'src/app/categories';
import { UserService } from 'src/app/user.service';
import { Comments } from 'src/app/comments';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {
  postID!: number;
  post!: Posts;
  category!: Categories;
  user!: User;
  comment!: Comments;


  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private userService: UserService,
    private categoryService: CategoryService,
    private commentService: commentService
  ) {}


  ngOnInit(): void {
    this.postID = this.route.snapshot.params['postID'];
    this.post = new Posts();

    this.postService.getPostByID(this.postID).subscribe(data => {
      this.post = data;

      //take the user that matches with post
      this.userService.getUserByID(this.post.userID).subscribe(userData => {
        this.user = userData;
      });
      //take the comment that matches with post
      this.commentService.getCommentByID(this.post.postID).subscribe(commentData => {
        this.comment = commentData;
      });

      //take the category that matches with post
      this.categoryService.getCategoryByID(this.post.categoryID).subscribe(categoryData => {
        this.category = categoryData;
      });
    });
  }
  
}
