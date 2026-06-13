# Backend Checklist SADITA V2

Dokumen ini menjelaskan setup backend Laravel dari awal sampai siap dikembangkan, plus daftar modul backend yang dibutuhkan untuk mendukung frontend SADITA V2 yang sudah dibuat: katalog, cart, checkout, order success, gudang, konsultasi AI, dan rekomendasi produk.

Target stack mengikuti struktur proyek saat ini:

- Laravel 11
- Blade + Tailwind untuk frontend server-rendered
- MySQL/MariaDB untuk database utama
- Redis atau database queue untuk job async
- Filament untuk admin panel
- OpenAI API untuk SADITA AI
- Payment manual dulu, lalu opsi Xendit/Midtrans

---

## 1. Status Backend Saat Ini

Folder `laravel-v2/` sudah memiliki pondasi awal:

- `app/Models/Category.php`
- `app/Models/Product.php`
- `app/Models/Review.php`
- `app/Models/CartItem.php`
- `app/Models/Order.php`
- `app/Http/Controllers/HomeController.php`
- `app/Http/Controllers/ProductController.php`
- migrations kategori, produk, review, cart item, order
- `database/seeders/ProductCatalogSeeder.php`
- Blade layout dan halaman mockup dasar

Yang masih perlu dilanjutkan:

- Seeder data produk lengkap.
- Cart backend.
- Checkout backend.
- Order item table.
- Customer/shipping data.
- Gudang dan stok per gudang.
- Admin panel.
- SADITA AI backend.
- Payment flow.
- API untuk frontend.
- Testing dan deployment.

---

## 2. Setup Backend Laravel Dari Nol

Gunakan langkah ini jika membuat project Laravel baru dari awal.

### 2.1 Prasyarat

- PHP 8.3+
- Composer
- Node.js 18+
- npm atau pnpm
- MySQL/MariaDB
- Git
- Redis opsional untuk queue/cache

### 2.2 Buat Project Laravel

```bash
cd d:\
composer create-project laravel/laravel sadita-v2
cd sadita-v2
```

### 2.3 Copy Blueprint Dari Repo Ini

Jika memakai blueprint yang sudah ada:

```bash
copy /E d:\sadita.id-v2\laravel-v2\* d:\sadita-v2\
```

Atau copy manual:

- `app/Models/`
- `app/Http/Controllers/`
- `database/migrations/`
- `database/seeders/`
- `resources/views/`
- `resources/css/`
- `resources/js/`
- `routes/web.php`
- `tailwind.config.js`
- `postcss.config.js`
- `vite.config.js`
- `package.json`

### 2.4 Install Dependency

```bash
composer install
npm install
```

### 2.5 Setup Environment

```bash
copy .env.example .env
php artisan key:generate
```

Isi `.env` minimal:

```env
APP_NAME=SADITA
APP_ENV=local
APP_DEBUG=true
APP_URL=http://localhost:8000

DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=sadita_v2
DB_USERNAME=root
DB_PASSWORD=

QUEUE_CONNECTION=database
CACHE_STORE=database
SESSION_DRIVER=database

OPENAI_API_KEY=
OPENAI_MODEL=

PAYMENT_MODE=manual
MIDTRANS_SERVER_KEY=
MIDTRANS_CLIENT_KEY=
MIDTRANS_IS_PRODUCTION=false
XENDIT_SECRET_KEY=

WHATSAPP_ADMIN_NUMBER=6281234567890
```

### 2.6 Buat Database

```sql
CREATE DATABASE sadita_v2 CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
```

### 2.7 Jalankan Migration dan Seeder

```bash
php artisan migrate --seed
```

Jika perlu reset:

```bash
php artisan migrate:fresh --seed
```

### 2.8 Jalankan Development Server

Terminal 1:

```bash
npm run dev
```

Terminal 2:

```bash
php artisan serve
```

Buka:

```text
http://localhost:8000
```

---

## 3. Struktur Backend Yang Direkomendasikan

