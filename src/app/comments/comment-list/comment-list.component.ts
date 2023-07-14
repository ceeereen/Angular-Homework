import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { commentService } from 'src/app/comment.service';
import { Comments } from 'src/app/comments';


@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {

  comments!: Observable<Comments[]>;
  filterPostID: number | null = null;
 

  constructor(private commentService: commentService, private router: Router) {}
  ngOnInit() {
    this.comments = this.commentService.findAll();
  }

  updateComment(commentID: number | null) {
    if (commentID !== null) {
      this.router.navigate(['/updatecomment', commentID]);
    }
  }

  deleteComment(commentID: number) {
    this.commentService.deletePost(commentID).subscribe(data => { //subscribe fonksiyonu, sunucudan gelen yanıtı (data) alır
      console.log(data);
      this.ngOnInit(); //refresh user list
    });
  }

  commentDetails(commentID: number){
    if (commentID !== null) {
      this.router.navigate(['/commentdetails', commentID]);
    }
  }

  //applies filter on postList.
  applyFilter() {
    if (this.filterPostID !== null) {
      this.comments = this.commentService.findAll().pipe(
        map(comments => comments.filter(comment => comment.postID === this.filterPostID))
      );
    }
  }
  


}
