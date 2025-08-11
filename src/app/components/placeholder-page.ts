import { Component, Input } from "@angular/core";

@Component({
  selector: "app-placeholder-page",
  standalone: true,
  template: `
    <div class="min-h-screen gradient-bg flex items-center justify-center">
      <div class="container-custom">
        <div class="max-w-2xl mx-auto text-center">
          <div
            class="w-24 h-24 bg-gradient-to-br from-brand-primary to-brand-secondary rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce-gentle"
          >
            <svg
              class="w-12 h-12 text-white"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
              />
            </svg>
          </div>

          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {{ pageTitle }} Coming Soon!
          </h1>

          <p class="text-xl text-gray-600 mb-8">
            We're working hard to bring you amazing
            {{ pageTitle.toLowerCase() }} content. This page will be filled with
            delicious details about our offerings at Bread N' Brew.
          </p>

          <div class="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h2 class="text-2xl font-semibold text-gray-900 mb-4">
              What's Coming
            </h2>
            <ul class="text-left space-y-3 text-gray-600">
              <li class="flex items-center">
                <svg
                  class="w-5 h-5 text-brand-primary mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                Detailed information about our {{ pageTitle.toLowerCase() }}
              </li>
              <li class="flex items-center">
                <svg
                  class="w-5 h-5 text-brand-primary mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                Beautiful photos and descriptions
              </li>
              <li class="flex items-center">
                <svg
                  class="w-5 h-5 text-brand-primary mr-3"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                Easy ordering and contact options
              </li>
            </ul>
          </div>

          <p class="text-gray-500 mb-8">
            In the meantime, feel free to visit us at our Berkeley Heights
            location or give us a call!
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
              Call Us: (908) 933-0123
            </a>
            <a href="mailto:breadnbrew512@gmail.com" class="btn-secondary">
              <svg
                class="w-5 h-5 inline mr-2"
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
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class PlaceholderPageComponent {
  @Input() pageTitle: string = "Page";
}
