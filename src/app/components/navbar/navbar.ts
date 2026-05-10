import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

interface NavLink {
  label: string;
  anchor: string;
}

@Component({
  selector: 'app-navbar',
  imports: [NgOptimizedImage],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[class.scrolled]': 'scrolled()',
    '(window:scroll)': 'onScroll()',
  }
})
export class Navbar {
  protected readonly scrolled = signal(false);
  protected readonly menuOpen = signal(false);

  protected readonly links: NavLink[] = [
    { label: 'Accueil',   anchor: '#hero' },
    { label: 'À propos',  anchor: '#about' },
    { label: 'Services',  anchor: '#services' },
    { label: 'Contact',   anchor: '#contact' },
  ];

  onScroll(): void {
    this.scrolled.set(window.scrollY > 60);
  }

  toggleMenu(): void {
    this.menuOpen.update(v => !v);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  scrollTo(anchor: string, event: Event): void {
    event.preventDefault();
    this.closeMenu();
    const id = anchor.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}

