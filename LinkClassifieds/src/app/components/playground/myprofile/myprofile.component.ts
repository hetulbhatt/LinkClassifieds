import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Posts.models';
import { PostService } from 'src/app/services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  public items: Post[] = [];

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
    this.postService.getUserPosts(localStorage.getItem('email')).subscribe(data => {
      this.items = data;
    });

    if (localStorage.getItem('email') == null)
    {
      //alert('You are already logged in');
      this.router.navigate(['']);
    }
  }

  callMore(i: Post) {
    localStorage.setItem('more', JSON.stringify(i));
    //alert(localStorage.getItem('more'));
    //window.location.replace('http://localhost:4200/more');
    this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
      this.router.navigate(['more']);
    });

  }

  deleteItem(i: Post){
    this.postService.deleteUserPost(i).subscribe(data => {
      //this.items = data;
    });
    window.location.reload();
  }

}
