import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-page-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section class="page-hero" [attr.aria-label]="title()">
      <div class="page-hero__bg" aria-hidden="true">
        <div class="shape s1"></div>
        <div class="shape s2"></div>
      </div>
      <div class="container page-hero__content">
        @if (label()) {
          <span class="section-label">{{ label() }}</span>
        }
        <h1 class="page-hero__title">{{ title() }}</h1>
        @if (subtitle()) {
          <p class="page-hero__subtitle">{{ subtitle() }}</p>
        }
      </div>
    </section>
  `,
  styles: [`
    :host { display: block; }

    .page-hero {
      position: relative;
      background: linear-gradient(135deg, var(--navy) 0%, var(--navy-medium) 60%, var(--teal-dark) 100%);
      padding: 140px 0 80px;
      overflow: hidden;
      color: var(--white);
    }

    .page-hero__bg {
      position: absolute; inset: 0; pointer-events: none;
      .shape {
        position: absolute; border-radius: 50%; opacity: 0.08;
        background: var(--teal);
      }
      .s1 { width: 600px; height: 600px; top: -200px; right: -100px; }
      .s2 { width: 300px; height: 300px; bottom: -100px; left: -50px; }
    }

    .page-hero__content {
      position: relative; z-index: 1;
      .section-label { color: var(--teal-light); }
    }

    .page-hero__title {
      font-size: clamp(2rem, 5vw, 3.2rem);
      font-weight: 800;
      color: var(--white);
      margin: 8px 0 16px;
      max-width: 700px;
    }

    .page-hero__subtitle {
      font-size: clamp(0.95rem, 2.5vw, 1.1rem);
      color: rgba(255,255,255,.75);
      max-width: 600px;
      line-height: 1.7;
    }

    @media (max-width: 768px) {
      .page-hero { padding: 120px 0 60px; }
    }
  `],
})
export class PageHero {
  readonly label = input<string>('');
  readonly title = input.required<string>();
  readonly subtitle = input<string>('');
}
