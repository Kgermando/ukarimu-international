import { Component, computed, ChangeDetectionStrategy, inject } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { I18nService } from '../../services/i18n.service';
import { PageHero } from '../../components/page-hero/page-hero';

@Component({
  selector: 'app-about',
  imports: [NgOptimizedImage, MatIconModule, PageHero],
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
  protected readonly i18n = inject(I18nService);
  protected readonly t = computed(() => this.i18n.t());

  protected readonly values = computed(() => {
    const a = this.t().about;
    return [
      { icon: 'verified_user', title: a.value_integrity,    desc: a.value_integrity_desc },
      { icon: 'workspace_premium', title: a.value_excellence, desc: a.value_excellence_desc },
      { icon: 'lightbulb',     title: a.value_innovation,   desc: a.value_innovation_desc },
      { icon: 'volunteer_activism', title: a.value_impact,  desc: a.value_impact_desc },
      { icon: 'people',        title: a.value_solidarity,   desc: a.value_solidarity_desc },
      { icon: 'eco',           title: a.value_sustainability, desc: a.value_sustainability_desc },
    ];
  });

  protected readonly team = computed(() => {
    const a = this.t().about;
    return [
      { name: a.team_dg_name,  role: a.team_dg_role,  desc: a.team_dg_desc,  img: '/images/teams/dg.png',  w: 400, h: 500 },
      { name: a.team_dga_name, role: a.team_dga_role, desc: a.team_dga_desc, img: '/images/teams/dga.png', w: 400, h: 500 },
      { name: a.team_cto_name, role: a.team_cto_role, desc: a.team_cto_desc, img: '/images/teams/cto.png', w: 400, h: 500 },
    ];
  });
}
