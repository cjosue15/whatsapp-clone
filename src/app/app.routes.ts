import { Routes } from '@angular/router';
import { authGuard, publicGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    loadComponent: () => import('@pages/chat/chat.component'),
  },
  {
    canActivate: [publicGuard],
    path: 'log-in',
    loadComponent: () => import('@pages/log-in/log-in.component'),
  },
  {
    canActivate: [publicGuard],
    path: 'sign-in',
    loadComponent: () => import('@pages/sign-in/sign-in.component'),
  },
];
