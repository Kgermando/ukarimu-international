import { Component, computed, ChangeDetectionStrategy, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { I18nService } from '../../services/i18n.service';
import { PageHero } from '../../components/page-hero/page-hero';

@Component({
  selector: 'app-partners',
  imports: [MatIconModule, RouterLink, PageHero],
  templateUrl: './partners.html',
  styleUrl: './partners.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Partners {
  protected readonly i18n = inject(I18nService);
  protected readonly t = computed(() => this.i18n.t());

  protected readonly partnersList = computed(() => {
    const p = this.t().partners;
    return [
      { id: 'bkm',        icon: 'business',          name: p.bkm_name,       desc: p.bkm_desc,       sector: p.bkm_sector,       services: p.bkm_services,       objectives: p.bkm_objectives },
      { id: 'ourfarm',    icon: 'agriculture',       name: p.ourfarm_name,   desc: p.ourfarm_desc,   sector: p.ourfarm_sector,   services: p.ourfarm_services,   objectives: p.ourfarm_objectives },
      { id: 'clinic',     icon: 'local_hospital',    name: p.clinic_name,    desc: p.clinic_desc,    sector: p.clinic_sector,    services: p.clinic_services,    objectives: p.clinic_objectives },
      { id: 'brunas',     icon: 'storefront',        name: p.brunas_name,    desc: p.brunas_desc,    sector: p.brunas_sector,    services: p.brunas_services,    objectives: p.brunas_objectives },
      { id: 'okapi',      icon: 'local_shipping',    name: p.okapi_name,     desc: p.okapi_desc,     sector: p.okapi_sector,     services: p.okapi_services,     objectives: p.okapi_objectives },
      { id: 'dmx',        icon: 'factory',           name: p.dmx_name,       desc: p.dmx_desc,       sector: p.dmx_sector,       services: p.dmx_services,       objectives: p.dmx_objectives },
      { id: 'cloudtech',  icon: 'cloud',             name: p.cloudtech_name, desc: p.cloudtech_desc, sector: p.cloudtech_sector, services: p.cloudtech_services, objectives: p.cloudtech_objectives },
      { id: 'foner',      icon: 'account_balance',   name: p.foner_name,     desc: p.foner_desc,     sector: p.foner_sector,     services: p.foner_services,     objectives: p.foner_objectives },
      { id: 'other',      icon: 'add_circle_outline',name: p.other_name,     desc: p.other_desc,     sector: p.other_sector,     services: p.other_services,     objectives: p.other_objectives },
    ];
  });
}
