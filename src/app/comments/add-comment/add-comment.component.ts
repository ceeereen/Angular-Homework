import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { commentService } from 'src/app/comment.service';
import { Comments } from 'src/app/comments';
import { PostService } from 'src/app/post.service';
import { Posts } from 'src/app/posts';
import { User } from 'src/app/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.css']
})
export class AddCommentComponent {
  comment: Comments = new Comments();
  posts: Posts[] = [];
  users: User[] = [];
  
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private commentService: commentService,
    private postService: PostService,
    private userService: UserService
  ) {}
  
 
  //in order to add comment by selecting postID
  ngOnInit() {
    this.getPosts();
    this.getUsers();
  }

  //in order to add comment by selecting postID
  getPosts() {
    this.postService.findAll().subscribe(posts => {
      this.posts = posts as Posts[];
    });
  }
  //in order to add comment by selecting userID
  getUsers(){
    this.userService.findAll().subscribe(users => {
      this.users = users as User[];
    })
  }

  onSubmit() {
    this.commentService.save(this.comment).subscribe(result => this.gotoPostList());
  }

  gotoPostList() {
    this.router.navigate(['/comments']);
  }

}
