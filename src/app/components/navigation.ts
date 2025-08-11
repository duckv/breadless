import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <nav class="bg-white shadow-lg sticky top-0 z-50">
      <div class="container-custom">
        <div class="flex justify-between items-center py-4">
          <!-- Logo -->
          <div class="flex items-center">
            <a routerLink="/" class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>
              <div>
                <span class="text-2xl font-bold text-brand-primary">Bread N' Brew</span>
                <p class="text-xs text-gray-600 -mt-1">Berkeley Heights</p>
              </div>
            </a>
          </div>

          <!-- Desktop Menu -->
          <div class="hidden md:flex items-center space-x-8">
            <a routerLink="/" 
               routerLinkActive="text-brand-primary font-semibold" 
               [routerLinkActiveOptions]="{exact: true}"
               class="nav-link">Home</a>
            <a routerLink="/menu" 
               routerLinkActive="text-brand-primary font-semibold"
               class="nav-link">Menu</a>
            <a routerLink="/about" 
               routerLinkActive="text-brand-primary font-semibold"
               class="nav-link">About</a>
            <a routerLink="/catering" 
               routerLinkActive="text-brand-primary font-semibold"
               class="nav-link">Catering</a>
            <a routerLink="/contact" 
               routerLinkActive="text-brand-primary font-semibold"
               class="nav-link">Contact</a>
            <a href="tel:908-933-0123" class="btn-primary">
              <svg class="w-4 h-4 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              Call Now
            </a>
          </div>

          <!-- Mobile Menu Button -->
          <div class="md:hidden">
            <button (click)="toggleMobileMenu()" 
                    class="text-gray-600 hover:text-brand-primary focus:outline-none focus:text-brand-primary transition-colors duration-300">
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path *ngIf="!mobileMenuOpen()" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
                <path *ngIf="mobileMenuOpen()" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
          </div>
        </div>

        <!-- Mobile Menu -->
        <div *ngIf="mobileMenuOpen()" class="md:hidden border-t border-gray-200 py-4 animate-fade-in">
          <div class="flex flex-col space-y-4">
            <a routerLink="/" 
               (click)="closeMobileMenu()"
               routerLinkActive="text-brand-primary font-semibold" 
               [routerLinkActiveOptions]="{exact: true}"
               class="nav-link py-2">Home</a>
            <a routerLink="/menu" 
               (click)="closeMobileMenu()"
               routerLinkActive="text-brand-primary font-semibold"
               class="nav-link py-2">Menu</a>
            <a routerLink="/about" 
               (click)="closeMobileMenu()"
               routerLinkActive="text-brand-primary font-semibold"
               class="nav-link py-2">About</a>
            <a routerLink="/catering" 
               (click)="closeMobileMenu()"
               routerLinkActive="text-brand-primary font-semibold"
               class="nav-link py-2">Catering</a>
            <a routerLink="/contact" 
               (click)="closeMobileMenu()"
               routerLinkActive="text-brand-primary font-semibold"
               class="nav-link py-2">Contact</a>
            <a href="tel:908-933-0123" class="btn-primary text-center mt-4">
              <svg class="w-4 h-4 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              Call Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  `
})
export class NavigationComponent {
  mobileMenuOpen = signal(false);

  toggleMobileMenu() {
    this.mobileMenuOpen.update(value => !value);
  }

  closeMobileMenu() {
    this.mobileMenuOpen.set(false);
  }
}
