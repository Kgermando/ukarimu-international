import { Component, computed, ChangeDetectionStrategy, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { I18nService } from '../../services/i18n.service';
import { PageHero } from '../../components/page-hero/page-hero';

@Component({
  selector: 'app-projects',
  imports: [MatIconModule, RouterLink, PageHero],
  templateUrl: './projects.html',
  styleUrl: './projects.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Projects {
  protected readonly i18n = inject(I18nService);
  protected readonly t = computed(() => this.i18n.t());

  protected readonly projects = computed(() => {
    const p = this.t().projects;
    const s = this.t().shared;
    return [
      { icon: 'agriculture',      name: p.p1_name, desc: p.p1_desc, objectives: p.p1_objectives, location: p.p1_location, status: p.p1_status, impact: p.p1_impact, statusLabel: s.status_ongoing },
      { icon: 'local_hospital',   name: p.p2_name, desc: p.p2_desc, objectives: p.p2_objectives, location: p.p2_location, status: p.p2_status, impact: p.p2_impact, statusLabel: s.status_ongoing },
      { icon: 'cloud',            name: p.p3_name, desc: p.p3_desc, objectives: p.p3_objectives, location: p.p3_location, status: p.p3_status, impact: p.p3_impact, statusLabel: s.status_ongoing },
      { icon: 'local_shipping',   name: p.p4_name, desc: p.p4_desc, objectives: p.p4_objectives, location: p.p4_location, status: p.p4_status, impact: p.p4_impact, statusLabel: s.status_ongoing },
      { icon: 'business_center',  name: p.p5_name, desc: p.p5_desc, objectives: p.p5_objectives, location: p.p5_location, status: p.p5_status, impact: p.p5_impact, statusLabel: s.status_ongoing },
      { icon: 'people',           name: p.p6_name, desc: p.p6_desc, objectives: p.p6_objectives, location: p.p6_location, status: p.p6_status, impact: p.p6_impact, statusLabel: s.status_ongoing },
      { icon: 'factory',          name: p.p7_name, desc: p.p7_desc, objectives: p.p7_objectives, location: p.p7_location, status: p.p7_status, impact: p.p7_impact, statusLabel: s.status_ongoing },
      { icon: 'campaign',         name: p.p8_name, desc: p.p8_desc, objectives: p.p8_objectives, location: p.p8_location, status: p.p8_status, impact: p.p8_impact, statusLabel: s.status_ongoing },
    ];
  });
}
