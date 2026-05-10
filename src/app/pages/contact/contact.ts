import { Component, computed, ChangeDetectionStrategy, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { I18nService } from '../../services/i18n.service';
import { PageHero } from '../../components/page-hero/page-hero';

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule, MatIconModule, PageHero],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  protected readonly i18n = inject(I18nService);
  protected readonly t = computed(() => this.i18n.t());

  private readonly fb = inject(FormBuilder);

  protected readonly form = this.fb.group({
    name:    ['', [Validators.required, Validators.minLength(2)]],
    email:   ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    message: ['', [Validators.required, Validators.minLength(20)]],
  });

  protected readonly submitted = false;

  protected submit(): void {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    // Form submission will be wired to a backend/email API later
    console.log(this.form.value);
  }
}
