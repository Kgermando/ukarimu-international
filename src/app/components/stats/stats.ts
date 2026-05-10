import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

interface Stat {
  value: string;
  label: string;
  icon: string;
}

@Component({
  selector: 'app-stats',
  imports: [MatIconModule],
  templateUrl: './stats.html',
  styleUrl: './stats.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Stats {
  readonly stats: Stat[] = [
    { value: '6+',   label: 'Domaines d\'expertise',   icon: 'emoji_events' },
    { value: '100%', label: 'Satisfaction client',      icon: 'star' },
    { value: '14',    label: 'Partenariats possibles',   icon: 'handshake' },
    { value: '1',    label: 'Vision : votre réussite',  icon: 'track_changes' },
  ];
}
