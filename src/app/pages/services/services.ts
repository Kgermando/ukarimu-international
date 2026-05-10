import { Component, computed, ChangeDetectionStrategy, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { I18nService } from '../../services/i18n.service';
import { PageHero } from '../../components/page-hero/page-hero';

@Component({
  selector: 'app-services',
  imports: [MatIconModule, RouterLink, PageHero],
  templateUrl: './services.html',
  styleUrl: './services.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Services {
  protected readonly i18n = inject(I18nService);
  protected readonly t = computed(() => this.i18n.t());

  protected readonly categories = computed(() => {
    const s = this.t().services;
    return [
      { icon: 'agriculture',     title: s.cat1_title, desc: s.cat1_desc, services: [s.cat1_s1, s.cat1_s2, s.cat1_s3, s.cat1_s4] },
      { icon: 'cloud',           title: s.cat2_title, desc: s.cat2_desc, services: [s.cat2_s1, s.cat2_s2, s.cat2_s3, s.cat2_s4] },
      { icon: 'local_hospital',  title: s.cat3_title, desc: s.cat3_desc, services: [s.cat3_s1, s.cat3_s2, s.cat3_s3, s.cat3_s4] },
      { icon: 'local_shipping',  title: s.cat4_title, desc: s.cat4_desc, services: [s.cat4_s1, s.cat4_s2, s.cat4_s3, s.cat4_s4] },
      { icon: 'business_center', title: s.cat5_title, desc: s.cat5_desc, services: [s.cat5_s1, s.cat5_s2, s.cat5_s3, s.cat5_s4] },
      { icon: 'factory',         title: s.cat6_title, desc: s.cat6_desc, services: [s.cat6_s1, s.cat6_s2, s.cat6_s3, s.cat6_s4] },
    ];
  });
}
