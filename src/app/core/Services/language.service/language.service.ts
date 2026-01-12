import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private lang$ = new BehaviorSubject<'ar' | 'en'>('ar');
  current$ = this.lang$.asObservable();

  get current() {
    return this.lang$.value;
  }

  toggle() {
    this.set(this.current === 'ar' ? 'en' : 'ar');
  }

  set(lang: 'ar' | 'en') {
    this.lang$.next(lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }
}
