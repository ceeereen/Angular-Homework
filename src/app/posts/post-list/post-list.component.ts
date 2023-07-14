import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
import { merge } from 'rxjs';
import { of } from 'rxjs';
import { map, reduce } from 'rxjs/operators';
import { commentService } from 'src/app/comment.service';
import { PostService } from 'src/app/post.service';
import { Posts } from 'src/app/posts';
import { User } from 'src/app/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts!: Observable<Posts[]>;
  filterUserID: number | null = null;
  filterPostID: number | null = null;
  filterCategoryID: number | null = null;


 
  

  constructor(
    private postService: PostService,
    private router: Router,
    private commentService: commentService,
    private route: ActivatedRoute
  ) {
   
  }
  ngOnInit() {
    this.posts = this.postService.findAll();
    
  }

  //applies filter on postList.
  applyFilter() {
    if (this.filterPostID !== null || this.filterCategoryID !== null || this.filterUserID) {
      this.posts = this.postService.findAll().pipe(
        map(posts => {
          return posts.filter(post => {
            let matchPostID = true;
            let matchCategoryID = true;
            let matchUserID = true;
  
            if (this.filterPostID !== null) {
              matchPostID = post.postID === this.filterPostID; //checks if postID is eqaul to filtered postID that typed in input.
            }
  
            if (this.filterCategoryID !== null) {
              matchCategoryID = post.categoryID === this.filterCategoryID;
            }

            if (this.filterUserID !== null) {
              matchUserID = post.userID === this.filterUserID;
            }
  
            return matchPostID && matchCategoryID && matchUserID; //if all matches value returns, or one of them null.
          });
        })
      );
    }
  }
  
  //when button clicked it directs to updateuser.
  updatePost(postID: number | null) {
    if (postID !== null) {
      this.router.navigate(['/updatepost', postID]);
    }
  }


  deletePost(postID: number) {
    this.postService.deletePost(postID).subscribe(data => { //subscribe fonksiyonu, sunucudan gelen yanıtı (data) alır
      console.log(data);
      this.ngOnInit(); //refresh user list
    });
  }

  postDetails(postID: number){
    if (postID !== null) {
      this.router.navigate(['/postdetails', postID]);
    }
  }

  //if post has a comment it cannot be deleted.
  deletePostOnCondition(post: Posts) {
    const postID = post.postID;
  
    this.commentService.getCommentsByPostID(postID!).subscribe(comments => {
      if (comments.length > 0) {
        alert('Gönderiye ait yorumlar olduğu için silinemez!');
      } else {
        this.deletePost(postID!);
      }
    });
  }
}
