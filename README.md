# DAIFA — Personal Portfolio & Web Development Teaching Kit

Repositori website portofolio profesional berbasis **HTML5, CSS3, dan Vanilla JavaScript murni**. Proyek ini dirancang dengan standar industri internasional (*clean architecture, accessibility, & high performance*) dan berfungsi ganda sebagai **materi ajar (*teaching kit*) web development** yang sangat mudah dipahami dan dijelaskan oleh pemateri/instruktur.

> 📊 **SLIDE PRESENTASI SIAP PAKAI**: Buka berkas [materi/SLIDES_WORKSHOP.md](materi/SLIDES_WORKSHOP.md) untuk slide presentasi workshop (bisa langsung dijalankan atau diekspor ke PowerPoint/PDF via Marp).  
> 🚀 **MODUL WORKSHOP LENGKAP**: Buka berkas [materi/MODUL_WORKSHOP_GIT_GITHUB.md](materi/MODUL_WORKSHOP_GIT_GITHUB.md) untuk modul lengkap materi **Git, GitHub, & Hosting Gratis 100% via GitHub Pages** (Rangkuman Seri Video WPU - Sandhika Galih).  
> 📘 **Buku Panduan Ajar**: Tersedia dokumen [materi/PANDUAN_PEMBELAJARAN.md](materi/PANDUAN_PEMBELAJARAN.md) yang memuat silabus HTML/CSS/JS, lembar kerja siswa, tantangan coding bertingkat, dan FAQ di kelas.

---

## 📁 Struktur Berkas

```text
DAIFA_Portfolio_Layout_Refined/
├── index.html                    # Dokumen semantik HTML5 dengan modul ajar terkomentari (Landing page)
├── README.md                     # Dokumentasi repositori & glosarium istilah web lengkap
├── assets/
│   ├── css/
│   │   └── style.css             # 15 modul CSS terstruktur (Design tokens, glass dock, layout)
│   ├── js/
│   │   └── script.js             # 7 modul Vanilla JS murni (< 7 KB, nol dependensi)
│   └── images/
│       ├── daifa.png             # Foto avatar ilustrasi Daifa (Batik sage green)
│       └── README.md             # Petunjuk format & resolusi aset gambar
└── materi/                       # 📚 FOLDER DOKUMEN & MATERI WORKSHOP
    ├── SLIDES_WORKSHOP.md        # Slide presentasi visual workshop (Marp / PPTX / PDF)
    ├── MODUL_WORKSHOP_GIT_GITHUB.md # Modul workshop lengkap: Git, GitHub & GitHub Pages (Rujukan WPU)
    └── PANDUAN_PEMBELAJARAN.md   # Buku panduan instruktur, lembar kerja siswa, & coding challenge
```

---

## 📖 Kamus & Glosarium Istilah Web Development (Web Tech Glossary)

Glosarium ini dibuat khusus untuk memudahkan **pemateri saat menjelaskan konsep** dan **peserta saat mempelajari istilah teknis**:

### 1. Istilah HTML & Struktur Web
* **Semantic HTML (HTML Semantik)**: Penggunaan tag HTML yang memiliki makna sesuai fungsinya (misal `<nav>` untuk navigasi, `<main>` untuk konten inti, `<article>` untuk kartu proyek), bukan sekadar menggunakan `<div>` untuk semua hal (*div soup*). Membantu SEO dan aksesibilitas.
* **Viewport (`<meta name="viewport">`)**: Tag instruksi kepada browser agar lebar halaman menyesuaikan dengan lebar fisik layar perangkat pengguna (*responsive behavior*).
* **Accessibility / a11y (Aksesibilitas Web)**: Praktik memastikan website dapat diakses dengan nyaman oleh semua orang, termasuk penyandang disabilitas (tunanetra pengguna *screen reader*, pengguna navigasi keyboard saja).
* **Skip Link**: Tautan tersembunyi di awal halaman yang hanya terlihat saat tombol `Tab` ditekan. Berfungsi agar pengguna keyboard dapat langsung melompat melewati menu navigasi menuju konten utama.
* **DOM (Document Object Model)**: Representasi pohon objek dari halaman web yang dibaca oleh browser. JavaScript menggunakan DOM untuk mengubah teks, gaya, atau struktur halaman secara dinamis.

### 2. Istilah CSS & Desain Antarmuka
* **CSS Custom Properties / Variables (`:root`)**: Variabel global dalam CSS (misal `--accent: #485c44;`) yang memungkinkan pengelolaan nilai warna/ukuran terpusat. Mengubah satu baris variabel akan memperbarui seluruh elemen yang menggunakannya.
* **Design Tokens**: Nilai-nilai atomik desain (seperti palet warna, skala tipografi, radius sudut) yang disepakati untuk menjaga konsistensi visual di seluruh produk digital.
* **Flexbox (Flexible Box)**: Model tata letak CSS 1 dimensi (sebaris horizontal atau sekolom vertikal). Sangat ideal untuk komponen seperti menu navigasi dan baris tombol.
* **CSS Grid**: Model tata letak CSS 2 dimensi (baris dan kolom sekaligus). Sangat ideal untuk tata letak kisi-kisi kartu (*card grid*).
* **Fluid Typography (`clamp()`)**: Fungsi CSS modern (`clamp(min, preferred, max)`) yang membuat ukuran teks otomatis membesar dan mengecil secara halus sesuai lebar layar tanpa perlu menulis banyak *media query*.
* **Glassmorphism / Frosted Glass**: Efek visual permukaan kaca buram menggunakan properti CSS `backdrop-filter: blur(...)` dan `background: rgba(...)` transparan, meniru antarmuka modern seperti macOS/iOS.
* **Specular Reflection**: Teknik pencahayaan digital berupa garis pantulan tipis (*inner shadow*) di tepi atas elemen kaca untuk memberikan ilusi ketebalan kaca optik yang nyata.
* **Breakpoints & Media Queries (`@media`)**: Titik batas ukuran layar (misal `992px` untuk tablet dan `680px` untuk ponsel) di mana tampilan CSS disesuaikan agar tetap proporsional.

