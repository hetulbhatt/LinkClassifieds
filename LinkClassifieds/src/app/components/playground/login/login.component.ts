import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  email: string;
  password: string;

  constructor(private fb: FormBuilder, public login: LoginService, private router: Router) {

  }

  addPost(post) {
    this.email = post.email;
    this.password = post.password;

    this.login.validate(this.email, this.password).subscribe(data => {
      if (data) {
        //alert('Logged in');
        localStorage.setItem('email', this.email);
        console.log(localStorage.getItem('email'));
        window.location.reload();
        this.router.navigate(['']);
      } else {
        alert('Check email or password');
      }
    });

  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(20)])]
    });

    if (localStorage.getItem('email') != null)
    {
      //alert('You are already logged in');
      this.router.navigate(['']);
    }
  }

  regRedirect(){
    this.router.navigate(['register']);
  }

}
