import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user-list/user-list.component';
import { FormsModule } from '@angular/forms';
import { AddUserComponent } from './add-user/add-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UpdateUserComponent } from './update-user/update-user.component';



@NgModule({
  declarations: [UserListComponent,
    AddUserComponent,
    UserDetailsComponent,
    UpdateUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    UserListComponent,
    AddUserComponent,
    UserDetailsComponent,
    UpdateUserComponent
  ]
})
export class UserModule { }
