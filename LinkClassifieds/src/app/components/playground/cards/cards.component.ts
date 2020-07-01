import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Posts.models';
import { PostService } from 'src/app/services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  public items: Post[] = [];

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit(){

    this.postService.getPosts().subscribe(data => {
      this.items = data;
    });
  }

  callMore(i: Post) {

    localStorage.setItem('more', JSON.stringify(i));
    //alert(localStorage.getItem('more'));
    //window.location.replace('http://localhost:4200/more');
    this.router.navigateByUrl('', { skipLocationChange: true }).then(() => {
      this.router.navigate(['more']);
    });
  }

  showBooks(){
    //alert();
    this.postService.getBooks().subscribe(data => {
      this.items = data;
    //  alert(this.items[0].catagory);
    });
  }

  showCars(){
    //alert();
    this.postService.getCars().subscribe(data => {
      this.items = data;
     // alert(this.items[0].catagory);
    });
  }

  showElecs(){
    //alert();
    this.postService.getElecs().subscribe(data => {
      this.items = data;
      //alert(this.items[0].catagory);
    });
  }
  showFurn(){
   // alert();
    this.postService.getFurn().subscribe(data => {
      this.items = data;
     // alert(this.items[0].catagory);
    });
  }
  showReal(){
    //alert();
    this.postService.getReal().subscribe(data => {
      this.items = data;
      //alert(this.items[0].catagory);
    });
  }

  showAll(){
    this.postService.getPosts().subscribe(data => {
      this.items = data;
    });
  }
}
