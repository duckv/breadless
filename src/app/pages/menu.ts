import { Component } from "@angular/core";
import { CommonModule } from "@angular/common";

@Component({
  selector: "app-menu",
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Hero Section -->
    <section class="luxury-bg text-white section-padding">
      <div class="container-custom text-center">
        <h1 class="hero-text mb-6 animate-slide-up">Our Menu</h1>
        <div class="divider-elegant mb-8"></div>
        <p
          class="subtitle text-elegant-pearl max-w-3xl mx-auto animate-fade-in"
        >
          Freshly baked pastries and specialty coffee in the heart of Berkeley
          Heights. Experience artisan quality with every bite and sip.
        </p>

        <!-- Print & Export Options -->
        <div
          class="flex flex-col sm:flex-row gap-4 justify-center mt-8 no-print"
        >
          <button
            (click)="printMenu()"
            class="bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:border-white/50 px-6 py-3 transition-all duration-300 font-medium"
          >
            <svg
              class="w-5 h-5 inline mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
              />
            </svg>
            Print Menu
          </button>
          <button
            (click)="exportToText()"
            class="bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:border-white/50 px-6 py-3 transition-all duration-300 font-medium"
          >
            <svg
              class="w-5 h-5 inline mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            Export as Text
          </button>
        </div>
      </div>
    </section>

    <!-- Menu Content -->
    <section class="section-padding gradient-bg menu-content">
      <div class="container-custom">
        <!-- Breakfast Section -->
        <div class="card-luxury p-12 mb-16 animate-slide-up">
          <div class="flex items-center justify-center mb-8">
            <div class="text-center">
              <h2 class="menu-category">Breakfast</h2>
              <p class="text-elegant-stone font-elegant text-lg">
                8:00 AM – 11:00 AM
              </p>
            </div>
          </div>

          <!-- Pastries -->
          <div class="mb-12">
            <h3
              class="text-2xl font-display font-semibold text-elegant-charcoal mb-6 text-center"
            >
              Assorted Pastries
            </h3>
            <p class="text-center text-elegant-stone mb-8 font-elegant">
              From Balthazar Bakery – Prices based on current Balthazar Fall
              2024 pricing
            </p>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div class="menu-item border-b border-elegant-stone/10 pb-4">
                <div class="flex justify-between items-start">
                  <div>
                    <h4
                      class="font-display font-semibold text-lg text-elegant-charcoal"
                    >
                      Croissant
                    </h4>
                    <p class="text-elegant-stone text-sm mt-1">
                      Buttery, flaky, traditional French pastry
                    </p>
                  </div>
                  <span class="price">$6</span>
                </div>
              </div>

              <div class="menu-item border-b border-elegant-stone/10 pb-4">
                <div class="flex justify-between items-start">
                  <div>
                    <h4
                      class="font-display font-semibold text-lg text-elegant-charcoal"
                    >
                      Pain au Chocolat
                    </h4>
                    <p class="text-elegant-stone text-sm mt-1">
                      Dark chocolate filled pastry
                    </p>
                  </div>
                  <span class="price">$8</span>
                </div>
              </div>

              <div class="menu-item border-b border-elegant-stone/10 pb-4">
                <div class="flex justify-between items-start">
                  <div>
                    <h4
                      class="font-display font-semibold text-lg text-elegant-charcoal"
                    >
                      Pure Butter Scone
                    </h4>
                    <p class="text-elegant-stone text-sm mt-1">
                      Classic English-style scone
                    </p>
                  </div>
                  <span class="price">$5</span>
                </div>
              </div>

              <div class="menu-item border-b border-elegant-stone/10 pb-4">
                <div class="flex justify-between items-start">
                  <div>
                    <h4
                      class="font-display font-semibold text-lg text-elegant-charcoal"
                    >
                      Oat Currant Scone
                    </h4>
                    <p class="text-elegant-stone text-sm mt-1">
                      Hearty oats with sweet currants
                    </p>
                  </div>
                  <span class="price">$5</span>
                </div>
              </div>

              <div class="menu-item border-b border-elegant-stone/10 pb-4">
                <div class="flex justify-between items-start">
                  <div>
                    <h4
                      class="font-display font-semibold text-lg text-elegant-charcoal"
                    >
                      Kouign Amann
                    </h4>
                    <p class="text-elegant-stone text-sm mt-1">
                      Caramelized Breton pastry
                    </p>
                  </div>
                  <span class="price">$9</span>
                </div>
              </div>

              <div class="menu-item border-b border-elegant-stone/10 pb-4">
                <div class="flex justify-between items-start">
                  <div>
                    <h4
                      class="font-display font-semibold text-lg text-elegant-charcoal"
                    >
                      Seasonal Danish
                    </h4>
                    <p class="text-elegant-stone text-sm mt-1">
                      Chef's seasonal selection
                    </p>
                  </div>
                  <span class="price">$7</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Bagels -->
          <div class="mb-12">
            <h3
              class="text-2xl font-display font-semibold text-elegant-charcoal mb-6 text-center"
            >
              Bagels
            </h3>
            <div class="menu-item">
              <div class="flex justify-between items-start mb-4">
                <div>
                  <h4
                    class="font-display font-semibold text-lg text-elegant-charcoal"
                  >
                    Fresh Bagels
                  </h4>
                  <p class="text-elegant-stone text-sm mt-1">
                    Plain, Sesame, or Poppy
                  </p>
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
            <h3
              class="text-2xl font-display font-semibold text-elegant-charcoal mb-6 text-center"
            >
              Eggs
            </h3>
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div class="menu-item border-b border-elegant-stone/10 pb-4">
                <div class="flex justify-between items-start mb-4">
                  <div>
                    <h4
                      class="font-display font-semibold text-lg text-elegant-charcoal"
                    >
                      Egg Sandwich
                    </h4>
                    <p class="text-elegant-stone text-sm mt-1">
                      On Balthazar brioche
                    </p>
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

              <div class="menu-item border-b border-elegant-stone/10 pb-4">
                <div class="flex justify-between items-start">
                  <div>
                    <h4
                      class="font-display font-semibold text-lg text-elegant-charcoal"
                    >
                      Frittata Florentine
                    </h4>
                    <p class="text-elegant-stone text-sm mt-1">
                      Eggs, spinach, gruyere, cherry tomato
                    </p>
                  </div>
                  <span class="price"
                    >$9
                    <span class="text-xs text-elegant-stone">slice</span></span
                  >
                </div>
              </div>

              <div class="menu-item lg:col-span-2">
                <div class="flex justify-between items-start">
                  <div>
                    <h4
                      class="font-display font-semibold text-lg text-elegant-charcoal"
                    >
                      Yogurt Parfait
                    </h4>
                    <p class="text-elegant-stone text-sm mt-1">
                      Greek yogurt, mixed berries, granola, candied orange
                    </p>
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
              <p class="text-elegant-stone font-elegant text-lg">
                8:00 AM – 3:00 PM
              </p>
            </div>
          </div>

          <!-- Salads -->
          <div class="mb-12">
            <h3
              class="text-2xl font-display font-semibold text-elegant-charcoal mb-6 text-center"
            >
              Salads
            </h3>
            <p class="text-center text-elegant-stone mb-8 font-elegant italic">
              Add grilled chicken or grilled shrimp to any salad for $9
            </p>

            <div class="space-y-8">
              <div class="menu-item border-b border-elegant-stone/10 pb-4">
                <div class="flex justify-between items-start">
                  <div>
                    <h4
                      class="font-display font-semibold text-lg text-elegant-charcoal"
                    >
                      Caesar Salad
                    </h4>
                    <p class="text-elegant-stone text-sm mt-1">
                      Little gem, parmesan, garlic crouton, classic vinaigrette
                    </p>
                  </div>
                  <span class="price">$15</span>
                </div>
              </div>

              <div class="menu-item border-b border-elegant-stone/10 pb-4">
                <div class="flex justify-between items-start">
                  <div>
                    <h4
                      class="font-display font-semibold text-lg text-elegant-charcoal"
                    >
                      Spinach Salad
                    </h4>
                    <p class="text-elegant-stone text-sm mt-1">
                      Baby spinach, hard boiled egg, pickled onion, avocado
                      vinaigrette
                    </p>
                  </div>
                  <span class="price">$16</span>
                </div>
              </div>

              <div class="menu-item border-b border-elegant-stone/10 pb-4">
                <div class="flex justify-between items-start">
                  <div>
                    <h4
                      class="font-display font-semibold text-lg text-elegant-charcoal"
                    >
                      Grain Salad
                    </h4>
                    <p class="text-elegant-stone text-sm mt-1">
                      Farro, quinoa, shredded carrot, corn, feta, cherry tomato,
                      baby arugula, dijon vinaigrette
                    </p>
                  </div>
                  <span class="price">$16</span>
                </div>
              </div>

              <div class="menu-item border-b border-elegant-stone/10 pb-4">
                <div class="flex justify-between items-start">
                  <div>
                    <h4
                      class="font-display font-semibold text-lg text-elegant-charcoal"
                    >
                      Mixed Green Salad
                    </h4>
                    <p class="text-elegant-stone text-sm mt-1">
                      Baby greens, shaved carrots, balsamic vinaigrette
                    </p>
                  </div>
                  <span class="price">$11</span>
                </div>
              </div>

              <div class="menu-item border-b border-elegant-stone/10 pb-4">
                <div class="flex justify-between items-start">
                  <div>
                    <h4
                      class="font-display font-semibold text-lg text-elegant-charcoal"
                    >
                      Grain Bowl
                    </h4>
                    <p class="text-elegant-stone text-sm mt-1">
                      Quinoa, farro, walnuts, dried cranberry, roasted squash,
                      pickled onion, raspberry vinaigrette
                    </p>
                  </div>
                  <span class="price">$12</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Sandwiches -->
          <div class="mb-12">
            <h3
              class="text-2xl font-display font-semibold text-elegant-charcoal mb-6 text-center"
            >
              Sandwiches
            </h3>
            <div class="space-y-8">
              <div class="menu-item border-b border-elegant-stone/10 pb-4">
                <div class="flex justify-between items-start">
                  <div>
                    <h4
                      class="font-display font-semibold text-lg text-elegant-charcoal"
                    >
                      Parisian Ham & Brie Sandwich
                    </h4>
                    <p class="text-elegant-stone text-sm mt-1">
                      French ham, triple cream brie, arugula, pickled onion, fig
                      jam, demi baguette
                    </p>
                  </div>
                  <span class="price">$18</span>
                </div>
              </div>

              <div class="menu-item border-b border-elegant-stone/10 pb-4">
                <div class="flex justify-between items-start">
                  <div>
                    <h4
                      class="font-display font-semibold text-lg text-elegant-charcoal"
                    >
                      Eggplant & Sesame Sandwich
                    </h4>
                    <p class="text-elegant-stone text-sm mt-1">
                      Marinated Japanese eggplant, tahini vinaigrette, sumac
                      spiced carrots, baby spinach, sesame roll
                    </p>
                  </div>
                  <span class="price">$17</span>
                </div>
              </div>

              <div class="menu-item border-b border-elegant-stone/10 pb-4">
                <div class="flex justify-between items-start">
                  <div>
                    <h4
                      class="font-display font-semibold text-lg text-elegant-charcoal"
                    >
                      Chicken Salad Sandwich
                    </h4>
                    <p class="text-elegant-stone text-sm mt-1">
                      Shredded chicken breast, grapes, apple, herb mayo,
                      cranberry pecan bread
                    </p>
                  </div>
                  <span class="price">$17</span>
                </div>
              </div>

              <div class="menu-item border-b border-elegant-stone/10 pb-4">
                <div class="flex justify-between items-start">
                  <div>
                    <h4
                      class="font-display font-semibold text-lg text-elegant-charcoal"
                    >
                      Crispy Shrimp Po' Boy
                    </h4>
                    <p class="text-elegant-stone text-sm mt-1">
                      Breaded flash fried shrimp, shredded lettuce, tomato,
                      mayo, Leidenheimer roll
                    </p>
                  </div>
                  <span class="price">$21</span>
                </div>
              </div>

              <div class="menu-item border-b border-elegant-stone/10 pb-4">
                <div class="flex justify-between items-start">
                  <div>
                    <h4
                      class="font-display font-semibold text-lg text-elegant-charcoal"
                    >
                      Roast Beef & Manchego Sandwich
                    </h4>
                    <p class="text-elegant-stone text-sm mt-1">
                      Porcini rubbed Angus beef, horseradish mayo, cheddar,
                      pickled cauliflower relish, sesame roll
                    </p>
                  </div>
                  <span class="price">$19</span>
                </div>
              </div>

              <div class="menu-item border-b border-elegant-stone/10 pb-4">
                <div class="flex justify-between items-start">
                  <div>
                    <h4
                      class="font-display font-semibold text-lg text-elegant-charcoal"
                    >
                      Mediterranean Sandwich
                    </h4>
                    <p class="text-elegant-stone text-sm mt-1">
                      Pita, marinated eggplant, feta, pickled vegetables,
                      lettuce, cucumber, tzatziki
                    </p>
                  </div>
                  <span class="price">$13</span>
                </div>
              </div>

              <div class="menu-item border-b border-elegant-stone/10 pb-4">
                <div class="flex justify-between items-start">
                  <div>
                    <h4
                      class="font-display font-semibold text-lg text-elegant-charcoal"
                    >
                      Jambon Beurre
                    </h4>
                    <p class="text-elegant-stone text-sm mt-1">
                      Baguette, Parisian ham, gruyere cheese, dijon
                    </p>
                  </div>
                  <span class="price">$14</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Additional Items -->
          <div class="mb-12">
            <h3
              class="text-2xl font-display font-semibold text-elegant-charcoal mb-6 text-center"
            >
              Additional Selections
            </h3>
            <div class="space-y-8">
              <div class="menu-item border-b border-elegant-stone/10 pb-4">
                <div class="flex justify-between items-start">
                  <div>
                    <h4
                      class="font-display font-semibold text-lg text-elegant-charcoal"
                    >
                      Avocado Toast
                    </h4>
                    <p class="text-elegant-stone text-sm mt-1">
                      Toasted sourdough, lemon avocado mash, everything spice
                    </p>
                  </div>
                  <span class="price">$12</span>
                </div>
              </div>

              <div class="menu-item border-b border-elegant-stone/10 pb-4">
                <div class="flex justify-between items-start">
                  <div>
                    <h4
                      class="font-display font-semibold text-lg text-elegant-charcoal"
                    >
                      Yogurt Parfait
                    </h4>
                    <p class="text-elegant-stone text-sm mt-1">
                      Greek yogurt, granola, mixed berries, local honey
                    </p>
                  </div>
                  <span class="price">$9</span>
                </div>
              </div>

              <div class="menu-item border-b border-elegant-stone/10 pb-4">
                <div class="flex justify-between items-start">
                  <div>
                    <h4
                      class="font-display font-semibold text-lg text-elegant-charcoal"
                    >
                      Frittata
                    </h4>
                    <p class="text-elegant-stone text-sm mt-1">
                      Mixed seasonal vegetables, cheddar cheese
                    </p>
                  </div>
                  <span class="price"
                    >$9
                    <span class="text-xs text-elegant-stone"
                      >per slice</span
                    ></span
                  >
                </div>
              </div>

              <div class="menu-item border-b border-elegant-stone/10 pb-4">
                <div class="flex justify-between items-start">
                  <div>
                    <h4
                      class="font-display font-semibold text-lg text-elegant-charcoal"
                    >
                      Crispy French Toast Sticks
                    </h4>
                    <p class="text-elegant-stone text-sm mt-1">
                      Brioche, cinnamon, maple honey butter
                    </p>
                  </div>
                  <span class="price">$9</span>
                </div>
              </div>

              <div class="menu-item border-b border-elegant-stone/10 pb-4">
                <div class="flex justify-between items-start">
                  <div>
                    <h4
                      class="font-display font-semibold text-lg text-elegant-charcoal"
                    >
                      Minestrone Soup
                    </h4>
                    <p class="text-elegant-stone text-sm mt-1">
                      Ditalini pasta, cannellini beans, tomato, vegetable stock,
                      parmesan
                    </p>
                  </div>
                  <span class="price">$11</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Note about chicken -->
          <div
            class="text-center mt-12 p-6 bg-elegant-pearl border border-brand-gold/20"
          >
            <p class="text-elegant-stone font-elegant italic">
              Add grilled chicken to Caesar Salad, Mixed Green Salad, or Grain
              Bowl for $7
            </p>
          </div>
        </div>

        <!-- Call to Action -->
        <div class="text-center animate-fade-in">
          <h3
            class="text-3xl font-display font-bold text-elegant-charcoal mb-6"
          >
            Ready to Order?
          </h3>
          <p class="subtitle mb-8 max-w-2xl mx-auto">
            Call ahead for faster service or visit us today to experience
            Berkeley Heights' finest bakery and coffee shop.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:908-933-0123" class="btn-primary">
              <svg
                class="w-5 h-5 inline mr-2"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                />
              </svg>
              Call to Order
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
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class MenuComponent {
  printMenu() {
    // Add print-specific styles
    const printStyles = `
      <style>
        @media print {
          .no-print { display: none !important; }
          .luxury-bg, .gradient-bg { background: white !important; color: black !important; }
          .text-white { color: black !important; }
          .text-elegant-pearl { color: #666 !important; }
          .card-luxury { border: 1px solid #ddd !important; box-shadow: none !important; }
          .section-padding { padding: 20px 0 !important; }
          .container-custom { max-width: 100% !important; margin: 0 !important; padding: 0 20px !important; }
          body { font-size: 12pt !important; line-height: 1.4 !important; }
          h1, h2 { page-break-after: avoid !important; }
          .menu-item { page-break-inside: avoid !important; }
        }
      </style>
    `;

    // Create printable content
    const printContent =
      document.querySelector(".menu-content")?.innerHTML || "";
    const printWindow = window.open("", "_blank");

    if (printWindow) {
      printWindow.document.write(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Bread N' Brew - Menu</title>
          ${printStyles}
          <style>
            body { font-family: Arial, sans-serif; margin: 0; padding: 20px; }
            h1 { text-align: center; color: #ec4899; margin-bottom: 10px; }
            h2 { color: #333; border-bottom: 2px solid #ec4899; padding-bottom: 5px; }
            h3 { color: #666; margin-top: 20px; }
            .menu-item { margin-bottom: 15px; padding-bottom: 10px; border-bottom: 1px solid #eee; }
            .price { font-weight: bold; color: #d97706; }
            .header { text-align: center; margin-bottom: 30px; }
            .footer { text-align: center; margin-top: 30px; font-size: 10pt; color: #666; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>Bread N' Br☕w</h1>
            <p>Artisan Breads, Perfect Brews, & Fine Patisseries</p>
            <p>512 Springfield Avenue, Berkeley Heights, NJ • (908) 933-0123</p>
          </div>
          ${printContent}
          <div class="footer">
            <p>Fresh baking begins daily at 5:00 AM • All prices subject to change</p>
            <p>Visit us: Daily 7:00 AM – 6:00 PM • www.breadnbrew.com</p>
          </div>
        </body>
        </html>
      `);
      printWindow.document.close();
      printWindow.print();
    }
  }

  exportToText() {
    const menuText = this.generateMenuText();
    const blob = new Blob([menuText], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "bread-n-brew-menu.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  }

  private generateMenuText(): string {
    return `
BREAD N' BREW
Artisan Breads, Perfect Brews, & Fine Patisseries
512 Springfield Avenue, Berkeley Heights, NJ
Phone: (908) 933-0123
Hours: Daily 7:00 AM – 6:00 PM

═══════════════════════════════════════════════════════════════

BREAKFAST MENU (8:00 AM – 11:00 AM)

ASSORTED PASTRIES
From Balthazar Bakery – Prices based on current Balthazar Fall 2024 pricing

• Croissant
  Buttery, flaky, traditional French pastry                    $6

• Pain au Chocolat
  Dark chocolate filled pastry                                 $8

• Pure Butter Scone
  Classic English-style scone                                  $5

• Oat Currant Scone
  Hearty oats with sweet currants                             $5

• Kouign Amann
  Caramelized Breton pastry                                   $9

• Seasonal Danish
  Chef's seasonal selection                                    $7

BAGELS

• Fresh Bagels (Plain, Sesame, or Poppy)                     $2.50
  Add Butter                                                  +$1
  Add Cream Cheese                                           +$2

EGGS

��� Egg Sandwich (On Balthazar brioche)                        $8
  Add Cheese (Monterey Jack, American, Cheddar)             +$2
  Add Meat (Sausage Patty, Bacon, Taylor Ham)               +$3
  Add Potato Rosti                                           +$3

• Frittata Florentine
  Eggs, spinach, gruyere, cherry tomato                      $9/slice

• Yogurt Parfait
  Greek yogurt, mixed berries, granola, candied orange       $11

═══════════════════════════════════════════════════════════════

ALL DAY MENU (8:00 AM – 3:00 PM)

SALADS
Add grilled chicken or grilled shrimp to any salad for $9

• Caesar Salad
  Little gem, parmesan, garlic crouton, classic vinaigrette  $15

• Spinach Salad
  Baby spinach, hard boiled egg, pickled onion,
  avocado vinaigrette                                         $16

• Grain Salad
  Farro, quinoa, shredded carrot, corn, feta, cherry tomato,
  baby arugula, dijon vinaigrette                            $16

• Mixed Green Salad
  Baby greens, shaved carrots, balsamic vinaigrette          $11

• Grain Bowl
  Quinoa, farro, walnuts, dried cranberry, roasted squash,
  pickled onion, raspberry vinaigrette                       $12

SANDWICHES

• Parisian Ham & Brie Sandwich
  French ham, triple cream brie, arugula, pickled onion,
  fig jam, demi baguette                                     $18

• Eggplant & Sesame Sandwich
  Marinated Japanese eggplant, tahini vinaigrette,
  sumac spiced carrots, baby spinach, sesame roll           $17

• Chicken Salad Sandwich
  Shredded chicken breast, grapes, apple, herb mayo,
  cranberry pecan bread                                      $17

• Crispy Shrimp Po' Boy
  Breaded flash fried shrimp, shredded lettuce, tomato,
  mayo, Leidenheimer roll                                    $21

• Roast Beef & Manchego Sandwich
  Porcini rubbed Angus beef, horseradish mayo, cheddar,
  pickled cauliflower relish, sesame roll                   $19

• Mediterranean Sandwich
  Pita, marinated eggplant, feta, pickled vegetables,
  lettuce, cucumber, tzatziki                               $13

• Jambon Beurre
  Baguette, Parisian ham, gruyere cheese, dijon            $14

ADDITIONAL SELECTIONS

• Avocado Toast
  Toasted sourdough, lemon avocado mash, everything spice   $12

• Yogurt Parfait
  Greek yogurt, granola, mixed berries, local honey        $9

• Frittata
  Mixed seasonal vegetables, cheddar cheese                 $9/slice

• Crispy French Toast Sticks
  Brioche, cinnamon, maple honey butter                    $9

• Minestrone Soup
  Ditalini pasta, cannellini beans, tomato,
  vegetable stock, parmesan                                 $11

Note: Add grilled chicken to Caesar Salad, Mixed Green Salad,
or Grain Bowl for $7

═══════════════════════════════════════════════════════════════

Fresh baking begins daily at 5:00 AM
All prices subject to change
Visit us online or call for catering inquiries

Thank you for choosing Bread N' Brew!
    `;
  }
}
