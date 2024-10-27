import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home', loadChildren: () => import('./pages/home/home.routes').then(m => m.HOME_ROUTES) },
  { path: 'register', loadChildren: () => import('./pages/register/register.routes').then(m => m.REGISTER_ROUTES) },
  { path: 'registers', loadChildren: () => import('./pages/registers/registers.routes').then(m => m.REGISTERS_ROUTES) }
];
