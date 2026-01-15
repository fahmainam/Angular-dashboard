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
  component: HomeComponent,
  data: { breadcrumb: 'الصفحة الرئيسية' }
},
{
  path: 'funds',
  loadComponent: () =>
    import('../shared/components/funds.component/funds.component')
      .then(c => c.FundsComponent),
   data: { breadcrumb: 'الطلبات / طلب موافقة شراء' }
},
{
  path: 'contract',
  loadComponent: () =>
    import('../shared/components/contract/contract')
      .then(c => c.ContractsComponent),
  data: { breadcrumb: 'الطلبات / طلب موافقة شراء كاميرات' }
},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
