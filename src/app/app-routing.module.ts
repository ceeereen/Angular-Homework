import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { UpdateUserComponent } from './user/update-user/update-user.component';
import { UserDetailsComponent } from './user/user-details/user-details.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { PostDetailsComponent } from './posts/post-details/post-details.component';
import { PostUpdateComponent } from './posts/post-update/post-update.component';
import { AddPostComponent } from './posts/add-post/add-post.component';
import { CommentListComponent } from './comments/comment-list/comment-list.component';
import { CommentDetailsComponent } from './comments/comment-details/comment-details.component';
import { AddCommentComponent } from './comments/add-comment/add-comment.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { CategoryDetailsComponent } from './categories/category-details/category-details.component';
import { AddCategoriesComponent } from './categories/add-categories/add-categories.component';
import { UpdateCategoryComponent } from './categories/update-category/update-category.component';
import { UpdateCommentComponent } from './comments/update-comment/update-comment.component';

const routes: Routes = [
{ path: 'users', component: UserListComponent },
{ path: 'posts', component: PostListComponent },
{ path: 'comments', component: CommentListComponent },
{ path: 'categories', component: CategoryListComponent },
{ path: 'adduser', component: AddUserComponent },
{ path: 'addpost', component: AddPostComponent },
{ path: 'addcomment', component: AddCommentComponent },
{ path: 'addcategory', component: AddCategoriesComponent },
{ path: 'updateuser/:userID', component: UpdateUserComponent },
{ path: 'updatepost/:postID', component: PostUpdateComponent },
{ path: 'updatecategory/:categoryID', component: UpdateCategoryComponent },
{ path: 'updatecomment/:commentID', component: UpdateCommentComponent },
{ path: 'userdetails/:userID', component: UserDetailsComponent },
{ path: 'postdetails/:postID', component: PostDetailsComponent },
{ path: 'commentdetails/:commentID', component: CommentDetailsComponent },
{ path: 'categorydetails/:categoryID', component: CategoryDetailsComponent },
{ path: 'posts/:userID', component: PostListComponent },
{path: '', redirectTo:'users', pathMatch: 'full'} ];
//'posts/:userID'
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
