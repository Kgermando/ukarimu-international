import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Hero } from './components/hero/hero';
import { Services } from './components/services/services';
import { About } from './components/about/about';
import { Stats } from './components/stats/stats';
import { Contact } from './components/contact/contact';
import { Footer } from './components/footer/footer';
import { SeoService } from './services/seo.service';

@Component({
  selector: 'app-root',
  imports: [Navbar, Hero, Services, About, Stats, Contact, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App {
  constructor() {
    inject(SeoService).setHomeMeta();
  }
}
