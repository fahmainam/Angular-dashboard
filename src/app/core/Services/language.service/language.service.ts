import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private currentLang$ = new BehaviorSubject<'en' | 'ar'>('ar');
  private translations: any = {};

  constructor(private http: HttpClient) {
    this.loadLanguage(this.currentLang$.value);
  }

  get lang() {
    return this.currentLang$.value;
  }

  setLanguage(lang: 'en' | 'ar') {
    this.currentLang$.next(lang);
    this.loadLanguage(lang);

    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('lang', lang);
  }

  translate(key: string): string {
    return this.translations[key] || key;
  }

  private loadLanguage(lang: string) {
    this.http
      .get(`/assets/i18n/${lang}.json`)
      .subscribe((data) => (this.translations = data));
  }
  
}
