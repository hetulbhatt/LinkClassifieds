import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    if(localStorage.getItem('email')){
        $('#logout').show();
        $('#login').hide();
        $('#MyProfile').show();
        $('#newPost').show();
    }else{
        $('#logout').hide();
        $('#login').show();
        $('#MyProfile').hide();
        $('#newPost').hide();
    }
  }


  logout() {
    if ( localStorage.getItem('email') == null )
    {
      alert('First login to logout');
      this.router.navigate(['login']);
    }
    else{
      localStorage.removeItem('email');
      this.ngOnInit();
      this.router.navigate(['login']);
    }
  }
}
