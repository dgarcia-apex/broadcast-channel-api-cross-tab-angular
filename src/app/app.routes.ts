import { Routes } from '@angular/router';
import { PageOneComponent } from './page-one/page-one.component';
import { PageTwoComponent } from './page-two/page-two.component';

export const routes: Routes = [
  {
    path: 'page-one',
    loadComponent: () =>
      import('./page-one/page-one.component').then((m) => m.PageOneComponent),
  },
  {
    path: 'page-two',
    loadComponent: () =>
      import('./page-two/page-two.component').then((m) => m.PageTwoComponent),
  },
];
