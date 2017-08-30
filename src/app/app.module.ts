import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';

import { PostsService } from './services/posts.service';
import { MainMenuComponent } from './components/main-menu/main-menu.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { HeaderComponent } from './containers/header/header.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { ROUTES } from './app.routes';

// const ROUTES = [
//   {
//     path: '',
//     redirectTo: 'posts',
//     pathMatch: 'full'
//   },
//   {
//     path: 'posts',
//     component: PostsComponent
//   }
// ];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    MainMenuComponent,
    UserLoginComponent,
    HeaderComponent,
    NavMenuComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
