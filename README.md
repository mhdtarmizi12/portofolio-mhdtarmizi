# Portofolio Personal — Mhd. Tarmizi, S.Kom

Website portofolio modern, bersih, dan profesional untuk **Mhd. Tarmizi, S.Kom** (Fresh Graduate Teknik Informatika | UI/UX Designer) yang dirancang khusus untuk memikat HRD dan recruiter dalam 10 detik pertama.

Website ini mengacu pada acuan visual utama di [DESIGN.md](file:///c:/portofolio-tarmizi/DESIGN.md) (gaya *Binjan Portfolio*): hangat, minimalis editorial, kanvas kartu ber-border radius 28px di atas latar kuning mustard (`#F0B03A`), aksen 3 warna konsisten (**hijau teal**, **kuning**, **oranye**), serta foto profil berlatar *brush stroke* teal.

---

## 🚀 Fitur & Keunggulan
- **Single Page Smooth Navigation:** Navigasi cepat dengan sticky navbar, scroll-spy indikator aktif, dan mobile drawer menu.
- **Hero Section Memikat:** Judul besar dua baris, efek typing gelar keahlian, badge "Open to Work", surel resmi dengan fitur salin 1-klik, dan badge sarjana S.Kom.
- **Foto Profil Cut-Out + Brush Stroke:** Dilengkapi foto profil transparan di atas coretan kuas SVG artistik.
- **Section "What do I help?":** 3 kartu layanan horizontal dengan ikon lingkaran warna-warni dan statistik riil (IPK 3.58 & 2 pengalaman kerja/magang).
- **Studi Kasus Interaktif (Modal Case Study):** Pratinjau aplikasi pemesanan sewa mobil dan skripsi sistem klinik hewan dengan struktur 4 pilar (*Problem*, *Process*, *Solution*, *Result*).
- **Timeline Pengalaman Dua Sisi:** Garis vertikal tengah dengan dot penanda warna bergantian untuk pekerjaan profesional, magang instansi, dan kepemimpinan organisasi.
- **Pendidikan & Skripsi:** Sorotan khusus untuk gelar Sarjana Komputer (S.Kom) dari Universitas Sains dan Teknologi Indonesia.
- **Keahlian & Alat Kerja:** 3 kartu representatif untuk Hard Skills, Software/Tools (Figma, Canva, Office, Spreadsheet), dan Soft Skills.
- **Kontak & CTA Kuat:** Tombol cepat WhatsApp, surel langsung, LinkedIn, dan formulir pesan dengan fallback otomatis.
- **Aksesibilitas & SEO:** Meta tags Open Graph, tag Twitter Card, semantic HTML, lang="id", dan performa kilat.

---

## 🛠️ Tech Stack
- **Framework:** React 18 (Vite)
- **Styling:** Tailwind CSS v3
- **Animasi:** Framer Motion
- **Icons:** Lucide React
- **Tipografi:** Google Fonts (Outfit & Caveat)
- **Deployment Ready:** Vercel (disertai `vercel.json`)

---

## 📁 Struktur Folder Proyek
```text
portofolio-tarmizi/
├── public/
│   ├── favicon.svg             # Favicon modern bergaya monogram
│   ├── profile.png             # Foto setengah badan tanpa background (cutout)
│   ├── profile-original.jpeg   # Foto asli cadangan
│   └── cv-mhd-tarmizi.pdf      # Berkas CV resmi untuk diunduh pengunjung
├── src/
│   ├── assets/                 # Aset grafik pendukung
│   ├── components/
│   │   ├── BrushStroke.jsx     # SVG coretan kuas hijau teal
│   │   ├── Button.jsx          # Tombol reusable (solid, outline, orange, link)
│   │   ├── CarRentalMockup.jsx # Mockup visual UI/UX aplikasi sewa mobil
│   │   ├── CaseStudyModal.jsx  # Modal studi kasus pop-up lengkap
│   │   ├── ClinicWebMockup.jsx # Mockup visual dashboard skripsi klinik hewan
│   │   ├── IconCircle.jsx      # Lingkaran ikon warna-warni (teal, yellow, orange)
│   │   ├── Navbar.jsx          # Sticky navbar dengan scroll-spy & tombol WA
│   │   ├── NavPill.jsx         # Indikator navigasi berbentuk pill
│   │   ├── SectionHeading.jsx  # Heading section terstandarisasi
│   │   ├── Stat.jsx            # Angka statistik besar + label
│   │   └── Toast.jsx           # Notifikasi salin clipboard / pesan
│   ├── data/
│   │   └── data.js             # SUMBER SEMUA KONTEN (cukup edit di sini)
│   ├── sections/
│   │   ├── Hero.jsx            # Section pengantar & visual pertama
│   │   ├── Services.jsx        # "Apa yang bisa saya bantu?"
│   │   ├── Projects.jsx        # "Project Terbaru" (kartu berwarna)
│   │   ├── Experience.jsx      # Timeline pengalaman vertikal
│   │   ├── Education.jsx       # Kartu pendidikan formal & skripsi
│   │   ├── Skills.jsx          # Hard skills, tools & soft skills
│   │   ├── Contact.jsx         # Call-to-action & formulir kontak
│   │   └── Footer.jsx          # Footer minimalis
│   ├── App.jsx                 # Pembungkus kanvas kartu besar & frame kuning
│   ├── index.css               # Directive Tailwind & styling scrollbar
│   └── main.jsx                # Entry point aplikasi React
├── index.html                  # HTML template + konfigurasi SEO & Font
├── package.json                # Dependensi & skrip npm
├── tailwind.config.js          # Konfigurasi token warna & font DESIGN.md
├── vite.config.js              # Konfigurasi bundler Vite
└── vercel.json                 # Konfigurasi routing & header deploy Vercel
```

---

## 💻 Cara Menjalankan Secara Lokal

Pastikan Anda telah menginstal **Node.js** (versi 18 ke atas disarankan).

1. Buka terminal di folder proyek ini (`c:\portofolio-tarmizi`):
   ```bash
   cd c:\portofolio-tarmizi
   ```

2. Instal dependensi:
   ```bash
   npm install
   ```

3. Jalankan server pengembangan lokal:
   ```bash
   npm run dev
   ```

4. Buka browser pada alamat yang muncul di terminal (biasanya `http://localhost:3000` atau `http://localhost:5173`).

5. Untuk menguji hasil build produksi secara lokal:
   ```bash
   npm run build
   npm run preview
   ```

---

## 🌐 Cara Deploy ke Vercel

### Opsi 1: Melalui GitHub & Dashboard Vercel (Direkomendasikan)
1. Buat repositori baru di akun [GitHub](https://github.com/) Anda (misalnya `portofolio-tarmizi`).
2. Di terminal, inisialisasi git dan push kode:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Portfolio Mhd. Tarmizi"
   git branch -M main
   git remote add origin https://github.com/<username-github-anda>/portofolio-tarmizi.git
   git push -u origin main
   ```
3. Buka [Vercel](https://vercel.com/) dan masuk menggunakan akun GitHub Anda.
4. Klik **"Add New..."** lalu pilih **"Project"**.
5. Pilih repositori `portofolio-tarmizi` yang baru saja Anda push.
6. Framework Preset akan otomatis mendeteksi **Vite**. Klik tombol **"Deploy"**.
7. Dalam 1-2 menit, website Anda sudah aktif dengan domain gratis (contoh: `portofolio-tarmizi.vercel.app`).

### Opsi 2: Menggunakan Vercel CLI (Langsung dari Terminal)
1. Instal Vercel CLI secara global:
   ```bash
   npm install -g vercel
   ```
2. Jalankan perintah deploy di folder proyek:
   ```bash
   vercel
   ```
3. Ikuti instruksi login di layar:
   - *Set up and deploy?* -> Ketik `y`
   - *Which scope?* -> Pilih akun Anda
   - *Link to existing project?* -> Ketik `n`
   - *What's your project's name?* -> Tekan Enter (default)
   - *In which directory is your code located?* -> Tekan Enter (`./`)
   - *Want to modify settings?* -> Ketik `n`
4. Untuk deploy ke produksi:
   ```bash
   vercel --prod
   ```

---

## ✏️ Panduan Hal yang Perlu Diubah Sendiri

Semua data teks telah dipusatkan di dalam file **`src/data/data.js`** sehingga Anda tidak perlu membongkar komponen HTML atau JSX satu per satu.

Berikut daftar hal yang dapat Anda sesuaikan:

1. **Foto Profil:**
   - Foto transparan Anda saat ini disimpan di `public/profile.png`.
   - Jika Anda memiliki foto baru yang lebih bagus, cukup ganti file `public/profile.png` dengan foto PNG transparan Anda (resolusi rekomendasi: 800x1100 px).
2. **File CV PDF:**
   - File CV Anda tersimpan di `public/cv-mhd-tarmizi.pdf`.
   - Jika di masa mendatang Anda memperbarui isi CV, ganti file tersebut dengan nama yang sama agar tombol "Download CV" otomatis mengunduh versi terbaru.
3. **Link Figma Asli untuk Studi Kasus:**
   - Buka `src/data/data.js` pada bagian `projectsData`.
   - Cari baris `figmaUrl: "https://www.figma.com/" // GANTI DI SINI`.
   - Masukkan link prototipe atau file Figma Anda agar recruiter dapat langsung mengujinya.
4. **Tangkapan Layar (Screenshot) Tambahan:**
   - Jika Anda ingin menampilkan screenshot asli dari Figma ke dalam modal case study alih-alih vector mockup, Anda bisa meletakkan gambarnya di folder `src/assets/` atau `public/` lalu memperbarui komponen `CaseStudyModal.jsx`.

