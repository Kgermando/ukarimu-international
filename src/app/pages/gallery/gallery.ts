import { Component, computed, ChangeDetectionStrategy, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { I18nService } from '../../services/i18n.service';
import { PageHero } from '../../components/page-hero/page-hero';

@Component({
  selector: 'app-gallery',
  imports: [NgOptimizedImage, MatIconModule, PageHero],
  templateUrl: './gallery.html',
  styleUrl: './gallery.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Gallery {
  protected readonly i18n = inject(I18nService);
  protected readonly t = computed(() => this.i18n.t());

  // The one real image we have
  protected readonly realPhotos = [
    { src: '/images/gallery/bitum.jpeg', w: 800, h: 600, alt: 'Projet bitume — UKARIMU International' },
  ];

  // Total placeholders for each category
  protected readonly photoPlaceholders = Array.from({ length: 11 }, (_, i) => i + 2);
  protected readonly videoPlaceholders = Array.from({ length: 4 }, (_, i) => i + 1);
  protected readonly dronePlaceholders = Array.from({ length: 3 }, (_, i) => i + 1);
}
