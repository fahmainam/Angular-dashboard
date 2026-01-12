import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface BreadcrumbItem {
  label: string;
  link?: string;
}

@Injectable({ providedIn: 'root' })
export class BreadcrumbService {

  private _items = new BehaviorSubject<BreadcrumbItem[]>([
    { label: 'الصفحة الرئيسية', link: '/dashboard' }
  ]);

  items$ = this._items.asObservable();

  set(items: BreadcrumbItem[]) {
    this._items.next([
      { label: 'الصفحة الرئيسية', link: '/dashboard' },
      ...items
    ]);
  }

  clear() {
    this._items.next([{ label: 'الصفحة الرئيسية', link: '/dashboard' }]);
  }
}
