import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Posters } from './posters/posters';
import { PosterDetail } from './poster-detail/poster-detail';

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: 'posters', component: Posters },
  { path: 'poster-detail', component: PosterDetail },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
];