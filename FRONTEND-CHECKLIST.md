# Frontend V2 Checklist — SADITA

## ✅ Selesai (Phase 0 — Mockup)

- [x] Scaffold Laravel 11 + Tailwind CSS
- [x] Konfigurasi theme SADITA (warna, typography, spacing)
- [x] Buat layout utama (app.blade.php, toko.blade.php)
- [x] Buat komponen reusable (navbar, footer, product-card)
- [x] Halaman beranda (sadita.id)
- [x] Halaman toko home (pilih gudang)
- [x] Halaman katalog produk (list dengan filter)
- [x] **Halaman detail produk** ⭐ (image gallery, tabs, spesifikasi, review, related)
- [x] Breadcrumb navigation
- [x] Responsive design (mobile-first)
- [x] Document & README

---

## ✅ Selesai Tambahan Frontend Hardening

- [x] Flow beranda diarahkan ke kebutuhan peternak: cari produk, konsultasi AI, pilih gudang.
- [x] Halaman `ai-konsultasi.html` untuk SADITA AI Konsultasi Ternak.
- [x] Simulasi guardrail AI: menolak pertanyaan di luar topik ternak/produk SADITA.
- [x] Simulasi rekomendasi produk dari chat AI.
- [x] Form data konsultasi cepat: umur/bobot, populasi, jumlah terdampak, durasi, gejala, lokasi.
- [x] Ringkasan konsultasi siap kirim ke AI/admin.
- [x] Katalog frontend dinamis dengan JavaScript lokal.
- [x] Search produk/gejala di katalog.
- [x] Filter kategori katalog: Semua, Pernapasan, Vitamin, Sanitasi, Premix.
- [x] Sorting katalog: terpopuler, harga rendah, harga tinggi, stok terbanyak.
- [x] Add to cart frontend memakai `localStorage`.
- [x] Badge cart membaca jumlah item dari `localStorage`.
- [x] Checkout membaca item dari cart, bukan lagi hanya hardcoded.
- [x] Update quantity item checkout.
- [x] Validasi checkout untuk nama, WhatsApp, alamat, dan cart kosong.
- [x] Halaman `order-success.html` untuk status pesanan menunggu konfirmasi admin.
- [x] Detail produk ditambah trust info: registrasi, perhatian pemakaian, withdrawal time.
- [x] Tombol Keranjang/Beli di detail produk sudah mengisi cart frontend.
- [x] Build `dist` memproses halaman baru: `ai-konsultasi.html` dan `order-success.html`.

---

## ⚠️ Kekurangan Frontend Yang Masih Perlu Dimantapkan

### Data & Konten

- [ ] Ganti gambar produk stock/Unsplash dengan foto produk SADITA asli.
- [ ] Ganti foto gudang/cabang dengan foto cabang asli.
- [ ] Lengkapi data produk asli: nama, varian, kemasan, harga, stok, komposisi, indikasi, registrasi.
- [ ] Tambah kategori produk sesuai data bisnis nyata SADITA.
- [ ] Tambah artikel asli berdasarkan masalah lapangan peternak.

### UX Katalog & Cart

- [ ] Tambah filter lanjutan: harga, stok, rating, jenis ternak.
- [ ] Tambah state stok habis dan tombol disabled.
- [ ] Tambah drawer/mini cart agar pengguna bisa lihat ringkasan tanpa masuk checkout.
- [ ] Tambah tombol hapus item eksplisit di checkout, bukan hanya minus sampai 0.
- [ ] Tambah toast global untuk aksi cart di semua halaman.

### Checkout & Order

- [ ] Tambah pilihan ekspedisi/pengiriman frontend.
- [ ] Tambah estimasi ongkir dummy berdasarkan gudang/lokasi.
- [ ] Tambah upload bukti transfer placeholder untuk flow manual payment.
- [ ] Tambah cetak/salin ringkasan pesanan.
- [ ] Tambah halaman riwayat pesanan frontend dari `localStorage`.

### SADITA AI

- [ ] Tambah pilihan tingkat urgensi: ringan, sedang, darurat.
- [ ] Tambah upload foto/video placeholder.
- [ ] Tambah riwayat konsultasi frontend dari `localStorage`.
- [ ] Tambah tombol salin ringkasan konsultasi.
- [ ] Tambah daftar pertanyaan lanjutan otomatis berdasarkan jenis ternak.
- [ ] Tambah disclaimer medis yang selalu terlihat di bawah chat.

### Accessibility & Mobile Polish

- [ ] Audit ukuran font kecil 10-11px pada halaman lama.
- [ ] Pastikan semua tombol utama minimal tinggi 44px.
- [ ] Tambah focus state yang konsisten untuk keyboard navigation.
- [ ] Audit contrast teks muted pada background terang.
- [ ] Tambah aria-label untuk tombol icon yang belum lengkap.

### SEO & Performance

- [ ] Tambah Open Graph tags per halaman utama.
- [ ] Tambah JSON-LD Product dan Breadcrumb untuk detail produk.
- [ ] Tambah lazy loading semua gambar list/artikel.
- [ ] Optimasi gambar ke WebP/AVIF.
- [ ] Kurangi ketergantungan gambar eksternal untuk produksi.

### Integrasi Backend Nanti

