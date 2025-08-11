import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-footer",
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="luxury-bg text-white relative overflow-hidden">
      <!-- Background pattern -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0" style="background-image: url('data:image/svg+xml,<svg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;><g fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;><g fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.1&quot;><circle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/></g></svg>');"></div>
      </div>

      <div class="container-custom py-20 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <!-- Brand Info -->
          <div class="lg:col-span-2">
            <div class="mb-8">
              <div class="flex items-center space-x-1 mb-4">
                <span class="text-3xl font-display font-bold text-brand-primary">Bread N' Br</span>
                <span class="text-2xl">☕︎</span>
                <span class="text-3xl font-display font-bold text-brand-primary">w</span>
              </div>
              <p class="text-xs text-elegant-pearl uppercase tracking-widest font-medium mb-6">
                Artisan Breads, Perfect Brews, & Fine Patisseries
              </p>
            </div>
            <p class="text-elegant-pearl mb-8 max-w-lg font-elegant text-lg leading-relaxed">
              Berkeley Heights' premier destination for artisanal excellence.
              Where European tradition meets American innovation in every creation.
            </p>
            <div class="flex space-x-6">
              <a href="#" class="text-elegant-pearl hover:text-brand-gold transition-colors duration-300 group">
                <svg class="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" class="text-elegant-pearl hover:text-brand-gold transition-colors duration-300 group">
                <svg class="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" class="text-elegant-pearl hover:text-brand-gold transition-colors duration-300 group">
                <svg class="w-6 h-6 group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h3 class="text-xl font-display font-bold mb-8 text-white">Navigation</h3>
            <ul class="space-y-4">
              <li><a routerLink="/" class="text-elegant-pearl hover:text-brand-gold transition-colors duration-300 font-medium uppercase tracking-wide text-sm">Home</a></li>
              <li><a routerLink="/menu" class="text-elegant-pearl hover:text-brand-gold transition-colors duration-300 font-medium uppercase tracking-wide text-sm">Menu</a></li>
              <li><a routerLink="/about" class="text-elegant-pearl hover:text-brand-gold transition-colors duration-300 font-medium uppercase tracking-wide text-sm">About Us</a></li>
              <li><a routerLink="/catering" class="text-elegant-pearl hover:text-brand-gold transition-colors duration-300 font-medium uppercase tracking-wide text-sm">Catering</a></li>
              <li><a routerLink="/contact" class="text-elegant-pearl hover:text-brand-gold transition-colors duration-300 font-medium uppercase tracking-wide text-sm">Contact</a></li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div>
            <h3 class="text-xl font-display font-bold mb-8 text-white">Visit Our Location</h3>
            <ul class="space-y-6 text-elegant-pearl">
              <li class="flex items-start space-x-3">
                <svg class="w-6 h-6 text-brand-gold mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                </svg>
                <a href="https://maps.google.com/?q=512+Springfield+Ave,+Berkeley+Heights,+NJ"
                   target="_blank"
                   class="hover:text-brand-gold transition-colors duration-300 font-elegant leading-relaxed">
                  512 Springfield Avenue<br>
                  Berkeley Heights, NJ
                </a>
              </li>
              <li class="flex items-center space-x-3">
                <svg class="w-6 h-6 text-brand-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <a href="tel:908-933-0123" class="hover:text-brand-gold transition-colors duration-300 font-elegant text-lg">
                  (908) 933-0123
                </a>
              </li>
              <li class="flex items-center space-x-3">
                <svg class="w-6 h-6 text-brand-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <a href="mailto:breadnbrew512@gmail.com" class="hover:text-brand-gold transition-colors duration-300 font-elegant">
                  breadnbrew512@gmail.com
                </a>
              </li>
              <li class="flex items-center space-x-3">
                <svg class="w-6 h-6 text-brand-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                </svg>
                <div class="font-elegant">
                  <div>Daily: 7:00 AM – 6:00 PM</div>
                  <div class="text-sm text-elegant-pearl/70 mt-1">Fresh baking begins at 5:00 AM</div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="border-t border-white/20 mt-16 pt-8">
          <div class="text-center">
            <div class="divider-elegant mb-6"></div>
            <p class="text-elegant-pearl font-elegant text-sm">
              &copy; {{ currentYear }} Bread N' Br☕︎w. All rights reserved.
            </p>
            <p class="text-brand-gold font-medium text-sm mt-2 uppercase tracking-widest">
              Berkeley Heights' Premier Artisan Bakery & Coffee House
            </p>
          </div>
        </div>
      </div>
    </footer>
  `,
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
