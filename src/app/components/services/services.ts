import { Component, ChangeDetectionStrategy } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

interface Service {
  id: number;
  icon: string;
  title: string;
  description: string;
  highlights: string[];
  imageAlt: string;
}

@Component({
  selector: 'app-services',
  imports: [MatIconModule],
  templateUrl: './services.html',
  styleUrl: './services.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Services {
  scrollToContact(event: Event): void {
    event.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }

  readonly services: Service[] = [
    {
      id: 1,
      icon: 'business_center',
      title: 'Consulting Stratégique',
      description:
        'Nos experts accompagnent les entreprises et institutions opérant en RDC dans l\'élaboration de stratégies gagnantes pour les secteurs minier, routier, technologique et commercial.',
      highlights: [
        'Stratégie secteur minier RDC',
        'Gestion de projet & diagnostic',
        'Optimisation des processus',
      ],
      imageAlt: 'Consulting stratégique et gestion de projet en RDC',
    },
    {
      id: 2,
      icon: 'public',
      title: 'Import-Export',
      description:
        'Nous facilitons vos échanges commerciaux à l\'échelle internationale grâce à notre réseau mondial de partenaires et une maîtrise totale des procédures douanières, pour tout type de marchandises et produits.',
      highlights: [
        'Logistique internationale',
        'Gestion douanière & conformité',
        'Réseau mondial de partenaires',
      ],
      imageAlt: 'Service import-export international – Ukarimu International',
    },
    {
      id: 3,
      icon: 'construction',
      title: 'Bitume & Routes Modernes',
      description:
        'UKI fournit et gère le bitume pour la construction et la réhabilitation des routes modernes en RDC. Nous intervenons sur les projets de revêtement routier, d\'infrastructures bitumineuses et de travaux publics.',
      highlights: [
        'Fourniture de bitume en RDC',
        'Revêtement & réhabilitation routière',
        'Travaux publics & infrastructures',
      ],
      imageAlt: 'Gestion bitume et routes modernes en République Démocratique du Congo',
    },
    {
      id: 4,
      icon: 'school',
      title: 'Formation en Langues & English Corner',
      description:
        'Nos programmes de formation en langues étrangères — dont l\'English Corner à Kinshasa — offrent des cours d\'anglais professionnel, de français des affaires et de communication interculturelle adaptés aux entreprises de la RDC.',
      highlights: [
        'English Corner Kinshasa',
        'Anglais professionnel & des affaires',
        'Formation linguistique certifiante',
      ],
      imageAlt: 'Formation en langues et English Corner à Kinshasa, RDC',
    },
    {
      id: 5,
      icon: 'devices',
      title: 'Technologies & Logiciels',
      description:
        'Conception et déploiement de logiciels sur mesure, bases de données, ERP, CRM et solutions informatiques innovantes pour les entreprises des secteurs minier, routier, commercial et institutionnel en RDC.',
      highlights: [
        'Développement logiciel sur mesure',
        'Bases de données & ERP / CRM',
        'Solutions IT pour entreprises RDC',
      ],
      imageAlt: 'Technologies et logiciels pour entreprises en République Démocratique du Congo',
    },
    {
      id: 6,
      icon: 'handshake',
      title: 'Sous-traitance & Externalisation',
      description:
        'Externalisez vos activités secondaires à des équipes compétentes et fiables pour vous concentrer sur votre cœur de métier — que vous opériez dans le secteur minier, routier, technologique ou commercial en RDC.',
      highlights: [
        'Externalisation spécialisée',
        'Gestion de sous-traitants RDC',
        'Qualité garantie & conformité',
      ],
      imageAlt: 'Sous-traitance et externalisation de services en RDC',
    },
  ];
}
