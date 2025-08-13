import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [RouterLink],
  template: `
    <!-- Hero Section -->
    <section class="relative min-h-screen">
      <!-- Background with overlay -->
      <div class="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Elegant coffee shop interior"
          class="w-full h-full object-cover"
        />
        <div
          class="absolute inset-0 bg-gradient-to-r from-elegant-charcoal/80 via-elegant-charcoal/60 to-transparent"
        ></div>
      </div>

      <!-- Content -->
      <div class="relative z-10 min-h-screen flex items-center">
        <div class="container-custom">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div class="text-white animate-slide-up">
              <div class="mb-6">
                <div class="flex items-center space-x-1 mb-2">
                  <span
                    class="text-5xl md:text-6xl font-display font-bold text-pink-500"
                    >Bread N' Br</span
                  >
                  <span class="text-4xl md:text-5xl text-pink-500">☕︎</span>
                  <span
                    class="text-5xl md:text-6xl font-display font-bold text-pink-500"
                    >w</span
                  >
                </div>
                <p
                  class="text-sm md:text-base text-elegant-pearl uppercase tracking-widest font-medium ml-1"
                >
                  Artisan Breads, Perfect Brews, & Fine Patisseries
                </p>
              </div>
              <div class="divider-elegant mb-8"></div>
              <p
                class="text-xl md:text-2xl font-elegant leading-relaxed mb-8 text-elegant-pearl"
              >
                Freshly baked pastries and specialty coffee in the heart of
                Berkeley Heights. Experience artisan quality with every bite and
                sip.
              </p>
              <div class="flex flex-col sm:flex-row gap-6">
                <a routerLink="/menu" class="btn-primary text-center">
                  View Our Menu
                  <svg
                    class="w-5 h-5 inline ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
                <a
                  href="tel:908-933-0123"
                  class="btn-secondary text-center border-white text-white hover:bg-white hover:text-elegant-charcoal"
                >
                  <svg
                    class="w-5 h-5 inline mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                    />
                  </svg>
                  (908) 933-0123
                </a>
              </div>
            </div>
            <div class="animate-fade-in hidden lg:block">
              <div class="relative">
                <div
                  class="absolute -inset-4 bg-gradient-to-r from-brand-gold/30 to-brand-bronze/30 blur-lg"
                ></div>
                <div
                  class="relative bg-white/10 backdrop-blur-sm border border-white/20 p-8"
                >
                  <div class="grid grid-cols-2 gap-6">
                    <img
                      src="https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                      alt="Artisan bread"
                      class="w-full h-32 object-cover"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                      alt="Specialty coffee"
                      class="w-full h-32 object-cover"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                      alt="Fresh pastries"
                      class="w-full h-32 object-cover"
                    />
                    <img
                      src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                      alt="Coffee preparation"
                      class="w-full h-32 object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


    <!-- Specialties Section -->
    <section class="section-padding luxury-bg text-white">
      <div class="container-custom">
        <div class="text-center mb-20 animate-slide-up">
          <h2 class="section-title text-white">Our Signature Offerings</h2>
          <div class="divider-elegant mb-8"></div>
          <p class="subtitle text-elegant-pearl max-w-3xl mx-auto">
            Discover the artistry behind every creation, from hand-laminated
            pastries to perfectly extracted espresso.
          </p>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div class="group animate-slide-up">
            <div class="relative overflow-hidden mb-8">
              <img
                src="https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Artisan breads"
                class="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
              ></div>
              <div class="absolute bottom-6 left-6 right-6">
                <div
                  class="w-12 h-12 bg-brand-gold/90 backdrop-blur-sm flex items-center justify-center mb-4"
                >
                  <svg
                    class="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <h3 class="text-2xl font-display font-bold mb-4 text-white">
              Artisan Breads
            </h3>
            <p class="text-elegant-pearl font-elegant leading-relaxed mb-6">
              From classic sourdough to specialty grain loaves, each bread is
              crafted with time-honored French techniques and the finest organic
              flours.
            </p>
            <a
              routerLink="/menu"
              class="inline-flex items-center text-brand-gold hover:text-white transition-colors duration-300 font-medium uppercase tracking-wide text-sm"
            >
              View Selection
              <svg
                class="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>

          <div class="group animate-slide-up">
            <div class="relative overflow-hidden mb-8">
              <img
                src="https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Specialty coffee"
                class="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
              ></div>
              <div class="absolute bottom-6 left-6 right-6">
                <div
                  class="w-12 h-12 bg-brand-gold/90 backdrop-blur-sm flex items-center justify-center mb-4"
                >
                  <span class="text-white text-lg">☕</span>
                </div>
              </div>
            </div>
            <h3 class="text-2xl font-display font-bold mb-4 text-white">
              Perfect Brews
            </h3>
            <p class="text-elegant-pearl font-elegant leading-relaxed mb-6">
              Single-origin beans expertly roasted and brewed to perfection.
              From traditional espresso to innovative pour-overs, every cup
              tells a story.
            </p>
            <a
              routerLink="/menu"
              class="inline-flex items-center text-brand-gold hover:text-white transition-colors duration-300 font-medium uppercase tracking-wide text-sm"
            >
              Coffee Menu
              <svg
                class="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>

          <div class="group animate-slide-up">
            <div class="relative overflow-hidden mb-8">
              <img
                src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Fresh pastries"
                class="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
              ></div>
              <div class="absolute bottom-6 left-6 right-6">
                <div
                  class="w-12 h-12 bg-brand-gold/90 backdrop-blur-sm flex items-center justify-center mb-4"
                >
                  <svg
                    class="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <h3 class="text-2xl font-display font-bold mb-4 text-white">
              Fine Patisseries
            </h3>
            <p class="text-elegant-pearl font-elegant leading-relaxed mb-6">
              Delicate croissants, decadent seasonal tarts, and exquisite
              viennoiseries crafted with European precision and American
              innovation.
            </p>
            <a
              routerLink="/menu"
              class="inline-flex items-center text-brand-gold hover:text-white transition-colors duration-300 font-medium uppercase tracking-wide text-sm"
            >
              Pastry Collection
              <svg
                class="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Location & Hours -->
    <section class="section-padding gradient-bg">
      <div class="container-custom">
        <div class="text-center mb-20 animate-slide-up">
          <h2 class="section-title">Visit Our Berkeley Heights Location</h2>
          <div class="divider-elegant mb-8"></div>
          <p class="subtitle max-w-3xl mx-auto">
            Located in the heart of Berkeley Heights, we welcome you to
            experience artisan quality in an atmosphere of refined comfort.
          </p>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="animate-slide-up">
            <div class="space-y-8">
              <div class="flex items-start space-x-6">
                <div
                  class="w-14 h-14 bg-gradient-to-br from-brand-gold to-brand-bronze flex items-center justify-center flex-shrink-0"
                >
                  <svg
                    class="w-7 h-7 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3
                    class="font-display font-bold text-xl text-elegant-charcoal mb-2"
                  >
                    Address
                  </h3>
                  <a
                    href="https://maps.google.com/?q=512+Springfield+Ave,+Berkeley+Heights,+NJ"
                    target="_blank"
                    class="text-elegant-stone hover:text-brand-gold transition-colors duration-300 font-elegant text-lg leading-relaxed"
                  >
                    512 Springfield Avenue<br />
                    Berkeley Heights, New Jersey
                  </a>
                </div>
              </div>
              <div class="flex items-start space-x-6">
                <div
                  class="w-14 h-14 bg-gradient-to-br from-brand-gold to-brand-bronze flex items-center justify-center flex-shrink-0"
                >
                  <svg
                    class="w-7 h-7 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3
                    class="font-display font-bold text-xl text-elegant-charcoal mb-2"
                  >
                    Hours
                  </h3>
                  <p class="text-elegant-stone font-elegant text-lg">
                    Daily: 7:00 AM – 6:00 PM
                  </p>
                  <p class="text-elegant-stone/70 text-sm mt-1">
                    Fresh baking begins at 5:00 AM
                  </p>
                </div>
              </div>
              <div class="flex items-start space-x-6">
                <div
                  class="w-14 h-14 bg-gradient-to-br from-brand-gold to-brand-bronze flex items-center justify-center flex-shrink-0"
                >
                  <svg
                    class="w-7 h-7 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                    />
                  </svg>
                </div>
                <div>
                  <h3
                    class="font-display font-bold text-xl text-elegant-charcoal mb-2"
                  >
                    Phone
                  </h3>
                  <a
                    href="tel:908-933-0123"
                    class="text-elegant-stone hover:text-brand-gold transition-colors duration-300 font-elegant text-lg"
                  >
                    (908) 933-0123
                  </a>
                  <p class="text-elegant-stone/70 text-sm mt-1">
                    Call ahead for special orders
                  </p>
                </div>
              </div>
            </div>
            <div class="mt-12">
              <div class="flex flex-col sm:flex-row gap-4">
                <a routerLink="/contact" class="btn-primary">
                  Contact Information
                  <svg
                    class="w-5 h-5 inline ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
                <a
                  href="https://maps.google.com/?q=512+Springfield+Ave,+Berkeley+Heights,+NJ"
                  target="_blank"
                  class="btn-secondary"
                >
                  <svg
                    class="w-5 h-5 inline mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  Directions
                </a>
              </div>
            </div>
          </div>
          <div class="card-luxury p-8 animate-fade-in">
            <div class="aspect-video overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.8987654321!2d-74.4567890!3d40.6789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s512%20Springfield%20Ave%2C%20Berkeley%20Heights%2C%20NJ!5e0!3m2!1sen!2sus!4v1234567890"
                class="w-full h-full border-0"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              >
              </iframe>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section
      class="section-padding luxury-bg text-white relative overflow-hidden"
    >
      <!-- Background pattern -->
      <div class="absolute inset-0 opacity-10">
        <div
          class="absolute inset-0"
          style='background-image: url(&apos;data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23ffffff" fill-opacity="0.1"><circle cx="30" cy="30" r="2"/></g></svg>&apos;);'
        ></div>
      </div>

      <div class="container-custom text-center relative z-10">
        <div class="animate-slide-up">
          <h2
            class="text-4xl md:text-5xl font-display font-bold mb-8 text-white"
          >
            Experience Excellence
          </h2>
          <div class="divider-elegant mb-8"></div>
          <p
            class="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-elegant-pearl font-elegant leading-relaxed"
          >
            Join Berkeley Heights' discerning community in celebrating artisan
            tradition, exceptional coffee, and the art of fine patisserie.
          </p>
          <div class="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              routerLink="/catering"
              class="bg-white text-elegant-charcoal hover:bg-elegant-pearl font-semibold py-4 px-8 transition-all duration-500 shadow-luxury hover:shadow-2xl uppercase tracking-wider text-sm"
            >
              Catering Excellence
            </a>
            <a
              href="tel:908-933-0123"
              class="border-2 border-white hover:bg-white hover:text-elegant-charcoal font-semibold py-4 px-8 transition-all duration-500 uppercase tracking-wider text-sm"
            >
              Call (908) 933-0123
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class HomeComponent {}
