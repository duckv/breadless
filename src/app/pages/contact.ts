import { Component } from '@angular/core';
import { PlaceholderPageComponent } from '../components/placeholder-page';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [PlaceholderPageComponent],
  template: `<app-placeholder-page pageTitle="Contact Us"></app-placeholder-page>`
})
export class ContactComponent {}
