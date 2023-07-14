import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { commentService } from 'src/app/comment.service';
import { Comments } from 'src/app/comments';


@Component({
  selector: 'app-update-comment',
  templateUrl: './update-comment.component.html',
  styleUrls: ['./update-comment.component.css']
})
export class UpdateCommentComponent {

 commentID!: number;
  comment: Comments = new Comments();

  
  constructor(
    private commentService: commentService,
    private route: ActivatedRoute,
    private router: Router
  ) { 
  }

  private getCommentById() {
    this.commentID = this.route.snapshot.params['commentID'];
    this.commentService.getCommentByID(this.commentID).subscribe({
      next: (data) => {
        this.comment = data;
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  ngOnInit(): void {
    this.getCommentById();
  }

  updateComment() {
    this.commentService.updateComment(this.commentID, this.comment).subscribe({ //takes data from backend and updates it
      next: (data) => {                                         //subscribe watches response
        console.log(data);
        this.redirectToCommentList();
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  //turn back to users
  redirectToCommentList() {
    this.router.navigate(['/comments']);
  }

  //after click update user
  onSubmit() {
    console.log(this.comment);
    this.updateComment();
  }


}
