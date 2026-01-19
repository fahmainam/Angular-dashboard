import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private currentLang$ = new BehaviorSubject<'ar' | 'en'>(this.getInitialLang());
  private translations: any = {};

  constructor(private http: HttpClient) {
    const lang = this.currentLang$.value;
    this.applyDirection(lang);
    this.loadLanguage(lang);
  }

  /** 🔹 Get current language */
  get lang(): 'ar' | 'en' {
    return this.currentLang$.value;
  }

  /** 🔹 Change language manually */
  setLanguage(lang: 'ar' | 'en') {
    this.currentLang$.next(lang);
    this.applyDirection(lang);
    this.loadLanguage(lang);
    localStorage.setItem('lang', lang);
  }

  /** 🔹 Translate key */
  translate(key: string): string {
    return this.translations[key] || key;
  }

  /** 🔹 Load translation file */
  private loadLanguage(lang: 'ar' | 'en') {
    this.http
      .get(`/assets/i18n/${lang}.json`)
      .subscribe((data) => (this.translations = data));
  }

  /** 🔹 Detect initial language (Arabic default) */
  private getInitialLang(): 'ar' | 'en' {
    return (localStorage.getItem('lang') as 'ar' | 'en') || 'ar';
  }

  /** 🔹 Apply RTL / LTR */
  private applyDirection(lang: 'ar' | 'en') {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  }
}
