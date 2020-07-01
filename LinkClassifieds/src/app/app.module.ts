import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardsComponent } from './components/playground/cards/cards.component';
import { RegFormComponent } from './components/playground/reg-form/reg-form.component';
import { LoginComponent } from './components/playground/login/login.component';
import { RouterModule } from '@angular/router';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UploadPostComponent } from './components/playground/upload-post/upload-post.component';
import { MoreComponent } from './components/playground/more/more.component';
import { MyprofileComponent } from './components/playground/myprofile/myprofile.component';
import { AboutComponent } from './components/playground/about/about.component';

import * as $ from 'jquery';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CardsComponent,
    RegFormComponent,
    LoginComponent,
    UploadPostComponent,
    MoreComponent,
    MyprofileComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: CardsComponent },
      { path: 'register', component: RegFormComponent },
      { path: 'login', component: LoginComponent },
      { path: 'uploadPost', component: UploadPostComponent },
      { path: 'more', component: MoreComponent },
      { path: 'myProfile', component: MyprofileComponent },
      { path: 'about', component: AboutComponent },
      { path: 'header', component: HeaderComponent }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
