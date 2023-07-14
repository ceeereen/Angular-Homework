import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Posts } from 'src/app/posts';
import { PostService } from 'src/app/post.service';
import { User } from 'src/app/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-post-update',
  templateUrl: './post-update.component.html',
  styleUrls: ['./post-update.component.css']
})
export class PostUpdateComponent {

  postID!: number;
  post: Posts = new Posts();
  users: User[] = [];

  
  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) { }

  private getPostById() {
    this.postID = this.route.snapshot.params['postID'];
    this.postService.getPostByID(this.postID).subscribe({
      next: (data) => {
        this.post = data;
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  ngOnInit(): void {
    this.getPostById();
    this.getUsers();
    
  }

  //in order to update post by selecting userID
  getUsers() {
    this.userService.findAll().subscribe(users => {
      this.users = users as User[];
    });
  }

  updatePost() {
    this.postService.updatePost(this.postID, this.post).subscribe({ //takes data from backend and updates it
      next: (data) => {                                         //subscribe watches response
        console.log(data);
        this.redirectToPostList();
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  //turn back to users
  redirectToPostList() {
    this.router.navigate(['/posts']);
  }

  //after click update user
  onSubmit() {
    console.log(this.post);
    this.updatePost();
  }
}
