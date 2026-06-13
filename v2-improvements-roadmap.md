# Roadmap V2 — Sadita.id & Toko.sadita.id
## Analisis Kekurangan V1 & Rencana Perbaikan

---

## Kekurangan V1 (Produksi)

### 1. **Halaman Detail Produk (toko.sadita.id) — TIDAK ADA/MINIM**
- ❌ Tidak ada halaman detail produk yang menampilkan spesifikasi lengkap
- ❌ Tidak ada deskripsi produk, komposisi, cara pakai, atau dosisnya
- ❌ Tidak ada review/rating dari pembeli
- ❌ Tidak ada related products/cross-sell
- ❌ Gambar produk hanya thumbnail, tidak ada zoom/gallery interaktif
- ✅ Impact: Pengalaman pembeli buruk, bounce rate tinggi di halaman kategori

### 2. **Integrasi sadita.id ↔ toko.sadita.id — LEMAH**
- ❌ Tombol "Beli" atau "Lihat di Toko" dari produk di sadita.id tidak terhubung langsung ke toko
- ❌ Kategori di sadita.id tidak tersinkronisasi dengan katalog toko
- ❌ Artikel di sadita.id tidak link ke produk terkait di toko
- ✅ Impact: User tersesat, conversion rate rendah

### 3. **SEO & Metadata — BURUK**
- ❌ Halaman produk tidak punya meta description/Open Graph yang unik per produk
- ❌ Tidak ada structured data (JSON-LD) untuk produk, breadcrumb, atau FAQPage
- ❌ URL struktur tidak SEO-friendly (query params `c=1` daripada slug `/gudang/makassar`)
- ❌ Tidak ada canonical tags untuk menghindari duplicate content
- ✅ Impact: Ranking Google rendah, social sharing buruk

### 4. **Performa & Optimasi Aset — PERLU DITINGKAT**
- ❌ Gambar tidak lazy-loaded, loading semua sekaligus
- ❌ Tidak ada format WebP + fallback JPEG
- ❌ Font Google CDN tidak di-optimize (bisa self-host atau subset)
- ❌ CSS/JS production belum diminify optimal
- ❌ Tidak ada caching strategy (Cache-Control header, service worker)
- ✅ Impact: Slow Largest Contentful Paint (LCP), Core Web Vitals buruk

### 5. **Aksesibilitas — MINIMAL**
- ❌ Button tidak punya aria-label yang jelas
- ❌ Kontras warna pada beberapa teks tidak memenuhi WCAG AA
- ❌ Form input tidak punya proper `<label>` atau `role`
- ❌ Tidak ada skip-to-main-content link
- ✅ Impact: Tidak accessible untuk screen reader, tidak WCAG compliant

### 6. **Fitur E-commerce — TIDAK LENGKAP**
- ❌ Keranjang tidak persistent (hilang saat refresh/berpindah tab)
- ❌ Checkout flow tidak aman/tidak terintegrasi payment gateway
- ❌ Tidak ada wishlist/save for later
- ❌ Tidak ada filter/sort produk yang advanced (harga, rating, stok)
- ❌ Tidak ada notifikasi real-time saat checkout/order
- ✅ Impact: Conversions rendah, user experience jelek

### 7. **Mobile Responsiveness — TERBATAS**
- ⚠️  Sudah mobile-first (512px max), tapi hero image mungkin crop buruk pada landscape
- ⚠️  Tidak ada tablet breakpoint yang optimal
- ❌ Bottom nav bisa tertutup saat keyboard muncul (input form)

### 8. **Struktur Data & Admin — TIDAK SCALABLE**
- ❌ Produk harusa di-hardcode atau via CMS tanpa full control
- ❌ Tidak ada management interface untuk kategori, produk, artikel
- ❌ Tidak ada inventory/stock management
- ❌ Tidak ada order management system (OMS)
- ✅ Impact: Sulit update konten, tidak scalable untuk pertumbuhan

### 9. **Internationalization (i18n) — MANUAL**
- ⚠️  Ada `/locale/id` & `/locale/en`, tapi terlihat hardcoded daripada sistem
- ❌ Tidak ada fallback untuk bahasa yang belum diterjemahkan
- ❌ Tidak ada plural forms, gender-aware translations

### 10. **Analitik & Monitoring — TIDAK ADA**
- ❌ Tidak ada tracking untuk konversi produk
- ❌ Tidak ada heatmap/session recording untuk UX improvement
- ❌ Tidak ada error tracking/logging
- ✅ Impact: Tidak tahu user behavior, sulit optimize

