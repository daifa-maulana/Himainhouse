---
marp: true
theme: gaia
_class: lead
paginate: true
backgroundColor: #fafaf8
color: #141713
style: |
  section {
    font-family: 'Plus Jakarta Sans', sans-serif;
    padding: 48px;
  }
  h1, h2, h3 {
    color: #141713;
  }
  h1 em, h2 em {
    color: #485c44;
    font-style: normal;
  }
  code {
    background: #eef2eb;
    color: #374734;
    padding: 2px 8px;
    border-radius: 6px;
    font-size: 0.85em;
  }
  pre code {
    background: #191c18;
    color: #e5ede2;
    padding: 16px;
    border-radius: 12px;
    font-size: 0.75em;
    display: block;
  }
  .highlight {
    color: #485c44;
    font-weight: 700;
  }
  footer {
    font-size: 14px;
    color: #8e9589;
  }
---

# 🚀 Workshop Web Development
## Membangun Website Portofolio & Hosting Gratis 100% dengan *Git & GitHub*

**Pemateri**: [Nama Anda]  
*Rujukan Materi: Seri Video Web Programming UNPAS (Sandhika Galih)*

---

## 🎯 Target Luaran Hari Ini

Dalam sesi workshop ini, setiap peserta akan:
1. Memahami konsep **Version Control System (Git)**.
2. Melakukan kustomisasi website portofolio modern (*Clean Code*).
3. Mengunggah repositori kode ke **GitHub**.
4. Mengaktifkan **Hosting Gratis 100% via GitHub Pages**.
5. Pulang dengan link portofolio aktif yang live di internet!

---

## ⏰ Agenda & Timeline (Total ~3.5 Jam)

* **Sesi 1 (30m)**: Kustomisasi Template Portofolio di VS Code
* **Sesi 2 (45m)**: Teori & Dasar Git (Terminal & Konfigurasi)
* **Sesi 3 (45m)**: Praktik Siklus Git Lokal (`add`, `commit`, `log`)
* **Sesi 4 (45m)**: Push ke GitHub & Aktivasi GitHub Pages
* **Sesi 5 (20m)**: Showcase & Saling Tukar Link Portofolio

---

## 😱 Tragedi Klasik Sebelum Mengenal Git

Pernahkah kalian menamai file tugas koding seperti ini?
* `portofolio.html`
* `portofolio_revisi.html`
* `portofolio_revisi_final.html`
* `portofolio_revisi_final_bismillah.html`
* `portofolio_FIX_BANGET_YA_ALLAH.html`

> **Masalah**: Boros memori, tidak tahu baris mana yang diubah, dan mustahil kembali ke versi lama dengan rapi jika terjadi error (*bug*).

---

## 🛠️ Solusi: Version Control System (VCS)

* **VCS** adalah sistem yang merekam perubahan pada satu atau sekumpulan berkas dari waktu ke waktu.
* Kita bisa:
  * Melihat riwayat lengkap perubahan kode.
  * Mengetahui siapa yang mengubah, kapan, dan apa alasannya.
  * Melompat kembali ke versi masa lalu secara instan (*Mesin Waktu Koding*).
* **Git** adalah software VCS terpopuler di dunia saat ini.

---

## ⚖️ Git vs GitHub (Jangan Tertukar!)

| Aspek | Git | GitHub |
| :--- | :--- | :--- |
| **Bentuk** | Software / Alat (*Tools*) | Layanan Web / Cloud (*Platform*) |
| **Lokasi** | Berjalan secara **Lokal** di laptop | Berjalan secara **Online** di internet |
| **Koneksi** | Tidak butuh internet | Butuh internet |
| **Fungsi** | Mencatat riwayat snapshot commit | Tempat backup, kolaborasi, & **hosting** |

> **Analogi**: Git itu seperti **Kamera** (mengambil foto snapshot), GitHub itu seperti **Instagram / Google Photos** (tempat membagikannya ke publik).

---

## 💻 Navigasi Terminal Dasar (CLI)

Sebelum menjalankan Git, kuasai 5 perintah navigasi terminal ini:

```bash
pwd              # Print Working Directory (Cek folder saat ini)
ls               # List (Melihat isi folder)
cd nama-folder   # Change Directory (Masuk ke dalam folder)
cd ..            # Naik satu tingkat ke folder atas
clear            # Membersihkan tampilan layar terminal
```

---

## ⚙️ Konfigurasi Identitas Awal (Cukup 1x)

Git harus tahu siapa nama dan email pembuat commit:

