import { Component, computed, ChangeDetectionStrategy, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-footer',
  imports: [NgOptimizedImage, MatIconModule, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  protected readonly i18n = inject(I18nService);
  protected readonly t = computed(() => this.i18n.t());
  readonly currentYear = 2025;

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
      { label: t.contact,  path: '/contact' },
    ];
  });

  protected readonly serviceLinks = computed(() => {
    const s = this.t().services;
    return [s.cat1_title, s.cat2_title, s.cat3_title, s.cat4_title, s.cat5_title, s.cat6_title];
  });
}

