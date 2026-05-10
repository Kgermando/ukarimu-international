import { Component, signal, computed, ChangeDetectionStrategy, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-navbar',
  imports: [NgOptimizedImage, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.scrolled]': 'scrolled()',
    '(window:scroll)': 'onScroll()',
  }
})
export class Navbar {
  protected readonly i18n = inject(I18nService);
  protected readonly t = computed(() => this.i18n.t());
  protected readonly scrolled = signal(false);
  protected readonly menuOpen = signal(false);

  protected readonly navLinks = computed(() => {
    const t = this.t().nav;
    return [
      { label: t.home,     path: '/' },
      { label: t.about,    path: '/about' },
      { label: t.partners, path: '/partners' },
      { label: t.projects, path: '/projects' },
      { label: t.impact,   path: '/impact' },
      { label: t.services, path: '/services' },
      { label: t.gallery,  path: '/gallery' },
    ];
  });

  onScroll(): void {
    this.scrolled.set(window.scrollY > 60);
  }

  toggleMenu(): void {
    this.menuOpen.update(v => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }
}

