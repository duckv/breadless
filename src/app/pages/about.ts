import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-about",
  standalone: true,
  imports: [RouterLink],
  template: `
    <!-- Hero Section -->
    <section class="luxury-bg text-white section-padding">
      <div class="container-custom text-center">
        <h1 class="hero-text mb-6 animate-slide-up">About Bread N' Br☕︎w</h1>
        <div class="divider-elegant mb-8"></div>
        <p
          class="subtitle text-elegant-pearl max-w-3xl mx-auto animate-fade-in"
        >
          Discover the story behind Berkeley Heights' beloved artisan bakery and
          the passionate vision that brings you freshly baked excellence every day.
        </p>
      </div>
    </section>

    <!-- Founder Story Section -->
    <section class="section-padding gradient-bg">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="animate-slide-up">
            <div class="text-center lg:text-left">
              <h2 class="section-title text-elegant-charcoal mb-8">
                Meet Our Founder
              </h2>
              <div class="divider-elegant mb-8 mx-auto lg:mx-0"></div>
              
              <div class="space-y-6 text-lg font-elegant leading-relaxed text-elegant-stone">
                <p>
                  <strong class="text-elegant-charcoal font-display text-xl">Nally Sadri</strong> 
                  founded Bread N' Brew with a simple yet profound vision: to bring the authentic taste 
                  of European artisan baking to the heart of Berkeley Heights.
                </p>
                
                <p>
                  With over 15 years of experience in French patisserie and a deep passion for 
                  coffee culture, Nally trained under master bakers in Lyon and Paris before 
                  bringing her expertise to New Jersey. Her commitment to traditional techniques 
                  and the finest ingredients ensures every croissant, every loaf, and every cup 
                  meets the highest standards of excellence.
                </p>
                
                <p>
                  "I believe that great food brings people together," says Nally. "Every morning, 
                  when I see our customers start their day with our fresh pastries and perfectly 
                  brewed coffee, I know we're not just serving food – we're creating moments of joy."
                </p>
                
                <p>
                  Under Nally's leadership, Bread N' Brew has become more than a bakery – it's a 
                  cornerstone of the Berkeley Heights community, where neighbors become friends 
                  over shared tables and the aroma of fresh-baked bread.
                </p>
              </div>
              
              <div class="mt-8">
                <a routerLink="/contact" class="btn-primary">
                  Get in Touch
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
              </div>
            </div>
          </div>
          
          <div class="animate-fade-in">
            <div class="relative">
              <div
                class="absolute -inset-4 bg-gradient-to-r from-brand-gold/30 to-brand-bronze/30 blur-lg"
              ></div>
              <div class="relative">
                <img
                  src="https://images.unsplash.com/photo-1607631568010-a87245c0daf8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Nally Sadri, founder of Bread N' Brew"
                  class="w-full h-96 object-cover shadow-luxury"
                />
                <div class="absolute bottom-6 left-6 right-6">
                  <div class="bg-white/90 backdrop-blur-sm p-4">
                    <h3 class="font-display font-bold text-xl text-elegant-charcoal">
                      Nally Sadri
                    </h3>
                    <p class="text-elegant-stone font-elegant">
                      Founder & Master Baker
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Values Section -->
    <section class="section-padding luxury-bg text-white">
      <div class="container-custom">
        <div class="text-center mb-20 animate-slide-up">
          <h2 class="section-title text-white">Our Core Values</h2>
          <div class="divider-elegant mb-8"></div>
          <p class="subtitle text-elegant-pearl max-w-3xl mx-auto">
            The principles that guide everything we do, from the first rise of our dough 
            to the last sip of your coffee.
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div class="text-center animate-slide-up">
            <div
              class="w-20 h-20 bg-gradient-to-br from-brand-gold to-brand-bronze mx-auto mb-8 flex items-center justify-center"
            >
              <svg
                class="w-10 h-10 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
            </div>
            <h3 class="text-2xl font-display font-bold mb-4 text-white">
              Artisan Excellence
            </h3>
            <p class="text-elegant-pearl font-elegant leading-relaxed">
              We never compromise on quality. Every product is handcrafted using 
              traditional techniques and the finest ingredients available.
            </p>
          </div>
          
          <div class="text-center animate-slide-up">
            <div
              class="w-20 h-20 bg-gradient-to-br from-brand-gold to-brand-bronze mx-auto mb-8 flex items-center justify-center"
            >
              <svg
                class="w-10 h-10 text-white"
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
            <h3 class="text-2xl font-display font-bold mb-4 text-white">
              Community First
            </h3>
            <p class="text-elegant-pearl font-elegant leading-relaxed">
              We're proud to be part of Berkeley Heights. Our success is measured 
              by the smiles we create and the community we serve.
            </p>
          </div>
          
          <div class="text-center animate-slide-up">
            <div
              class="w-20 h-20 bg-gradient-to-br from-brand-gold to-brand-bronze mx-auto mb-8 flex items-center justify-center"
            >
              <svg
                class="w-10 h-10 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <h3 class="text-2xl font-display font-bold mb-4 text-white">
              Sustainable Practices
            </h3>
            <p class="text-elegant-pearl font-elegant leading-relaxed">
              We source responsibly, minimize waste, and support local suppliers 
              whenever possible, caring for our planet as much as our pastries.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Story Timeline -->
    <section class="section-padding gradient-bg">
      <div class="container-custom">
        <div class="text-center mb-20 animate-slide-up">
          <h2 class="section-title">Our Journey</h2>
          <div class="divider-elegant mb-8"></div>
          <p class="subtitle max-w-3xl mx-auto">
            From dream to reality – the milestones that shaped Bread N' Brew into 
            Berkeley Heights' premier artisan bakery.
          </p>
        </div>
        
        <div class="max-w-4xl mx-auto">
          <div class="space-y-12">
            <div class="flex items-center animate-slide-up">
              <div class="flex-shrink-0 w-24 h-24 bg-brand-gold flex items-center justify-center text-white font-display font-bold text-xl">
                2018
              </div>
              <div class="ml-8">
                <h3 class="font-display font-bold text-xl text-elegant-charcoal mb-2">
                  The Dream Begins
                </h3>
                <p class="text-elegant-stone font-elegant">
                  Nally Sadri completes her advanced training in French patisserie in Lyon, 
                  France, and begins planning her vision for an authentic artisan bakery in New Jersey.
                </p>
              </div>
            </div>
            
            <div class="flex items-center animate-slide-up">
              <div class="flex-shrink-0 w-24 h-24 bg-brand-bronze flex items-center justify-center text-white font-display font-bold text-xl">
                2020
              </div>
              <div class="ml-8">
                <h3 class="font-display font-bold text-xl text-elegant-charcoal mb-2">
                  Finding Home
                </h3>
                <p class="text-elegant-stone font-elegant">
                  After extensive searching, the perfect location in Berkeley Heights is found. 
                  Renovation begins to create the warm, welcoming space our customers love today.
                </p>
              </div>
            </div>
            
            <div class="flex items-center animate-slide-up">
              <div class="flex-shrink-0 w-24 h-24 bg-brand-gold flex items-center justify-center text-white font-display font-bold text-xl">
                2021
              </div>
              <div class="ml-8">
                <h3 class="font-display font-bold text-xl text-elegant-charcoal mb-2">
                  Grand Opening
                </h3>
                <p class="text-elegant-stone font-elegant">
                  Bread N' Brew opens its doors to Berkeley Heights, immediately becoming 
                  a beloved gathering place for coffee lovers and pastry enthusiasts.
                </p>
              </div>
            </div>
            
            <div class="flex items-center animate-slide-up">
              <div class="flex-shrink-0 w-24 h-24 bg-brand-bronze flex items-center justify-center text-white font-display font-bold text-xl">
                2024
              </div>
              <div class="ml-8">
                <h3 class="font-display font-bold text-xl text-elegant-charcoal mb-2">
                  Community Cornerstone
                </h3>
                <p class="text-elegant-stone font-elegant">
                  Today, Bread N' Brew serves hundreds of loyal customers weekly, 
                  expanding our menu and continuing to perfect the art of artisan baking.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="section-padding luxury-bg text-white">
      <div class="container-custom text-center">
        <div class="animate-slide-up">
          <h2
            class="text-4xl md:text-5xl font-display font-bold mb-8 text-white"
          >
            Visit Us Today
          </h2>
          <div class="divider-elegant mb-8"></div>
          <p
            class="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-elegant-pearl font-elegant leading-relaxed"
          >
            Experience the passion and dedication that goes into every croissant, 
            every loaf, and every perfectly brewed cup of coffee.
          </p>
          <div class="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              routerLink="/menu"
              class="bg-white text-elegant-charcoal hover:bg-elegant-pearl font-semibold py-4 px-8 transition-all duration-500 shadow-luxury hover:shadow-2xl uppercase tracking-wider text-sm"
            >
              View Our Menu
            </a>
            <a
              href="https://lh.shift4.com/sign-in"
              target="_blank"
              class="border-2 border-white hover:bg-white hover:text-elegant-charcoal font-semibold py-4 px-8 transition-all duration-500 uppercase tracking-wider text-sm"
            >
              ORDER NOW
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class AboutComponent {}
