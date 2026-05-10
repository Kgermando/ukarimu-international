import { Component, computed, ChangeDetectionStrategy, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { MatIconModule } from '@angular/material/icon';
import { I18nService } from '../../services/i18n.service';

@Component({
  selector: 'app-home',
  imports: [RouterLink, MatIconModule],
  templateUrl: './home.html',
  styleUrl: './home.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {
  protected readonly i18n = inject(I18nService);
  protected readonly t = computed(() => this.i18n.t());

  protected readonly sectors = computed(() => {
    const s = this.t().services;
    return [
      { icon: 'agriculture',    title: s.cat1_title, desc: s.cat1_desc },
      { icon: 'devices',        title: s.cat2_title, desc: s.cat2_desc },
      { icon: 'local_hospital', title: s.cat3_title, desc: s.cat3_desc },
      { icon: 'local_shipping', title: s.cat4_title, desc: s.cat4_desc },
      { icon: 'business_center',title: s.cat5_title, desc: s.cat5_desc },
      { icon: 'factory',        title: s.cat6_title, desc: s.cat6_desc },
    ];
  });

  protected readonly featuredProjects = computed(() => {
    const p = this.t().projects;
    return [
      { icon: 'agriculture',     name: p.p1_name, desc: p.p1_desc, location: p.p1_location },
      { icon: 'local_hospital',  name: p.p2_name, desc: p.p2_desc, location: p.p2_location },
      { icon: 'cloud',           name: p.p3_name, desc: p.p3_desc, location: p.p3_location },
    ];
  });

  protected readonly partners = computed(() => {
    const p = this.t().partners;
    return [
      { name: p.bkm_name,       sector: p.bkm_sector },
      { name: p.ourfarm_name,   sector: p.ourfarm_sector },
      { name: p.clinic_name,    sector: p.clinic_sector },
      { name: p.brunas_name,    sector: p.brunas_sector },
      { name: p.okapi_name,     sector: p.okapi_sector },
      { name: p.dmx_name,       sector: p.dmx_sector },
      { name: p.cloudtech_name, sector: p.cloudtech_sector },
      { name: p.foner_name,     sector: p.foner_sector },
    ];
  });
}
