import { Component } from '@angular/core';
import { PlaceholderPageComponent } from '../components/placeholder-page';

@Component({
  selector: 'app-catering',
  standalone: true,
  imports: [PlaceholderPageComponent],
  template: `<app-placeholder-page pageTitle="Catering"></app-placeholder-page>`
})
export class CateringComponent {}
