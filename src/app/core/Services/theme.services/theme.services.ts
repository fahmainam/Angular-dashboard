import { Injectable } from '@angular/core';


export type ThemeMode = 'light' | 'dark';
@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly STORAGE_KEY = 'theme';

  constructor() {
    const saved = localStorage.getItem(this.STORAGE_KEY);
    if (saved === 'dark') {
      document.body.classList.add('dark-theme');
    }
  }

  toggleTheme(): void {
    const body = document.body;
    const isDark = body.classList.contains('dark-theme');

    body.classList.toggle('dark-theme', !isDark);
    localStorage.setItem(this.STORAGE_KEY, !isDark ? 'dark' : 'light');

    console.log('Dark mode:', !isDark); // 🔍 debug
  }

  isDark(): boolean {
    return document.body.classList.contains('dark-theme');
  }
}
