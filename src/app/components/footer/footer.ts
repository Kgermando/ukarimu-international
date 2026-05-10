import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-footer',
  imports: [NgOptimizedImage, MatIconModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  readonly currentYear = new Date().getFullYear();

  readonly services = [
    'Consulting',
    'Import-Export',
    'Commerce Général',
    'Coaching & Training',
    'Bases de Données',
    'Sous-traitance',
  ];

  scrollTo(anchor: string, event: Event): void {
    event.preventDefault();
    const id = anchor.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
