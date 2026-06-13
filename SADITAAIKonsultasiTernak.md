# SADITA AI Konsultasi Ternak

## Ringkasan Ide

SADITA AI Konsultasi Ternak adalah fitur konsultasi awal berbasis AI untuk membantu peternak memahami gejala ternak, menyiapkan data konsultasi, mendapatkan arahan awal, dan menemukan produk SADITA yang relevan.

Fitur ini tidak diposisikan sebagai pengganti dokter hewan. AI berperan sebagai asisten awal dan product advisor yang membantu peternak sebelum diarahkan ke dokter hewan, sales, atau admin SADITA jika kasus membutuhkan penanganan lebih lanjut.

## Tujuan Produk

- Membantu peternak pemula memahami gejala ternak dengan bahasa sederhana.
- Mengurangi kebingungan saat memilih obat, vitamin, premix, atau desinfektan.
- Mengarahkan pengguna ke produk SADITA yang relevan berdasarkan gejala.
- Mengumpulkan data awal sebelum konsultasi manusia.
- Meningkatkan kepercayaan pengguna terhadap SADITA sebagai pendamping peternak, bukan hanya toko produk.

## Flow Pengguna

1. Pengguna membuka halaman Konsultasi AI.
2. Pengguna memilih jenis ternak, misalnya ayam, sapi, kambing, ikan, atau udang.
3. Pengguna menulis keluhan, contoh:
   - Ayam saya muntah dan tidak mau makan.
   - Ayam broiler ngorok umur 18 hari.
   - Sapi saya lemas dan nafsu makan turun.
4. AI menanyakan data lanjutan:
   - Umur atau bobot ternak.
   - Jumlah populasi.
   - Jumlah ternak yang terdampak.
   - Sejak kapan gejala muncul.
   - Kondisi kandang.
   - Riwayat vaksin atau obat.
   - Lokasi kandang.
5. AI memberi arahan awal:
   - Kemungkinan faktor yang perlu dicek.
   - Tindakan awal yang aman.
   - Kapan harus menghubungi dokter hewan.
   - Kategori produk yang relevan.
   - Produk SADITA terkait jika tersedia.
6. Pengguna diarahkan ke:
   - Lihat Produk.
   - Tanya Sales.
   - Buat Pesanan.
   - Konsultasi dokter hewan atau tim teknis.

## Posisi AI

AI harus disebut sebagai:

> Asisten konsultasi awal kesehatan ternak dan produk SADITA.

AI tidak boleh mengklaim sebagai dokter hewan, tidak boleh memastikan diagnosis final, dan tidak boleh memberi instruksi medis berisiko tanpa konteks teknis yang cukup.

Contoh bahasa yang aman:

> Berdasarkan gejala yang Anda sebutkan, kemungkinan yang perlu diperhatikan adalah gangguan pernapasan, kualitas kandang, atau infeksi sekunder. Untuk memastikan penyebabnya, sebaiknya konsultasi dengan dokter hewan atau tim teknis SADITA.

Hindari bahasa seperti:

> Ternak Anda pasti terkena penyakit X.

## Batasan Topik

AI hanya boleh menjawab topik berikut:

- Kesehatan ternak.
- Gejala ternak.
- Obat, vitamin, premix, desinfektan, dan produk peternakan.
- Produk dan layanan SADITA.
- Dosis umum berdasarkan knowledge base.
- Pengiriman dan pemesanan produk.
- Persiapan data sebelum konsultasi dokter hewan atau sales.

Jika pengguna bertanya di luar topik, AI harus menolak dengan sopan.

Contoh jawaban:

> Maaf, saya hanya bisa membantu pertanyaan seputar kesehatan ternak, gejala ternak, produk peternakan, dosis umum, dan layanan SADITA.

## Guardrail Medis

AI harus melakukan eskalasi jika menemukan kondisi seperti:

- Kematian ternak meningkat cepat.
- Ternak sulit bernapas.
- Ternak tidak bisa berdiri.
- Dugaan wabah.
- Gejala menyebar cepat dalam populasi.
- Muntah atau diare parah.
- Kondisi ternak memburuk setelah pemberian obat.

Contoh jawaban eskalasi:

> Kondisi ini perlu ditangani cepat. Pisahkan ternak yang sakit, catat jumlah yang terdampak, dan segera hubungi dokter hewan atau tim SADITA untuk pemeriksaan lebih lanjut.

## Rekomendasi Produk

AI boleh memberi rekomendasi produk hanya jika berbasis data produk SADITA atau knowledge base.

Format rekomendasi produk:

