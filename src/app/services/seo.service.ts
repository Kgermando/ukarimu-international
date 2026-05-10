import { inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class SeoService {
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);

  setHomeMeta(): void {
    this.title.setTitle(
      'Ukarimu International | Consulting, Minerais RDC, Bitume, Formation en Langues & Logiciels – Congo'
    );

    const tags: { name?: string; property?: string; content: string }[] = [
      {
        name: 'description',
        content:
          'Ukarimu International (UKI) – Expert en consulting, import-export de minerais RDC (cobalt, or, cuivre, diamant, coltan), gestion de bitume pour routes modernes, formation en langues et English Corner, logiciels et technologies en République Démocratique du Congo.',
      },
      {
        name: 'keywords',
        content:
          'Ukarimu International, UKI Congo, consulting RDC, minerais Congo, cobalt RDC, or Congo, cuivre Congo, diamant Congo, coltan RDC, cassitérite, import export minerais RDC, bitume RDC, gestion bitume Congo, routes modernes RDC, revêtement routier Congo, travaux publics RDC, formation langues Congo, English corner Kinshasa, cours anglais RDC, anglais professionnel Congo, formation professionnelle RDC, logiciels RDC, technologies Congo, développement logiciel Kinshasa, bases de données RDC, sous-traitance RDC, commerce général Congo, consulting Kinshasa, partenariat international Congo, coaching dirigeants RDC',
      },
      { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
      { name: 'author', content: 'Ukarimu International' },
      { property: 'og:type', content: 'website' },
      {
        property: 'og:title',
        content: 'Ukarimu International | Consulting, Minerais RDC, Bitume, Formation & Technologies – Congo',
      },
      {
        property: 'og:description',
        content:
          'Expert en consulting, minerais stratégiques (cobalt, or, cuivre, diamant, coltan), bitume & routes modernes, formation en langues (English Corner) et logiciels en RDC.',
      },
      { property: 'og:url', content: 'https://ukarimu-international.com/' },
      { property: 'og:site_name', content: 'Ukarimu International' },
      { property: 'og:locale', content: 'fr_CD' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'Ukarimu International | Consulting & Services en RDC' },
      {
        name: 'twitter:description',
        content:
          'Consulting, minerais (cobalt, or, cuivre, diamant), bitume, English Corner, logiciels – République Démocratique du Congo.',
      },
    ];

    for (const tag of tags) {
      if (tag.name) {
        this.meta.updateTag({ name: tag.name, content: tag.content });
      } else if (tag.property) {
        this.meta.updateTag({ property: tag.property, content: tag.content });
      }
    }
  }
}
