import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailsComponent } from './post-details/post-details.component';
import { PostUpdateComponent } from './post-update/post-update.component';
import { FormsModule } from '@angular/forms';
import { AddPostComponent } from './add-post/add-post.component';



@NgModule({
  declarations: 
    [PostListComponent,
    PostDetailsComponent,
    PostUpdateComponent,
    AddPostComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: 
    [PostListComponent,
    PostDetailsComponent,
    PostUpdateComponent,
    AddPostComponent]
})
export class PostsModule { }