```text
app/
├── Http/
│   ├── Controllers/
│   │   ├── HomeController.php
│   │   ├── ProductController.php
│   │   ├── CategoryController.php
│   │   ├── CartController.php
│   │   ├── CheckoutController.php
│   │   ├── OrderController.php
│   │   ├── StoreController.php
│   │   ├── AiConsultationController.php
│   │   └── PaymentWebhookController.php
│   ├── Requests/
│   │   ├── StoreCartItemRequest.php
│   │   ├── CheckoutRequest.php
│   │   ├── AiConsultationRequest.php
│   │   └── PaymentWebhookRequest.php
│   └── Resources/
│       ├── ProductResource.php
│       ├── CartResource.php
│       ├── OrderResource.php
│       └── AiConsultationResource.php
├── Models/
│   ├── Product.php
│   ├── Category.php
│   ├── Review.php
│   ├── Warehouse.php
│   ├── ProductStock.php
│   ├── Cart.php
│   ├── CartItem.php
│   ├── Order.php
│   ├── OrderItem.php
│   ├── Customer.php
│   ├── Payment.php
│   ├── AiConsultation.php
│   ├── AiMessage.php
│   └── KnowledgeDocument.php
├── Services/
│   ├── CartService.php
│   ├── CheckoutService.php
│   ├── InventoryService.php
│   ├── PaymentService.php
│   ├── AiConsultationService.php
│   └── ProductRecommendationService.php
└── Jobs/
    ├── SendOrderNotificationJob.php
    ├── SyncKnowledgeDocumentJob.php
    └── ProcessAiConsultationJob.php
```

---

## 4. Database Checklist

### 4.1 Catalog

- [x] `categories`
- [x] `products`
- [x] `reviews`
- [ ] `product_images`
- [ ] `product_variants`
- [ ] `product_indications`
- [ ] `product_documents`
- [ ] `product_related`

Minimal field `products` yang dibutuhkan frontend:

- `id`
- `category_id`
- `name`
- `slug`
- `description`
- `short_description`
- `composition`
- `indication`
- `usage_instruction`
- `dosage`
- `withdrawal_time`
- `registration_number`
- `price`
- `compare_at_price`
- `image`
- `status`
- `is_featured`
- `sort_order`

### 4.2 Warehouse dan Stock

- [ ] `warehouses`
- [ ] `product_stocks`

Minimal field `warehouses`:

- `id`
- `name`
- `slug`
- `code`
- `address`
- `city`
- `province`
- `phone`
- `whatsapp`
- `service_area`
- `is_active`

Minimal field `product_stocks`:

- `id`
- `product_id`
- `warehouse_id`
- `stock`
- `reserved_stock`
- `low_stock_threshold`
- `updated_at`

### 4.3 Cart

- [x] `cart_items` awal
- [ ] `carts`
- [ ] cart session token
- [ ] cart expiration

Minimal field `carts`:

- `id`
- `session_id`
- `user_id` nullable
- `warehouse_id`
- `status`
- `expires_at`

Minimal field `cart_items`:

- `id`
- `cart_id`
- `product_id`
- `variant_id` nullable
- `qty`
- `price_snapshot`
- `product_name_snapshot`
- `product_pack_snapshot`

### 4.4 Checkout dan Order

- [x] `orders` awal
- [ ] `order_items`
- [ ] `order_status_histories`
- [ ] `payments`
- [ ] `shipping_quotes`

Frontend saat ini butuh field:

- ID pesanan
- tanggal pemesanan
- informasi sales
- nama lengkap
- No WhatsApp pemesan
- alamat pengiriman
- catatan lainnya
- payment method
- status menunggu konfirmasi admin
- subtotal produk
- ongkir dikonfirmasi admin

Minimal field `orders`:

- `id`
- `order_number`
- `order_date`
- `customer_name`
- `customer_whatsapp`
- `shipping_address`
- `notes`
- `sales_name`
- `warehouse_id`
- `payment_method`
- `payment_status`
- `order_status`
- `subtotal`
- `shipping_cost`
- `total`
- `admin_notes`

