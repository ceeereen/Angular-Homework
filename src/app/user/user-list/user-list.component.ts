import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
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
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users!: User[];
  private userSubject = new Subject<User>();
  public users$!: Observable<User[]>;
  posts: Posts[] = [];
 

  constructor(private userService: UserService, private postService: PostService, private commentService: commentService, private router: Router) {}

  ngOnInit() {
    this.getUserList();
  }

  //takes user list.
  getUserList() {
    this.userService.findAll().subscribe(users => {
      this.users = users as User[];
      this.updateUsers$();
    });
  }


  addUser(newUser: User) {
    this.userService.save(newUser).subscribe(user => {
      this.users.push(user);
      this.userSubject.next(user);
      this.updateUsers$();
    });
  }

  updateUser(userID: number | null) {
    if (userID !== null) {
      this.router.navigate(['/updateuser', userID]);
    }
  }
  

  userDetails(userID: number) {
    if (userID !== null) {
      this.router.navigate(['/userdetails', userID]);
    }
  }

  private updateUsers$() {
    this.users$ = merge(
      of(this.users),
      this.userSubject.pipe(
        reduce((acc, user) => [...acc, user], this.users)
      )
    );
  }


  //provides deletion when user has no comment or post
  deleteUserOnCondition(user: User) {
    const userID = user.userID;
  
    // check post
    this.postService.getPostsByUserID(userID!).subscribe(posts => {
      if (posts.length > 0) {
        alert('Kullanıcının gönderileri olduğu için silinemez!');
      } else {
        // check comment
        this.commentService.getCommentsByUserID(userID!).subscribe(comments => {
          if (comments.length > 0) {
            alert('Kullanıcının yorumları olduğu için silinemez!');
          } else if (this.users.length === 1) {
            alert('Uygulamada tek kullanıcı olduğu için bu kullanıcı silinemez!');
          } else {
            this.deleteUser(userID!);
          }
        });
      }
    });
  }
  
  

  deleteUser(userID: number) {
    this.userService.deleteUser(userID).subscribe(data => {
      console.log(data);
      this.getUserList();
    });
  }
}
