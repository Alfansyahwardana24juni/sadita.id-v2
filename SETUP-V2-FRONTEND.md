# Setup Laravel 11 Frontend V2 — Panduan Cepat

## Prerequisites
- PHP 8.3+
- Composer
- Node.js 18+
- npm atau pnpm

## Langkah-langkah Setup

### 1. Buat Project Laravel 11
```bash
cd d:\
composer create-project laravel/laravel sadita-v2
cd sadita-v2
```

### 2. Install Tailwind CSS
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### 3. Update `tailwind.config.js`
Lihat file `tailwind.config.js` di folder ini untuk konfigurasi tema SADITA.

### 4. Setup struktur folder
Buat struktur di bawah di folder `resources/views/`:
```
resources/views/
├── layouts/
│   ├── app.blade.php (main site - sadita.id)
│   ├── toko.blade.php (store - toko.sadita.id)
│   └── components/
│       ├── navbar.blade.php
│       ├── footer.blade.php
│       ├── breadcrumb.blade.php
│       └── ...
├── pages/
│   ├── home.blade.php (beranda sadita.id)
│   ├── produk.blade.php (list produk sadita.id)
│   ├── artikel.blade.php (list artikel sadita.id)
│   ├── tentang.blade.php
│   └── ...
└── toko/
    ├── home.blade.php (beranda toko.sadita.id)
    ├── katalog.blade.php (list produk toko)
    ├── kategori.blade.php (produk per kategori)
    ├── detail-produk.blade.php (HALAMAN UTAMA BARU)
    ├── keranjang.blade.php
    └── checkout.blade.php
```

### 5. Konfigurasi Routes
Edit `routes/web.php` untuk routing ke halaman mockup.

### 6. Run Development Server
```bash
npm run dev
php artisan serve
```

Akses di `http://localhost:8000`

---

## File-file penting yang sudah disiapkan

1. **tailwind.config.js** — Konfigurasi tema SADITA dengan warna custom
2. **resources/css/app.css** — Main stylesheet
3. **Layout Blade files** — Structure HTML untuk beranda, toko, dll
4. **Component Blade files** — Reusable components (navbar, footer, product-card, dll)

---

## Catatan untuk Mockup Frontend

- Data produk, kategori, artikel **di-hardcoded** di halaman (bukan dari database)
- Semua gambar menggunakan placeholder atau URL eksternal sementara
- Interaksi dasar dengan Alpine.js (cart, filter, modal)
- Tidak ada backend/API dulu — fokus UI/UX

---

## Next Steps

1. Jalankan setup di atas
2. Buka halaman-halaman mockup di browser
3. Review tampilan dengan bos
4. Catat feedback/perubahan
5. Update design sesuai feedback
6. Lalu integrate backend/database
