import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/app/models/Posts.models';

@Component({
  selector: 'app-more',
  templateUrl: './more.component.html',
  styleUrls: ['./more.component.css']
})
export class MoreComponent implements OnInit {

  public post: Post;

  constructor(private router: Router) { }

  ngOnInit() {
    if (localStorage.getItem('more') == null){
      //alert("Bad more");
      this.router.navigate(['']);
    } else {
      //alert("More");
      this.post = JSON.parse(localStorage.getItem('more'));
      localStorage.removeItem('more');
      //alert(this.post.email);
    }
  }

}
