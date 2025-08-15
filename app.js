// Application state
const state = {
    currentPage: 'home',
    mobileMenuOpen: false
};

// Page content templates
const pages = {
    home: `
        <!-- Hero Section -->
        <section class="relative min-h-screen">
            <!-- Background with overlay -->
            <div class="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                    alt="Elegant coffee shop interior"
                    class="w-full h-full object-cover"
                />
                <div class="absolute inset-0 bg-gradient-to-r from-elegant-charcoal/80 via-elegant-charcoal/60 to-transparent"></div>
            </div>

            <!-- Content -->
            <div class="relative z-10 min-h-screen flex items-center">
                <div class="container-custom">
                    <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div class="text-white animate-slide-up">
                            <div class="mb-6">
                                <div class="flex items-center space-x-1 mb-2">
                                    <span class="text-5xl md:text-6xl font-display font-bold text-pink-500">Bread N' Br</span>
                                    <span class="text-4xl md:text-5xl text-pink-500">☕︎</span>
                                    <span class="text-5xl md:text-6xl font-display font-bold text-pink-500">w</span>
                                </div>
                                <p class="text-sm md:text-base text-elegant-pearl uppercase tracking-widest font-medium ml-1">
                                    Artisan Breads, Perfect Brews, & Fine Patisseries
                                </p>
                            </div>
                            <div class="divider-elegant mb-8"></div>
                            <p class="text-xl md:text-2xl font-elegant leading-relaxed mb-8 text-elegant-pearl">
                                Freshly baked pastries and specialty coffee in the heart of Berkeley Heights. Experience artisan quality with every bite and sip.
                            </p>
                            <div class="flex flex-col sm:flex-row gap-6">
                                <a href="#" onclick="navigateTo('menu')" class="btn-primary text-center">
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
                                        <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Artisan bread" class="w-full h-32 object-cover"/>
                                        <img src="https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Specialty coffee" class="w-full h-32 object-cover"/>
                                        <img src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Fresh pastries" class="w-full h-32 object-cover"/>
                                        <img src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80" alt="Coffee preparation" class="w-full h-32 object-cover"/>
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
                        Discover the artistry behind every creation, from hand-laminated pastries to perfectly extracted espresso.
                    </p>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div class="group animate-slide-up">
                        <div class="relative overflow-hidden mb-8">
                            <img src="https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Artisan breads" class="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"/>
                            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div class="absolute bottom-6 left-6 right-6">
                                <div class="w-12 h-12 bg-brand-gold/90 backdrop-blur-sm flex items-center justify-center mb-4">
                                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <h3 class="text-2xl font-display font-bold mb-4 text-white">Artisan Breads</h3>
                        <p class="text-elegant-pearl font-elegant leading-relaxed mb-6">
                            From classic sourdough to specialty grain loaves, each bread is crafted with time-honored French techniques and the finest organic flours.
                        </p>
                        <a href="#" onclick="navigateTo('menu')" class="inline-flex items-center text-brand-gold hover:text-white transition-colors duration-300 font-medium uppercase tracking-wide text-sm">
                            View Selection
                            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                            </svg>
                        </a>
                    </div>

                    <div class="group animate-slide-up">
                        <div class="relative overflow-hidden mb-8">
                            <img src="https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Specialty coffee" class="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"/>
                            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div class="absolute bottom-6 left-6 right-6">
                                <div class="w-12 h-12 bg-brand-gold/90 backdrop-blur-sm flex items-center justify-center mb-4">
                                    <span class="text-white text-lg">☕</span>
                                </div>
                            </div>
                        </div>
                        <h3 class="text-2xl font-display font-bold mb-4 text-white">Perfect Brews</h3>
                        <p class="text-elegant-pearl font-elegant leading-relaxed mb-6">
                            Single-origin beans expertly roasted and brewed to perfection. From traditional espresso to innovative pour-overs, every cup tells a story.
                        </p>
                        <a href="#" onclick="navigateTo('menu')" class="inline-flex items-center text-brand-gold hover:text-white transition-colors duration-300 font-medium uppercase tracking-wide text-sm">
                            Coffee Menu
                            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                            </svg>
                        </a>
                    </div>

                    <div class="group animate-slide-up">
                        <div class="relative overflow-hidden mb-8">
                            <img src="https://images.unsplash.com/photo-1486427944299-d1955d23e34d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Fresh pastries" class="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110"/>
                            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            <div class="absolute bottom-6 left-6 right-6">
                                <div class="w-12 h-12 bg-brand-gold/90 backdrop-blur-sm flex items-center justify-center mb-4">
                                    <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <h3 class="text-2xl font-display font-bold mb-4 text-white">Fine Patisseries</h3>
                        <p class="text-elegant-pearl font-elegant leading-relaxed mb-6">
                            Delicate croissants, decadent seasonal tarts, and exquisite viennoiseries crafted with European precision and American innovation.
                        </p>
                        <a href="#" onclick="navigateTo('menu')" class="inline-flex items-center text-brand-gold hover:text-white transition-colors duration-300 font-medium uppercase tracking-wide text-sm">
                            Pastry Collection
                            <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
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
                        Located in the heart of Berkeley Heights, we welcome you to experience artisan quality in an atmosphere of refined comfort.
                    </p>
                </div>
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div class="animate-slide-up">
                        <div class="space-y-8">
                            <div class="flex items-start space-x-6">
                                <div class="w-14 h-14 bg-gradient-to-br from-brand-gold to-brand-bronze flex items-center justify-center flex-shrink-0">
                                    <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="font-display font-bold text-xl text-elegant-charcoal mb-2">Address</h3>
                                    <a href="https://maps.google.com/?q=512+Springfield+Ave,+Berkeley+Heights,+NJ" target="_blank" class="text-elegant-stone hover:text-brand-gold transition-colors duration-300 font-elegant text-lg leading-relaxed">
                                        512 Springfield Avenue<br/>
                                        Berkeley Heights, New Jersey
                                    </a>
                                </div>
                            </div>
                            <div class="flex items-start space-x-6">
                                <div class="w-14 h-14 bg-gradient-to-br from-brand-gold to-brand-bronze flex items-center justify-center flex-shrink-0">
                                    <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="font-display font-bold text-xl text-elegant-charcoal mb-2">Hours</h3>
                                    <p class="text-elegant-stone font-elegant text-lg">Daily: 7:00 AM – 6:00 PM</p>
                                    <p class="text-elegant-stone/70 text-sm mt-1">Fresh baking begins at 5:00 AM</p>
                                </div>
                            </div>
                            <div class="flex items-start space-x-6">
                                <div class="w-14 h-14 bg-gradient-to-br from-brand-gold to-brand-bronze flex items-center justify-center flex-shrink-0">
                                    <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="font-display font-bold text-xl text-elegant-charcoal mb-2">Phone</h3>
                                    <a href="tel:908-933-0123" class="text-elegant-stone hover:text-brand-gold transition-colors duration-300 font-elegant text-lg">
                                        (908) 933-0123
                                    </a>
                                    <p class="text-elegant-stone/70 text-sm mt-1">Call ahead for special orders</p>
                                </div>
                            </div>
                        </div>
                        <div class="mt-12">
                            <div class="flex flex-col sm:flex-row gap-4">
                                <a href="#" onclick="navigateTo('contact')" class="btn-primary">
                                    Contact Information
                                    <svg class="w-5 h-5 inline ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                                    </svg>
                                </a>
                                <a href="https://maps.google.com/?q=512+Springfield+Ave,+Berkeley+Heights,+NJ" target="_blank" class="btn-secondary">
                                    <svg class="w-5 h-5 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
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
                                referrerpolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- CTA Section -->
        <section class="section-padding luxury-bg text-white relative overflow-hidden">
            <!-- Background pattern -->
            <div class="absolute inset-0 opacity-10">
                <div class="absolute inset-0" style='background-image: url("data:image/svg+xml,<svg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;><g fill=&quot;none&quot; fill-rule=&quot;evenodd&quot;><g fill=&quot;%23ffffff&quot; fill-opacity=&quot;0.1&quot;><circle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;2&quot;/></g></svg>");'></div>
            </div>

            <div class="container-custom text-center relative z-10">
                <div class="animate-slide-up">
                    <h2 class="text-4xl md:text-5xl font-display font-bold mb-8 text-white">Experience Excellence</h2>
                    <div class="divider-elegant mb-8"></div>
                    <p class="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-elegant-pearl font-elegant leading-relaxed">
                        Join Berkeley Heights' discerning community in celebrating artisan tradition, exceptional coffee, and the art of fine patisserie.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-6 justify-center">
                        <a href="#" onclick="navigateTo('catering')" class="bg-white text-elegant-charcoal hover:bg-elegant-pearl font-semibold py-4 px-8 transition-all duration-500 shadow-luxury hover:shadow-2xl uppercase tracking-wider text-sm">
                            Catering Excellence
                        </a>
                        <a href="tel:908-933-0123" class="border-2 border-white hover:bg-white hover:text-elegant-charcoal font-semibold py-4 px-8 transition-all duration-500 uppercase tracking-wider text-sm">
                            Call (908) 933-0123
                        </a>
                    </div>
                </div>
            </div>
        </section>
    `,
    
    about: `
        <!-- Hero Section -->
        <section class="luxury-bg text-white section-padding">
            <div class="container-custom text-center">
                <h1 class="hero-text mb-6 animate-slide-up">About Bread N' Br☕︎w</h1>
                <div class="divider-elegant mb-8"></div>
                <p class="subtitle text-elegant-pearl max-w-3xl mx-auto animate-fade-in">
                    Discover the story behind Berkeley Heights' beloved artisan bakery and the passionate vision that brings you freshly baked excellence every day.
                </p>
            </div>
        </section>

        <!-- Founder Story Section -->
        <section class="section-padding gradient-bg">
            <div class="container-custom">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div class="animate-slide-up">
                        <div class="text-center lg:text-left">
                            <h2 class="section-title text-elegant-charcoal mb-8">Meet Our Founder</h2>
                            <div class="divider-elegant mb-8 mx-auto lg:mx-0"></div>

                            <div class="space-y-6 text-lg font-elegant leading-relaxed text-elegant-stone">
                                <p>
                                    <strong class="text-elegant-charcoal font-display text-xl">Nally Sadri</strong>
                                    founded Bread N' Brew with a simple yet profound vision: to bring the authentic taste of European artisan baking to the heart of Berkeley Heights.
                                </p>

                                <p>
                                    With over 15 years of experience in French patisserie and a deep passion for coffee culture, Nally trained under master bakers in Lyon and Paris before bringing her expertise to New Jersey. Her commitment to traditional techniques and the finest ingredients ensures every croissant, every loaf, and every cup meets the highest standards of excellence.
                                </p>

                                <p>
                                    "I believe that great food brings people together," says Nally. "Every morning, when I see our customers start their day with our fresh pastries and perfectly brewed coffee, I know we're not just serving food – we're creating moments of joy."
                                </p>

                                <p>
                                    Under Nally's leadership, Bread N' Brew has become more than a bakery – it's a cornerstone of the Berkeley Heights community, where neighbors become friends over shared tables and the aroma of fresh-baked bread.
                                </p>
                            </div>

                            <div class="mt-8">
                                <a href="#" onclick="navigateTo('contact')" class="btn-primary">
                                    Get in Touch
                                    <svg class="w-5 h-5 inline ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="animate-fade-in">
                        <div class="relative">
                            <div class="absolute -inset-4 bg-gradient-to-r from-brand-gold/30 to-brand-bronze/30 blur-lg"></div>
                            <div class="relative">
                                <img src="https://images.unsplash.com/photo-1607631568010-a87245c0daf8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Nally Sadri, founder of Bread N' Brew" class="w-full h-96 object-cover shadow-luxury"/>
                                <div class="absolute bottom-6 left-6 right-6">
                                    <div class="bg-white/90 backdrop-blur-sm p-4">
                                        <h3 class="font-display font-bold text-xl text-elegant-charcoal">Nally Sadri</h3>
                                        <p class="text-elegant-stone font-elegant">Founder & Master Baker</p>
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
                        The principles that guide everything we do, from the first rise of our dough to the last sip of your coffee.
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <div class="text-center animate-slide-up">
                        <div class="w-20 h-20 bg-gradient-to-br from-brand-gold to-brand-bronze mx-auto mb-8 flex items-center justify-center">
                            <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                            </svg>
                        </div>
                        <h3 class="text-2xl font-display font-bold mb-4 text-white">Artisan Excellence</h3>
                        <p class="text-elegant-pearl font-elegant leading-relaxed">
                            We never compromise on quality. Every product is handcrafted using traditional techniques and the finest ingredients available.
                        </p>
                    </div>

                    <div class="text-center animate-slide-up">
                        <div class="w-20 h-20 bg-gradient-to-br from-brand-gold to-brand-bronze mx-auto mb-8 flex items-center justify-center">
                            <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"/>
                            </svg>
                        </div>
                        <h3 class="text-2xl font-display font-bold mb-4 text-white">Community First</h3>
                        <p class="text-elegant-pearl font-elegant leading-relaxed">
                            We're proud to be part of Berkeley Heights. Our success is measured by the smiles we create and the community we serve.
                        </p>
                    </div>

                    <div class="text-center animate-slide-up">
                        <div class="w-20 h-20 bg-gradient-to-br from-brand-gold to-brand-bronze mx-auto mb-8 flex items-center justify-center">
                            <svg class="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clip-rule="evenodd"/>
                            </svg>
                        </div>
                        <h3 class="text-2xl font-display font-bold mb-4 text-white">Sustainable Practices</h3>
                        <p class="text-elegant-pearl font-elegant leading-relaxed">
                            We source responsibly, minimize waste, and support local suppliers whenever possible, caring for our planet as much as our pastries.
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
                        From dream to reality – the milestones that shaped Bread N' Brew into Berkeley Heights' premier artisan bakery.
                    </p>
                </div>

                <div class="max-w-4xl mx-auto">
                    <div class="space-y-12">
                        <div class="flex items-center animate-slide-up">
                            <div class="flex-shrink-0 w-24 h-24 bg-brand-gold flex items-center justify-center text-white font-display font-bold text-xl">
                                2018
                            </div>
                            <div class="ml-8">
                                <h3 class="font-display font-bold text-xl text-elegant-charcoal mb-2">The Dream Begins</h3>
                                <p class="text-elegant-stone font-elegant">
                                    Nally Sadri completes her advanced training in French patisserie in Lyon, France, and begins planning her vision for an authentic artisan bakery in New Jersey.
                                </p>
                            </div>
                        </div>

                        <div class="flex items-center animate-slide-up">
                            <div class="flex-shrink-0 w-24 h-24 bg-brand-bronze flex items-center justify-center text-white font-display font-bold text-xl">
                                2020
                            </div>
                            <div class="ml-8">
                                <h3 class="font-display font-bold text-xl text-elegant-charcoal mb-2">Finding Home</h3>
                                <p class="text-elegant-stone font-elegant">
                                    After extensive searching, the perfect location in Berkeley Heights is found. Renovation begins to create the warm, welcoming space our customers love today.
                                </p>
                            </div>
                        </div>

                        <div class="flex items-center animate-slide-up">
                            <div class="flex-shrink-0 w-24 h-24 bg-brand-gold flex items-center justify-center text-white font-display font-bold text-xl">
                                2021
                            </div>
                            <div class="ml-8">
                                <h3 class="font-display font-bold text-xl text-elegant-charcoal mb-2">Grand Opening</h3>
                                <p class="text-elegant-stone font-elegant">
                                    Bread N' Brew opens its doors to Berkeley Heights, immediately becoming a beloved gathering place for coffee lovers and pastry enthusiasts.
                                </p>
                            </div>
                        </div>

                        <div class="flex items-center animate-slide-up">
                            <div class="flex-shrink-0 w-24 h-24 bg-brand-bronze flex items-center justify-center text-white font-display font-bold text-xl">
                                2024
                            </div>
                            <div class="ml-8">
                                <h3 class="font-display font-bold text-xl text-elegant-charcoal mb-2">Community Cornerstone</h3>
                                <p class="text-elegant-stone font-elegant">
                                    Today, Bread N' Brew serves hundreds of loyal customers weekly, expanding our menu and continuing to perfect the art of artisan baking.
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
                    <h2 class="text-4xl md:text-5xl font-display font-bold mb-8 text-white">Visit Us Today</h2>
                    <div class="divider-elegant mb-8"></div>
                    <p class="text-xl md:text-2xl mb-12 max-w-3xl mx-auto text-elegant-pearl font-elegant leading-relaxed">
                        Experience the passion and dedication that goes into every croissant, every loaf, and every perfectly brewed cup of coffee.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-6 justify-center">
                        <a href="#" onclick="navigateTo('menu')" class="bg-white text-elegant-charcoal hover:bg-elegant-pearl font-semibold py-4 px-8 transition-all duration-500 shadow-luxury hover:shadow-2xl uppercase tracking-wider text-sm">
                            View Our Menu
                        </a>
                        <a href="https://lh.shift4.com/sign-in" target="_blank" class="border-2 border-white hover:bg-white hover:text-elegant-charcoal font-semibold py-4 px-8 transition-all duration-500 uppercase tracking-wider text-sm">
                            ORDER NOW
                        </a>
                    </div>
                </div>
            </div>
        </section>
    `,

    menu: `
        <!-- Hero Section -->
        <section class="luxury-bg text-white section-padding">
            <div class="container-custom text-center">
                <h1 class="hero-text mb-6 animate-slide-up">Our Menu</h1>
                <div class="divider-elegant mb-8"></div>
                <p class="subtitle text-elegant-pearl max-w-3xl mx-auto animate-fade-in">
                    Freshly baked pastries and specialty coffee in the heart of Berkeley Heights. Experience artisan quality with every bite and sip.
                </p>

                <!-- Print & Export Options -->
                <div class="flex flex-col sm:flex-row gap-4 justify-center mt-8 no-print">
                    <button onclick="printMenu()" class="bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:border-white/50 px-6 py-3 transition-all duration-300 font-medium">
                        <svg class="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"/>
                        </svg>
                        Print Menu
                    </button>
                    <button onclick="exportToText()" class="bg-white/20 hover:bg-white/30 text-white border border-white/30 hover:border-white/50 px-6 py-3 transition-all duration-300 font-medium">
                        <svg class="w-5 h-5 inline mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
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
                            <p class="text-elegant-stone font-elegant text-lg">8:00 AM – 11:00 AM</p>
                        </div>
                    </div>

                    <!-- Pastries -->
                    <div class="mb-12">
                        <h3 class="text-2xl font-display font-semibold text-elegant-charcoal mb-6 text-center">Assorted Pastries</h3>
                        <p class="text-center text-elegant-stone mb-8 font-elegant">
                            From Balthazar Bakery – Prices based on current Balthazar Fall 2024 pricing
                        </p>

                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div class="menu-item border-b border-elegant-stone/10 pb-4">
                                <div class="flex justify-between items-start">
                                    <div>
                                        <h4 class="font-display font-semibold text-lg text-elegant-charcoal">Croissant</h4>
                                        <p class="text-elegant-stone text-sm mt-1">Buttery, flaky, traditional French pastry</p>
                                    </div>
                                    <span class="price">$6</span>
                                </div>
                            </div>

                            <div class="menu-item border-b border-elegant-stone/10 pb-4">
                                <div class="flex justify-between items-start">
                                    <div>
                                        <h4 class="font-display font-semibold text-lg text-elegant-charcoal">Pain au Chocolat</h4>
                                        <p class="text-elegant-stone text-sm mt-1">Dark chocolate filled pastry</p>
                                    </div>
                                    <span class="price">$8</span>
                                </div>
                            </div>

                            <div class="menu-item border-b border-elegant-stone/10 pb-4">
                                <div class="flex justify-between items-start">
                                    <div>
                                        <h4 class="font-display font-semibold text-lg text-elegant-charcoal">Pure Butter Scone</h4>
                                        <p class="text-elegant-stone text-sm mt-1">Classic English-style scone</p>
                                    </div>
                                    <span class="price">$5</span>
                                </div>
                            </div>

                            <div class="menu-item border-b border-elegant-stone/10 pb-4">
                                <div class="flex justify-between items-start">
                                    <div>
                                        <h4 class="font-display font-semibold text-lg text-elegant-charcoal">Oat Currant Scone</h4>
                                        <p class="text-elegant-stone text-sm mt-1">Hearty oats with sweet currants</p>
                                    </div>
                                    <span class="price">$5</span>
                                </div>
                            </div>

                            <div class="menu-item border-b border-elegant-stone/10 pb-4">
                                <div class="flex justify-between items-start">
                                    <div>
                                        <h4 class="font-display font-semibold text-lg text-elegant-charcoal">Kouign Amann</h4>
                                        <p class="text-elegant-stone text-sm mt-1">Caramelized Breton pastry</p>
                                    </div>
                                    <span class="price">$9</span>
                                </div>
                            </div>

                            <div class="menu-item border-b border-elegant-stone/10 pb-4">
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
                            <div class="menu-item border-b border-elegant-stone/10 pb-4">
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

                            <div class="menu-item border-b border-elegant-stone/10 pb-4">
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
                            <div class="menu-item border-b border-elegant-stone/10 pb-4">
                                <div class="flex justify-between items-start">
                                    <div>
                                        <h4 class="font-display font-semibold text-lg text-elegant-charcoal">Caesar Salad</h4>
                                        <p class="text-elegant-stone text-sm mt-1">Little gem, parmesan, garlic crouton, classic vinaigrette</p>
                                    </div>
                                    <span class="price">$15</span>
                                </div>
                            </div>

                            <div class="menu-item border-b border-elegant-stone/10 pb-4">
                                <div class="flex justify-between items-start">
                                    <div>
                                        <h4 class="font-display font-semibold text-lg text-elegant-charcoal">Spinach Salad</h4>
                                        <p class="text-elegant-stone text-sm mt-1">Baby spinach, hard boiled egg, pickled onion, avocado vinaigrette</p>
                                    </div>
                                    <span class="price">$16</span>
                                </div>
                            </div>

                            <div class="menu-item border-b border-elegant-stone/10 pb-4">
                                <div class="flex justify-between items-start">
                                    <div>
                                        <h4 class="font-display font-semibold text-lg text-elegant-charcoal">Grain Salad</h4>
                                        <p class="text-elegant-stone text-sm mt-1">Farro, quinoa, shredded carrot, corn, feta, cherry tomato, baby arugula, dijon vinaigrette</p>
                                    </div>
                                    <span class="price">$16</span>
                                </div>
                            </div>

                            <div class="menu-item border-b border-elegant-stone/10 pb-4">
                                <div class="flex justify-between items-start">
                                    <div>
                                        <h4 class="font-display font-semibold text-lg text-elegant-charcoal">Mixed Green Salad</h4>
                                        <p class="text-elegant-stone text-sm mt-1">Baby greens, shaved carrots, balsamic vinaigrette</p>
                                    </div>
                                    <span class="price">$11</span>
                                </div>
                            </div>

                            <div class="menu-item border-b border-elegant-stone/10 pb-4">
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
                            <div class="menu-item border-b border-elegant-stone/10 pb-4">
                                <div class="flex justify-between items-start">
                                    <div>
                                        <h4 class="font-display font-semibold text-lg text-elegant-charcoal">Parisian Ham & Brie Sandwich</h4>
                                        <p class="text-elegant-stone text-sm mt-1">French ham, triple cream brie, arugula, pickled onion, fig jam, demi baguette</p>
                                    </div>
                                    <span class="price">$18</span>
                                </div>
                            </div>

                            <div class="menu-item border-b border-elegant-stone/10 pb-4">
                                <div class="flex justify-between items-start">
                                    <div>
                                        <h4 class="font-display font-semibold text-lg text-elegant-charcoal">Eggplant & Sesame Sandwich</h4>
                                        <p class="text-elegant-stone text-sm mt-1">Marinated Japanese eggplant, tahini vinaigrette, sumac spiced carrots, baby spinach, sesame roll</p>
                                    </div>
                                    <span class="price">$17</span>
                                </div>
                            </div>

                            <div class="menu-item border-b border-elegant-stone/10 pb-4">
                                <div class="flex justify-between items-start">
                                    <div>
                                        <h4 class="font-display font-semibold text-lg text-elegant-charcoal">Chicken Salad Sandwich</h4>
                                        <p class="text-elegant-stone text-sm mt-1">Shredded chicken breast, grapes, apple, herb mayo, cranberry pecan bread</p>
                                    </div>
                                    <span class="price">$17</span>
                                </div>
                            </div>

                            <div class="menu-item border-b border-elegant-stone/10 pb-4">
                                <div class="flex justify-between items-start">
                                    <div>
                                        <h4 class="font-display font-semibold text-lg text-elegant-charcoal">Crispy Shrimp Po' Boy</h4>
                                        <p class="text-elegant-stone text-sm mt-1">Breaded flash fried shrimp, shredded lettuce, tomato, mayo, Leidenheimer roll</p>
                                    </div>
                                    <span class="price">$21</span>
                                </div>
                            </div>

                            <div class="menu-item border-b border-elegant-stone/10 pb-4">
                                <div class="flex justify-between items-start">
                                    <div>
                                        <h4 class="font-display font-semibold text-lg text-elegant-charcoal">Roast Beef & Manchego Sandwich</h4>
                                        <p class="text-elegant-stone text-sm mt-1">Porcini rubbed Angus beef, horseradish mayo, cheddar, pickled cauliflower relish, sesame roll</p>
                                    </div>
                                    <span class="price">$19</span>
                                </div>
                            </div>

                            <div class="menu-item border-b border-elegant-stone/10 pb-4">
                                <div class="flex justify-between items-start">
                                    <div>
                                        <h4 class="font-display font-semibold text-lg text-elegant-charcoal">Mediterranean Sandwich</h4>
                                        <p class="text-elegant-stone text-sm mt-1">Pita, marinated eggplant, feta, pickled vegetables, lettuce, cucumber, tzatziki</p>
                                    </div>
                                    <span class="price">$13</span>
                                </div>
                            </div>

                            <div class="menu-item border-b border-elegant-stone/10 pb-4">
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
                            <div class="menu-item border-b border-elegant-stone/10 pb-4">
                                <div class="flex justify-between items-start">
                                    <div>
                                        <h4 class="font-display font-semibold text-lg text-elegant-charcoal">Avocado Toast</h4>
                                        <p class="text-elegant-stone text-sm mt-1">Toasted sourdough, lemon avocado mash, everything spice</p>
                                    </div>
                                    <span class="price">$12</span>
                                </div>
                            </div>

                            <div class="menu-item border-b border-elegant-stone/10 pb-4">
                                <div class="flex justify-between items-start">
                                    <div>
                                        <h4 class="font-display font-semibold text-lg text-elegant-charcoal">Yogurt Parfait</h4>
                                        <p class="text-elegant-stone text-sm mt-1">Greek yogurt, granola, mixed berries, local honey</p>
                                    </div>
                                    <span class="price">$9</span>
                                </div>
                            </div>

                            <div class="menu-item border-b border-elegant-stone/10 pb-4">
                                <div class="flex justify-between items-start">
                                    <div>
                                        <h4 class="font-display font-semibold text-lg text-elegant-charcoal">Frittata</h4>
                                        <p class="text-elegant-stone text-sm mt-1">Mixed seasonal vegetables, cheddar cheese</p>
                                    </div>
                                    <span class="price">$9 <span class="text-xs text-elegant-stone">per slice</span></span>
                                </div>
                            </div>

                            <div class="menu-item border-b border-elegant-stone/10 pb-4">
                                <div class="flex justify-between items-start">
                                    <div>
                                        <h4 class="font-display font-semibold text-lg text-elegant-charcoal">Crispy French Toast Sticks</h4>
                                        <p class="text-elegant-stone text-sm mt-1">Brioche, cinnamon, maple honey butter</p>
                                    </div>
                                    <span class="price">$9</span>
                                </div>
                            </div>

                            <div class="menu-item border-b border-elegant-stone/10 pb-4">
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
                        <a href="https://maps.google.com/?q=512+Springfield+Ave,+Berkeley+Heights,+NJ" target="_blank" class="btn-secondary">
                            <svg class="w-5 h-5 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                            </svg>
                            Get Directions
                        </a>
                    </div>
                </div>
            </div>
        </section>
    `,
    
    catering: `
        <!-- Hero Section -->
        <section class="luxury-bg text-white section-padding">
            <div class="container-custom text-center">
                <h1 class="hero-text mb-6 animate-slide-up">Catering Excellence</h1>
                <div class="divider-elegant mb-8"></div>
                <p class="subtitle text-elegant-pearl max-w-3xl mx-auto animate-fade-in">
                    Elevate your special occasions with Bread N' Brew's artisan catering. From intimate gatherings to corporate events, we deliver the same exceptional quality that defines our bakery.
                </p>
            </div>
        </section>

        <!-- Services Overview -->
        <section class="section-padding gradient-bg">
            <div class="container-custom">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
                    <div class="card-luxury p-8 text-center animate-slide-up">
                        <div class="w-16 h-16 bg-gradient-to-br from-brand-gold to-brand-bronze mx-auto mb-6 flex items-center justify-center">
                            <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                        </div>
                        <h3 class="font-display font-bold text-xl text-elegant-charcoal mb-4">Corporate Events</h3>
                        <p class="text-elegant-stone font-elegant">
                            Professional breakfast and lunch catering for meetings, conferences, and office celebrations with elegant presentation.
                        </p>
                    </div>

                    <div class="card-luxury p-8 text-center animate-slide-up">
                        <div class="w-16 h-16 bg-gradient-to-br from-brand-gold to-brand-bronze mx-auto mb-6 flex items-center justify-center">
                            <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"/>
                            </svg>
                        </div>
                        <h3 class="font-display font-bold text-xl text-elegant-charcoal mb-4">Special Occasions</h3>
                        <p class="text-elegant-stone font-elegant">
                            Weddings, anniversaries, and celebrations made memorable with our artisan pastries and custom dessert displays.
                        </p>
                    </div>

                    <div class="card-luxury p-8 text-center animate-slide-up">
                        <div class="w-16 h-16 bg-gradient-to-br from-brand-gold to-brand-bronze mx-auto mb-6 flex items-center justify-center">
                            <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                            </svg>
                        </div>
                        <h3 class="font-display font-bold text-xl text-elegant-charcoal mb-4">Private Parties</h3>
                        <p class="text-elegant-stone font-elegant">
                            Intimate gatherings and social events enhanced with fresh-baked selections and personalized service.
                        </p>
                    </div>
                </div>

                <!-- Call to Action -->
                <div class="text-center animate-fade-in">
                    <h3 class="text-3xl font-display font-bold text-elegant-charcoal mb-6">Plan Your Event</h3>
                    <p class="subtitle mb-8 max-w-2xl mx-auto">
                        Contact us to discuss your catering needs and let us create an unforgettable experience for your guests.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="tel:908-933-0123" class="btn-primary">
                            <svg class="w-5 h-5 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                            </svg>
                            Call for Catering
                        </a>
                        <a href="#" onclick="navigateTo('contact')" class="btn-secondary">
                            <svg class="w-5 h-5 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                            </svg>
                            Send Message
                        </a>
                    </div>
                </div>
            </div>
        </section>
    `,
    
    contact: `
        <!-- Hero Section -->
        <section class="luxury-bg text-white section-padding">
            <div class="container-custom text-center">
                <h1 class="hero-text mb-6 animate-slide-up">Contact Us</h1>
                <div class="divider-elegant mb-8"></div>
                <p class="subtitle text-elegant-pearl max-w-3xl mx-auto animate-fade-in">
                    We'd love to hear from you! Whether you have questions about our menu, need catering services, or just want to say hello, we're here to help.
                </p>
            </div>
        </section>

        <!-- Contact Information -->
        <section class="section-padding gradient-bg">
            <div class="container-custom">
                <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <!-- Contact Details -->
                    <div class="animate-slide-up">
                        <h2 class="section-title text-elegant-charcoal mb-12">Get in Touch</h2>
                        
                        <div class="space-y-8">
                            <div class="flex items-start space-x-6">
                                <div class="w-14 h-14 bg-gradient-to-br from-brand-gold to-brand-bronze flex items-center justify-center flex-shrink-0">
                                    <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="font-display font-bold text-xl text-elegant-charcoal mb-2">Address</h3>
                                    <a href="https://maps.google.com/?q=512+Springfield+Ave,+Berkeley+Heights,+NJ" target="_blank" class="text-elegant-stone hover:text-brand-gold transition-colors duration-300 font-elegant text-lg leading-relaxed">
                                        512 Springfield Avenue<br/>
                                        Berkeley Heights, New Jersey 07922
                                    </a>
                                </div>
                            </div>

                            <div class="flex items-start space-x-6">
                                <div class="w-14 h-14 bg-gradient-to-br from-brand-gold to-brand-bronze flex items-center justify-center flex-shrink-0">
                                    <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="font-display font-bold text-xl text-elegant-charcoal mb-2">Phone</h3>
                                    <a href="tel:908-933-0123" class="text-elegant-stone hover:text-brand-gold transition-colors duration-300 font-elegant text-lg">
                                        (908) 933-0123
                                    </a>
                                    <p class="text-elegant-stone/70 text-sm mt-1">Call for orders, catering, or questions</p>
                                </div>
                            </div>

                            <div class="flex items-start space-x-6">
                                <div class="w-14 h-14 bg-gradient-to-br from-brand-gold to-brand-bronze flex items-center justify-center flex-shrink-0">
                                    <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="font-display font-bold text-xl text-elegant-charcoal mb-2">Email</h3>
                                    <a href="mailto:breadnbrew512@gmail.com" class="text-elegant-stone hover:text-brand-gold transition-colors duration-300 font-elegant text-lg">
                                        breadnbrew512@gmail.com
                                    </a>
                                    <p class="text-elegant-stone/70 text-sm mt-1">For inquiries and catering requests</p>
                                </div>
                            </div>

                            <div class="flex items-start space-x-6">
                                <div class="w-14 h-14 bg-gradient-to-br from-brand-gold to-brand-bronze flex items-center justify-center flex-shrink-0">
                                    <svg class="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="font-display font-bold text-xl text-elegant-charcoal mb-2">Hours</h3>
                                    <div class="text-elegant-stone font-elegant text-lg">
                                        <div>Daily: 7:00 AM – 6:00 PM</div>
                                        <div class="text-sm text-elegant-stone/70 mt-1">Fresh baking begins at 5:00 AM</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Map -->
                    <div class="animate-fade-in">
                        <div class="card-luxury p-8">
                            <div class="aspect-video overflow-hidden">
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

                <!-- Call to Action -->
                <div class="text-center mt-20 animate-fade-in">
                    <h3 class="text-3xl font-display font-bold text-elegant-charcoal mb-6">Visit Us Today</h3>
                    <p class="subtitle mb-8 max-w-2xl mx-auto">
                        Stop by our Berkeley Heights location to experience the warmth of our community and the excellence of our artisan creations.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="#" onclick="navigateTo('menu')" class="btn-primary">
                            View Our Menu
                        </a>
                        <a href="https://maps.google.com/?q=512+Springfield+Ave,+Berkeley+Heights,+NJ" target="_blank" class="btn-secondary">
                            Get Directions
                        </a>
                    </div>
                </div>
            </div>
        </section>
    `
};

