import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.Home),
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then(m => m.About),
  },
  {
    path: 'partners',
    loadComponent: () => import('./pages/partners/partners').then(m => m.Partners),
  },
  {
    path: 'projects',
    loadComponent: () => import('./pages/projects/projects').then(m => m.Projects),
  },
  {
    path: 'impact',
    loadComponent: () => import('./pages/social-impact/social-impact').then(m => m.SocialImpact),
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services/services').then(m => m.Services),
  },
  {
    path: 'gallery',
    loadComponent: () => import('./pages/gallery/gallery').then(m => m.Gallery),
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then(m => m.Contact),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
