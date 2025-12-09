import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
  { path: 'home', component: Home },/*
  { path: 'gallery', component: GalleryComponent },
  { path: 'about', component: AboutComponent },*/
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];