Minimal field `order_items`:

- `id`
- `order_id`
- `product_id`
- `variant_id` nullable
- `product_name_snapshot`
- `product_pack_snapshot`
- `price`
- `qty`
- `subtotal`

### 4.5 SADITA AI

- [ ] `ai_consultations`
- [ ] `ai_messages`
- [ ] `knowledge_documents`
- [ ] `knowledge_chunks`
- [ ] `ai_product_recommendations`

Minimal field `ai_consultations`:

- `id`
- `session_id`
- `customer_name` nullable
- `customer_whatsapp` nullable
- `animal_type`
- `age_or_weight`
- `population`
- `affected_count`
- `symptoms`
- `duration`
- `location`
- `severity`
- `summary`
- `handoff_status`
- `created_at`

Minimal field `ai_messages`:

- `id`
- `ai_consultation_id`
- `role`
- `content`
- `metadata`
- `created_at`

Minimal field `knowledge_documents`:

- `id`
- `title`
- `type`
- `file_path`
- `status`
- `uploaded_by`
- `last_indexed_at`

---

## 5. Backend Module Checklist

### 5.1 Product Catalog

- [ ] Product listing dari database.
- [ ] Search berdasarkan nama, kategori, gejala, tag, indikasi.
- [ ] Filter kategori.
- [ ] Filter harga.
- [ ] Filter jenis ternak.
- [ ] Sort popular, harga rendah, harga tinggi, stok.
- [ ] Detail produk slug-based.
- [ ] Related products.
- [ ] Product image gallery.
- [ ] Review produk.
- [ ] JSON-LD Product schema.

Endpoint yang dibutuhkan:

```text
GET /toko/katalog
GET /toko/produk/{slug}
GET /api/products
GET /api/products/{slug}
GET /api/categories
```

### 5.2 Warehouse

- [ ] Pilih gudang.
- [ ] Simpan gudang terpilih ke session.
- [ ] Harga/stok mengikuti gudang.
- [ ] Estimasi kirim berdasarkan area layanan.

Endpoint:

```text
GET /toko
POST /toko/select-warehouse
GET /api/warehouses
GET /api/warehouses/{warehouse}/stocks
```

### 5.3 Cart

- [ ] Add to cart backend.
- [ ] Update quantity.
- [ ] Remove item.
- [ ] Clear cart.
- [ ] Sync cart dari localStorage frontend ke backend.
- [ ] Validasi stok sebelum checkout.

Endpoint:

```text
GET /api/cart
POST /api/cart/items
PATCH /api/cart/items/{item}
DELETE /api/cart/items/{item}
DELETE /api/cart
POST /api/cart/sync
```

### 5.4 Checkout dan Order

- [ ] Validasi nama lengkap.
- [ ] Validasi WhatsApp Indonesia.
- [ ] Validasi alamat lengkap.
- [ ] Generate order number.
- [ ] Snapshot harga dan nama produk.
- [ ] Simpan order item.
- [ ] Set status `pending_admin_confirmation`.
- [ ] Kirim notifikasi ke admin/sales.
- [ ] Redirect ke order success.
- [ ] Halaman order detail berdasarkan order number.

Endpoint:

```text
GET /checkout
POST /checkout
GET /order/{order_number}
GET /api/orders/{order_number}
```

Status order:

```text
pending_admin_confirmation
confirmed
waiting_payment
paid
processing
shipped
completed
cancelled
```

Status payment:

```text
unpaid
waiting_confirmation
paid
failed
refunded
```

### 5.5 Payment

Rekomendasi flow tahap awal:

- Default: konfirmasi admin dulu.
- Admin cek stok, ongkir, dan total final.
- Admin kirim instruksi pembayaran.
- Backend simpan payment method pilihan user.

Pilihan payment:

- Manual transfer.
- QRIS manual.
- COD area tertentu.
- Xendit Invoice jika flow tetap admin-confirmed.
- Midtrans Snap jika checkout langsung bayar otomatis.

Checklist payment:

