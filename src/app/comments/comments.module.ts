import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentListComponent } from './comment-list/comment-list.component';
import { AddCommentComponent } from './add-comment/add-comment.component';
import { FormsModule } from '@angular/forms';
import { UpdateCommentComponent } from './update-comment/update-comment.component';



@NgModule({
  declarations: [
    CommentListComponent,
    AddCommentComponent,
    UpdateCommentComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommentListComponent,
    AddCommentComponent,
    UpdateCommentComponent
  ]
})
export class CommentsModule { }
