import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/models/Users.models';
import { RegisterService } from 'src/app/services/register.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent implements OnInit {
  registerForm: FormGroup;
  email: string;
  password: string;
  address: string;
  contact: string;
  city: string;
  zip: string;

  user: User = new User();


  constructor(private fb: FormBuilder, private register: RegisterService, private router: Router) {

  }

  addPost(post) {


    if (post.inputConPassword !== post.inputPassword) {
      alert('Passwords did not match');
    } else {
      this.email = post.inputEmail;
      this.password = post.inputPassword;
      this.address = post.inputAddress;
      this.contact = post.inputContact;
      this.city = post.inputCity;
      this.zip = post.inputZip;


      this.user = {
        email : this.email,
        password : this.password,
        address : this.address,
        contact : this.contact,
        city : this.city,
        zip : this.zip
      };

      console.log(this.user);

      this.register.registerUsers(this.user).subscribe(data => {
        if (data.message) {
            alert('Account created successfully');
            this.router.navigate(['login']);
        } else {
          alert('Username already exists!');
        }
      });

    }


  }



  ngOnInit() {
    this.registerForm = this.fb.group({
      inputEmail: [null, Validators.required],
      inputPassword: [null, Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(20)])],
      inputConPassword: [null, Validators.required],
      inputAddress: [null, Validators.required],
      inputContact: [null, Validators.required],
      inputCity: [null, Validators.required],
      inputZip: [null, Validators.required],
    });
  }

}