// Navigation component
const navigation = `
    <div class="container-custom">
        <div class="flex justify-between items-center py-6">
            <!-- Logo -->
            <div class="flex items-center">
                <a href="#" onclick="navigateTo('home')" class="flex items-center space-x-4">
                    <div class="flex flex-col">
                        <div class="flex items-center space-x-1">
                            <span class="text-3xl font-display font-bold text-pink-500">Bread N' Br</span>
                            <span class="text-2xl text-pink-500">☕︎</span>
                            <span class="text-3xl font-display font-bold text-pink-500">w</span>
                        </div>
                        <p class="text-xs text-elegant-stone uppercase tracking-widest font-medium -mt-1 ml-1">
                            Artisan Breads, Perfect Brews, & Fine Patisseries
                        </p>
                    </div>
                </a>
            </div>

            <!-- Desktop Menu -->
            <div class="hidden md:flex items-center space-x-8">
                <a href="#" onclick="navigateTo('home')" class="nav-link" data-page="home">Home</a>
                <a href="#" onclick="navigateTo('menu')" class="nav-link" data-page="menu">Menu</a>
                <a href="#" onclick="navigateTo('about')" class="nav-link" data-page="about">About</a>
                <a href="#" onclick="navigateTo('catering')" class="nav-link" data-page="catering">Catering</a>
                <a href="#" onclick="navigateTo('contact')" class="nav-link" data-page="contact">Contact</a>
                <a href="https://lh.shift4.com/sign-in" target="_blank" class="btn-primary ml-6">
                    <svg class="w-4 h-4 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                    ORDER NOW
                </a>
            </div>

            <!-- Mobile Menu Button -->
            <div class="md:hidden">
                <button onclick="toggleMobileMenu()" class="text-elegant-charcoal hover:text-brand-gold focus:outline-none transition-colors duration-300 p-2">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" stroke-width="1.5" id="mobile-menu-icon">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                    </svg>
                </button>
            </div>
        </div>

        <!-- Mobile Menu -->
        <div id="mobile-menu" class="md:hidden border-t border-elegant-stone/20 py-8 animate-fade-in backdrop-luxury hidden">
            <div class="flex flex-col space-y-6">
                <a href="#" onclick="navigateTo('home'); closeMobileMenu();" class="nav-link py-3 border-b border-elegant-stone/10 text-center" data-page="home">Home</a>
                <a href="#" onclick="navigateTo('menu'); closeMobileMenu();" class="nav-link py-3 border-b border-elegant-stone/10 text-center" data-page="menu">Menu</a>
                <a href="#" onclick="navigateTo('about'); closeMobileMenu();" class="nav-link py-3 border-b border-elegant-stone/10 text-center" data-page="about">About</a>
                <a href="#" onclick="navigateTo('catering'); closeMobileMenu();" class="nav-link py-3 border-b border-elegant-stone/10 text-center" data-page="catering">Catering</a>
                <a href="#" onclick="navigateTo('contact'); closeMobileMenu();" class="nav-link py-3 border-b border-elegant-stone/10 text-center" data-page="contact">Contact</a>
                <a href="https://lh.shift4.com/sign-in" target="_blank" class="btn-primary text-center mt-6 mx-4">
                    <svg class="w-4 h-4 inline mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                    ORDER NOW
                </a>
            </div>
        </div>
    </div>
`;

