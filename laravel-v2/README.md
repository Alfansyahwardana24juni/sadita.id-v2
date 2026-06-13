# SADITA V2 — Frontend Mockup dengan Tailwind CSS

Scaffolding frontend Laravel 11 + Tailwind CSS untuk menampilkan desain V2 ke bos.

## 🚀 Quick Start

### 1. Setup Laravel 11 Project Baru
```bash
cd d:\
composer create-project laravel/laravel sadita-v2-complete
cd sadita-v2-complete
```

### 2. Copy file-file dari folder `laravel-v2/` ke root project
Salin semua file dari `laravel-v2/` ke folder project Laravel 11 yang baru:
- `app/Models/` (model Category, Product, Review, CartItem, Order)
- `app/Http/Controllers/` (HomeController, ProductController)
- `database/migrations/` (schema katalog, review, cart, order)
- `database/seeders/` (DatabaseSeeder, ProductCatalogSeeder)
- `tailwind.config.js`
- `postcss.config.js`
- `vite.config.js`
- `package.json` (merge dengan yang ada)
- `resources/css/app.css`
- `resources/js/app.js`
- `resources/views/layouts/` (seluruh folder)
- `resources/views/pages/` (seluruh folder)
- `resources/views/toko/` (seluruh folder)
- `routes/web.php`

### 3. Install Dependencies
```bash
npm install
composer install
```

### 4. Generate App Key
```bash
php artisan key:generate
```

### 5. Setup Database
```bash
php artisan migrate --seed
```

Seeder awal membuat kategori utama, 10 produk dummy, dan review contoh untuk Cyprotil. Target 100+ produk bisa ditambahkan setelah struktur katalog disetujui.

### 6. Run Development Server
Terminal 1 — Vite dev server (untuk CSS + JS hot reload):
```bash
npm run dev
```

Terminal 2 — Laravel dev server:
```bash
php artisan serve
```

### 7. Buka di Browser
```
http://localhost:8000
```

---

## 📁 Struktur File

```
resources/views/
├── layouts/
│   ├── app.blade.php              # Main layout untuk sadita.id
│   ├── toko.blade.php             # Main layout untuk toko.sadita.id
│   └── components/
│       ├── navbar.blade.php
│       ├── navbar-toko.blade.php
│       ├── footer.blade.php
│       └── product-card.blade.php
├── pages/
│   └── home.blade.php             # Beranda sadita.id
└── toko/
    ├── home.blade.php             # Beranda toko.sadita.id
    ├── katalog.blade.php          # List produk
    └── detail-produk.blade.php    # 🌟 HALAMAN UTAMA BARU (yang ditunjukkan ke bos)
```

---

## 🎨 Halaman-Halaman Mockup

### Halaman Utama (sadita.id)
- **URL**: `http://localhost:8000/`
- **Fitur**: Hero section, kategori produk, statistik, artikel terbaru
- **File**: `resources/views/pages/home.blade.php`

### Halaman Toko Home (toko.sadita.id)
- **URL**: `http://localhost:8000/toko`
- **Fitur**: Pilih gudang (Bogor/Makassar)
- **File**: `resources/views/toko/home.blade.php`

### Halaman Katalog Produk
- **URL**: `http://localhost:8000/toko/katalog`
- **Fitur**: Grid produk, filter kategori, sort
- **File**: `resources/views/toko/katalog.blade.php`

### ⭐ Halaman Detail Produk (BARU!)
- **URL**: `http://localhost:8000/toko/produk/cyprotil`
- **Fitur**:
  - Image gallery dengan thumbnail
  - Harga + diskon
  - Rating & review
  - Spesifikasi produk
  - Tab: Deskripsi, Spesifikasi, Review
  - Produk terkait (related products)
  - Quantity selector + Add to cart
  - Seller info
- **File**: `resources/views/toko/detail-produk.blade.php`

---

## 🎯 Fitur Utama yang Ditampilkan

✅ **Mobile-first design** (max-width: 512px, tapi responsive ke desktop)  
✅ **Tailwind CSS** dengan custom theme SADITA (warna, spacing, typography)  
✅ **Blade Components** untuk reusability  
✅ **Tab system** pada detail produk (Deskripsi, Spesifikasi, Review)  
✅ **Image gallery** dengan zoom/lightbox sederhana  
✅ **Product cards** dengan hover effects  
✅ **Breadcrumb navigation**  
✅ **Responsive navbar** dengan menu  
✅ **Footer** dengan informasi kontak  

---

## 🔧 Konfigurasi Tailwind

Tema SADITA sudah dikonfigurasi di `tailwind.config.js`:
- Warna custom (primary: #610000, secondary, tertiary, dll)
- Typography (display-sm, headline-md, body-md, label-lg, label-sm)
- Border radius (DEFAULT, lg, xl, 2xl, 3xl, full)
- Animation (fade-in-up)

---

## 📝 Catatan Penting

1. **Backend Phase 1 sudah ditambahkan** — model, migration, seeder, dan controller katalog/detail produk
2. **Data produk katalog/detail sudah bisa dari database** setelah `php artisan migrate --seed`
3. **Gambar menggunakan placeholder** dari Unsplash CDN
4. **Interaksi dasar** (tab switching, image gallery) menggunakan vanilla JavaScript + Alpine.js
5. **Untuk fitur advanced** (keranjang persistent, checkout, login) → perlu implementasi service/controller lanjutan

---

## 🚀 Next Steps Setelah Presentasi ke Bos

Jika desain sudah approved oleh bos, lanjut ke:

1. **Backend Integration** (Laravel models, migration, seeder)
2. **Database setup** (Products, Categories, Orders, Reviews)
3. **Admin Panel** (Filament/Nova untuk manage produk)
4. **Cart & Checkout Flow** (API, payment gateway)
5. **User authentication** (login, registration, order history)
6. **Deployment** (Nginx, SSL, CDN untuk gambar)

---

## 📚 Resources

- **Tailwind CSS**: https://tailwindcss.com
- **Laravel 11**: https://laravel.com
- **Blade Syntax**: https://laravel.com/docs/11.x/blade
- **Vite**: https://vitejs.dev
- **Alpine.js**: https://alpinejs.dev

---

## ❓ FAQ

**Q: Bagaimana cara menambah halaman baru?**  
A: Buat file `.blade.php` baru di folder `resources/views/`, extend layout (`@extends('layouts.app')`), dan tambah route di `routes/web.php`.

**Q: Bagaimana cara mengubah warna/tema?**  
A: Edit `tailwind.config.js` di bagian `colors` dan `theme`.

**Q: Gambar tidak muncul?**  
A: Pastikan URL gambar valid atau upload ke folder `public/images/` dan reference dengan `asset('images/...')`.

---

Siap untuk presentasi ke bos! 🎉
