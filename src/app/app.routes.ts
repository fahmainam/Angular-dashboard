import { Routes } from '@angular/router';

export const routes: Routes = [

  // App start → Login
  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },

  // Auth module
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth-routing-module').then(m => m.AuthRoutingModule)
  },

  // Dashboard module
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard-module').then(m => m.DashboardModule)
  },
   

  // Fallback
  {
    path: '**',
    redirectTo: 'auth/login'
  }
];
