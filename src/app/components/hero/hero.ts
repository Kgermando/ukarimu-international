import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-hero',
  imports: [MatIconModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  scrollTo(anchor: string, event: Event): void {
    event.preventDefault();
    const id = anchor.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
