import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Subscription } from 'rxjs';

import { SidebarComponent } from '../../../shared/components/sidebar/sidebar';
import { HeaderComponent } from '../../../shared/components/header/header';
import { BreadcrumbComponent } from '../../../shared/components/breadcrumb/breadcrumb';
import {
  BreadcrumbService,
  BreadcrumbItem
} from '../../../shared/services/breadcrumb.services.ts/breadcrumb.service';

@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  imports: [
    RouterOutlet,
    SidebarComponent,
    HeaderComponent,
    BreadcrumbComponent
  ],
  templateUrl: './dashboard-layout.html',
  styleUrl: './dashboard-layout.scss',
})
export class DashboardLayoutComponent implements OnInit, OnDestroy {

  breadcrumbItems: BreadcrumbItem[] = [];
  private sub!: Subscription;

  constructor(private breadcrumbService: BreadcrumbService) {}

  ngOnInit(): void {
    this.sub = this.breadcrumbService.items$.subscribe(
      items => (this.breadcrumbItems = items)
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