- Nama produk.
- Kategori produk.
- Kegunaan umum.
- Catatan bahwa dosis dan pemakaian perlu dikonfirmasi.
- Tombol Lihat Produk.
- Tombol Tanya Sales.

Contoh:

> Untuk gejala ngorok pada ayam, produk kategori pernapasan atau antibiotik mungkin relevan. Salah satu produk yang tersedia adalah Cyprotil 250 mg. Namun pemilihan produk dan dosis perlu disesuaikan dengan umur, bobot, populasi, dan kondisi lapangan.

## Arsitektur Sistem

### Laravel Backend

Laravel digunakan untuk:

- Menyimpan user/session.
- Menyimpan riwayat konsultasi.
- Menghubungkan frontend dengan OpenAI API.
- Mengambil data produk dari database.
- Mengelola knowledge base.
- Mengatur dashboard admin.
- Mengatur handoff ke sales atau dokter hewan.

### AI Engine

Gunakan OpenAI API untuk menjalankan percakapan AI.

Rekomendasi awal:

- Gunakan prompt system yang membatasi topik.
- Gunakan knowledge base atau RAG untuk data produk dan artikel teknis.
- Jangan langsung fine-tuning pada tahap awal.

### Knowledge Base

Knowledge base berisi:

- Data produk SADITA.
- Kategori produk.
- Komposisi produk.
- Indikasi umum.
- Aturan pakai umum.
- Artikel penyakit ternak.
- SOP konsultasi.
- FAQ.
- Batasan jawaban AI.
- Daftar kondisi darurat.

### Dashboard Admin

Dashboard admin sebaiknya memiliki fitur:

- Upload dokumen knowledge.
- Tambah dan edit produk.
- Tambah FAQ.
- Tambah daftar gejala dan penyakit umum.
- Atur batasan jawaban AI.
- Lihat riwayat konsultasi.
- Tandai jawaban AI yang salah atau kurang tepat.
- Tentukan kapan AI harus eskalasi ke dokter, sales, atau admin.

## Data Yang Perlu Dikumpulkan Saat Konsultasi

- Jenis ternak.
- Umur atau bobot.
- Jumlah populasi.
- Jumlah ternak yang terdampak.
- Gejala utama.
- Lama gejala.
- Riwayat vaksin.
- Riwayat obat yang sudah diberikan.
- Kondisi kandang.
- Pakan dan air minum.
- Lokasi kandang.
- Foto atau video jika nanti sistem mendukung upload.

## Tahapan Implementasi

### Phase 1: Frontend Mockup

- Halaman Konsultasi AI.
- Chat UI.
- Pilih jenis ternak.
- Input gejala.
- Quick prompt.
- Simulasi guardrail topik.
- Card rekomendasi produk.

### Phase 2: Backend Laravel dan OpenAI

- Endpoint konsultasi AI.
- Integrasi OpenAI API.
- Simpan riwayat chat.
- Batasi topik dengan system prompt.
- Tambah logging untuk audit jawaban.

### Phase 3: Knowledge Base

- Upload dokumen dari dashboard.
- Hubungkan AI ke knowledge base.
- Jawaban AI berbasis dokumen SADITA.
- Update knowledge tanpa melatih ulang model.

### Phase 4: Product Recommendation

- Hubungkan gejala ke kategori produk.
- Ambil produk dari database.
- Tampilkan produk terkait di chat.
- Tambah tombol Lihat Produk dan Buat Pesanan.

### Phase 5: Human Handoff

- Eskalasi ke sales.
- Eskalasi ke dokter hewan.
- Kirim ringkasan chat ke admin.
- Buat tiket konsultasi.

## Nilai Inovasi Untuk SADITA

Fitur ini bisa menjadikan SADITA bukan hanya toko produk peternakan, tetapi platform pendamping peternak.

Keunggulan utamanya:

- Peternak bisa bertanya kapan saja.
- Peternak pemula lebih mudah memahami gejala.
- Sales menerima data awal yang lebih lengkap.
- Produk SADITA lebih mudah ditemukan berdasarkan masalah nyata di kandang.
- Proses konsultasi dan pemesanan menjadi lebih cepat.

## Catatan Penting

AI harus selalu memberi disclaimer yang jelas:

> Informasi ini adalah arahan awal dan tidak menggantikan diagnosis dokter hewan. Untuk kasus berat atau gejala yang memburuk, segera hubungi dokter hewan atau tim teknis SADITA.

## Kesimpulan

SADITA AI Konsultasi Ternak layak dikembangkan sebagai fitur inti V2. Pendekatan terbaik adalah memulai dari frontend dan simulasi flow, lalu lanjut ke backend Laravel, OpenAI API, knowledge base, rekomendasi produk, dan handoff manusia.

