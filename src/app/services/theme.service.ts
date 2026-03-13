import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private renderer: Renderer2;
  private currentTheme: 'dark-mode' | 'light-mode' = 'dark-mode';

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  initTheme() {
    // Check localStorage or system preference
    const savedTheme = localStorage.getItem('theme') as 'dark-mode' | 'light-mode';
    this.currentTheme = savedTheme || 'dark-mode';
    this.renderer.addClass(document.body, this.currentTheme);
  }

  toggleTheme() {
    const newTheme = this.currentTheme === 'dark-mode' ? 'light-mode' : 'dark-mode';
    this.renderer.removeClass(document.body, this.currentTheme);
    this.renderer.addClass(document.body, newTheme);
    this.currentTheme = newTheme;
    localStorage.setItem('theme', newTheme);
  }

  get isDark(): boolean {
    return this.currentTheme === 'dark-mode';
  }
}