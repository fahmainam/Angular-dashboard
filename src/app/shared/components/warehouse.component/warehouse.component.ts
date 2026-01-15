import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface WarehouseItem {
  code: string;
  name: string;
  currentQty: string;
  minLimit: number;
  maxLimit: number;
}

@Component({
  selector: 'app-warehouses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.scss'],
})
export class WarehousesComponent {
  filter: 'high' | 'low' = 'low';

  items: WarehouseItem[] = [
    {
      code: 'BDRS/2016/019/0008',
      name: 'سكر',
      currentQty: '01 كيس',
      minLimit: 1,
      maxLimit: 2,
    },
    {
      code: 'BDRS/2016/019/0009',
      name: 'شاي',
      currentQty: '02 قطعة',
      minLimit: 1,
      maxLimit: 2,
    },
    {
      code: 'BDRS/2016/019/0010',
      name: 'مكتبي',
      currentQty: '03 وحدة',
      minLimit: 1,
      maxLimit: 2,
    },
    {
      code: 'BDRS/2016/019/0011',
      name: 'ستائر',
      currentQty: '04 متر',
      minLimit: 1,
      maxLimit: 2,
    },
    {
      code: 'BDRS/2016/019/0012',
      name: 'طاولات',
      currentQty: '05 طقم',
      minLimit: 1,
      maxLimit: 2,
    },
  ];

  setFilter(type: 'high' | 'low') {
    this.filter = type;
  }
}
