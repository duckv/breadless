import { Component } from '@angular/core';

@Component({
  selector: 'app-menu',
  standalone: true,
  template: `
    <!-- Hero Section -->
    <section class="luxury-bg text-white section-padding">
      <div class="container-custom text-center">
        <h1 class="hero-text mb-6 animate-slide-up">Our Menu</h1>
        <div class="divider-elegant mb-8"></div>
        <p class="subtitle text-elegant-pearl max-w-3xl mx-auto animate-fade-in">
          Freshly baked pastries and specialty coffee in the heart of Berkeley Heights.
          Experience artisan quality with every bite and sip.
        </p>
      </div>
    </section>

    <!-- Menu Content -->
    <section class="section-padding gradient-bg">
      <div class="container-custom">

        <!-- Breakfast Section -->
        <div class="card-luxury p-12 mb-16 animate-slide-up">
          <div class="flex items-center justify-center mb-8">
            <div class="text-center">
              <h2 class="menu-category">Breakfast</h2>
              <p class="text-elegant-stone font-elegant text-lg">8:00 AM – 11:00 AM</p>
            </div>
          </div>

          <!-- Pastries -->
          <div class="mb-12">
            <h3 class="text-2xl font-display font-semibold text-elegant-charcoal mb-6 text-center">
              Assorted Pastries
            </h3>
            <p class="text-center text-elegant-stone mb-8 font-elegant">
              From Balthazar Bakery – Prices based on current Balthazar Fall 2024 pricing
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="menu-item">
                <div class="flex justify-between items-start">
                  <div>
                    <h4 class="font-display font-semibold text-lg text-elegant-charcoal">Croissant</h4>
                    <p class="text-elegant-stone text-sm mt-1">Buttery, flaky, traditional French pastry</p>
                  </div>
                  <span class="price">$6</span>
                </div>
              </div>

              <div class="menu-item">
                <div class="flex justify-between items-start">
                  <div>
                    <h4 class="font-display font-semibold text-lg text-elegant-charcoal">Pain au Chocolat</h4>
                    <p class="text-elegant-stone text-sm mt-1">Dark chocolate filled pastry</p>
                  </div>
                  <span class="price">$8</span>
                </div>
              </div>

              <div class="menu-item">
                <div class="flex justify-between items-start">
                  <div>
                    <h4 class="font-display font-semibold text-lg text-elegant-charcoal">Pure Butter Scone</h4>
                    <p class="text-elegant-stone text-sm mt-1">Classic English-style scone</p>
                  </div>
                  <span class="price">$5</span>
                </div>
              </div>

              <div class="menu-item">
                <div class="flex justify-between items-start">
                  <div>
                    <h4 class="font-display font-semibold text-lg text-elegant-charcoal">Oat Currant Scone</h4>
                    <p class="text-elegant-stone text-sm mt-1">Hearty oats with sweet currants</p>
                  </div>
                  <span class="price">$5</span>
                </div>
              </div>

              <div class="menu-item">
                <div class="flex justify-between items-start">
                  <div>
                    <h4 class="font-display font-semibold text-lg text-elegant-charcoal">Kouign Amann</h4>
                    <p class="text-elegant-stone text-sm mt-1">Caramelized Breton pastry</p>
                  </div>
                  <span class="price">$9</span>
                </div>
              </div>

              <div class="menu-item">
                <div class="flex justify-between items-start">
                  <div>
                    <h4 class="font-display font-semibold text-lg text-elegant-charcoal">Seasonal Danish</h4>
                    <p class="text-elegant-stone text-sm mt-1">Chef's seasonal selection</p>
                  </div>
                  <span class="price">$7</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Bagels -->
          <div class="mb-12">
            <h3 class="text-2xl font-display font-semibold text-elegant-charcoal mb-6 text-center">Bagels</h3>
            <div class="menu-item">
              <div class="flex justify-between items-start mb-4">
                <div>
                  <h4 class="font-display font-semibold text-lg text-elegant-charcoal">Fresh Bagels</h4>
                  <p class="text-elegant-stone text-sm mt-1">Plain, Sesame, or Poppy</p>
                </div>
                <span class="price">$2.50</span>
              </div>
              <div class="ml-4 space-y-2 text-sm text-elegant-stone">
                <div class="flex justify-between">
                  <span>Add Butter</span>
                  <span class="text-brand-gold font-medium">+$1</span>
                </div>
                <div class="flex justify-between">
                  <span>Add Cream Cheese</span>
                  <span class="text-brand-gold font-medium">+$2</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Eggs -->
          <div>
            <h3 class="text-2xl font-display font-semibold text-elegant-charcoal mb-6 text-center">Eggs</h3>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div class="menu-item">
                <div class="flex justify-between items-start mb-4">
                  <div>
                    <h4 class="font-display font-semibold text-lg text-elegant-charcoal">Egg Sandwich</h4>
                    <p class="text-elegant-stone text-sm mt-1">On Balthazar brioche</p>
                  </div>
                  <span class="price">$8</span>
                </div>
                <div class="ml-4 space-y-2 text-sm text-elegant-stone">
                  <div class="flex justify-between">
                    <span>Add Cheese (Monterey Jack, American, Cheddar)</span>
                    <span class="text-brand-gold font-medium">+$2</span>
                  </div>
                  <div class="flex justify-between">
                    <span>Add Meat (Sausage Patty, Bacon, Taylor Ham)</span>
                    <span class="text-brand-gold font-medium">+$3</span>
                  </div>
                  <div class="flex justify-between">
                    <span>Add Potato Rosti</span>
                    <span class="text-brand-gold font-medium">+$3</span>
                  </div>
                </div>
              </div>

              <div class="menu-item">
                <div class="flex justify-between items-start">
                  <div>
                    <h4 class="font-display font-semibold text-lg text-elegant-charcoal">Frittata Florentine</h4>
                    <p class="text-elegant-stone text-sm mt-1">Eggs, spinach, gruyere, cherry tomato</p>
                  </div>
                  <span class="price">$9 <span class="text-xs text-elegant-stone">slice</span></span>
                </div>
              </div>

              <div class="menu-item lg:col-span-2">
                <div class="flex justify-between items-start">
                  <div>
                    <h4 class="font-display font-semibold text-lg text-elegant-charcoal">Yogurt Parfait</h4>
                    <p class="text-elegant-stone text-sm mt-1">Greek yogurt, mixed berries, granola, candied orange</p>
                  </div>
                  <span class="price">$11</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- All Day Menu -->
        <div class="card-luxury p-12 mb-16 animate-slide-up">
          <div class="flex items-center justify-center mb-8">
            <div class="text-center">
              <h2 class="menu-category">All Day Menu</h2>
              <p class="text-elegant-stone font-elegant text-lg">8:00 AM – 3:00 PM</p>
            </div>
          </div>

          <!-- Salads -->
          <div class="mb-12">
            <h3 class="text-2xl font-display font-semibold text-elegant-charcoal mb-6 text-center">Salads</h3>
            <p class="text-center text-elegant-stone mb-8 font-elegant italic">
              Add grilled chicken or grilled shrimp to any salad for $9
            </p>

            <div class="space-y-8">
              <div class="menu-item">
                <div class="flex justify-between items-start">
                  <div>
                    <h4 class="font-display font-semibold text-lg text-elegant-charcoal">Caesar Salad</h4>
                    <p class="text-elegant-stone text-sm mt-1">Little gem, parmesan, garlic crouton, classic vinaigrette</p>
                  </div>
                  <span class="price">$15</span>
                </div>
              </div>

              <div class="menu-item">
                <div class="flex justify-between items-start">
                  <div>
                    <h4 class="font-display font-semibold text-lg text-elegant-charcoal">Spinach Salad</h4>
                    <p class="text-elegant-stone text-sm mt-1">Baby spinach, hard boiled egg, pickled onion, avocado vinaigrette</p>
                  </div>
                  <span class="price">$16</span>
                </div>
              </div>

              <div class="menu-item">
                <div class="flex justify-between items-start">
                  <div>
                    <h4 class="font-display font-semibold text-lg text-elegant-charcoal">Grain Salad</h4>
                    <p class="text-elegant-stone text-sm mt-1">Farro, quinoa, shredded carrot, corn, feta, cherry tomato, baby arugula, dijon vinaigrette</p>
                  </div>
                  <span class="price">$16</span>
                </div>
              </div>

              <div class="menu-item">
                <div class="flex justify-between items-start">
                  <div>
                    <h4 class="font-display font-semibold text-lg text-elegant-charcoal">Mixed Green Salad</h4>
                    <p class="text-elegant-stone text-sm mt-1">Baby greens, shaved carrots, balsamic vinaigrette</p>
                  </div>
                  <span class="price">$11</span>
                </div>
              </div>

              <div class="menu-item">
                <div class="flex justify-between items-start">
                  <div>
                    <h4 class="font-display font-semibold text-lg text-elegant-charcoal">Grain Bowl</h4>
                    <p class="text-elegant-stone text-sm mt-1">Quinoa, farro, walnuts, dried cranberry, roasted squash, pickled onion, raspberry vinaigrette</p>
                  </div>
                  <span class="price">$12</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Sandwiches -->
          <div class="mb-12">
            <h3 class="text-2xl font-display font-semibold text-elegant-charcoal mb-6 text-center">Sandwiches</h3>
            <div class="space-y-8">
              <div class="menu-item">
                <div class="flex justify-between items-start">
                  <div>
                    <h4 class="font-display font-semibold text-lg text-elegant-charcoal">Parisian Ham & Brie Sandwich</h4>
                    <p class="text-elegant-stone text-sm mt-1">French ham, triple cream brie, arugula, pickled onion, fig jam, demi baguette</p>
                  </div>
                  <span class="price">$18</span>
                </div>
              </div>

              <div class="menu-item">
                <div class="flex justify-between items-start">
                  <div>
                    <h4 class="font-display font-semibold text-lg text-elegant-charcoal">Eggplant & Sesame Sandwich</h4>
                    <p class="text-elegant-stone text-sm mt-1">Marinated Japanese eggplant, tahini vinaigrette, sumac spiced carrots, baby spinach, sesame roll</p>
                  </div>
                  <span class="price">$17</span>
                </div>
              </div>

              <div class="menu-item">
                <div class="flex justify-between items-start">
                  <div>
                    <h4 class="font-display font-semibold text-lg text-elegant-charcoal">Chicken Salad Sandwich</h4>
                    <p class="text-elegant-stone text-sm mt-1">Shredded chicken breast, grapes, apple, herb mayo, cranberry pecan bread</p>
                  </div>
                  <span class="price">$17</span>
                </div>
              </div>

              <div class="menu-item">
                <div class="flex justify-between items-start">
                  <div>
                    <h4 class="font-display font-semibold text-lg text-elegant-charcoal">Crispy Shrimp Po' Boy</h4>
                    <p class="text-elegant-stone text-sm mt-1">Breaded flash fried shrimp, shredded lettuce, tomato, mayo, Leidenheimer roll</p>
                  </div>
                  <span class="price">$21</span>
                </div>
              </div>

              <div class="menu-item">
                <div class="flex justify-between items-start">
                  <div>
                    <h4 class="font-display font-semibold text-lg text-elegant-charcoal">Roast Beef & Manchego Sandwich</h4>
                    <p class="text-elegant-stone text-sm mt-1">Porcini rubbed Angus beef, horseradish mayo, cheddar, pickled cauliflower relish, sesame roll</p>
                  </div>
                  <span class="price">$19</span>
                </div>
              </div>

              <div class="menu-item">
                <div class="flex justify-between items-start">
                  <div>
                    <h4 class="font-display font-semibold text-lg text-elegant-charcoal">Mediterranean Sandwich</h4>
                    <p class="text-elegant-stone text-sm mt-1">Pita, marinated eggplant, feta, pickled vegetables, lettuce, cucumber, tzatziki</p>
                  </div>
                  <span class="price">$13</span>
                </div>
              </div>

              <div class="menu-item">
                <div class="flex justify-between items-start">
                  <div>
                    <h4 class="font-display font-semibold text-lg text-elegant-charcoal">Jambon Beurre</h4>
                    <p class="text-elegant-stone text-sm mt-1">Baguette, Parisian ham, gruyere cheese, dijon</p>
                  </div>
                  <span class="price">$14</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Additional Items -->
          <div class="mb-12">
            <h3 class="text-2xl font-display font-semibold text-elegant-charcoal mb-6 text-center">Additional Selections</h3>
            <div class="space-y-8">
              <div class="menu-item">
                <div class="flex justify-between items-start">
                  <div>
                    <h4 class="font-display font-semibold text-lg text-elegant-charcoal">Avocado Toast</h4>
                    <p class="text-elegant-stone text-sm mt-1">Toasted sourdough, lemon avocado mash, everything spice</p>
                  </div>
                  <span class="price">$12</span>
                </div>
              </div>

              <div class="menu-item">
                <div class="flex justify-between items-start">
                  <div>
                    <h4 class="font-display font-semibold text-lg text-elegant-charcoal">Yogurt Parfait</h4>
                    <p class="text-elegant-stone text-sm mt-1">Greek yogurt, granola, mixed berries, local honey</p>
                  </div>
                  <span class="price">$9</span>
                </div>
              </div>

              <div class="menu-item">
                <div class="flex justify-between items-start">
                  <div>
                    <h4 class="font-display font-semibold text-lg text-elegant-charcoal">Frittata</h4>
                    <p class="text-elegant-stone text-sm mt-1">Mixed seasonal vegetables, cheddar cheese</p>
                  </div>
                  <span class="price">$9 <span class="text-xs text-elegant-stone">per slice</span></span>
                </div>
              </div>

              <div class="menu-item">
                <div class="flex justify-between items-start">
                  <div>
                    <h4 class="font-display font-semibold text-lg text-elegant-charcoal">Crispy French Toast Sticks</h4>
                    <p class="text-elegant-stone text-sm mt-1">Brioche, cinnamon, maple honey butter</p>
                  </div>
                  <span class="price">$9</span>
                </div>
              </div>

              <div class="menu-item">
                <div class="flex justify-between items-start">
                  <div>
                    <h4 class="font-display font-semibold text-lg text-elegant-charcoal">Minestrone Soup</h4>
                    <p class="text-elegant-stone text-sm mt-1">Ditalini pasta, cannellini beans, tomato, vegetable stock, parmesan</p>
                  </div>
                  <span class="price">$11</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Note about chicken -->
          <div class="text-center mt-12 p-6 bg-elegant-pearl border border-brand-gold/20">
            <p class="text-elegant-stone font-elegant italic">
              Add grilled chicken to Caesar Salad, Mixed Green Salad, or Grain Bowl for $7
            </p>
          </div>
        </div>

        <!-- Call to Action -->
        <div class="text-center animate-fade-in">
          <h3 class="text-3xl font-display font-bold text-elegant-charcoal mb-6">Ready to Order?</h3>
          <p class="subtitle mb-8 max-w-2xl mx-auto">
            Call ahead for faster service or visit us today to experience Berkeley Heights' finest bakery and coffee shop.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:908-933-0123" class="btn-primary">
              <svg class="w-5 h-5 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              Call to Order
            </a>
            <a href="https://maps.google.com/?q=512+Springfield+Ave,+Berkeley+Heights,+NJ"
               target="_blank"
               class="btn-secondary">
              <svg class="w-5 h-5 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
              </svg>
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  `
})
export class MenuComponent {}
