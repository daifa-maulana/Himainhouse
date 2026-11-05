---
marp: true
theme: gaia
_class: lead
paginate: true
backgroundColor: #fafaf8
color: #141713
style: |
  section {
    font-family: 'Plus Jakarta Sans', -apple-system, sans-serif;
    padding: 42px 48px;
    font-size: 26px;
    line-height: 1.5;
  }
  h1 {
    font-size: 42px;
    color: #141713;
    margin-bottom: 16px;
    line-height: 1.15;
  }
  h2 {
    font-size: 34px;
    color: #141713;
    margin-bottom: 16px;
    line-height: 1.2;
    border-bottom: 2px solid #e2e5dd;
    padding-bottom: 8px;
  }
  h3 {
    font-size: 26px;
    color: #485c44;
    margin-bottom: 10px;
  }
  p, li {
    font-size: 22px;
    color: #3d4239;
  }
  ul, ol {
    margin-top: 8px;
    margin-bottom: 12px;
  }
  li {
    margin-bottom: 6px;
  }
  code {
    background: #eef2eb;
    color: #374734;
    padding: 2px 8px;
    border-radius: 6px;
    font-size: 0.88em;
    font-weight: 600;
  }
  pre {
    background: #191c18;
    padding: 14px 18px;
    border-radius: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  pre code {
    background: transparent;
    color: #e5ede2;
    padding: 0;
    font-size: 0.78em;
    line-height: 1.45;
  }
  .highlight {
    color: #485c44;
    font-weight: 700;
  }
  .box-note {
    background: #eef3eb;
    border-left: 5px solid #485c44;
    padding: 10px 16px;
    border-radius: 4px;
    font-size: 20px;
    margin-top: 10px;
  }
  footer {
    font-size: 13px;
    color: #8e9589;
  }
---

# 🚀 Workshop Git & GitHub Lengkap
## Panduan Dari Nol, Manajemen Repositori, Hingga Hosting Gratis 100%

**Pemateri**: [Nama Anda / Daifa]  
*Rujukan Belajar: Seri Video Web Programming UNPAS (Sandhika Galih)*

---

## 🗺️ Roadmap Workshop Hari Ini

Secara berurutan, kita akan mempelajari:
1. **Konsep**: Apa itu Git & Perbedaannya dengan GitHub
2. **Setup**: Instalasi Git & Konfigurasi Identitas
3. **Local Git**: `git init`, `status`, `add .`, `commit`, dan `log`
4. **Branching**: Percabangan (`branch`) & Penggabungan (`merge`)
5. **Remote GitHub**: Buat repo, `remote add`, `push`, `clone`, & `pull`
6. **Hosting**: Mengaktifkan website live via **GitHub Pages**
7. **Daily Workflow**: Alur kerja update kode sehari-hari

---

## 😱 Masalah Nyata: Drama Revisi File Manual

Sebelum mengenal Git, mahasiswa/developer sering menyimpan revisi seperti ini:
* `index.html`
* `index_revisi.html`
* `index_revisi_final.html`
* `index_revisi_final_bismillah.html`
* `index_revisi_FIX_BANGET_JANGAN_DIUBAH_LAGI.html`

> **Masalah**: Boros memori, tidak tahu apa yang diubah kemarin, dan jika terjadi error, sangat sulit kembali ke versi lama yang normal.

---

## 💡 Apa itu Git? (Version Control System)

* **Git** adalah sistem pengontrol versi (*Version Control System* / VCS) terdistribusi.
* **Fungsi Utama Git**:
  * Mencatat setiap rekam jejak perubahan kode (*snapshot*).
  * Mengetahui siapa yang mengubah, kapan, dan apa alasannya.
  * Berfungsi sebagai **"Mesin Waktu Koding"** — kita bisa melompat kembali ke versi kode kapan pun tanpa takut kehilangan data.
* Diciptakan oleh **Linus Torvalds** pada tahun 2005 (pencipta kernel Linux).

---

## ⚖️ Git vs GitHub (Sering Dikira Sama!)

| Pembeda | Git | GitHub |
| :--- | :--- | :--- |
| **Bentuk** | Software / Aplikasi CLI | Platform Web / Cloud Service |
| **Lokasi** | Berjalan di **laptop lokal** | Berjalan secara **online di internet** |
| **Koneksi** | **Tidak butuh internet** | **Wajib ada internet** |
| **Tugas Utama** | Melacak perubahan file lokal | Menyimpan cadangan, kolaborasi, & **hosting** |

> **Analogi WPU**: Git itu seperti **Kamera** (alat pemotret momen kode), sedangkan GitHub itu seperti **Instagram / Google Photos** (tempat pamer & simpan foto di awan).

---

## 📥 Langkah 1: Instalasi Git

1. Buka situs resmi: **[git-scm.com](https://git-scm.com/)**
2. Unduh versi yang sesuai dengan sistem operasi (Windows / macOS / Linux).
3. Untuk pengguna Windows:
   * Instalasi sudah menyertakan terminal khusus bernama **Git Bash**.
   * Klik *Next* pada semua pengaturan bawaan (default).
4. **Verifikasi Instalasi**: Buka terminal / Git Bash, ketik:
   ```bash
   git --version
   # Output contoh: git version 2.44.0.windows.1
   ```

---

## 💻 Langkah 2: Perintah Dasar Terminal yang Wajib Tahu

Sebelum menjalankan Git, pahami 5 perintah navigasi terminal ini:

```bash
pwd              # Print Working Directory: Cek posisi folder saat ini
ls               # List: Melihat daftar file/folder di posisi aktif
cd nama-folder   # Change Directory: Masuk ke dalam sebuah folder
cd ..            # Mundur 1 tingkat ke folder di atasnya
clear            # Membersihkan layar terminal yang penuh
```

*Tips*: Gunakan tombol `Tab` pada keyboard untuk melengkapi (*auto-complete*) nama folder secara otomatis!

---

## ⚙️ Langkah 3: Konfigurasi Identitas Git (Cukup 1x)

Git wajib mengetahui siapa nama dan email pembuat commit:

```bash
# 1. Daftarkan Nama Lengkapmu
git config --global user.name "Daifa Maulana"

# 2. Daftarkan Email (Samakan dengan email akun GitHub kamu)
git config --global user.email "emailkamu@gmail.com"

# 3. Periksa apakah konfigurasi sudah tersimpan
git config --list
```

<div class="box-note">
Catatan: Parameter <code>--global</code> berarti pengaturan ini berlaku untuk seluruh proyek di komputermu.
</div>

---

## 🏗️ Tiga Area Kerja Git (Konsep Terpenting!)

Git membagi alur penyimpanan kode menjadi **3 Ruangan**:

```text
[ 1. Working Directory ] ---- git add . ----> [ 2. Staging Area ] ---- git commit ----> [ 3. Repository (.git) ]
  (File yang diedit)                            (Daftar siap catat)                        (Snapshot permanen)
```

1. **Working Directory**: File asli yang sedang kamu buka dan edit di VS Code.
2. **Staging Area**: Meja persiapan untuk memilih file mana saja yang ingin dicatat.
3. **Repository (Local)**: Database rahasia di dalam folder `.git` yang menyimpan snapshot abadi.

---

## 📁 Langkah 4: Membuat Repositori Lokal (`git init`)

Buka terminal di dalam folder proyek website portofolio kamu, lalu ketik:

```bash
git init
```

* **Apa yang terjadi?**  
  Git akan membuat sebuah folder tersembunyi bernama `.git`.
* Sekarang, seluruh berkas di folder tersebut resmi **diawasi oleh Git**.
* *Catatan*: `git init` cukup dijalankan **satu kali saja** di awal pembuatan proyek.

---

## 🔍 Langkah 5: Memeriksa Status (`git status`)

Perintah ini adalah kacamata kita untuk melihat apa yang sedang terjadi:

```bash
git status
```

* **Warna Merah (*Untracked files*)**: File baru dibuat atau diedit di *Working Directory*, tapi belum dimasukkan ke *Staging Area*.
* **Warna Hijau (*Changes to be committed*)**: File sudah aman berada di *Staging Area* dan siap direkam menjadi *commit*.

---

## 📥 Langkah 6: Memindahkan File ke Staging Area (`git add`)

Gunakan `git add` untuk memindahkan file dari Working Directory ke Staging Area:

```bash
# Memasukkan SATU file tertentu:
git add index.html

# ATAU Memasukkan SEMUA file dan folder yang berubah sekaligus:
git add .
```

*Tanda titik (`.`) artinya "ambil semua perubahan yang ada di folder ini saat ini".*  
Setelah menjalankan `git add .`, cek lagi dengan `git status` — file akan berubah menjadi hijau!

---

## 📸 Langkah 7: Merekam Snapshot Permanen (`git commit`)

Saat file sudah hijau di Staging Area, rekam menjadi satu titik waktu (*commit*):

```bash
git commit -m "Deskripsi perubahan yang kamu lakukan"
```

* `-m` singkatan dari *message* (pesan).
* Tuliskan pesan yang jelas menerangkan apa yang baru saja kamu ubah.
* **Analogi**: *Commit* itu seperti tombol **Save Checkpoint** pada game petualangan. Kapan pun game over, kita bisa kembali ke checkpoint ini.

---

## 🎨 Standar Commit Profesional: Gitmoji

Gunakan ikon emoji pada pesan commit agar riwayat proyekmu rapi & profesional:

```bash
git commit -m ":tada: Initial commit portofolio"
git commit -m ":lipstick: Update gaya visual glassmorphism navbar"
git commit -m ":memo: Update dokumentasi dan modul workshop"
```

| Emoji | Kode | Kapan Dipakai? |
| :---: | :--- | :--- |
| 🎉 | `:tada:` | Commit pertama / inisialisasi proyek |
| 💄 | `:lipstick:` | Memperbarui tampilan UI / CSS |
| ✨ | `:sparkles:` | Menambah fitur atau halaman baru |
| 📝 | `:memo:` | Menulis atau mengedit dokumentasi/README |
| 🐛 | `:bug:` | Memperbaiki error atau bug tampilan |

---

## 📜 Langkah 8: Melihat Riwayat Waktu (`git log`)

Untuk melihat daftar seluruh checkpoint commit yang pernah kita buat:

```bash
# 1. Menampilkan riwayat lengkap (author, tanggal, ID hash, pesan)
git log

# 2. Menampilkan riwayat ringkas 1 baris per commit (Lebih rapi)
git log --oneline
```

Setiap commit memiliki 7 karakter kode unik (*commit hash*) yang menjadi alamat identitas snapshot tersebut.

---

## 🌿 Langkah 9: Percabangan Kode (`git branch`)

*Branch* (cabang) memungkinkan kita mencoba fitur baru tanpa merusak kode utama:

```bash
# 1. Melihat daftar branch yang ada (tanda bintang * = posisi aktif)
git branch

# 2. Mengubah nama cabang utama menjadi 'main' (standar industri)
git branch -M main

# 3. Membuat cabang baru untuk uji coba
git branch eksperimen-warna
```

---

## 🔀 Langkah 10: Berpindah & Menggabungkan Cabang (`git merge`)

```bash
# 1. Berpindah ke cabang eksperimen
git checkout eksperimen-warna
# (atau perintah modern: git switch eksperimen-warna)

# 2. Buat cabang baru sekaligus langsung pindah:
git checkout -b fitur-kontak

# 3. Jika eksperimen selesai dan bagus, kembali ke main:
git checkout main

# 4. GABUNGKAN (MERGE) perubahan dari cabang eksperimen ke main:
git merge eksperimen-warna
```

---

## ☁️ Langkah 11: Membuat Repositori di Website GitHub

Sekarang kita hubungkan Git lokal di laptop ke cloud GitHub:

1. Buka browser, login ke akun **[github.com](https://github.com/)**.
2. Klik tombol **New** (ikon tanda tambah `+` di kanan atas).
3. Masukkan **Repository name**, contoh: `Himainhouse` atau `my-portfolio`.
4. Pilih visibilitas: **Public**.
5. **PENTING**: **Jangan centang** *Add a README file*, *.gitignore*, atau *license* (karena proyek di laptop kita sudah memilikinya).
6. Klik tombol hijau: **Create repository**.
7. Salin URL HTTPS repositorinya (contoh: `https://github.com/username/repo.git`).

---

## 🔗 Langkah 12: Menghubungkan Lokal ke GitHub (`git remote add`)

Kembali ke terminal laptopmu di dalam folder proyek, jalankan:

```bash
# Menghubungkan repo lokal ke repo GitHub
git remote add origin https://github.com/daifa-maulana/Himainhouse.git

# Memeriksa apakah remote sudah terhubung dengan benar
git remote -v
```

* `remote`: Menandakan repositori online yang berada di internet.
* `origin`: Nama alias/panggilan default untuk alamat GitHub tersebut.

---

## 🚀 Langkah 13: Mengirim Kode ke GitHub (`git push`)

Kirim seluruh snapshot commit dari laptop lokal ke server GitHub:

```bash
git push -u origin main
```

* `push`: Mengunggah commit lokal ke remote server.
* `-u origin main`: Mengatur agar cabang lokal `main` terhubung ke `origin/main`. Untuk push selanjutnya, kamu cukup mengetik `git push` saja!
* *Catatan*: Saat pertama kali menjalankan ini, browser akan membuka jendela login otentikasi GitHub (*Sign in with your browser*).

---

## 📥 Perintah Pelengkap: `git clone` & `git pull`

Bagaimana jika kita ingin mengambil kode dari GitHub?

### 1. `git clone <URL>` (Mengunduh Proyek Baru)
Digunakan saat kamu ingin menyalin seluruh proyek dari GitHub ke komputermu:
```bash
git clone https://github.com/daifa-maulana/Himainhouse.git
```

### 2. `git pull` (Mengambil Update Terbaru)
Digunakan saat teman satu tim melakukan push perubahan baru ke GitHub, dan kamu ingin menyinkronkan laptopmu:
```bash
git pull origin main
```

---

## 🌐 Langkah 14: HOSTING GRATIS 100% di GitHub Pages!

Setelah kode berada di GitHub, aktifkan hosting website online gratis selamanya:

1. Di halaman repositori GitHub kamu, klik tab **Settings** (ikon gerigi).
2. Di bilah menu kiri, klik menu **Pages** (kategori *Code and automation*).
3. Di bagian **Build and deployment > Branch**:
   * Ganti *None* menjadi branch: **`main`**
   * Pastikan folder: **`/ (root)`**
   * Klik tombol **Save**.
4. Tunggu 1–2 menit, lalu refresh halaman tersebut!

---

## 🎉 SELAMAT! Website Portofolio Kamu Sudah Live!

Di bagian atas menu Pages akan muncul kotak hijau bertuliskan:

> **Your site is live at:**  
> 🔗 **`https://daifa-maulana.github.io/Himainhouse/`**

* Website ini **aktif 24 jam**, gratis 100%, memiliki sertifikat keamanan HTTPS resmi, dan dapat diakses dari laptop maupun HP di seluruh dunia!
* Tautan ini siap dipasang di **Bio Instagram, CV, dan LinkedIn** kamu!

---

## 🔄 Daily Workflow (Alur Kerja Sehari-hari)

Mulai hari ini, setiap kali kamu selesai mengedit kode di VS Code, kamu hanya butuh **3 Perintah Ajaib** ini untuk memperbarui website online-mu:

```bash
# 1. Tampung file yang baru diedit
git add .

# 2. Catat apa yang kamu ubah dengan pesan bermakna
git commit -m ":lipstick: Update foto profil dan tambah proyek baru"

# 3. Lempar perubahannya ke GitHub Pages
git push
```

*Dalam 60 detik, website online-mu akan ter-update secara otomatis!*

---

## 📋 Rangkuman Perintah Sakti (Cheat Sheet)

| Perintah Git | Fungsi Singkat |
| :--- | :--- |
| `git init` | Membuat repositori lokal baru |
| `git status` | Mengecek kondisi file (merah/hijau) |
| `git add .` | Menaruh semua file ke Staging Area |
| `git commit -m "pesan"` | Merekam checkpoint snapshot kode |
| `git log --oneline` | Melihat riwayat commit secara ringkas |
| `git branch -M main` | Mengubah nama cabang utama ke main |
| `git remote add origin <url>` | Menghubungkan laptop ke GitHub |
| `git push -u origin main` | Mengunggah kode lokal ke GitHub |
| `git pull` | Menarik update terbaru dari GitHub |
| `git clone <url>` | Mendownload repo dari GitHub ke laptop |

---

# 💬 Sesi Praktik & Tanya Jawab (Q&A)
### Silakan buka laptop masing-masing dan mulai praktikkan langkah demi langkah! 🚀

*Happy Coding & Selamat Menjadi Web Developer!*
