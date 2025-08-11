import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-catering",
  standalone: true,
  imports: [RouterLink],
  template: `
    <!-- Hero Section -->
    <section class="luxury-bg text-white section-padding">
      <div class="container-custom text-center">
        <h1 class="hero-text mb-6 animate-slide-up">Catering Excellence</h1>
        <div class="divider-elegant mb-8"></div>
        <p
          class="subtitle text-elegant-pearl max-w-3xl mx-auto animate-fade-in"
        >
          Elevate your special occasions with Bread N' Brew's artisan catering.
          From intimate gatherings to corporate events, we deliver the same
          exceptional quality that defines our bakery.
        </p>
      </div>
    </section>

    <!-- Services Overview -->
    <section class="section-padding gradient-bg">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          <div class="card-luxury p-8 text-center animate-slide-up">
            <div
              class="w-16 h-16 bg-gradient-to-br from-brand-gold to-brand-bronze mx-auto mb-6 flex items-center justify-center"
            >
              <svg
                class="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3
              class="font-display font-bold text-xl text-elegant-charcoal mb-4"
            >
              Corporate Events
            </h3>
            <p class="text-elegant-stone font-elegant">
              Professional breakfast and lunch catering for meetings,
              conferences, and office celebrations with elegant presentation.
            </p>
          </div>

          <div class="card-luxury p-8 text-center animate-slide-up">
            <div
              class="w-16 h-16 bg-gradient-to-br from-brand-gold to-brand-bronze mx-auto mb-6 flex items-center justify-center"
            >
              <svg
                class="w-8 h-8 text-white"
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
            <h3
              class="font-display font-bold text-xl text-elegant-charcoal mb-4"
            >
              Special Occasions
            </h3>
            <p class="text-elegant-stone font-elegant">
              Birthdays, anniversaries, celebrations, and family gatherings
              deserve our finest pastries and artisan breads.
            </p>
          </div>

          <div class="card-luxury p-8 text-center animate-slide-up">
            <div
              class="w-16 h-16 bg-gradient-to-br from-brand-gold to-brand-bronze mx-auto mb-6 flex items-center justify-center"
            >
              <svg
                class="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"
                />
              </svg>
            </div>
            <h3
              class="font-display font-bold text-xl text-elegant-charcoal mb-4"
            >
              Private Parties
            </h3>
            <p class="text-elegant-stone font-elegant">
              Intimate dinner parties, wine tastings, and exclusive events with
              custom menu planning and personalized service.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Catering Menu -->
    <section class="section-padding luxury-bg text-white">
      <div class="container-custom">
        <div class="text-center mb-20 animate-slide-up">
          <h2 class="section-title text-white">Catering Menu</h2>
          <div class="divider-elegant mb-8"></div>
          <p class="subtitle text-elegant-pearl max-w-3xl mx-auto">
            All items are prepared fresh to order. Minimum order quantities
            apply. 48-hour advance notice recommended for large orders.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <!-- Breakfast Catering -->
          <div class="animate-slide-up">
            <h3 class="text-3xl font-display font-bold mb-8 text-white">
              Breakfast Catering
            </h3>

            <div class="space-y-6">
              <div class="border-b border-white/20 pb-4">
                <div class="flex justify-between items-start mb-2">
                  <h4 class="font-display font-semibold text-lg text-white">
                    Pastry Platters
                  </h4>
                  <span class="text-brand-gold font-medium">From $45</span>
                </div>
                <p class="text-elegant-pearl text-sm">
                  Assorted croissants, pain au chocolat, danishes, and seasonal
                  pastries
                  <br /><em>Serves 8-10 people | Minimum order: 2 dozen</em>
                </p>
              </div>

              <div class="border-b border-white/20 pb-4">
                <div class="flex justify-between items-start mb-2">
                  <h4 class="font-display font-semibold text-lg text-white">
                    Continental Breakfast
                  </h4>
                  <span class="text-brand-gold font-medium">$12/person</span>
                </div>
                <p class="text-elegant-pearl text-sm">
                  Fresh bagels, cream cheese, butter, seasonal fruit, and
                  premium coffee service
                  <br /><em>Minimum 15 people</em>
                </p>
              </div>

              <div class="border-b border-white/20 pb-4">
                <div class="flex justify-between items-start mb-2">
                  <h4 class="font-display font-semibold text-lg text-white">
                    Executive Breakfast
                  </h4>
                  <span class="text-brand-gold font-medium">$18/person</span>
                </div>
                <p class="text-elegant-pearl text-sm">
                  Artisan pastry selection, fresh fruit salad, yogurt parfaits,
                  premium coffee, and fresh juice
                  <br /><em>Minimum 20 people</em>
                </p>
              </div>

              <div class="border-b border-white/20 pb-4">
                <div class="flex justify-between items-start mb-2">
                  <h4 class="font-display font-semibold text-lg text-white">
                    Coffee Service
                  </h4>
                  <span class="text-brand-gold font-medium">$3.50/person</span>
                </div>
                <p class="text-elegant-pearl text-sm">
                  Premium coffee, assorted teas, cream, sugar, and stirrers
                  <br /><em
                    >Thermal carafes included for events over 25 people</em
                  >
                </p>
              </div>
            </div>
          </div>

          <!-- Lunch & Special Events -->
          <div class="animate-slide-up">
            <h3 class="text-3xl font-display font-bold mb-8 text-white">
              Lunch & Events
            </h3>

            <div class="space-y-6">
              <div class="border-b border-white/20 pb-4">
                <div class="flex justify-between items-start mb-2">
                  <h4 class="font-display font-semibold text-lg text-white">
                    Gourmet Sandwich Platters
                  </h4>
                  <span class="text-brand-gold font-medium">$95/dozen</span>
                </div>
                <p class="text-elegant-pearl text-sm">
                  Selection of our signature sandwiches cut in halves, including
                  Parisian Ham & Brie, Chicken Salad, and Mediterranean
                  <br /><em>Minimum 2 dozen</em>
                </p>
              </div>

              <div class="border-b border-white/20 pb-4">
                <div class="flex justify-between items-start mb-2">
                  <h4 class="font-display font-semibold text-lg text-white">
                    Salad Bowls
                  </h4>
                  <span class="text-brand-gold font-medium">$65/large</span>
                </div>
                <p class="text-elegant-pearl text-sm">
                  Large serving bowls of Caesar, Spinach, or Mixed Green salads
                  <br /><em>Serves 8-10 people | Dressing on the side</em>
                </p>
              </div>

              <div class="border-b border-white/20 pb-4">
                <div class="flex justify-between items-start mb-2">
                  <h4 class="font-display font-semibold text-lg text-white">
                    Artisan Bread Service
                  </h4>
                  <span class="text-brand-gold font-medium">$25/loaf</span>
                </div>
                <p class="text-elegant-pearl text-sm">
                  Freshly baked sourdough, multi-grain, or seasonal bread with
                  European butter and olive oil
                  <br /><em>Sliced and presentation-ready</em>
                </p>
              </div>

              <div class="border-b border-white/20 pb-4">
                <div class="flex justify-between items-start mb-2">
                  <h4 class="font-display font-semibold text-lg text-white">
                    Dessert Platters
                  </h4>
                  <span class="text-brand-gold font-medium">From $55</span>
                </div>
                <p class="text-elegant-pearl text-sm">
                  Seasonal tarts, mini pastries, and signature desserts
                  <br /><em
                    >Custom arrangements available | 48-hour notice required</em
                  >
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Custom Options -->
    <section class="section-padding gradient-bg">
      <div class="container-custom">
        <div class="text-center mb-16 animate-slide-up">
          <h2 class="section-title">Custom Catering Options</h2>
          <div class="divider-elegant mb-8"></div>
          <p class="subtitle max-w-3xl mx-auto">
            We work with you to create the perfect menu for your event. All
            dietary restrictions and special requests are accommodated.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="text-center animate-slide-up">
            <div
              class="w-16 h-16 bg-brand-gold mx-auto mb-4 flex items-center justify-center"
            >
              <svg
                class="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
                />
              </svg>
            </div>
            <h4
              class="font-display font-semibold text-lg text-elegant-charcoal mb-2"
            >
              Gluten-Free Options
            </h4>
            <p class="text-elegant-stone text-sm">
              Dedicated gluten-free pastries and bread options available
            </p>
          </div>

          <div class="text-center animate-slide-up">
            <div
              class="w-16 h-16 bg-brand-bronze mx-auto mb-4 flex items-center justify-center"
            >
              <svg
                class="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <h4
              class="font-display font-semibold text-lg text-elegant-charcoal mb-2"
            >
              Event Planning
            </h4>
            <p class="text-elegant-stone text-sm">
              Full service planning with setup, serving, and cleanup options
            </p>
          </div>

          <div class="text-center animate-slide-up">
            <div
              class="w-16 h-16 bg-brand-gold mx-auto mb-4 flex items-center justify-center"
            >
              <svg
                class="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                />
                <path
                  d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h14a1 1 0 001-1V5a1 1 0 00-1-1H3zM4 6h12v8H4V6z"
                />
              </svg>
            </div>
            <h4
              class="font-display font-semibold text-lg text-elegant-charcoal mb-2"
            >
              Delivery Service
            </h4>
            <p class="text-elegant-stone text-sm">
              Professional delivery and setup within 15 miles of Berkeley
              Heights
            </p>
          </div>

          <div class="text-center animate-slide-up">
            <div
              class="w-16 h-16 bg-brand-bronze mx-auto mb-4 flex items-center justify-center"
            >
              <svg
                class="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <h4
              class="font-display font-semibold text-lg text-elegant-charcoal mb-2"
            >
              Custom Branding
            </h4>
            <p class="text-elegant-stone text-sm">
              Corporate logo placement and custom packaging for branded events
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="section-padding luxury-bg text-white">
      <div class="container-custom">
        <div class="text-center mb-16 animate-slide-up">
          <h2 class="section-title text-white">What Our Clients Say</h2>
          <div class="divider-elegant mb-8"></div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white/10 backdrop-blur-sm p-8 animate-slide-up">
            <div class="mb-4">
              <div class="flex text-brand-gold">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
              </div>
            </div>
            <p class="text-elegant-pearl font-elegant mb-4">
              "Bread N' Brew catered our corporate breakfast and it was
              absolutely perfect. The pastries were fresh, the presentation was
              elegant, and our clients were thoroughly impressed."
            </p>
            <div class="font-display font-semibold text-white">
              Sarah M., Event Coordinator
            </div>
          </div>

          <div class="bg-white/10 backdrop-blur-sm p-8 animate-slide-up">
            <div class="mb-4">
              <div class="flex text-brand-gold">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
              </div>
            </div>
            <p class="text-elegant-pearl font-elegant mb-4">
              "The custom dessert platter for my daughter's graduation party was
              stunning. Every guest complimented the beautiful presentation and
              incredible taste. Thank you for making it special!"
            </p>
            <div class="font-display font-semibold text-white">
              Michael R., Private Client
            </div>
          </div>

          <div class="bg-white/10 backdrop-blur-sm p-8 animate-slide-up">
            <div class="mb-4">
              <div class="flex text-brand-gold">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
              </div>
            </div>
            <p class="text-elegant-pearl font-elegant mb-4">
              "Professional, reliable, and delicious. Our weekly office
              breakfast deliveries are always on time and the quality never
              varies. Bread N' Brew has become an essential part of our team
              meetings."
            </p>
            <div class="font-display font-semibold text-white">
              Jennifer L., HR Director
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact CTA -->
    <section class="section-padding gradient-bg">
      <div class="container-custom text-center">
        <div class="animate-slide-up">
          <h2
            class="text-4xl md:text-5xl font-display font-bold text-elegant-charcoal mb-8"
          >
            Ready to Plan Your Event?
          </h2>
          <div class="divider-elegant mb-8"></div>
          <p
            class="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-elegant-stone font-elegant leading-relaxed"
          >
            Let us help make your next event unforgettable with our artisan
            catering services. Contact us today for a custom quote and menu
            consultation.
          </p>
          <div class="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <a routerLink="/contact" class="btn-primary">
              Request Quote
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
            <a href="tel:908-933-0123" class="btn-secondary">
              <svg
                class="w-5 h-5 inline mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                />
              </svg>
              Call (908) 933-0123
            </a>
          </div>

          <div
            class="bg-elegant-pearl border border-brand-gold/20 p-6 max-w-2xl mx-auto"
          >
            <h4
              class="font-display font-bold text-lg text-elegant-charcoal mb-2"
            >
              Planning Guidelines
            </h4>
            <p class="text-elegant-stone text-sm">
              <strong>48-hour notice</strong> recommended for orders over
              $200<br />
              <strong>One week notice</strong> required for custom menu items<br />
              <strong>Delivery available</strong> within 15 miles • Setup
              services available<br />
              All dietary restrictions accommodated with advance notice
            </p>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class CateringComponent {}
