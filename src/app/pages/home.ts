import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <!-- Hero Section -->
    <section class="relative min-h-screen">
      <!-- Background with overlay -->
      <div class="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
             alt="Elegant coffee shop interior"
             class="w-full h-full object-cover">
        <div class="absolute inset-0 bg-gradient-to-r from-elegant-charcoal/80 via-elegant-charcoal/60 to-transparent"></div>
      </div>

      <!-- Content -->
      <div class="relative z-10 min-h-screen flex items-center">
        <div class="container-custom">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div class="text-white animate-slide-up">
              <div class="mb-6">
                <div class="flex items-center space-x-1 mb-2">
                  <span class="text-5xl md:text-6xl font-display font-bold text-brand-primary">Bread N' Br</span>
                  <span class="text-4xl md:text-5xl">☕︎</span>
                  <span class="text-5xl md:text-6xl font-display font-bold text-brand-primary">w</span>
                </div>
                <p class="text-sm md:text-base text-elegant-pearl uppercase tracking-widest font-medium ml-1">
                  Artisan Breads, Perfect Brews, & Fine Patisseries
                </p>
              </div>
              <div class="divider-elegant mb-8"></div>
              <p class="text-xl md:text-2xl font-elegant leading-relaxed mb-8 text-elegant-pearl">
                Freshly baked pastries and specialty coffee in the heart of Berkeley Heights.
                Experience artisan quality with every bite and sip.
              </p>
              <div class="flex flex-col sm:flex-row gap-6">
                <a routerLink="/menu" class="btn-primary text-center">
                  View Our Menu
                  <svg class="w-5 h-5 inline ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                  </svg>
                </a>
                <a href="tel:908-933-0123" class="btn-secondary text-center border-white text-white hover:bg-white hover:text-elegant-charcoal">
                  <svg class="w-5 h-5 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  (908) 933-0123
                </a>
              </div>
            </div>
            <div class="animate-fade-in hidden lg:block">
              <div class="relative">
                <div class="absolute -inset-4 bg-gradient-to-r from-brand-gold/30 to-brand-bronze/30 blur-lg"></div>
                <div class="relative bg-white/10 backdrop-blur-sm border border-white/20 p-8">
                  <div class="grid grid-cols-2 gap-6">
                    <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                         alt="Artisan bread"
                         class="w-full h-32 object-cover">
                    <img src="https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                         alt="Specialty coffee"
                         class="w-full h-32 object-cover">
                    <img src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                         alt="Fresh pastries"
                         class="w-full h-32 object-cover">
                    <img src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                         alt="Coffee preparation"
                         class="w-full h-32 object-cover">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="section-padding gradient-bg">
      <div class="container-custom">
        <div class="text-center mb-20 animate-slide-up">
          <h2 class="section-title">Why Choose Bread N' Br☕︎w?</h2>
          <div class="divider-elegant mb-8"></div>
          <p class="subtitle max-w-3xl mx-auto">
            Three pillars of excellence that define our commitment to Berkeley Heights' discerning palates.
          </p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div class="card-luxury p-12 text-center group animate-slide-up">
            <div class="w-20 h-20 bg-gradient-to-br from-brand-gold to-brand-bronze mx-auto mb-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
            </div>
            <h3 class="text-2xl font-display font-bold mb-6 text-elegant-charcoal">Artisanal Excellence</h3>
            <p class="text-elegant-stone font-elegant leading-relaxed">Handcrafted daily using traditional French techniques and the finest ingredients sourced from premier suppliers worldwide.</p>
          </div>
          <div class="card-luxury p-12 text-center group animate-slide-up">
            <div class="w-20 h-20 bg-gradient-to-br from-brand-gold to-brand-bronze mx-auto mb-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-2xl font-display font-bold mb-6 text-elegant-charcoal">Fresh Daily</h3>
            <p class="text-elegant-stone font-elegant leading-relaxed">Every croissant, every loaf, every pastry is baked fresh each morning before dawn, ensuring uncompromising quality and flavor.</p>
          </div>
          <div class="card-luxury p-12 text-center group animate-slide-up">
            <div class="w-20 h-20 bg-gradient-to-br from-brand-gold to-brand-bronze mx-auto mb-8 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
              <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-2xl font-display font-bold mb-6 text-elegant-charcoal">Community Heritage</h3>
            <p class="text-elegant-stone font-elegant leading-relaxed">More than a bakery—we're Berkeley Heights' cherished gathering place, where neighbors become friends over perfect coffee.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Specialties Section -->
    <section class="section-padding gradient-bg">
      <div class="container-custom">
        <h2 class="section-title text-gray-900">Our Specialties</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="card overflow-hidden">
            <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                 alt="Artisan breads" 
                 class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold mb-3 text-gray-900">Artisan Breads</h3>
              <p class="text-gray-600 mb-4">From classic sourdough to specialty grain loaves, each bread is crafted with time-honored techniques.</p>
              <a routerLink="/menu" class="text-brand-primary font-semibold hover:text-brand-secondary transition-colors duration-300">
                View Bread Selection →
              </a>
            </div>
          </div>
          <div class="card overflow-hidden">
            <img src="https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                 alt="Specialty coffee" 
                 class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold mb-3 text-gray-900">Specialty Coffee</h3>
              <p class="text-gray-600 mb-4">Single-origin beans expertly roasted and brewed to perfection, from espresso to pour-over.</p>
              <a routerLink="/menu" class="text-brand-primary font-semibold hover:text-brand-secondary transition-colors duration-300">
                Coffee Menu →
              </a>
            </div>
          </div>
          <div class="card overflow-hidden">
            <img src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" 
                 alt="Fresh pastries" 
                 class="w-full h-48 object-cover">
            <div class="p-6">
              <h3 class="text-xl font-bold mb-3 text-gray-900">Fresh Pastries</h3>
              <p class="text-gray-600 mb-4">Delicate croissants, decadent cakes, and seasonal treats that pair perfectly with our coffee.</p>
              <a routerLink="/menu" class="text-brand-primary font-semibold hover:text-brand-secondary transition-colors duration-300">
                Pastry Selection →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Location & Hours -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Visit Us Today</h2>
            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div class="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-1">Address</h3>
                  <a href="https://maps.google.com/?q=512+Springfield+Ave,+Berkeley+Heights,+NJ" 
                     target="_blank" 
                     class="text-gray-600 hover:text-brand-primary transition-colors duration-300">
                    512 Springfield Ave<br>
                    Berkeley Heights, NJ
                  </a>
                </div>
              </div>
              <div class="flex items-start space-x-4">
                <div class="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-1">Hours</h3>
                  <p class="text-gray-600">Daily: 7:00 AM - 6:00 PM</p>
                </div>
              </div>
              <div class="flex items-start space-x-4">
                <div class="w-10 h-10 bg-brand-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="font-semibold text-gray-900 mb-1">Phone</h3>
                  <a href="tel:908-933-0123" class="text-gray-600 hover:text-brand-primary transition-colors duration-300">
                    (908) 933-0123
                  </a>
                </div>
              </div>
            </div>
            <div class="mt-8">
              <a routerLink="/contact" class="btn-primary">
                Get Directions & Contact Info
                <svg class="w-5 h-5 inline ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </a>
            </div>
          </div>
          <div class="card p-4">
            <div class="aspect-video rounded-lg overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.8987654321!2d-74.4567890!3d40.6789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s512%20Springfield%20Ave%2C%20Berkeley%20Heights%2C%20NJ!5e0!3m2!1sen!2sus!4v1234567890"
                class="w-full h-full border-0" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="section-padding bg-gradient-to-r from-brand-primary to-brand-secondary text-white">
      <div class="container-custom text-center">
        <h2 class="text-3xl md:text-4xl font-bold mb-6">Experience the Difference</h2>
        <p class="text-xl mb-8 max-w-2xl mx-auto opacity-90">
          Join the Berkeley Heights community that has made Bread N' Brew their daily destination for exceptional coffee and fresh-baked goods.
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <a routerLink="/catering" class="bg-white text-brand-primary hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Catering Services
          </a>
          <a href="tel:908-933-0123" class="border-2 border-white hover:bg-white hover:text-brand-primary font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
            Call to Order
          </a>
        </div>
      </div>
    </section>
  `
})
export class HomeComponent {}
