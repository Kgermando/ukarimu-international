import { Component, computed, ChangeDetectionStrategy, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { I18nService } from '../../services/i18n.service';
import { PageHero } from '../../components/page-hero/page-hero';

@Component({
  selector: 'app-social-impact',
  imports: [MatIconModule, RouterLink, PageHero],
  templateUrl: './social-impact.html',
  styleUrl: './social-impact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SocialImpact {
  protected readonly i18n = inject(I18nService);
  protected readonly t = computed(() => this.i18n.t());

  protected readonly areas = computed(() => {
    const im = this.t().impact;
    return [
      { icon: 'agriculture',        title: im.area1_title, desc: im.area1_desc },
      { icon: 'work',               title: im.area2_title, desc: im.area2_desc },
      { icon: 'groups',             title: im.area3_title, desc: im.area3_desc },
      { icon: 'local_hospital',     title: im.area4_title, desc: im.area4_desc },
      { icon: 'person_pin',         title: im.area5_title, desc: im.area5_desc },
      { icon: 'eco',                title: im.area6_title, desc: im.area6_desc },
      { icon: 'handshake',          title: im.area7_title, desc: im.area7_desc },
    ];
  });

  protected readonly stats = computed(() => {
    const im = this.t().impact;
    return [
      { value: im.stat1_value, label: im.stat1_label, icon: 'people' },
      { value: im.stat2_value, label: im.stat2_label, icon: 'category' },
      { value: im.stat3_value, label: im.stat3_label, icon: 'handshake' },
      { value: im.stat4_value, label: im.stat4_label, icon: 'volunteer_activism' },
    ];
  });

  protected readonly testimonials = computed(() => {
    const im = this.t().impact;
    return [
      { text: im.testi1_text, author: im.testi1_author },
      { text: im.testi2_text, author: im.testi2_author },
    ];
  });
}