### 3. Istilah JavaScript & Logika Interaksi
* **Vanilla JavaScript**: JavaScript murni tanpa bantuan framework atau library luar (seperti jQuery, React, atau Vue). Menghasilkan website yang sangat cepat, ringan, dan bebas masalah dependensi.
* **Event Listener**: Fungsi JavaScript yang "mendengarkan" dan merespons aksi pengguna, seperti klik tombol (*click*), penekanan tombol keyboard (*keydown*), atau pengguliran layar (*scroll*).
* **Clipboard API (`navigator.clipboard`)**: Fitur modern browser untuk membaca atau menyalin teks langsung ke papan klip (*clipboard*) perangkat pengguna secara aman.
* **Intersection Observer API**: Fitur browser canggih untuk mendeteksi kapan suatu elemen masuk ke dalam area pandang layar pengguna (*viewport*). Digunakan untuk animasi kemunculan halus (*scroll reveal*) dan *scrollspy*.
* **Asynchronous Script (`defer`)**: Atribut pemanggilan file JavaScript agar browser mengunduh skrip di latar belakang tanpa menghambat pembacaan HTML, sehingga website muncul instan di layar.
* **Progressive Enhancement**: Filosofi pembuatan web di mana seluruh teks dan konten tetap bisa dibaca secara utuh meskipun JavaScript di browser pengguna dimatikan atau lambat dimuat.

### 4. Istilah Performa & Karir IT
* **Clean Code**: Standar penulisan kode yang rapi, terstruktur, mudah dibaca (*readable*), mudah dirawat (*maintainable*), dan terdokumentasi dengan baik.
* **Core Web Vitals**: Tiga metrik performa resmi dari Google (LCP, FID/INP, CLS) untuk mengukur kecepatan muat, responsivitas, dan stabilitas visual halaman web.
* **Technical SEO**: Optimasi aspek teknis website (kecepatan, struktur HTML, metadata) agar mesin pencari (seperti Googlebot) dapat merayapi (*crawling*) dan mengindeks website secara maksimal.
* **Separation of Concerns**: Prinsip pemisahan tanggung jawab kode: HTML untuk konten/struktur, CSS untuk gaya/tampilan, dan JavaScript untuk perilaku/interaksi.

---

## 🎓 Panduan Pemateri (Teaching Guide & Lesson Plan)

Proyek ini sangat direkomendasikan untuk sesi pelatihan, perkuliahan, atau *workshop* karena siswa dapat langsung melihat hasil karyanya tanpa kerumitan konfigurasi.

### Rencana Sesi Pembelajaran (Total 90 Menit):

1. **Sesi 1: Kerangka & Semantik HTML5 (20 Menit)**:
   * Menjelaskan Modul 1 sampai Modul 5 pada `index.html`.
   * Membahas mengapa penulisan deskripsi portofolio dalam **Bahasa Inggris profesional** sangat direkomendasikan untuk menembus pasar kerja digital internasional.
2. **Sesi 2: Styling Modern & Desain Kaca (35 Menit)**:
   * Menjelaskan `:root` tokens pada `style.css`.
   * Membandingkan kapan memakai Flexbox (navbar) vs CSS Grid (kartu proyek).
   * Membedah cara membuat navbar kaca mengambang (*frosted glass dock*).
3. **Sesi 3: Interaksi JavaScript Murni (20 Menit)**:
   * Menjelaskan hamburger menu drawer di layar ponsel.
   * Menjelaskan cara kerja tombol "Copy Email Address" via Clipboard API.
   * Mengenalkan `IntersectionObserver` untuk animasi halus tanpa library eksternal.
4. **Sesi 4: Praktik Langsung & "Magic Moments" (15 Menit)**:
   * **Demo 1**: Ganti `--accent` dari `#485c44` ke warna lain; seluruh aksen website berganti seketika.
   * **Demo 2**: Buka DevTools (`F12`), ubah ke tampilan ponsel, perlihatkan transisi grid dan menu drawer.

---

## 🚀 Cara Menjalankan & Memodifikasi

1. **Menjalankan Proyek**:
   * Cukup klik ganda pada `index.html` untuk langsung membukanya di browser apa pun.
2. **Mengganti Alamat Email**:
   * Buka `index.html`, cari bagian `<section class="contact-section">`.
   * Ganti `hello@example.com` pada atribut `href="mailto:..."` dan `data-email="..."` dengan email aktifmu.
3. **Mengganti Gambar Avatar**:
   * Simpan file foto baru ke dalam folder `assets/images/` dan perbarui atribut `src` di `index.html`.
