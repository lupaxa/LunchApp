import { PostsComponent } from './posts/posts.component';
import { MainMenuComponent } from './components/main-menu/main-menu.component';


import { Routes } from '@angular/router';


export const ROUTES: Routes = [
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'menu', component: MainMenuComponent },
    {
        path: 'posts',
        component: PostsComponent
      }
];