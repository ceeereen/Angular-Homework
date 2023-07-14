import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categories } from 'src/app/categories';
import { CategoryService } from 'src/app/category.service';
import { PostService } from 'src/app/post.service';
import { Posts } from 'src/app/posts';
import { User } from 'src/app/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent {
  post: Posts = new Posts();
  users: User[] = [];
  categories: Categories[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private postService: PostService,
    private userService: UserService,
    private categoryService: CategoryService
  ) {}
  
  //in order to add post by selecting userID
  ngOnInit() {
    this.getCategories();
    this.getUsers();
   
  }

  //in order to add post by selecting userID
  getUsers() {
    this.userService.findAll().subscribe(users => {
      this.users = users as User[];
    });
  }

  //in order to add post by selecting categoryID
  getCategories(){
    this.categoryService.findAll().subscribe(categories => {
      this.categories = categories as Categories[]; // Doğru şekilde kategorileri atıyoruz
    });
  }

  onSubmit() {
    this.post.viewCount = 0; //default view of new post is zero since it didnt published
    this.postService.save(this.post).subscribe(result => this.gotoPostList());
  }

  gotoPostList() {
    this.router.navigate(['/posts']);
  }
}