- [ ] Payment model.
- [ ] Payment status.
- [ ] Manual payment instruction.
- [ ] Upload bukti transfer.
- [ ] Admin verify payment.
- [ ] Payment gateway abstraction.
- [ ] Webhook endpoint.
- [ ] Signature validation webhook.
- [ ] Payment audit log.

Endpoint:

```text
POST /orders/{order}/payments/manual-proof
POST /webhooks/xendit
POST /webhooks/midtrans
```

### 5.6 SADITA AI Consultation

- [ ] Backend endpoint untuk chat AI.
- [ ] Simpan consultation session.
- [ ] Simpan message history.
- [ ] Guardrail topik ternak/produk SADITA.
- [ ] Refusal untuk topik luar domain.
- [ ] Severity detection.
- [ ] Handoff ke admin/dokter/sales.
- [ ] Product recommendation dari database.
- [ ] Knowledge base upload dari admin.
- [ ] Retrieval dari knowledge base.
- [ ] Audit log jawaban AI.

Endpoint:

```text
GET /ai-konsultasi
POST /api/ai/consultations
GET /api/ai/consultations/{id}
POST /api/ai/consultations/{id}/messages
POST /api/ai/consultations/{id}/handoff
GET /api/ai/knowledge-documents
POST /api/ai/knowledge-documents
```

Guardrail wajib:

- AI hanya menjawab seputar ternak, gejala, produk peternakan, dosis umum, dan layanan SADITA.
- AI tidak boleh memastikan diagnosis final.
- AI harus eskalasi untuk kasus darurat.
- AI harus menyebutkan bahwa informasi adalah arahan awal, bukan pengganti dokter hewan.

### 5.7 Admin Panel

Rekomendasi: Filament.

Checklist resource admin:

- [ ] ProductResource
- [ ] CategoryResource
- [ ] WarehouseResource
- [ ] ProductStockResource
- [ ] OrderResource
- [ ] PaymentResource
- [ ] ReviewResource
- [ ] AiConsultationResource
- [ ] KnowledgeDocumentResource
- [ ] UserResource

Fitur admin wajib:

- [ ] CRUD produk.
- [ ] Upload gambar produk.
- [ ] Update stok per gudang.
- [ ] Kelola order.
- [ ] Ubah status order.
- [ ] Verifikasi pembayaran manual.
- [ ] Lihat riwayat konsultasi AI.
- [ ] Upload knowledge document.
- [ ] Tandai jawaban AI bermasalah.

---

## 6. Mapping Frontend Ke Backend

### `index.html`

Backend yang dibutuhkan:

- HomeController.
- Featured categories.
- Featured products.
- Latest articles.
- CTA ke AI consultation.

### `katalog.html`

Backend yang dibutuhkan:

- ProductController index.
- Search API.
- Filter/sort query.
- Category API.
- Stock by warehouse.
- Add to cart API.

### `detail-cyprotil.html`

Backend yang dibutuhkan:

- Product detail by slug.
- Product images.
- Variant/pack selection.
- Reviews.
- Related products.
- Add to cart API.
- Product safety fields: registration, dosage, withdrawal time.

### `checkout.html`

Backend yang dibutuhkan:

- Cart session.
- Checkout validation.
- Order number generation.
- Order item snapshot.
- Warehouse selection.
- Payment method selection.
- Admin notification.

### `order-success.html`

Backend yang dibutuhkan:

- Order detail page.
- Order lookup by `order_number`.
- WhatsApp admin link from warehouse/sales.
- Payment instruction after admin confirmation.

### `ai-konsultasi.html`

Backend yang dibutuhkan:

- AI chat endpoint.
- Conversation persistence.
- Knowledge base retrieval.
- Product recommendation.
- Handoff to admin/sales/dokter.
- AI consultation summary.

### `chat.html`

Backend yang dibutuhkan:

- List consultant/sales/admin.
- Handoff ticket.
- WhatsApp routing.
- Optional live chat integration.

---

## 7. Form Request Validation

### CheckoutRequest

Rules:

```php
[
    'customer_name' => ['required', 'string', 'min:3', 'max:120'],
    'customer_whatsapp' => ['required', 'regex:/^(\\+?62|0)8[0-9]{8,12}$/'],
    'shipping_address' => ['required', 'string', 'min:20', 'max:1000'],
    'sales_name' => ['nullable', 'string', 'max:120'],
    'notes' => ['nullable', 'string', 'max:1000'],
    'payment_method' => ['required', 'in:admin_confirmation,bank_transfer,qris,cod'],
    'warehouse_id' => ['required', 'exists:warehouses,id'],
]
```

### AiConsultationRequest

Rules:

```php
[
    'animal_type' => ['required', 'string', 'max:50'],
    'age_or_weight' => ['nullable', 'string', 'max:100'],
    'population' => ['nullable', 'string', 'max:100'],
    'affected_count' => ['nullable', 'string', 'max:100'],
    'duration' => ['nullable', 'string', 'max:100'],
    'symptoms' => ['required', 'string', 'min:5', 'max:2000'],
    'location' => ['nullable', 'string', 'max:255'],
]
```

---

## 8. API Response Contract

### Product List Response

```json
{
  "data": [
    {
      "id": 1,
      "name": "Cyprotil 250 mg",
      "slug": "cyprotil-250-mg",
      "category": "Pernapasan",
      "price": 125000,
      "stock": 1850,
      "image": "https://example.com/product.jpg",
      "rating": 4.9,
      "reviews_count": 248
    }
  ],
  "meta": {
    "total": 1
  }
}
```

### Cart Response

```json
{
  "data": {
    "items": [
      {
        "id": 10,
        "product_id": 1,
        "name": "Cyprotil 250 mg",
        "qty": 1,
        "price": 125000,
        "subtotal": 125000
      }
    ],
    "subtotal": 125000,
    "total_items": 1
  }
}
```

### Order Response

```json
{
  "data": {
    "order_number": "SDT-20260607-1234",
    "status": "pending_admin_confirmation",
    "payment_status": "unpaid",
    "subtotal": 125000,
    "shipping_cost": null,
    "total": 125000
  }
}
```

### AI Response

```json
{
  "data": {
    "consultation_id": 1,
    "reply": "Berdasarkan gejala yang Anda sebutkan...",
    "severity": "medium",
    "needs_handoff": false,
    "recommended_products": [
      {
        "id": 1,
        "name": "Cyprotil 250 mg",
        "slug": "cyprotil-250-mg"
      }
    ]
  }
}
```

---

## 9. Security Checklist

- [ ] CSRF aktif untuk web form.
- [ ] Rate limit API search, cart, checkout, dan AI.
- [ ] Validasi semua request memakai FormRequest.
- [ ] Sanitasi upload knowledge document.
- [ ] Batasi file upload AI knowledge hanya PDF/DOCX/TXT/CSV sesuai kebutuhan.
- [ ] Validasi webhook payment signature.
- [ ] Jangan simpan API key di database.
- [ ] Jangan expose OpenAI key ke frontend.
- [ ] Audit log perubahan order, payment, dan stock.
- [ ] Role permission admin.
- [ ] Backup database berkala.

---

## 10. Testing Checklist

### Unit Test

- [ ] Product model relationship.
- [ ] CartService add/update/remove.
- [ ] CheckoutService order creation.
- [ ] InventoryService stock validation.
- [ ] PaymentService manual payment status.
- [ ] ProductRecommendationService.
- [ ] AiConsultationService guardrail.

### Feature Test

- [ ] Katalog bisa diakses.
- [ ] Search produk mengembalikan data benar.
- [ ] Add to cart berhasil.
- [ ] Update quantity berhasil.
- [ ] Checkout gagal jika cart kosong.
- [ ] Checkout gagal jika WhatsApp invalid.
- [ ] Checkout berhasil membuat order dan order item.
- [ ] Order detail bisa dilihat.
- [ ] AI menolak pertanyaan di luar topik.
- [ ] AI memberi handoff untuk kasus darurat.