---

## Rencana V2 — Priority & Scope

### **Phase 1: MVP (Minggu 1-2)**
Perbaikan kritis untuk conversion & performa

- [x] Halaman detail produk (toko.sadita.id/produk/{id})
  - [ ] Grid gambar + lightbox/zoom
  - [ ] Deskripsi, spesifikasi, komposisi
  - [ ] Rating & review widget
  - [ ] Related products (rekomendasi)
  - [ ] Stok realtime
  - [ ] CTA "Tambah ke Keranjang" + "Checkout"

- [x] Integrasi sadita.id → toko.sadita.id
  - [ ] Button "Beli Sekarang" dari artikel → produk detail
  - [ ] Kategori di sadita.id → kategori toko dengan deep link
  - [ ] Produk teaser di sadita.id dengan link ke toko

- [x] SEO & Structured Data
  - [ ] JSON-LD Product schema pada detail produk
  - [ ] Meta tags unique per halaman
  - [ ] URL slug-based (SEO-friendly)
  - [ ] Sitemap.xml

- [x] Performa Quick Wins
  - [ ] Lazy loading `loading="lazy"` pada image
  - [ ] CSS/JS minify & async loading
  - [ ] Font optimization (self-host Inter subset)
  - [ ] Caching headers (nginx/server config)

### **Phase 2: Experience & Engagement (Minggu 3-4)**
User experience improvements

- [ ] Keranjang persistent (localStorage/session DB)
- [ ] Wishlist (localStorage untuk guest, DB untuk registered)
- [ ] Product filter & sort (harga, rating, kategori)
- [ ] Search dengan autocomplete
- [ ] Aksesibilitas improvements (ARIA, kontras, labels)

### **Phase 3: Backend & Admin (Minggu 5-6)**
Admin tooling & data management

- [ ] Laravel admin panel (Nova/Filament) untuk:
  - [ ] Product CRUD (gambar, spesifikasi, kategori)
  - [ ] Category management
  - [ ] Article/Blog management
  - [ ] Order management
  - [ ] User management
- [ ] Inventory tracking
- [ ] Notification system (order status, promo)

### **Phase 4: Analytics & Monitoring (Minggu 7+)**
Growth & optimization

- [ ] Google Analytics 4 + custom events (produk dilihat, ditambah ke keranjang, checkout)
- [ ] Hotjar/Clarity untuk heatmap & session recording
- [ ] Error tracking (Sentry)
- [ ] Performance monitoring (New Relic atau Datadog lite)

---

## Struktur Teknis V2 — Laravel 11 + Tailwind

### **Folder Structure (Laravel 11)**
```
sadita-v2/
├── app/
│   ├── Http/Controllers/
│   │   ├── ProductController.php
│   │   ├── CategoryController.php
│   │   ├── ArticleController.php
│   │   ├── CartController.php
│   │   ├── CheckoutController.php
│   │   └── Admin/
│   ├── Models/
│   │   ├── Product.php
│   │   ├── Category.php
│   │   ├── Article.php
│   │   ├── Order.php
│   │   ├── OrderItem.php
│   │   ├── Review.php
│   │   └── Cart.php
│   └── Services/
│       ├── ProductService.php
│       ├── CartService.php
│       └── PaymentService.php
├── resources/
│   ├── views/
│   │   ├── layouts/
│   │   │   ├── app.blade.php (main site)
│   │   │   ├── toko.blade.php (store)
│   │   │   └── admin.blade.php (admin panel)
│   │   ├── products/
│   │   │   ├── index.blade.php (product list)
│   │   │   ├── show.blade.php (product detail - BARU)
│   │   │   └── category.blade.php
│   │   ├── articles/
│   │   ├── cart/
│   │   │   ├── index.blade.php
│   │   │   └── checkout.blade.php
│   │   ├── admin/
│   │   │   ├── products/
│   │   │   ├── orders/
│   │   │   └── dashboard.blade.php
│   │   └── components/ (Blade components)
│   │       ├── product-card.blade.php
│   │       ├── product-detail.blade.php
│   │       ├── navbar.blade.php
│   │       ├── footer.blade.php
│   │       └── breadcrumb.blade.php
│   ├── css/
│   │   ├── app.css (Tailwind)
│   │   └── admin.css
│   └── js/
│       ├── app.js
│       ├── cart.js
│       └── product-detail.js (image zoom, lightbox)
├── database/
│   ├── migrations/
│   │   ├── create_products_table.php
│   │   ├── create_categories_table.php
│   │   ├── create_orders_table.php
│   │   ├── create_reviews_table.php
│   │   └── create_cart_items_table.php
│   └── seeders/
│       ├── ProductSeeder.php
│       └── CategorySeeder.php
├── routes/
│   ├── web.php (frontend routes)
│   ├── api.php (API for cart, search)
│   └── admin.php (admin panel routes)
├── public/
│   ├── images/
│   ├── assets/
│   └── storage/ (symlink to storage/app/public)
├── config/
│   ├── sadita.php (custom config)
│   └── payment.php (payment gateway)
├── tailwind.config.js
├── vite.config.js
└── composer.json
```

