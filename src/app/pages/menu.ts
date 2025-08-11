import { Component } from '@angular/core';
import { PlaceholderPageComponent } from '../components/placeholder-page';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [PlaceholderPageComponent],
  template: `<app-placeholder-page pageTitle="Menu"></app-placeholder-page>`
})
export class MenuComponent {}