```bash
# 1. Atur Nama Lengkap
git config --global user.name "Nama Kamu"

# 2. Atur Alamat Email (Gunakan email yang sama dengan akun GitHub)
git config --global user.email "emailkamu@gmail.com"

# 3. Verifikasi Konfigurasi
git config --list
```

---

## 🔄 Tiga Area Kerja Git (Konsep Terpenting!)

```text
+-----------------------+      git add .     +------------------+     git commit     +-------------------+
|   Working Directory   | -----------------> |   Staging Area   | -----------------> |    Repository     |
| (File yang diedit)    |                    |  (Daftar siap catat) |                 | (Snapshot abadi)  |
+-----------------------+                    +------------------+                    +-------------------+
```

1. **Working Directory**: File yang sedang kamu buka dan edit di VS Code.
2. **Staging Area**: Tempat mengumpulkan file yang siap direkam.
3. **Repository (Local)**: Arsip snapshot permanen di folder `.git`.

---

## ⚡ Praktik 1: Git Init, Add, & Commit

Buka folder proyek portofolio di terminal, lalu jalankan:

```bash
# 1. Inisialisasi Git di folder proyek
git init

# 2. Periksa status file (merah = belum distage)
git status

# 3. Pindahkan semua file ke Staging Area (berubah jadi hijau)
git add .

# 4. Rekam snapshot permanen pertama
git commit -m "Initial commit portofolio Daifa"
```

---

## 📜 Praktik 2: Memeriksa Riwayat Waktu

Bagaimana cara memastikan perubahan kita sudah terekam?

```bash
# Melihat log riwayat lengkap
git log

# Melihat log ringkas satu baris per commit
git log --oneline
```

Setiap commit memiliki kode unik (*commit hash*) dan pesan deskripsi yang memudahkan penelusuran di kemudian hari.

---

## 🌿 Konsep Branching (Percabangan)

Branch memungkinkan kita bereksperimen tanpa merusak cabang utama (`main`):

```bash
# 1. Membuat dan berpindah ke cabang baru
git checkout -b fitur-warna
# (atau perintah modern: git switch -c fitur-warna)

# 2. Lakukan perubahan di VS Code, lalu simpan:
git add .
git commit -m "Eksperimen tema warna baru"

# 3. Kembali ke main dan gabungkan jika sudah oke:
git checkout main
git merge fitur-warna
```

---

## ☁️ Menghubungkan Git Lokal ke GitHub (Remote)

1. Buka [github.com](https://github.com/), klik tombol **New Repository**.
2. Beri nama repo (contoh: `my-portfolio`), pilih **Public**, jangan centang README.
3. Hubungkan lewat terminal laptopmu:

```bash
# 1. Pastikan nama cabang adalah 'main'
git branch -M main

# 2. Tambahkan alamat remote GitHub
git remote add origin https://github.com/USERNAME/REPO-ANDA.git

# 3. Kirim kode lokal ke GitHub
git push -u origin main
```

---

## 🌐 Momen Puncak: Hosting Gratis 100% di GitHub Pages

Langkah mengaktifkan website online:
1. Masuk ke halaman repositori di GitHub.
2. Klik tab **Settings** (ikon gerigi) ➔ klik menu **Pages** di sebelah kiri.
3. Pada bagian *Build and deployment > Branch*:
   * Pilih branch **`main`** dan folder **`/ (root)`**.
   * Klik **Save**.
4. Tunggu 1–2 menit, refresh halaman Settings tersebut.
5. Website kamu sudah live di:  
   👉 **`https://<username>.github.io/<nama-repo>/`** 🎉

---

## 🔄 Daily Workflow (Alur Update Sehari-hari)

Setelah website online, bagaimana cara memperbarui isinya di masa depan?
Cukup lakukan **3 Perintah Ajaib** ini di terminal:

```bash
# 1. Masukkan file yang diubah
git add .

# 2. Buat catatan snapshot revisi
git commit -m "Update foto profil dan proyek baru"

# 3. Kirim ke GitHub
git push
```
*Dalam ~60 detik, website online kamu akan otomatis ter-update!*

---

## 🏆 Kesimpulan & Rangkuman Materi

* **Git**: Mencatat snapshot riwayat koding lokal tanpa takut kehilangan data.
* **GitHub**: Rumah penyimpanan cloud untuk kolaborasi dan pamer karya.
* **GitHub Pages**: Solusi hosting gratis 100% selamanya untuk web statis (HTML/CSS/JS).
* **Portofolio**: Aset digital terpenting mahasiswa untuk melamar kerja dan magang.

---

# 💬 Q & A / Sesi Tanya Jawab
### Silakan bagikan link portofolio Anda di grup kelas! 🚀

*Terima Kasih & Selamat Berkarya!*