### **Key Features untuk V2**

#### 1. **Product Detail Page** (`resources/views/products/show.blade.php`)
```blade
@extends('layouts.toko')
@section('title', "{{ $product->name }} | SADITA Toko")
@section('content')
  <!-- Breadcrumb -->
  <x-breadcrumb :items="[['name' => 'Katalog', 'url' => route('products.index')], ['name' => $product->category->name, 'url' => route('products.category', $product->category)], ['name' => $product->name]]" />
  
  <!-- Product Detail Grid (Image + Info) -->
  <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
    <!-- Image Gallery -->
    <div class="product-gallery">
      <img id="mainImage" :src="$product->image_url" alt="{{ $product->name }}" class="w-full rounded-lg">
      <div class="grid grid-cols-4 gap-2 mt-4">
        @foreach($product->images as $img)
          <img :src="$img->url" @click="mainImage.src = $img.url" class="cursor-pointer rounded border hover:border-primary">
        @endforeach
      </div>
    </div>
    
    <!-- Product Info -->
    <div>
      <h1 class="text-3xl font-bold mb-2">{{ $product->name }}</h1>
      <div class="flex items-center gap-2 mb-4">
        <!-- Star rating -->
        <div class="stars" data-rating="{{ $product->avg_rating }}"></div>
        <span class="text-sm text-gray-600">({{ $product->reviews_count }} review)</span>
      </div>
      
      <div class="mb-4">
        <span class="text-2xl font-bold text-primary">Rp {{ number_format($product->price) }}</span>
        <span class="text-sm text-gray-500 ml-2 line-through">Rp {{ number_format($product->original_price) }}</span>
      </div>
      
      <div class="mb-6">
        <p class="text-sm text-gray-600">{{ $product->short_description }}</p>
      </div>
      
      <!-- Stok -->
      <div class="mb-6">
        <span class="text-sm font-semibold">Stok: <span class="text-primary">{{ $product->stock }} pcs</span></span>
      </div>
      
      <!-- Quantity & CTA -->
      <div class="flex gap-4 mb-8">
        <input type="number" value="1" min="1" max="{{ $product->stock }}" class="w-16 px-3 py-2 border rounded">
        <button @click="addToCart" class="flex-1 bg-primary text-white px-6 py-3 rounded-lg font-semibold">Tambah ke Keranjang</button>
        <button class="px-6 py-3 border border-primary text-primary rounded-lg font-semibold">❤️ Wishlist</button>
      </div>
      
      <!-- Tabs: Deskripsi, Spesifikasi, Review -->
      <div class="tabs">
        <button class="tab-btn active" data-tab="desc">Deskripsi</button>
        <button class="tab-btn" data-tab="spec">Spesifikasi</button>
        <button class="tab-btn" data-tab="review">Review</button>
      </div>
      
      <!-- Tab Content -->
      <div id="desc" class="tab-content">{{ $product->description }}</div>
      <div id="spec" class="tab-content hidden">
        <table class="w-full text-sm">
          @foreach(json_decode($product->specs) as $k => $v)
            <tr><td class="font-semibold">{{ $k }}:</td><td>{{ $v }}</td></tr>
          @endforeach
        </table>
      </div>
      <div id="review" class="tab-content hidden">
        <!-- Reviews list + add review form -->
      </div>
    </div>
  </div>
  
  <!-- Related Products -->
  <section class="mt-12">
    <h2 class="text-2xl font-bold mb-6">Produk Terkait</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
      @foreach($relatedProducts as $prod)
        <x-product-card :product="$prod" />
      @endforeach
    </div>
  </section>
@endsection
```

