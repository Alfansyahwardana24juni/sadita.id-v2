# Analisis Web v1 — SADITA (web-v1)

Ringkasan singkat:

- Situs dibuat mobile-first dengan lebar maksimal kontainer 512px (UI mirip aplikasi mobile).
- Teknologi: HTML statis + templating (blok Jinja-like), TailwindCSS kustom, Vite/PostCSS build (terlihat dari config files), sedikit JavaScript vanilla untuk UX.

Struktur proyek (intinya):

- `index.html` — halaman beranda statis (hero, kategori, statistik, artikel, footer, bottom nav).
- `src/layouts/main.html` — layout utama dengan `include` untuk komponen (navbar, footer, bottom-nav).
- `src/layouts/toko.html` — layout untuk subdomain/toko dengan komponen navbar-toko dan bottom-nav-toko.
- `src/components/` — komponen UI terpisah: `navbar.html`, `footer.html`, `bottom-nav.html`, varian toko, dll.
- `src/sections/` — bagian halaman yang bisa di-include (hero, articles, categories, dll.).
- `src/scripts/main.js` — interaksi ringan: navbar hide/show saat scroll dan efek reveal-on-scroll.
- `src/styles/tailwind.css` + `tailwind.config.js` + `postcss.config.js` — konfigurasi tema dan utilitas Tailwind.

Konvensi dan pola desain:

- Mobile-first, fixed header dan bottom navigation (mirip layout aplikasi web/SPA mobile).
- Warna dan token desain didefinisikan ulang di Tailwind (banyak variable warna kustom).
- Komponen disusun sebagai partials yang di-include ke layouts — memudahkan reuse.

Aset dan sumber eksternal:

- Google Fonts (`Inter`) dan `Material Symbols Outlined` dipanggil via CDN.
- Gambar hero dan artikel menggunakan URL eksternal (Googleusercontent).

Kekuatan (what's good):

- Struktur modular (layouts + components) memudahkan migrasi ke static site generator atau templating engine.
- UI konsisten dan fokus mobile yang jelas — bagus untuk pengguna ponsel.
- Tailwind + PostCSS memberikan fleksibilitas styling dan mudah di-build/minify.
- Interaksi ringan tanpa dependency berat (small JS).

Area perbaikan / catatan untuk V2:

- Performansi: optimalkan gambar (serve webp/AVIF via build, lazy-loading), kurangi jumlah request eksternal, bundling CSS produksi.
- Fonts: pertimbangkan self-hosting subset Inter atau gunakan `font-display:swap` (saat ini menggunakan Google CDN tetapi cek render-blocking).
- Accessibility: tambah ARIA pada elemen tombol/menu, pastikan kontras warna memenuhi WCAG untuk teks kecil.
- SEO & Semantik: tambahkan metadata terstruktur (Open Graph, JSON-LD untuk produk/artikel), gunakan tag heading yang konsisten.
- E-commerce (toko.sadita.id): integrasi keranjang/checkout perlu backend atau third-party (Shopify, Snipcart, WooCommerce headless) — rancang API/flow.
- Offline/Cache: pertimbangkan service worker/manifest jika ingin pengalaman app-like.
- Internationalization: siapkan struktur konten untuk multi-bahasa bila diperlukan.

Rekomendasi teknis cepat untuk V2:

1. Siapkan pipeline build produksi: `vite` + `postcss` + `purgecss`/Tailwind JIT untuk meminify CSS.
2. Optimalkan gambar saat build (plugin vite-imagetools) dan gunakan lazy-loading `loading="lazy"`.
3. Tambah header SEO dan JSON-LD pada layout utama.
4. Implementasikan komponen header/footer sebagai React/Vue/Svelte jika ingin interaktivitas lebih, tapi tidak wajib — bisa tetap static + API.
5. Tambah automated CI (lint, build) dan deploy pipeline (Netlify/Vercel/Cloudflare Pages).

Next steps yang saya bisa bantu sekarang:

- Buat daftar halaman & komponen yang perlu migrasi ke V2.
- Scaffold starter Vite + framework pilihan (vanilla, React, Svelte) dengan struktur komponen yang sama.
- Optimalkan konfigurasi Tailwind + build untuk produksi.

Jika setuju, saya bisa lanjut membuat checklist migrasi dan memulai scaffolding V2.

Temuan dari situs live (https://sadita.id & https://toko.sadita.id):

- Konten live konsisten dengan kode lokal: halaman beranda, kategori, artikel, dan kontak sama struktur dan assetnya.
- Situs menggunakan rute isi seperti `/produk`, `/category/*`, `/artikel`, `/news/*`, dan `/tips/*`.
- Ada pilihan bahasa (`/locale/id` dan `/locale/en`) pada header.
- Banyak gambar disajikan dari folder `/src/` dan ada beberapa asset WebP (bagus); masih perlu lazy-loading dan optimasi ukuran/format saat build.
- `toko.sadita.id` adalah storefront terpisah dengan banner, pemilihan gudang/outlet (query `c=1`, `c=2`), dan struktur katalog; ini membutuhkan flow keranjang/checkout dan integrasi backend atau third-party untuk pembayaran.
- Rekomendasi khusus: tambahkan `loading="lazy"` pada gambar, gunakan transform/optimasi gambar saat build, tambahkan JSON-LD untuk produk dan breadcrumb, dan siapkan endpoint/secure flow untuk checkout jika transaksi dikelola sendiri.

Catatan: saya bisa memasukkan ringkasan ini langsung ke checklist migrasi V2 jika Anda setuju.
