import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, HeaderComponent, BreadcrumbComponent
  ],
  exports: [
    HeaderComponent, BreadcrumbComponent
  ]
})

export class SharedModule {

  
 }

