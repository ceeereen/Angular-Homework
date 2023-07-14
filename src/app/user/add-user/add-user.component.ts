import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  user: User ; //value will appoint later


  constructor(private route: ActivatedRoute, private router: Router, private userService: UserService) {
    this.user = new User();
  }


  //send user info to the users page
  onSubmit() {
    this.user.isActive = true; //new user as a default active.
    this.userService.save(this.user).subscribe(result => this.gotoUserList());
  }

  //after register navigate to user
  gotoUserList() {
    this.router.navigate(['/users']);
  }
}