### Browser/E2E Test

- [ ] User pilih gudang.
- [ ] User cari produk.
- [ ] User tambah produk ke cart.
- [ ] User checkout.
- [ ] User melihat order success.
- [ ] User membuka AI konsultasi.
- [ ] User membuat ringkasan konsultasi.

---

## 11. Deployment Checklist

### Server

- [ ] PHP 8.3+.
- [ ] Nginx atau Apache.
- [ ] MySQL/MariaDB.
- [ ] Redis.
- [ ] Supervisor untuk queue worker.
- [ ] SSL aktif.
- [ ] Cron scheduler Laravel.

### Laravel Production Commands

```bash
composer install --no-dev --optimize-autoloader
npm ci
npm run build
php artisan migrate --force
php artisan storage:link
php artisan config:cache
php artisan route:cache
php artisan view:cache
php artisan queue:restart
```

### Queue Worker

```bash
php artisan queue:work --tries=3 --timeout=120
```

### Scheduler

Cron:

```bash
* * * * * cd /path/to/sadita-v2 && php artisan schedule:run >> /dev/null 2>&1
```

---

## 12. Dokumentasi Backend Yang Perlu Dibuat

- [ ] `docs/database-schema.md`
  - ERD dan penjelasan tabel.
- [ ] `docs/api-contract.md`
  - Endpoint, request, response, error format.
- [ ] `docs/order-flow.md`
  - Flow cart, checkout, status order, payment.
- [ ] `docs/payment-flow.md`
  - Manual payment, Xendit/Midtrans, webhook, retry.
- [ ] `docs/ai-consultation.md`
  - Prompt, guardrail, knowledge base, escalation.
- [ ] `docs/admin-panel.md`
  - Role admin, resource Filament, SOP update data.
- [ ] `docs/deployment.md`
  - Setup server, env, queue, scheduler, backup.
- [ ] `docs/security.md`
  - API key, webhook, rate limit, upload security.
- [ ] `docs/testing.md`
  - Cara run test dan coverage target.

---

## 13. Urutan Eksekusi Backend Yang Disarankan

### Sprint 1: Data Produk dan Gudang

- [ ] Rapikan migration produk/kategori.
- [ ] Tambah warehouse dan product stock.
- [ ] Seeder 100+ produk.
- [ ] Product listing dari database.
- [ ] Product detail dari database.

### Sprint 2: Cart dan Checkout

- [ ] Cart backend.
- [ ] Sync cart dari frontend.
- [ ] Checkout backend.
- [ ] Order item snapshot.
- [ ] Order success backend.
- [ ] Notifikasi WhatsApp/admin.

### Sprint 3: Admin Panel

- [ ] Install Filament.
- [ ] Product CRUD.
- [ ] Warehouse/stock CRUD.
- [ ] Order management.
- [ ] Payment manual verification.

### Sprint 4: SADITA AI

- [ ] AI consultation table.
- [ ] AI chat endpoint.
- [ ] Guardrail prompt.
- [ ] Knowledge document upload.
- [ ] Product recommendation.
- [ ] Handoff ticket.

### Sprint 5: Payment dan Production Hardening

- [ ] Payment gateway decision.
- [ ] Manual transfer proof.
- [ ] Xendit invoice atau Midtrans Snap.
- [ ] Webhook.
- [ ] Tests.
- [ ] Deployment.

---

## 14. Definition of Done Backend V1

Backend V1 dianggap siap demo production internal jika:

- [ ] Produk dan kategori sudah dari database.
- [ ] Stok mengikuti gudang.
- [ ] Cart tersimpan backend/session.
- [ ] Checkout membuat order asli.
- [ ] Order success membaca order dari database.
- [ ] Admin bisa melihat dan mengubah status order.
- [ ] Admin bisa update produk dan stok.
- [ ] AI consultation menyimpan riwayat percakapan.
- [ ] AI menolak pertanyaan di luar topik.
- [ ] Dokumentasi API dan database tersedia.
- [ ] Test checkout dan AI guardrail minimal tersedia.

