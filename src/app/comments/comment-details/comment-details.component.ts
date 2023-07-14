import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { commentService } from 'src/app/comment.service';
import { Comments } from 'src/app/comments';

@Component({
  selector: 'app-comment-details',
  templateUrl: './comment-details.component.html',
  styleUrls: ['./comment-details.component.css']
})
export class CommentDetailsComponent {

  commentID!: number;
  comment!: Comments;

  constructor(private route: ActivatedRoute, private commentService: commentService) {}

  ngOnInit(): void {
    this.commentID = this.route.snapshot.params['commentID'];
    this.comment = new Comments();
    this.commentService.getCommentByID(this.commentID).subscribe(data => {
      this.comment = data;
    });
  }
}