#### 2. **Integration sadita.id → toko.sadita.id**
- Button "Lihat di Toko" pada artikel → `/toko.sadita.id/produk/{{ $product->slug }}`
- Kategori di sadita.id → `/toko.sadita.id/kategori/{{ $category->slug }}`
- Product teaser dengan schema.org/Product JSON-LD

#### 3. **SEO & JSON-LD**
```blade
<!-- resources/views/products/show.blade.php -->
@push('scripts')
<script type="application/ld+json">
{
  "@context": "https://schema.org/",
  "@type": "Product",
  "name": "{{ $product->name }}",
  "description": "{{ $product->short_description }}",
  "image": "{{ $product->image_url }}",
  "brand": "SADITA",
  "offers": {
    "@type": "Offer",
    "url": "{{ route('products.show', $product) }}",
    "priceCurrency": "IDR",
    "price": "{{ $product->price }}",
    "availability": "{{ $product->stock > 0 ? 'InStock' : 'OutOfStock' }}"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "{{ $product->avg_rating }}",
    "reviewCount": "{{ $product->reviews_count }}"
  }
}
</script>
@endpush
```

#### 4. **Cart & Checkout (API-driven)**
```
GET /api/cart (ambil cart session user)
POST /api/cart/add (add item dengan product_id, qty)
DELETE /api/cart/remove/:id (hapus item)
POST /api/checkout (mulai proses checkout → payment gateway)
```

---

## Teknologi Stack V2

- **Backend**: Laravel 11 (PHP 8.3+)
- **Frontend**: Blade templates + Tailwind CSS + Alpine.js (interaksi ringan)
- **Database**: MySQL 8+ atau PostgreSQL
- **Image Processing**: Intervention Image (optimasi, resize)
- **Payment Gateway**: Midtrans, doku, atau stripe (pilih satu)
- **Admin Panel**: Laravel Filament atau Nova
- **Caching**: Redis (cart, session, query cache)
- **Search**: Laravel Scout + Meilisearch atau Algolia (opsional)
- **Analytics**: Google Analytics 4 + Matomo (self-hosted opsional)

---

## Contoh Routes V2

```php
// routes/web.php (Frontend)
Route::get('/', [HomeController::class, 'index']); // sadita.id home
Route::get('/produk', [ProductController::class, 'index']); // list produk (sadita.id)
Route::get('/kategori/{slug}', [ProductController::class, 'category']); // sadita.id kategori

// toko.sadita.id routes
Route::domain('toko.sadita.id')->group(function () {
    Route::get('/', [TokoController::class, 'index']); // toko home (gudang)
    Route::get('/produk', [TokoProductController::class, 'index']); // katalog toko
    Route::get('/produk/{slug}', [TokoProductController::class, 'show']); // DETAIL PRODUK (BARU)
    Route::get('/kategori/{slug}', [TokoProductController::class, 'category']);
    Route::get('/keranjang', [CartController::class, 'index']);
    Route::post('/checkout', [CheckoutController::class, 'store']);
    Route::get('/order/{id}', [OrderController::class, 'show']);
});

// API routes
Route::middleware('api')->prefix('api')->group(function () {
    Route::get('/cart', [CartController::class, 'show']);
    Route::post('/cart/add', [CartController::class, 'add']);
    Route::delete('/cart/remove/{id}', [CartController::class, 'remove']);
    Route::get('/products/search', [ProductController::class, 'search']);
});

// Admin routes (Laravel Filament atau Nova)
Route::middleware('auth.admin')->prefix('admin')->group(function () {
    // Generated by Filament/Nova
});
```

---

## Next Steps

1. **Setup Laravel 11 project** dengan struktur folder di atas
2. **Database schema**: migration untuk Product, Category, Order, Review, Cart
3. **Create ProductController + views** untuk detail produk
4. **Implement SEO/JSON-LD** pada halaman produk
5. **Setup Cart API** (localStorage di frontend + session di backend)
6. **Integration linking** sadita.id → toko.sadita.id
7. **Test & optimize** performa (Lighthouse score target: 90+)
8. **Setup CI/CD** (GitHub Actions deploy ke hosting)

---

## Estimasi Timeline
- **Phase 1 (MVP)**: 2 minggu
- **Phase 2 (UX)**: 2 minggu  
- **Phase 3 (Admin)**: 2 minggu
- **Phase 4 (Analytics)**: 1+ minggu
- **Total**: 6-7 minggu (optimis, full-time development)
