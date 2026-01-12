import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardLayoutComponent } from './layout/dashboard-layout/dashboard-layout';
import { HomeComponent } from './pages/home/home';

const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'funds',
        loadComponent: () =>
          import('../shared/components/funds.component/funds.component')
            .then(c => c.FundsComponent),
            data: {
          breadcrumb: 'طلب أموال إضافية'  
            }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