// Footer component
const footer = `
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
                    Berkeley Heights' premier destination for artisanal excellence. Where European tradition meets American innovation in every creation.
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
                    <li><a href="#" onclick="navigateTo('home')" class="text-elegant-pearl hover:text-brand-gold transition-colors duration-300 font-medium uppercase tracking-wide text-sm">Home</a></li>
                    <li><a href="#" onclick="navigateTo('menu')" class="text-elegant-pearl hover:text-brand-gold transition-colors duration-300 font-medium uppercase tracking-wide text-sm">Menu</a></li>
                    <li><a href="#" onclick="navigateTo('about')" class="text-elegant-pearl hover:text-brand-gold transition-colors duration-300 font-medium uppercase tracking-wide text-sm">About Us</a></li>
                    <li><a href="#" onclick="navigateTo('catering')" class="text-elegant-pearl hover:text-brand-gold transition-colors duration-300 font-medium uppercase tracking-wide text-sm">Catering</a></li>
                    <li><a href="#" onclick="navigateTo('contact')" class="text-elegant-pearl hover:text-brand-gold transition-colors duration-300 font-medium uppercase tracking-wide text-sm">Contact</a></li>
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
                        <a href="https://maps.google.com/?q=512+Springfield+Ave,+Berkeley+Heights,+NJ" target="_blank" class="hover:text-brand-gold transition-colors duration-300 font-elegant leading-relaxed">
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
                    &copy; ${new Date().getFullYear()} Bread N' Br☕︎w. All rights reserved.
                </p>
                <p class="text-brand-gold font-medium text-sm mt-2 uppercase tracking-widest">
                    Berkeley Heights' Premier Artisan Bakery & Coffee House
                </p>
            </div>
        </div>
    </div>
`;

