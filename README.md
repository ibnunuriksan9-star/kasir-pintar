<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Struktur Organisasi - Kasir Pintar</title>
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <!-- FontAwesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Poppins', 'sans-serif'],
                    },
                    colors: {
                        brand: {
                            light: '#4fd1c5',
                            DEFAULT: '#00a0b0',
                            dark: '#007b87',
                        }
                    }
                }
            }
        }
    </script>
    <style>
        /* Custom Smooth Scrolling */
        html {
            scroll-behavior: smooth;
        }
        
        /* Glassmorphism utilities */
        .glass {
            background: rgba(255, 255, 255, 0.95);
            backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }

        .section-padding {
            padding-top: 5rem;
            padding-bottom: 5rem;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        /* Hero Image Overlay */
        .hero-overlay {
            background: linear-gradient(135deg, rgba(0, 160, 176, 0.9) 0%, rgba(32, 62, 74, 0.9) 100%);
        }

        /* Timeline styles */
        .timeline-container::before {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            left: 50%;
            width: 2px;
            background-color: #e5e7eb;
            transform: translateX(-50%);
        }
        
        @media (max-width: 768px) {
            .timeline-container::before {
                left: 1rem;
            }
        }
    </style>
</head>
<body class="bg-gray-50 text-gray-800 antialiased font-sans">

    <!-- Navigation Bar -->
    <nav class="fixed w-full z-50 transition-all duration-300 glass" id="navbar">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-20">
                <div class="flex-shrink-0 flex items-center gap-2 cursor-pointer" onclick="scrollToSection('hero')">
                    <i class="fas fa-store text-brand text-2xl"></i>
                    <span class="font-bold text-xl text-gray-900 tracking-tight">Kasir<span class="text-brand">Pintar</span></span>
                </div>
                <!-- Desktop Menu -->
                <div class="hidden md:flex space-x-6 items-center">
                    <button onclick="scrollToSection('about')" class="text-gray-600 hover:text-brand font-medium transition-colors">Profil</button>
                    <button onclick="scrollToSection('vision')" class="text-gray-600 hover:text-brand font-medium transition-colors">Visi & Misi</button>
                    <button onclick="scrollToSection('structure')" class="text-gray-600 hover:text-brand font-medium transition-colors">Struktur</button>
                    <button onclick="scrollToSection('culture')" class="text-gray-600 hover:text-brand font-medium transition-colors">Budaya</button>
                    <button onclick="scrollToSection('products')" class="text-gray-600 hover:text-brand font-medium transition-colors">Produk</button>
                    <button onclick="scrollToSection('swot')" class="text-gray-600 hover:text-brand font-medium transition-colors">SWOT</button>
                    <button onclick="scrollToSection('team')" class="bg-brand hover:bg-brand-dark text-white px-5 py-2 rounded-full font-medium transition-colors shadow-md">Tim Kami</button>
                </div>
                <!-- Mobile menu button -->
                <div class="md:hidden flex items-center">
                    <button id="mobile-menu-button" class="text-gray-600 hover:text-brand focus:outline-none p-2">
                        <i class="fas fa-bars text-2xl"></i>
                    </button>
                </div>
            </div>
        </div>
        <!-- Mobile Menu -->
        <div id="mobile-menu" class="hidden md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full">
            <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col">
                <button onclick="scrollToSection('about'); toggleMobileMenu()" class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-brand hover:bg-gray-50 text-left rounded-md">Profil</button>
                <button onclick="scrollToSection('structure'); toggleMobileMenu()" class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-brand hover:bg-gray-50 text-left rounded-md">Struktur</button>
                <button onclick="scrollToSection('products'); toggleMobileMenu()" class="block px-3 py-2 text-base font-medium text-gray-700 hover:text-brand hover:bg-gray-50 text-left rounded-md">Produk</button>
                <button onclick="scrollToSection('team'); toggleMobileMenu()" class="block px-3 py-2 text-base font-medium text-brand font-bold hover:bg-gray-50 text-left rounded-md">Tim Kami</button>
            </div>
        </div>
    </nav>

    <!-- Slide 1: Hero Section -->
    <section id="hero" class="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <!-- Background Image -->
        <div class="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Retail Business" class="w-full h-full object-cover object-center" />
            <div class="absolute inset-0 hero-overlay"></div>
        </div>
        
        <div class="relative z-10 text-center px-4 max-w-4xl mx-auto">
            <span class="inline-block py-1 px-3 rounded-full bg-white/20 text-white text-sm font-semibold tracking-wider mb-6 backdrop-blur-sm border border-white/30">
                STARTUP SUKSES JAWA TIMUR
            </span>
            <h1 class="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                Mengelola Inovasi Digital dari <span class="text-brand-light">Jantung Jawa Timur</span>
            </h1>
            <p class="text-xl md:text-2xl text-gray-100 mb-10 font-light drop-shadow-md">
                Studi Kasus Pengelolaan Organisasi pada <br class="hidden md:block"/>
                <strong class="font-semibold text-white">PT Kasir Pintar Internasional</strong>
            </p>
            <button onclick="scrollToSection('about')" class="group bg-white text-brand font-bold px-8 py-4 rounded-full text-lg shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transform hover:-translate-y-1 transition-all duration-300">
                Pelajari Struktur Organisasi
                <i class="fas fa-arrow-down ml-2 group-hover:translate-y-1 transition-transform duration-300"></i>
            </button>
        </div>
        
        <!-- Scroll indicator -->
        <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce flex flex-col items-center">
            <span class="text-white/70 text-sm mb-2 font-medium tracking-widest">SCROLL</span>
            <i class="fas fa-chevron-down text-white/70"></i>
        </div>
    </section>

    <!-- Slide 2: Profil Organisasi (About Us) -->
    <section id="about" class="section-padding bg-white relative">
        <!-- Decorative blob -->
        <div class="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-brand-light opacity-10 blur-3xl"></div>
        
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div class="text-center mb-16">
                <h2 class="text-sm font-bold text-brand uppercase tracking-widest mb-2">Profil Organisasi</h2>
                <h3 class="text-3xl md:text-4xl font-bold text-gray-900">Mengenal Kasir Pintar</h3>
                <div class="w-20 h-1 bg-brand mx-auto mt-4 rounded-full"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div class="order-2 md:order-1 relative rounded-2xl overflow-hidden shadow-2xl group">
                    <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Kantor Kasir Pintar" class="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105">
                    <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div class="absolute bottom-6 left-6 flex items-center gap-4">
                        <div class="bg-white p-3 rounded-xl shadow-lg">
                            <i class="fas fa-store text-brand text-3xl"></i>
                        </div>
                        <h4 class="text-2xl font-bold text-white drop-shadow-md">Kasir Pintar</h4>
                    </div>
                </div>
                
                <div class="order-1 md:order-2 space-y-6">
                    <p class="text-lg text-gray-600 leading-relaxed border-l-4 border-brand pl-4 italic">
                        "Memberdayakan UMKM Indonesia melalui teknologi yang mudah diakses dan terjangkau."
                    </p>
                    
                    <ul class="space-y-5 mt-8">
                        <li class="flex items-start">
                            <div class="flex-shrink-0 w-12 h-12 bg-brand/10 rounded-full flex items-center justify-center text-brand mt-1">
                                <i class="fas fa-calendar-alt text-xl"></i>
                            </div>
                            <div class="ml-4">
                                <h4 class="text-xl font-semibold text-gray-900">Tahun Pendirian</h4>
                                <p class="text-gray-600 mt-1">Didirikan pada tahun <strong class="text-brand">2016</strong>.</p>
                            </div>
                        </li>
                        <li class="flex items-start">
                            <div class="flex-shrink-0 w-12 h-12 bg-brand/10 rounded-full flex items-center justify-center text-brand mt-1">
                                <i class="fas fa-map-marker-alt text-xl"></i>
                            </div>
                            <div class="ml-4">
                                <h4 class="text-xl font-semibold text-gray-900">Basis Operasi</h4>
                                <p class="text-gray-600 mt-1">Berpusat di <strong class="text-gray-800">Surabaya</strong> dan memiliki cabang di <strong class="text-gray-800">Malang</strong>, Jawa Timur.</p>
                            </div>
                        </li>
                        <li class="flex items-start">
                            <div class="flex-shrink-0 w-12 h-12 bg-brand/10 rounded-full flex items-center justify-center text-brand mt-1">
                                <i class="fas fa-mobile-alt text-xl"></i>
                            </div>
                            <div class="ml-4">
                                <h4 class="text-xl font-semibold text-gray-900">Platform Utama</h4>
                                <p class="text-gray-600 mt-1">Merupakan platform <strong class="text-brand">Point of Sales (POS)</strong> berbasis Android dan iOS.</p>
                            </div>
                        </li>
                        <li class="flex items-start">
                            <div class="flex-shrink-0 w-12 h-12 bg-brand/10 rounded-full flex items-center justify-center text-brand mt-1">
                                <i class="fas fa-bullseye text-xl"></i>
                            </div>
                            <div class="ml-4">
                                <h4 class="text-xl font-semibold text-gray-900">Fokus Bisnis</h4>
                                <p class="text-gray-600 mt-1">Fokus membantu digitalisasi sistem kasir dan manajemen keuangan <strong>UMKM</strong> di Indonesia.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Slide 3: Visi & Misi -->
    <section id="vision" class="section-padding bg-gray-50 relative overflow-hidden">
        <div class="absolute inset-0 z-0">
             <div class="absolute top-1/2 left-0 transform -translate-y-1/2 w-full h-[500px] bg-brand/5 skew-y-3"></div>
        </div>

        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div class="text-center mb-16">
                <h2 class="text-sm font-bold text-brand uppercase tracking-widest mb-2">Arah Strategis Organisasi</h2>
                <h3 class="text-3xl md:text-4xl font-bold text-gray-900">Visi & Misi</h3>
                <div class="w-20 h-1 bg-brand mx-auto mt-4 rounded-full"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <!-- Visi -->
                <div class="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 transform transition-all hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden group">
                    <div class="absolute -right-10 -top-10 w-32 h-32 bg-brand/10 rounded-full group-hover:bg-brand/20 transition-colors"></div>
                    <div class="w-16 h-16 bg-gradient-to-br from-brand-light to-brand rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg">
                        <i class="fas fa-eye text-2xl"></i>
                    </div>
                    <h4 class="text-2xl font-bold text-gray-900 mb-4">Visi</h4>
                    <p class="text-gray-600 text-lg leading-relaxed">
                        Menjadi perusahaan penyedia solusi teknologi finansial terdepan yang paling diandalkan oleh para pelaku UMKM untuk mengembangkan bisnis mereka secara digital di seluruh Indonesia.
                    </p>
                </div>

                <!-- Misi -->
                <div class="bg-white p-10 rounded-3xl shadow-xl border border-gray-100 transform transition-all hover:-translate-y-2 hover:shadow-2xl relative overflow-hidden group">
                    <div class="absolute -right-10 -top-10 w-32 h-32 bg-brand/10 rounded-full group-hover:bg-brand/20 transition-colors"></div>
                    <div class="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg">
                        <i class="fas fa-rocket text-2xl"></i>
                    </div>
                    <h4 class="text-2xl font-bold text-gray-900 mb-4">Misi</h4>
                    <ul class="text-gray-600 text-lg leading-relaxed space-y-3 list-none">
                        <li class="flex items-start">
                            <i class="fas fa-check text-brand mt-1.5 mr-3"></i>
                            Menyediakan aplikasi kasir pintar yang mudah digunakan (user-friendly).
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-check text-brand mt-1.5 mr-3"></i>
                            Memberikan fitur manajemen bisnis yang lengkap dengan harga terjangkau.
                        </li>
                        <li class="flex items-start">
                            <i class="fas fa-check text-brand mt-1.5 mr-3"></i>
                            Meningkatkan literasi keuangan dan manajerial pemilik UMKM.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Slide 4: Struktur Organisasi -->
    <section id="structure" class="section-padding bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div class="text-center mb-16">
                <h2 class="text-sm font-bold text-brand uppercase tracking-widest mb-2">Hierarki & Pembagian Kerja</h2>
                <h3 class="text-3xl md:text-4xl font-bold text-gray-900">Struktur Organisasi</h3>
                <div class="w-20 h-1 bg-brand mx-auto mt-4 rounded-full"></div>
                <p class="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
                    Menggunakan struktur <span class="font-semibold text-brand">Flat Hierarchy</span> yang umum pada startup untuk mempercepat komunikasi dan pengambilan keputusan yang lincah di era digital.
                </p>
            </div>

            <!-- Organization Chart Visual -->
            <div class="py-10">
                <!-- Top Level -->
                <div class="flex justify-center mb-8">
                    <div class="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-6 rounded-2xl shadow-xl text-center w-64 transform transition hover:scale-105 border-b-4 border-brand">
                        <div class="w-16 h-16 bg-white/20 rounded-full mx-auto mb-3 flex items-center justify-center">
                            <i class="fas fa-crown text-2xl text-yellow-400"></i>
                        </div>
                        <h4 class="font-bold text-xl">Siti Mahdaria</h4>
                        <p class="text-brand-light text-sm font-medium">CEO & Founder</p>
                    </div>
                </div>
                
                <!-- Connector Line Vertical -->
                <div class="flex justify-center -my-8 z-0 relative">
                    <div class="w-1 h-16 bg-gray-300"></div>
                </div>
                
                <!-- Connector Line Horizontal -->
                <div class="flex justify-center z-0 relative">
                    <div class="w-3/4 h-1 bg-gray-300 rounded-full hidden md:block"></div>
                </div>

                <!-- Middle Management -->
                <div class="flex flex-col md:flex-row justify-center gap-6 md:gap-8 mt-8 md:-mt-1 px-4 relative z-10">
                    
                    <!-- Line for mobile -->
                    <div class="w-1 h-full bg-gray-300 absolute left-1/2 transform -translate-x-1/2 md:hidden z-0 top-0"></div>

                    <div class="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center w-full md:w-56 transform transition hover:-translate-y-2 hover:shadow-xl relative z-10">
                        <div class="hidden md:block absolute -top-9 left-1/2 w-1 h-8 bg-gray-300 transform -translate-x-1/2"></div>
                        <i class="fas fa-laptop-code text-brand text-3xl mb-3"></i>
                        <h4 class="font-bold text-gray-900">CTO</h4>
                        <p class="text-gray-500 text-sm">Technology & Product</p>
                    </div>
                    
                    <div class="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center w-full md:w-56 transform transition hover:-translate-y-2 hover:shadow-xl relative z-10">
                        <div class="hidden md:block absolute -top-9 left-1/2 w-1 h-8 bg-gray-300 transform -translate-x-1/2"></div>
                        <i class="fas fa-bullhorn text-brand text-3xl mb-3"></i>
                        <h4 class="font-bold text-gray-900">CMO</h4>
                        <p class="text-gray-500 text-sm">Marketing & Sales</p>
                    </div>

                    <div class="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center w-full md:w-56 transform transition hover:-translate-y-2 hover:shadow-xl relative z-10">
                        <div class="hidden md:block absolute -top-9 left-1/2 w-1 h-8 bg-gray-300 transform -translate-x-1/2"></div>
                        <i class="fas fa-chart-line text-brand text-3xl mb-3"></i>
                        <h4 class="font-bold text-gray-900">COO</h4>
                        <p class="text-gray-500 text-sm">Operations & Support</p>
                    </div>
                </div>

                <!-- Operational Level -->
                <div class="mt-16 bg-gray-50 rounded-3xl p-8 border border-gray-200">
                    <h4 class="font-bold text-center text-gray-700 mb-6 uppercase tracking-wider text-sm">Operational Level Teams</h4>
                    <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                        <div class="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition">
                            <span class="block text-brand font-bold mb-1">Tech Team</span>
                            <span class="text-xs text-gray-500">Devs, QA, UI/UX</span>
                        </div>
                        <div class="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition">
                            <span class="block text-brand font-bold mb-1">Growth Team</span>
                            <span class="text-xs text-gray-500">Digital Mkt, SEO</span>
                        </div>
                        <div class="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition">
                            <span class="block text-brand font-bold mb-1">Customer Success</span>
                            <span class="text-xs text-gray-500">Support, CS</span>
                        </div>
                        <div class="p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition">
                            <span class="block text-brand font-bold mb-1">BizDev Team</span>
                            <span class="text-xs text-gray-500">Partnership, Sales</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Slide 5: Budaya Perusahaan -->
    <section id="culture" class="section-padding bg-gray-900 text-white relative overflow-hidden">
        <!-- Background elements -->
        <div class="absolute inset-0 z-0 opacity-20">
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Teamwork" class="w-full h-full object-cover mix-blend-overlay">
        </div>
        
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div class="text-center mb-16">
                <h2 class="text-sm font-bold text-brand-light uppercase tracking-widest mb-2">Corporate Culture</h2>
                <h3 class="text-3xl md:text-4xl font-bold">Budaya Perusahaan</h3>
                <div class="w-20 h-1 bg-brand-light mx-auto mt-4 rounded-full"></div>
                <p class="mt-6 text-gray-300 max-w-2xl mx-auto text-lg">Lingkungan kerja yang dinamis, santai namun tetap produktif khas startup teknologi.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <!-- Culture Card 1 -->
                <div class="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white/20 transition-all duration-300 group">
                    <div class="w-14 h-14 bg-brand-light rounded-full flex items-center justify-center text-gray-900 text-2xl mb-6 group-hover:scale-110 transition-transform">
                        <i class="fas fa-bolt"></i>
                    </div>
                    <h4 class="text-xl font-bold mb-3">Agility</h4>
                    <p class="text-gray-300 text-sm leading-relaxed">
                        Cepat beradaptasi dengan perubahan teknologi dan kebutuhan pasar ritel yang dinamis.
                    </p>
                </div>

                <!-- Culture Card 2 -->
                <div class="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white/20 transition-all duration-300 group">
                    <div class="w-14 h-14 bg-brand-light rounded-full flex items-center justify-center text-gray-900 text-2xl mb-6 group-hover:scale-110 transition-transform">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <h4 class="text-xl font-bold mb-3">Integrity</h4>
                    <p class="text-gray-300 text-sm leading-relaxed">
                        Menjaga kepercayaan pengguna (Trust) dalam mengelola data transaksi keuangan yang sensitif.
                    </p>
                </div>

                <!-- Culture Card 3 -->
                <div class="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white/20 transition-all duration-300 group">
                    <div class="w-14 h-14 bg-brand-light rounded-full flex items-center justify-center text-gray-900 text-2xl mb-6 group-hover:scale-110 transition-transform">
                        <i class="fas fa-users"></i>
                    </div>
                    <h4 class="text-xl font-bold mb-3">Collaboration</h4>
                    <p class="text-gray-300 text-sm leading-relaxed">
                        Kerja sama tim lintas divisi yang kuat antara tim Teknologi dan tim Bisnis/Operasional.
                    </p>
                </div>

                <!-- Culture Card 4 -->
                <div class="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white/20 transition-all duration-300 group">
                    <div class="w-14 h-14 bg-brand-light rounded-full flex items-center justify-center text-gray-900 text-2xl mb-6 group-hover:scale-110 transition-transform">
                        <i class="fas fa-heart"></i>
                    </div>
                    <h4 class="text-xl font-bold mb-3">Customer Obsession</h4>
                    <p class="text-gray-300 text-sm leading-relaxed">
                        Selalu mengutamakan kebutuhan dan kemudahan para pelaku UMKM dalam setiap fitur yang dibuat.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Slide 6: Produk & Layanan -->
    <section id="products" class="section-padding bg-gray-50 relative">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                
                <div class="space-y-8">
                    <div>
                        <h2 class="text-sm font-bold text-brand uppercase tracking-widest mb-2">Business Model</h2>
                        <h3 class="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Ekosistem Digital Kasir Pintar</h3>
                        <div class="w-20 h-1 bg-brand rounded-full"></div>
                    </div>
                    
                    <p class="text-gray-600 text-lg">
                        Kasir Pintar mengembangkan ekosistem produk yang tidak hanya berfokus pada pencatatan, tetapi juga pengembangan bisnis UMKM secara holistik.
                    </p>

                    <div class="space-y-6">
                        <!-- Product Item -->
                        <div class="flex p-5 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div class="flex-shrink-0 mt-1">
                                <div class="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-xl">
                                    <i class="fas fa-calculator"></i>
                                </div>
                            </div>
                            <div class="ml-4">
                                <h4 class="text-xl font-bold text-gray-900">Kasir Pintar Free & Pro</h4>
                                <p class="text-gray-500 mt-1 text-sm">Aplikasi POS utama untuk pencatatan transaksi, manajemen stok, dan laporan keuangan.</p>
                            </div>
                        </div>

                        <!-- Product Item -->
                        <div class="flex p-5 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div class="flex-shrink-0 mt-1">
                                <div class="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center text-xl">
                                    <i class="fas fa-store"></i>
                                </div>
                            </div>
                            <div class="ml-4">
                                <h4 class="text-xl font-bold text-gray-900">Olshop (Toko Online)</h4>
                                <p class="text-gray-500 mt-1 text-sm">Fitur yang memungkinkan UMKM membuat toko online instan yang terintegrasi langsung dengan sistem kasir.</p>
                            </div>
                        </div>

                        <!-- Product Item -->
                        <div class="flex p-5 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                            <div class="flex-shrink-0 mt-1">
                                <div class="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center text-xl">
                                    <i class="fas fa-wallet"></i>
                                </div>
                            </div>
                            <div class="ml-4">
                                <h4 class="text-xl font-bold text-gray-900">Pembayaran Digital Terintegrasi</h4>
                                <p class="text-gray-500 mt-1 text-sm">Menerima pembayaran via QRIS, e-wallet, dan transfer bank langsung di dalam aplikasi.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Visual App Mockup -->
                <div class="relative flex justify-center lg:justify-end">
                    <!-- Decorative background -->
                    <div class="absolute w-80 h-80 bg-brand/20 rounded-full blur-3xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                    
                    <div class="relative w-72 h-[600px] bg-gray-900 rounded-[3rem] p-4 shadow-2xl border-4 border-gray-800 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                        <!-- Phone Notch -->
                        <div class="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-xl z-20"></div>
                        <!-- Screen -->
                        <div class="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
                            <!-- Dashboard Header -->
                            <div class="bg-brand text-white p-6 pt-10 rounded-b-3xl">
                                <p class="text-sm opacity-80">Total Pendapatan Hari Ini</p>
                                <h4 class="text-2xl font-bold mt-1">Rp 2.450.000</h4>
                            </div>
                            <!-- Mock Content -->
                            <div class="p-4 space-y-4">
                                <div class="font-semibold text-gray-700">Menu Utama</div>
                                <div class="grid grid-cols-3 gap-3">
                                    <div class="aspect-square bg-gray-100 rounded-2xl flex flex-col items-center justify-center text-brand">
                                        <i class="fas fa-shopping-cart mb-2 text-xl"></i>
                                        <span class="text-[10px] font-medium text-gray-600">Transaksi</span>
                                    </div>
                                    <div class="aspect-square bg-gray-100 rounded-2xl flex flex-col items-center justify-center text-brand">
                                        <i class="fas fa-box mb-2 text-xl"></i>
                                        <span class="text-[10px] font-medium text-gray-600">Barang</span>
                                    </div>
                                    <div class="aspect-square bg-gray-100 rounded-2xl flex flex-col items-center justify-center text-brand">
                                        <i class="fas fa-chart-pie mb-2 text-xl"></i>
                                        <span class="text-[10px] font-medium text-gray-600">Laporan</span>
                                    </div>
                                </div>
                                <div class="mt-6 bg-blue-50 p-4 rounded-2xl">
                                    <div class="flex justify-between items-center mb-3">
                                        <span class="text-sm font-bold text-gray-700">Transaksi Terakhir</span>
                                        <span class="text-xs text-brand">Lihat Semua</span>
                                    </div>
                                    <div class="space-y-3">
                                        <div class="flex justify-between items-center border-b border-gray-200 pb-2">
                                            <div class="text-xs"><span class="block font-semibold text-gray-800">INV-001</span><span class="text-gray-500">Kopi Susu x2</span></div>
                                            <div class="text-xs font-bold text-green-600">+ Rp 40.000</div>
                                        </div>
                                        <div class="flex justify-between items-center">
                                            <div class="text-xs"><span class="block font-semibold text-gray-800">INV-002</span><span class="text-gray-500">Roti Bakar x1</span></div>
                                            <div class="text-xs font-bold text-green-600">+ Rp 25.000</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- Slide 7: Analisis SWOT -->
    <section id="swot" class="section-padding bg-white relative">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div class="text-center mb-16">
                <h2 class="text-sm font-bold text-brand uppercase tracking-widest mb-2">Strategic Management</h2>
                <h3 class="text-3xl md:text-4xl font-bold text-gray-900">Analisis Lingkungan Organisasi</h3>
                <div class="w-20 h-1 bg-brand mx-auto mt-4 rounded-full"></div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- Strengths -->
                <div class="bg-green-50 p-8 rounded-2xl border border-green-100 hover:shadow-lg transition">
                    <div class="flex items-center mb-6">
                        <div class="w-12 h-12 bg-green-500 text-white rounded-xl flex items-center justify-center text-xl font-bold shadow-md">S</div>
                        <h4 class="text-2xl font-bold text-gray-900 ml-4">Strengths <span class="text-sm font-normal text-gray-500 block">Kekuatan</span></h4>
                    </div>
                    <ul class="space-y-3">
                        <li class="flex items-start text-gray-700"><i class="fas fa-check text-green-500 mt-1 mr-3"></i> Tampilan aplikasi yang sangat mudah digunakan (UI/UX ramah pengguna awam).</li>
                        <li class="flex items-start text-gray-700"><i class="fas fa-check text-green-500 mt-1 mr-3"></i> Harga berlangganan yang terjangkau bagi UMKM kecil.</li>
                        <li class="flex items-start text-gray-700"><i class="fas fa-check text-green-500 mt-1 mr-3"></i> Fitur free-tier yang cukup lengkap untuk menarik pengguna awal.</li>
                    </ul>
                </div>

                <!-- Weaknesses -->
                <div class="bg-red-50 p-8 rounded-2xl border border-red-100 hover:shadow-lg transition">
                    <div class="flex items-center mb-6">
                        <div class="w-12 h-12 bg-red-500 text-white rounded-xl flex items-center justify-center text-xl font-bold shadow-md">W</div>
                        <h4 class="text-2xl font-bold text-gray-900 ml-4">Weaknesses <span class="text-sm font-normal text-gray-500 block">Kelemahan</span></h4>
                    </div>
                    <ul class="space-y-3">
                        <li class="flex items-start text-gray-700"><i class="fas fa-minus text-red-500 mt-1 mr-3"></i> Ketergantungan pada koneksi internet yang stabil untuk sinkronisasi data real-time.</li>
                        <li class="flex items-start text-gray-700"><i class="fas fa-minus text-red-500 mt-1 mr-3"></i> Brand awareness skala nasional masih perlu ditingkatkan dibandingkan kompetitor raksasa.</li>
                    </ul>
                </div>

                <!-- Opportunities -->
                <div class="bg-blue-50 p-8 rounded-2xl border border-blue-100 hover:shadow-lg transition">
                    <div class="flex items-center mb-6">
                        <div class="w-12 h-12 bg-blue-500 text-white rounded-xl flex items-center justify-center text-xl font-bold shadow-md">O</div>
                        <h4 class="text-2xl font-bold text-gray-900 ml-4">Opportunities <span class="text-sm font-normal text-gray-500 block">Peluang</span></h4>
                    </div>
                    <ul class="space-y-3">
                        <li class="flex items-start text-gray-700"><i class="fas fa-arrow-up text-blue-500 mt-1 mr-3"></i> Tingginya tren digitalisasi UMKM pasca pandemi di daerah sekunder (Tier 2 & 3).</li>
                        <li class="flex items-start text-gray-700"><i class="fas fa-arrow-up text-blue-500 mt-1 mr-3"></i> Potensi integrasi lebih lanjut dengan sistem pembayaran digital dan logistik.</li>
                        <li class="flex items-start text-gray-700"><i class="fas fa-arrow-up text-blue-500 mt-1 mr-3"></i> Ekspansi ke layanan finansial (micro-lending) berbasis data transaksi kasir.</li>
                    </ul>
                </div>

                <!-- Threats -->
                <div class="bg-orange-50 p-8 rounded-2xl border border-orange-100 hover:shadow-lg transition">
                    <div class="flex items-center mb-6">
                        <div class="w-12 h-12 bg-orange-500 text-white rounded-xl flex items-center justify-center text-xl font-bold shadow-md">T</div>
                        <h4 class="text-2xl font-bold text-gray-900 ml-4">Threats <span class="text-sm font-normal text-gray-500 block">Ancaman</span></h4>
                    </div>
                    <ul class="space-y-3">
                        <li class="flex items-start text-gray-700"><i class="fas fa-exclamation-triangle text-orange-500 mt-1 mr-3"></i> Persaingan ketat (Red Ocean) dari kompetitor POS lain (Moka, Pawoon, Majoo).</li>
                        <li class="flex items-start text-gray-700"><i class="fas fa-exclamation-triangle text-orange-500 mt-1 mr-3"></i> Edukasi market yang masih menantang untuk pedagang konvensional.</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Slide 8: Jejak Langkah (Timeline) -->
    <section id="timeline" class="section-padding bg-gray-50">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div class="text-center mb-16">
                <h2 class="text-sm font-bold text-brand uppercase tracking-widest mb-2">Milestones</h2>
                <h3 class="text-3xl md:text-4xl font-bold text-gray-900">Jejak Langkah Organisasi</h3>
                <div class="w-20 h-1 bg-brand mx-auto mt-4 rounded-full"></div>
            </div>

            <div class="relative timeline-container max-w-4xl mx-auto py-8">
                
                <!-- Timeline Item 1 -->
                <div class="relative z-10 mb-12 md:mb-0 md:flex items-center justify-between w-full">
                    <div class="md:w-5/12 order-1 md:text-right md:pr-8 pl-12 md:pl-0">
                        <h4 class="text-2xl font-bold text-gray-900">2016</h4>
                        <p class="text-gray-600 mt-2 bg-white p-4 rounded-xl shadow-sm border border-gray-100 inline-block">
                            Didirikan oleh mahasiswa PENS di <strong class="text-brand">Surabaya</strong> berawal dari project lomba inovasi.
                        </p>
                    </div>
                    <div class="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-brand border-4 border-white shadow flex items-center justify-center top-0 md:top-auto z-20 mt-1.5 md:mt-0"></div>
                    <div class="md:w-5/12 order-2"></div>
                </div>

                <!-- Timeline Item 2 -->
                <div class="relative z-10 mb-12 md:mb-0 md:flex items-center justify-between w-full md:mt-12">
                    <div class="md:w-5/12 order-2 md:pl-8 pl-12">
                        <h4 class="text-2xl font-bold text-gray-900">2018</h4>
                        <p class="text-gray-600 mt-2 bg-white p-4 rounded-xl shadow-sm border border-gray-100 inline-block">
                            Mencapai <strong>100.000+</strong> unduhan di Play Store dan mulai memonetisasi layanan dengan fitur Premium.
                        </p>
                    </div>
                    <div class="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-brand border-4 border-white shadow flex items-center justify-center top-0 md:top-auto z-20 mt-1.5 md:mt-0"></div>
                    <div class="md:w-5/12 order-1"></div>
                </div>

                <!-- Timeline Item 3 -->
                <div class="relative z-10 mb-12 md:mb-0 md:flex items-center justify-between w-full md:mt-12">
                    <div class="md:w-5/12 order-1 md:text-right md:pr-8 pl-12 md:pl-0">
                        <h4 class="text-2xl font-bold text-gray-900">2021</h4>
                        <p class="text-gray-600 mt-2 bg-white p-4 rounded-xl shadow-sm border border-gray-100 inline-block">
                            Berhasil mendapatkan <strong class="text-brand">Pendanaan</strong> untuk ekspansi dan pengembangan produk yang lebih solid.
                        </p>
                    </div>
                    <div class="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-6 h-6 rounded-full bg-brand border-4 border-white shadow flex items-center justify-center top-0 md:top-auto z-20 mt-1.5 md:mt-0"></div>
                    <div class="md:w-5/12 order-2"></div>
                </div>

                <!-- Timeline Item 4 -->
                <div class="relative z-10 md:flex items-center justify-between w-full md:mt-12">
                    <div class="md:w-5/12 order-2 md:pl-8 pl-12">
                        <h4 class="text-2xl font-bold text-gray-900">2023 - Sekarang</h4>
                        <p class="text-gray-600 mt-2 bg-brand text-white p-4 rounded-xl shadow-md inline-block">
                            Telah digunakan oleh lebih dari <strong>2 Juta UMKM</strong> di Indonesia dan terus berekspansi dengan membuka cabang operasional di Malang.
                        </p>
                    </div>
                    <div class="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-yellow-400 border-4 border-white shadow flex items-center justify-center top-0 md:top-auto z-20 mt-1.5 md:mt-0">
                        <i class="fas fa-star text-white text-xs"></i>
                    </div>
                    <div class="md:w-5/12 order-1"></div>
                </div>

            </div>
        </div>
    </section>

    <!-- Slide 9: Identitas Kelompok -->
    <section id="team" class="section-padding bg-gray-900 text-white relative">
        <!-- Abstract shape -->
        <div class="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-brand-dark/30 to-transparent"></div>
        
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
            <div class="text-center mb-16">
                <span class="bg-brand/20 text-brand-light px-4 py-1 rounded-full text-sm font-semibold tracking-wider mb-4 inline-block">TUGAS KULIAH</span>
                <h3 class="text-3xl md:text-4xl font-bold mb-4">Tim Penyusun Landing Page</h3>
                
                <div class="inline-block text-left bg-white/10 backdrop-blur-sm px-8 py-4 rounded-2xl border border-white/10 mt-4">
                    <p class="text-gray-300"><strong class="text-white">Mata Kuliah:</strong> Pengelolaan Organisasi</p>
                    <p class="text-gray-300 mt-1"><strong class="text-white">Dosen Pengampu:</strong> Rismaya Nikmatul Hida Saskia Putri, S.Pd., M.M.</p>
                </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <!-- Member 1 -->
                <div class="bg-white/5 rounded-2xl p-6 text-center hover:bg-white/10 transition border border-white/5">
                    <img src="https://i.pravatar.cc/150?img=11" alt="Mahasiswa 1" class="w-24 h-24 rounded-full mx-auto border-4 border-brand mb-4 object-cover">
                    <h4 class="font-bold text-lg text-white">Budi Santoso</h4>
                    <p class="text-brand-light text-sm mb-2">220101001</p>
                    <span class="inline-block bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full mt-2">Riset Struktur</span>
                </div>

                <!-- Member 2 -->
                <div class="bg-white/5 rounded-2xl p-6 text-center hover:bg-white/10 transition border border-white/5">
                    <img src="https://i.pravatar.cc/150?img=5" alt="Mahasiswa 2" class="w-24 h-24 rounded-full mx-auto border-4 border-brand mb-4 object-cover">
                    <h4 class="font-bold text-lg text-white">Siti Aminah</h4>
                    <p class="text-brand-light text-sm mb-2">220101002</p>
                    <span class="inline-block bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full mt-2">Analisis SWOT</span>
                </div>

                <!-- Member 3 -->
                <div class="bg-white/5 rounded-2xl p-6 text-center hover:bg-white/10 transition border border-white/5">
                    <img src="https://i.pravatar.cc/150?img=12" alt="Mahasiswa 3" class="w-24 h-24 rounded-full mx-auto border-4 border-brand mb-4 object-cover">
                    <h4 class="font-bold text-lg text-white">Andi Wijaya</h4>
                    <p class="text-brand-light text-sm mb-2">220101003</p>
                    <span class="inline-block bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full mt-2">Desain & Konten</span>
                </div>

                <!-- Member 4 -->
                <div class="bg-white/5 rounded-2xl p-6 text-center hover:bg-white/10 transition border border-white/5">
                    <img src="https://i.pravatar.cc/150?img=9" alt="Mahasiswa 4" class="w-24 h-24 rounded-full mx-auto border-4 border-brand mb-4 object-cover">
                    <h4 class="font-bold text-lg text-white">Rina Melati</h4>
                    <p class="text-brand-light text-sm mb-2">220101004</p>
                    <span class="inline-block bg-gray-800 text-gray-300 text-xs px-3 py-1 rounded-full mt-2">Presentasi</span>
                </div>
            </div>
            
            <p class="text-center text-gray-400 text-sm mt-8 italic">*Nama dan foto di atas dapat disesuaikan dengan anggota kelompok sebenarnya.</p>
        </div>
    </section>

    <!-- Slide 10: Footer & Call to Action -->
    <footer class="bg-brand py-16 text-white text-center">
        <div class="max-w-4xl mx-auto px-4">
            <i class="fas fa-quote-left text-4xl text-white/30 mb-6"></i>
            <h2 class="text-2xl md:text-4xl font-light mb-8 leading-relaxed">
                "Organisasi yang baik adalah organisasi yang <strong class="font-bold">mampu beradaptasi</strong> dengan zaman."
            </h2>
            
            <div class="w-24 h-1 bg-white/30 mx-auto my-8 rounded-full"></div>
            
            <div class="bg-white/10 inline-block px-8 py-4 rounded-2xl backdrop-blur-sm border border-white/20">
                <h4 class="font-semibold text-lg mb-2">Hubungi Kami (Untuk Keperluan Tugas):</h4>
                <a href="mailto:kelompok1.bisnisdigital@itbtuban.ac.id" class="flex items-center justify-center gap-2 text-xl hover:text-gray-200 transition">
                    <i class="fas fa-envelope"></i> kelompok1.bisdig@itbtuban.ac.id
                </a>
            </div>

            <div class="mt-12 text-sm text-white/70">
                <p>Referensi: Laporan Publik dan Artikel terkait PT Kasir Pintar Internasional.</p>
                <p class="mt-2">&copy; 2026 Tugas Mata Kuliah Pengelolaan Organisasi - Institut Teknologi dan Bisnis Tuban.</p>
            </div>
        </div>
    </footer>

    <!-- JavaScript for Interactions -->
    <script>
        // Smooth scroll function
        function scrollToSection(id) {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }

        // Mobile menu toggle
        const btn = document.getElementById('mobile-menu-button');
        const menu = document.getElementById('mobile-menu');

        function toggleMobileMenu() {
            menu.classList.toggle('hidden');
        }

        btn.addEventListener('click', toggleMobileMenu);

        // Navbar blur effect on scroll
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 50) {
                nav.classList.add('shadow-md');
                nav.classList.replace('bg-transparent', 'glass');
            } else {
                nav.classList.remove('shadow-md');
                // Only make it fully transparent if at the very top of hero section
                if (window.scrollY < 10) {
                     nav.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
                }
            }
        });
    </script>
</body>
</html>
