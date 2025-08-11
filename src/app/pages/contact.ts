import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
  selector: "app-contact",
  standalone: true,
  imports: [RouterLink],
  template: `
    <!-- Hero Section -->
    <section class="luxury-bg text-white section-padding">
      <div class="container-custom text-center">
        <h1 class="hero-text mb-6 animate-slide-up">Contact Us</h1>
        <div class="divider-elegant mb-8"></div>
        <p
          class="subtitle text-elegant-pearl max-w-3xl mx-auto animate-fade-in"
        >
          We'd love to hear from you! Whether you have questions about our menu, 
          need catering services, or just want to say hello, we're here to help.
        </p>
      </div>
    </section>

    <!-- Contact Information -->
    <section class="section-padding gradient-bg">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <!-- Contact Details -->
          <div class="animate-slide-up">
            <h2 class="section-title text-elegant-charcoal mb-12">
              Get in Touch
            </h2>
            
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
                    Visit Our Bakery
                  </h3>
                  <p class="text-elegant-stone font-elegant text-lg mb-2">
                    512 Springfield Avenue<br />
                    Berkeley Heights, New Jersey 07922
                  </p>
                  <a
                    href="https://maps.google.com/?q=512+Springfield+Ave,+Berkeley+Heights,+NJ"
                    target="_blank"
                    class="inline-flex items-center text-brand-gold hover:text-brand-bronze transition-colors duration-300 font-medium"
                  >
                    <svg
                      class="w-4 h-4 mr-2"
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
                    Call Us
                  </h3>
                  <p class="text-elegant-stone font-elegant text-lg mb-2">
                    <a
                      href="tel:908-933-0123"
                      class="hover:text-brand-gold transition-colors duration-300"
                    >
                      (908) 933-0123
                    </a>
                  </p>
                  <p class="text-elegant-stone/70 text-sm">
                    Call ahead for special orders and catering inquiries
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
                      fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </div>
                <div>
                  <h3
                    class="font-display font-bold text-xl text-elegant-charcoal mb-4"
                  >
                    Hours of Operation
                  </h3>
                  <div class="space-y-2 text-elegant-stone font-elegant">
                    <div class="flex justify-between items-center max-w-xs">
                      <span>Monday - Friday</span>
                      <span class="font-medium">7:00 AM – 6:00 PM</span>
                    </div>
                    <div class="flex justify-between items-center max-w-xs">
                      <span>Saturday</span>
                      <span class="font-medium">7:00 AM – 6:00 PM</span>
                    </div>
                    <div class="flex justify-between items-center max-w-xs">
                      <span>Sunday</span>
                      <span class="font-medium">7:00 AM – 5:00 PM</span>
                    </div>
                  </div>
                  <p class="text-elegant-stone/70 text-sm mt-3">
                    Fresh baking begins daily at 5:00 AM
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
                      d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                    />
                    <path
                      d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                    />
                  </svg>
                </div>
                <div>
                  <h3
                    class="font-display font-bold text-xl text-elegant-charcoal mb-2"
                  >
                    Email Us
                  </h3>
                  <p class="text-elegant-stone font-elegant text-lg mb-2">
                    <a
                      href="mailto:info@breadnbrew.com"
                      class="hover:text-brand-gold transition-colors duration-300"
                    >
                      info@breadnbrew.com
                    </a>
                  </p>
                  <p class="text-elegant-stone/70 text-sm">
                    Perfect for catering inquiries and special requests
                  </p>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="animate-fade-in">
            <div class="card-luxury p-8">
              <h3
                class="font-display font-bold text-2xl text-elegant-charcoal mb-8 text-center"
              >
                Send Us a Message
              </h3>
              <form class="space-y-6">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      for="firstName"
                      class="block text-sm font-medium text-elegant-charcoal mb-2"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      class="w-full px-4 py-3 border border-elegant-stone/20 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-colors duration-300 bg-elegant-pearl/50"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label
                      for="lastName"
                      class="block text-sm font-medium text-elegant-charcoal mb-2"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      class="w-full px-4 py-3 border border-elegant-stone/20 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-colors duration-300 bg-elegant-pearl/50"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label
                    for="email"
                    class="block text-sm font-medium text-elegant-charcoal mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    class="w-full px-4 py-3 border border-elegant-stone/20 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-colors duration-300 bg-elegant-pearl/50"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    for="phone"
                    class="block text-sm font-medium text-elegant-charcoal mb-2"
                  >
                    Phone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    class="w-full px-4 py-3 border border-elegant-stone/20 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-colors duration-300 bg-elegant-pearl/50"
                    placeholder="(908) 555-0123"
                  />
                </div>

                <div>
                  <label
                    for="subject"
                    class="block text-sm font-medium text-elegant-charcoal mb-2"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    class="w-full px-4 py-3 border border-elegant-stone/20 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-colors duration-300 bg-elegant-pearl/50"
                  >
                    <option value="">Please select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="catering">Catering Services</option>
                    <option value="special-order">Special Orders</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    for="message"
                    class="block text-sm font-medium text-elegant-charcoal mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    required
                    class="w-full px-4 py-3 border border-elegant-stone/20 focus:border-brand-gold focus:ring-2 focus:ring-brand-gold/20 transition-colors duration-300 bg-elegant-pearl/50 resize-vertical"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <div class="text-center">
                  <button
                    type="submit"
                    class="btn-primary w-full md:w-auto px-12 py-4"
                  >
                    Send Message
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
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="section-padding">
      <div class="container-custom">
        <div class="text-center mb-16 animate-slide-up">
          <h2 class="section-title">Find Us</h2>
          <div class="divider-elegant mb-8"></div>
          <p class="subtitle max-w-3xl mx-auto">
            Located in the heart of Berkeley Heights, we're easy to find and 
            always happy to welcome you to our warm, inviting space.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <!-- Directions & Parking -->
          <div class="animate-slide-up">
            <h3
              class="font-display font-bold text-xl text-elegant-charcoal mb-6"
            >
              Directions & Parking
            </h3>
            <div class="space-y-4 text-elegant-stone font-elegant">
              <div class="flex items-start space-x-3">
                <svg
                  class="w-5 h-5 text-brand-gold mt-1 flex-shrink-0"
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
                <p>
                  We're located on Springfield Avenue, easily accessible from both directions with plenty of street parking available.
                </p>
              </div>
              <div class="flex items-start space-x-3">
                <svg
                  class="w-5 h-5 text-brand-gold mt-1 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
                <p>
                  Free parking available in front of the store and nearby municipal parking areas.
                </p>
              </div>
              <div class="flex items-start space-x-3">
                <svg
                  class="w-5 h-5 text-brand-gold mt-1 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  />
                </svg>
                <p>
                  Wheelchair accessible entrance and interior space for all our guests.
                </p>
              </div>
            </div>
          </div>

          <!-- Map -->
          <div class="lg:col-span-2 animate-fade-in">
            <div class="card-luxury p-8">
              <div class="aspect-video overflow-hidden mb-4">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.8987654321!2d-74.4567890!3d40.6789012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s512%20Springfield%20Ave%2C%20Berkeley%20Heights%2C%20NJ!5e0!3m2!1sen!2sus!4v1234567890"
                  class="w-full h-full border-0"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                >
                </iframe>
              </div>
              <div class="text-center">
                <a
                  href="https://maps.google.com/?q=512+Springfield+Ave,+Berkeley+Heights,+NJ"
                  target="_blank"
                  class="btn-secondary inline-flex items-center"
                >
                  <svg
                    class="w-5 h-5 mr-2"
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
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="section-padding luxury-bg text-white">
      <div class="container-custom">
        <div class="text-center mb-16 animate-slide-up">
          <h2 class="section-title text-white">Frequently Asked Questions</h2>
          <div class="divider-elegant mb-8"></div>
          <p class="subtitle text-elegant-pearl max-w-3xl mx-auto">
            Have questions? We've compiled answers to some of the most 
            common inquiries from our valued customers.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div class="space-y-8">
            <div class="animate-slide-up">
              <h4 class="font-display font-bold text-lg text-white mb-3">
                Do you take special orders?
              </h4>
              <p class="text-elegant-pearl font-elegant">
                Yes! We love creating custom orders for special occasions. Please give us 
                48-72 hours notice for special orders, and at least one week for wedding 
                cakes or large celebration cakes.
              </p>
            </div>

            <div class="animate-slide-up">
              <h4 class="font-display font-bold text-lg text-white mb-3">
                Do you offer gluten-free options?
              </h4>
              <p class="text-elegant-pearl font-elegant">
                Absolutely! We have a selection of gluten-free pastries and bread made 
                in a dedicated prep area to avoid cross-contamination. Please ask our 
                staff about today's gluten-free offerings.
              </p>
            </div>

            <div class="animate-slide-up">
              <h4 class="font-display font-bold text-lg text-white mb-3">
                Can I place catering orders online?
              </h4>
              <p class="text-elegant-pearl font-elegant">
                For the best service and to ensure all your needs are met, we prefer 
                to handle catering orders over the phone or in person. This allows us 
                to discuss your specific requirements and create the perfect menu.
              </p>
            </div>
          </div>

          <div class="space-y-8">
            <div class="animate-slide-up">
              <h4 class="font-display font-bold text-lg text-white mb-3">
                Do you have vegan options?
              </h4>
              <p class="text-elegant-pearl font-elegant">
                Yes, we offer several vegan pastries and can accommodate vegan requests 
                for special orders. Our coffee shop also features plant-based milk 
                alternatives including oat, almond, and soy milk.
              </p>
            </div>

            <div class="animate-slide-up">
              <h4 class="font-display font-bold text-lg text-white mb-3">
                What are your busiest hours?
              </h4>
              <p class="text-elegant-pearl font-elegant">
                We're typically busiest during morning rush (7:30-9:30 AM) and lunch 
                time (12:00-1:30 PM). For a more relaxed experience, visit us in the 
                late morning (10:00-11:30 AM) or afternoon (2:30-5:00 PM).
              </p>
            </div>

            <div class="animate-slide-up">
              <h4 class="font-display font-bold text-lg text-white mb-3">
                Do you offer loyalty programs?
              </h4>
              <p class="text-elegant-pearl font-elegant">
                Yes! Ask about our frequent customer punch card program. Buy 10 
                coffee drinks and get the 11th free. We also offer discounts for 
                regular catering customers and local businesses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="section-padding gradient-bg">
      <div class="container-custom text-center">
        <div class="animate-slide-up">
          <h2
            class="text-4xl md:text-5xl font-display font-bold text-elegant-charcoal mb-8"
          >
            We Can't Wait to Serve You
          </h2>
          <div class="divider-elegant mb-8"></div>
          <p
            class="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-elegant-stone font-elegant leading-relaxed"
          >
            Whether you're stopping by for your morning coffee or planning a special event, 
            Bread N' Brew is here to make every experience memorable.
          </p>
          <div class="flex flex-col sm:flex-row gap-6 justify-center">
            <a
              routerLink="/menu"
              class="btn-primary"
            >
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
              href="https://lh.shift4.com/sign-in"
              target="_blank"
              class="btn-secondary"
            >
              ORDER NOW
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ContactComponent {}
