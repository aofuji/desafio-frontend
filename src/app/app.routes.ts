import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', loadChildren: () => import('./pages/home/home.routes').then(m => m.HOME_ROUTES) },
  { path: 'register', loadChildren: () => import('./pages/register/register.routes').then(m => m.REGISTER_ROUTES) },
  { path: 'list', loadChildren: () => import('./pages/list/list.routes').then(m => m.LIST_ROUTES) }
];