- [ ] Ganti data produk JS lokal dengan API Laravel.
- [ ] Ganti cart `localStorage` dengan session/backend cart.
- [ ] Ganti order success dari `localStorage` dengan order ID database.
- [ ] Hubungkan SADITA AI ke OpenAI API dan knowledge base.
- [ ] Hubungkan rekomendasi AI ke produk database.
- [ ] Hubungkan WhatsApp admin ke nomor cabang/sales yang benar.

---

## 📋 Next Steps (Setelah Approval Bos)

### Phase 1: Backend Integration (Minggu 1-2)
- [x] Setup database schema
  - [x] `products` table (id, name, slug, description, price, image, kategori, stok)
  - [x] `categories` table
  - [x] `reviews` table
  - [x] `cart_items` table
  - [x] `orders` table
- [x] Create Laravel models (Product, Category, Review, Order)
- [x] Create migrations & seeders
- [ ] Seeder dengan data dummy (100+ produk, 8+ kategori)

### Phase 2: Dynamic Data & Controllers (Minggu 2-3)
- [x] ProductController untuk show, index, category
- [x] HomeController untuk halaman utama
- [x] Bind blade views ke controllers (bukan hardcoded data)
- [x] URL slug-based routing (tidak query params)
- [ ] Implement search functionality (SearchController + API)

### Phase 3: E-commerce Features (Minggu 3-4)
- [ ] Cart functionality
  - [x] Add to cart frontend `localStorage`
  - [ ] Remove from cart eksplisit
  - [x] Update quantity frontend
  - [x] Persistent cart frontend
  - [ ] Backend sync
- [ ] Checkout flow
  - [x] Checkout page frontend (review order, input alamat)
  - [x] Order confirmation page frontend
  - [ ] Payment gateway integration (Midtrans/DOKU)
- [ ] Wishlist (save for later)
- [ ] Product filtering & sorting
  - [x] Search/filter/sort frontend dasar
  - [ ] Filter by price range
  - [ ] Filter by rating
  - [x] Sort by price/popularity/stock frontend
  - [ ] Backend/API filtering

### Phase 4: Admin Panel (Minggu 4-5)
- [ ] Setup Laravel Filament (admin panel)
- [ ] Product management (CRUD)
- [ ] Category management
- [ ] Order management
- [ ] User management
- [ ] Review moderation

### Phase 5: Advanced Features (Minggu 5-6)
- [ ] User authentication (register, login, logout)
- [ ] Order history & tracking
- [ ] Invoice generation (PDF)
- [ ] Email notifications (order confirmation, shipping, etc.)
- [ ] Internationalization (i18n) setup
- [ ] Analytics tracking (Google Analytics 4 + custom events)

### Phase 6: SEO & Performance (Minggu 6-7)
- [ ] JSON-LD structured data (Product schema, breadcrumb)
- [ ] Meta tags optimization (title, description, OG tags per halaman)
- [ ] Image optimization (lazy loading, WebP format, srcset)
- [ ] CSS/JS minification & bundling
- [ ] Caching strategy (Redis, HTTP caching headers)
- [ ] CDN setup untuk gambar/aset statis
- [ ] Lighthouse audit & Core Web Vitals optimization

### Phase 7: Testing & QA (Minggu 7-8)
- [ ] Unit tests (models, services)
- [ ] Feature tests (controller, routes)
- [ ] Cross-browser testing
- [ ] Mobile responsiveness testing
- [ ] Performance testing (load testing)
- [ ] Security audit (SQL injection, XSS, CSRF)

### Phase 8: Deployment (Minggu 8+)
- [ ] Setup production server (Nginx, SSL, PHP-FPM)
- [ ] Database migration to production
- [ ] Setup environment variables
- [ ] Configure email sending (SMTP)
- [ ] Setup monitoring & error tracking (Sentry)
- [ ] DNS & SSL certificate
- [ ] CI/CD pipeline (GitHub Actions)

---

## 🎯 Feedback dari Bos (Placeholder)

*Tunggu feedback bos setelah review mockup*

- [ ] Feedback Point 1: ...
- [ ] Feedback Point 2: ...
- [ ] Feedback Point 3: ...

---

## 📊 Progress Overview

```
Phase 0 (Mockup):     ████████████████████ 100%
Phase 1 (Backend):    ████████████████░░░░ 80%
Phase 2 (Dynamic):    ████████████████░░░░ 80%
Phase 3 (E-comm):     ░░░░░░░░░░░░░░░░░░░░  0%
Phase 4 (Admin):      ░░░░░░░░░░░░░░░░░░░░  0%
Phase 5 (Advanced):   ░░░░░░░░░░░░░░░░░░░░  0%
Phase 6 (SEO/Perf):   ░░░░░░░░░░░░░░░░░░░░  0%
Phase 7 (Testing):    ░░░░░░░░░░░░░░░░░░░░  0%
Phase 8 (Deploy):     ░░░░░░░░░░░░░░░░░░░░  0%
```

---

## 📝 Notes

- Semua file tersimpan di: `d:\sadita.id-v2\laravel-v2\`
- Untuk produksi, rename folder ke `sadita-v2` atau nama project yang sesuai
- Koordinasi dengan bos untuk feedback sebelum lanjut ke phase berikutnya

Kapan bisa presentasi ke bos? 🎉
