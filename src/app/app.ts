import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationComponent } from './components/navigation';
import { FooterComponent } from './components/footer';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavigationComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {}
