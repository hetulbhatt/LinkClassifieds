import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/Posts.models';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { PostService } from 'src/app/services/post.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-upload-post',
  templateUrl: './upload-post.component.html',
  styleUrls: ['./upload-post.component.css']
})
export class UploadPostComponent implements OnInit {

  postForm: FormGroup;
  post: Post = new Post();
  catagoryMaker: string;

  constructor(private router: Router, private postService: PostService, private fb: FormBuilder) { }

  addPost(data) {
    this.post = {
      email : localStorage.getItem('email'),
      itemname: data.name,
      catagory: this.catagoryMaker,
      url: data.link,
      description: data.desc,
      askingPrice: data.askpr,
      city: data.cityNew,
      zip: data.zip
    };
    console.log(this.post);

    this.postService.uploadPost(this.post).subscribe(ele => {
      if (ele.message) {
          alert('Posted successfully');
          window.location.reload() ;
      } else {
        alert('Something went wrong');
      }
    });
    this.router.navigate(['myProfile']);
  }

  ngOnInit() {


      this.postForm = this.fb.group({
        name: new FormControl(null, Validators.required),
        catagory: new FormControl(),
        cityNew: new FormControl(null, Validators.required),
        link: new FormControl(null, Validators.required),
        askpr: new FormControl(null, Validators.required),
        zip: new FormControl(null, Validators.required),
        desc: new FormControl(null, Validators.required)
      });

      console.log(localStorage.getItem('email'));
      if (localStorage.getItem('email') == null) {
        alert('Please login before you post.');
        this.router.navigate(['login']);
    }
  }
  changeCatagory(e) {
    console.log(e.target.value);
    this.catagoryMaker = e.target.value;
  }


}
