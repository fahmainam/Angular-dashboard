import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';


interface PurchaseStatus {
  label: string;
  value: number;
  icon: string;
}

@Component({
  selector: 'app-purchase-status',
  templateUrl: './purchase-status.html',
  styleUrls: ['./purchase-status.scss'],
  imports: [CommonModule]
})
export class PurchaseStatusComponent {

  total = 350;

  statuses: PurchaseStatus[] = [
    { label: 'كل', value: 50, icon: 'bi-grid' },
    { label: 'New', value: 50, icon: 'bi-stars' },
    { label: 'قيد الانتظار', value: 50, icon: 'bi-hourglass' },
    { label: 'مرسل', value: 50, icon: 'bi-truck' },
    { label: 'تم التوصيل', value: 123, icon: 'bi-check-circle' },
    { label: 'تم الإلغاء', value: 50, icon: 'bi-x-circle' },
  ];

}