// Utility functions
function navigateTo(page) {
    state.currentPage = page;
    renderPage();
    updateNavigation();
    closeMobileMenu();
    
    // Update URL without page refresh
    const url = page === 'home' ? '/' : `/${page}`;
    window.history.pushState({ page }, '', url);
    
    // Scroll to top
    window.scrollTo(0, 0);
}

function toggleMobileMenu() {
    state.mobileMenuOpen = !state.mobileMenuOpen;
    const mobileMenu = document.getElementById('mobile-menu');
    const icon = document.getElementById('mobile-menu-icon');
    
    if (state.mobileMenuOpen) {
        mobileMenu.classList.remove('hidden');
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>';
    } else {
        mobileMenu.classList.add('hidden');
        icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>';
    }
}

function closeMobileMenu() {
    state.mobileMenuOpen = false;
    const mobileMenu = document.getElementById('mobile-menu');
    const icon = document.getElementById('mobile-menu-icon');
    
    mobileMenu.classList.add('hidden');
    icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>';
}

function updateNavigation() {
    // Update active state for navigation links
    const navLinks = document.querySelectorAll('.nav-link[data-page]');
    navLinks.forEach(link => {
        const page = link.getAttribute('data-page');
        if (page === state.currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}

function renderPage() {
    const navigation = document.getElementById('navigation');
    const mainContent = document.getElementById('main-content');
    const footerElement = document.getElementById('footer');
    
    // Update title
    const titles = {
        home: 'Bread N\' Br☕︎w - Artisan Breads, Perfect Brews, & Fine Patisseries',
        about: 'About Us - Bread N\' Br☕︎w',
        menu: 'Our Menu - Bread N\' Br☕︎w',
        catering: 'Catering Excellence - Bread N\' Br☕︎w',
        contact: 'Contact Us - Bread N\' Br☕︎w'
    };
    document.title = titles[state.currentPage] || titles.home;
    
    // Render components
    navigation.innerHTML = window.navigation;
    mainContent.innerHTML = pages[state.currentPage] || pages.home;
    footerElement.innerHTML = footer;
    
    // Update navigation state
    updateNavigation();
}

// Menu functionality
function printMenu() {
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

    const printContent = document.querySelector('.menu-content')?.innerHTML || '';
    const printWindow = window.open('', '_blank');

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

function exportToText() {
    const menuText = generateMenuText();
    const blob = new Blob([menuText], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'bread-n-brew-menu.txt';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}

function generateMenuText() {
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

• Egg Sandwich (On Balthazar brioche)                        $8
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

// Router functionality
function initRouter() {
    // Handle back/forward buttons
    window.addEventListener('popstate', (event) => {
        const page = event.state?.page || getPageFromURL();
        state.currentPage = page;
        renderPage();
    });
    
    // Set initial page based on URL
    const initialPage = getPageFromURL();
    state.currentPage = initialPage;
    
    // Push initial state
    window.history.replaceState({ page: initialPage }, '', window.location.pathname);
}

function getPageFromURL() {
    const path = window.location.pathname;
    if (path === '/' || path === '') return 'home';
    if (path.startsWith('/')) return path.slice(1);
    return 'home';
}

// Initialize app
function init() {
    // Store navigation template globally
    window.navigation = navigation;
    
    // Initialize router
    initRouter();
    
    // Render initial page
    renderPage();
}

// Start the app when DOM is loaded
document.addEventListener('DOMContentLoaded', init);
