import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {
  userID!: number;
  user: User = new User();

  
  constructor(
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  private getUserById() {
    this.userID = this.route.snapshot.params['userID'];
    this.userService.getUserByID(this.userID).subscribe({
      next: (data) => {
        this.user = data;
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  ngOnInit(): void {
    this.getUserById();
  }

  updateUser() {
    this.userService.updateUser(this.userID, this.user).subscribe({ //takes data from backend and updates it
      next: (data) => {                                         //subscribe watches response
        console.log(data);
        this.redirectToUserList();
      },
      error: (e) => {
        console.log(e);
      }
    });
  }

  //turn back to users
  redirectToUserList() {
    this.router.navigate(['/users']);
  }

  //after click update user
  onSubmit() {
    console.log(this.user);
    this.updateUser();
  }

}
