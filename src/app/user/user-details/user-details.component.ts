import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {

  userID!: number;
  user!: User;

  constructor(private route: ActivatedRoute, private userService: UserService) {}

  ngOnInit(): void {
    this.userID = this.route.snapshot.params['userID'];
    this.user = new User();
    this.userService.getUserByID(this.userID).subscribe(data => {
      this.user = data;
    });
  }
}
