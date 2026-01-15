import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Transaction {
  id: string;
  type: string;
  employee: string;
  email: string;
  duration: string;
}

@Component({
  selector: 'app-recent-transactions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recent-transactions.html',
  styleUrls: ['./recent-transactions.scss'],
})
export class RecentTransactionsComponent {
  transactions: Transaction[] = [
    {
      id: 'BDRS/2016/019/0008',
      type: 'فاتورة',
      employee: 'فارس أسامة طارق',
      email: 'farestarik@moi.gov.qa',
      duration: '01 يوم',
    },
    {
      id: 'BDRS/2016/019/0009',
      type: 'سند استلام',
      employee: 'حامد هادي نعيم',
      email: 'hamedzaiim@moi.gov.qa',
      duration: '02 يوم',
    },
    {
      id: 'BDRS/2016/019/0010',
      type: 'طلب شراء',
      employee: 'جاسم محمد حامد',
      email: 'jassem@moi.gov.qa',
      duration: '03 أسابيع',
    },
    {
      id: 'BDRS/2016/019/0011',
      type: 'صرف مستودع',
      employee: 'أمير علي الزواري',
      email: 'amirzawi@moi.gov.qa',
      duration: '04 شهر',
    },
    {
      id: 'BDRS/2016/019/0012',
      type: 'طلب صيانة',
      employee: 'هيبة حاتم حجاب',
      email: 'hibahijab@moi.gov.qa',
      duration: '05 سنوات',
    },
  ];
}
