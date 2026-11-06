# DESIGN.md: Spesifikasi Desain Portofolio Mhd. Tarmizi, S.Kom

> Dokumen ini adalah **acuan visual utama (source of truth)** untuk tampilan portofolio. Desain referensi bergaya "Binjan Portfolio": hangat, bersih, banyak whitespace, kartu membulat, aksen warna hijau teal, kuning, dan oranye, dengan tipografi geometris yang tebal.
>
> **Aturan prioritas:** Jika ada konflik dengan prompt sebelumnya (mis. palet biru navy-cyan, glassmorphism, dark mode), **DESIGN.md ini yang menang untuk urusan visual**. Prompt sebelumnya tetap dipakai untuk data/konten, tech stack, struktur kode, SEO, dan deploy.
>
> Tujuan: hasil akhir harus terlihat **sama persis secara gaya dan layout** dengan referensi, tetapi isi kontennya milik Tarmizi.

---

## 1. Karakter Desain (Ringkasan)

- Gaya: **friendly-modern, editorial, minimalis hangat** (bukan gelap/neon/techy).
- Latar halaman luar berwarna **kuning mustard**, konten tampil sebagai **"kanvas" kartu besar** berwarna krem/putih dengan sudut membulat.
- Heading besar, tebal, warna **navy gelap**. Teks isi abu-navy ringan.
- Tiga warna aksen yang dipakai berulang secara konsisten: **hijau teal, kuning, oranye**.
- Foto profil dipotong tanpa background (cut-out) dan ditempatkan di depan **coretan kuas (brush stroke) hijau teal**.
- Ikon di dalam lingkaran berwarna, kartu putih dengan **shadow sangat halus**.
- Tidak ada dark mode (hapus toggle dark/light dari prompt sebelumnya agar tampilan konsisten dengan referensi).

---

## 2. Design Tokens

### 2.1 Warna

| Token | Hex (perkiraan) | Pemakaian |
|---|---|---|
| `--bg-page` | `#F0B03A` | Latar luar halaman (mustard yellow) |
| `--bg-hero` | `#F7F5EA` | Kanvas hero & navbar (krem) |
| `--bg-surface` | `#FFFFFF` | Section putih (What do I help, dll.) |
| `--bg-soft` | `#FBF7EA` | Section dengan gradasi krem lembut (Experience, Works) |
| `--ink` | `#10283A` | Heading, teks utama (navy sangat gelap) |
| `--ink-soft` | `#4A5A66` | Paragraf, deskripsi |
| `--teal` | `#1F6B5C` | Aksen utama: brush stroke, ikon, kartu Web Design, tombol aktif |
| `--yellow` | `#F2B83B` | Aksen: ikon, kartu App Design, dot timeline |
| `--orange` | `#F0643C` | Aksen: link, email, underline, dot timeline, ikon |
| `--line` | `#E4E1D4` | Garis tipis, border halus |

Gradasi latar section: `linear-gradient(180deg, #FFFFFF 0%, #FBF3DC 100%)` (krem hangat di bagian bawah/tepi section).

### 2.2 Tipografi

- **Font utama (heading + body):** geometric sans seperti **"Outfit"** atau **"Urbanist"** (Google Fonts). Fallback: `system-ui, sans-serif`.
- **Font logo (script):** tulisan tangan tipis seperti **"Mrs Saint Delafield"** atau **"Caveat"**, dipakai hanya untuk logo "Tarmizi" di navbar dan footer.

| Elemen | Ukuran desktop | Berat | Catatan |
|---|---|---|---|
| Hero H1 | 64-72px | 700 | line-height 1.1, 2 baris |
| Section H2 | 40-48px | 700 | warna `--ink` |
| H3 kartu | 18-20px | 600 | |
| Body | 16px | 400 | line-height 1.7, warna `--ink-soft` |
| Nav link | 12-13px | 500 | uppercase, letter-spacing 0.08em |
| Stat angka | 48-56px | 700 | |
| Caption / label kecil | 12-13px | 400-500 | |

### 2.3 Radius, Shadow, Spacing

- Radius: kanvas besar `28px`, kartu `20px`, kartu kecil `16px`, pill/tombol `999px`.
- Shadow kartu: `0 8px 30px rgba(16, 40, 58, 0.06)` (sangat halus, tanpa border tebal).
- Container: `max-width: 1100px`, padding samping `24px` (mobile) / `48px` (desktop).
- Jarak antar section: `96px` desktop, `64px` mobile.

---

## 3. Layout Halaman (urutan section)

Seluruh halaman berada di dalam **frame kuning mustard** (`--bg-page`) dengan padding `24-40px`; konten tampil sebagai kanvas kartu besar bersudut membulat di tengah. Di mobile, padding frame dikecilkan jadi `8-12px`.

### 3.1 Navbar

- Di dalam kanvas hero (bukan bar terpisah), tinggi sekitar 72px.
- **Kiri:** logo script "Tarmizi" (font script, warna `--ink`).
- **Tengah:** menu `SERVICES`, `WORKS`, `EXPERIENCE`, `CONTACT` (uppercase kecil). Menu yang **aktif** diberi **outline pill hijau teal** dengan teks teal. Tambahkan scroll-spy agar menu aktif mengikuti section.
- **Kanan:** nomor WhatsApp `+62 822-8701-2572` (teks kecil) + **tombol lingkaran putih** berisi ikon telepon (teal) dengan shadow halus, link ke `wa.me/6282287012572`.
- Mobile: logo + hamburger, menu membuka panel penuh.
- Sticky saat scroll dengan background krem semi-solid dan shadow tipis.

### 3.2 Hero

Kanvas krem (`--bg-hero`), tinggi sekitar 560-620px di desktop. Komposisi tiga kolom visual:

- **Kiri atas:** H1 besar dua baris:
  `Halo, Saya` / `Tarmizi.` (atau `Hey There,` / `I'm Tarmizi` bila bahasa Inggris). Warna `--ink`.
- **Kanan atas:** tagline pendek rata kiri, ukuran kecil, contoh: *"Saya merancang antarmuka yang sederhana dan nyaman digunakan, dan saya menyukai prosesnya."*
- **Kiri tengah:** email `tarmiziabd12@gmail.com` berwarna `--orange` (link mailto).
- **Kiri bawah:** blok angka besar + label kecil. Karena tidak boleh mengarang pengalaman, pakai **`3.58`** dengan label "IPK / Teknik Informatika" (bukan "10 years").
- **Tengah:** **foto profil cut-out** (setengah badan, dari CV, ganti file `public/profile.png` yang sudah dihapus background-nya) berdiri di depan **brush stroke hijau teal** (SVG coretan kuas, miring, sedikit keluar dari sisi foto). Foto menempel ke dasar kanvas hero (tanpa gap bawah).
- **Kanan bawah:** **badge sertifikasi** berupa lingkaran logo line-art di atas teks 3 baris rata tengah uppercase. Isi: `S.KOM` / `TEKNIK INFORMATIKA` / `UI/UX DESIGNER`. Boleh logo placeholder sederhana (ikon pohon/kompas) yang mudah diganti.
- Tambahan kecil dari prompt sebelumnya: badge "Open to Work" berbentuk pill kecil dengan titik hijau berdenyut, ditaruh dekat nama. Tombol CTA "Lihat Project" (solid `--teal`, teks putih) dan "Download CV" (outline) boleh ditambahkan di bawah tagline, tetap dengan gaya pill.

Dekorasi: hanya brush stroke dan tipografi, tanpa gradient neon, tanpa glassmorphism.

### 3.3 "What do I help?" (Layanan)

Section putih, dua kolom.

- **Kiri:** tumpukan 3 kartu horizontal (putih, radius 20px, shadow halus, jarak 16px). Tiap kartu: **ikon dalam lingkaran berwarna** (48-56px) di kiri, lalu judul (600) dan "N Projects" kecil abu di bawahnya.
  1. Lingkaran **teal**, ikon monitor, **UI/UX Design**
  2. Lingkaran **kuning**, ikon ponsel, **Wireframing & Prototyping** (Mobile App)
  3. Lingkaran **oranye**, ikon brand/pen, **Graphic Design** (Canva)
  - Teks "N Projects": isi dengan data nyata saja (mis. "1 Project"); bila tidak ada data, ganti dengan deskripsi singkat seperti "Figma" atau "Canva".
- **Kanan:** H2 `Apa yang bisa saya bantu?`, dua paragraf pendek (dari ringkasan CV), lalu **dua stat** berdampingan (angka besar + label kecil), mis. `3.58` IPK dan `2` Pengalaman Kerja & Magang. Jangan memakai angka yang tidak ada di CV.

### 3.4 Work Experience (Timeline)

Section dengan gradasi krem lembut. H2 **rata tengah**: `Pengalaman Saya`.

- **Garis vertikal tipis di tengah** dengan **dot berwarna** (hijau, oranye, kuning bergantian) di tiap item.
- Setiap baris dua sisi: **kiri** = nama perusahaan/instansi (600) + tanggal kecil abu; **kanan** = judul peran (600) + deskripsi 2-3 baris kecil.
- Item (urut terbaru ke lama):
  1. PT Gadai Siaga Sejahtera, Mar 2026 - Mei 2026, **Penaksir** (dot teal)
  2. Dinas Pendidikan Kota Pekanbaru, Aug 2024 - Sep 2024, **Intern / Redesign Website** (dot oranye)
  3. Lembaga Dakwah Kampus (LDK), Aug 2022 - Aug 2024, **Ketua Divisi Kaderisasi** (dot kuning)
- Mobile: garis pindah ke kiri, semua konten bertumpuk di sebelah kanan garis.

### 3.5 "My Latest Works" (Project)

Section putih. Header satu baris: kiri `Project Terbaru` (H2 kecil, 24px) + subjudul kecil "Solusi digital yang berfokus pada pengguna"; kanan link oranye kecil `Lihat Semua`.

- **Carousel horizontal** kartu project berwarna, radius 20px, sebagian kartu terakhir terpotong di tepi (memberi isyarat bisa digeser). Scroll-snap di mobile.
- Kartu 1: latar **kuning**, label "App Design / Aplikasi Sewa Mobil", mockup layar ponsel (gambar/placeholder).
- Kartu 2: latar **teal**, label "Web Design / Klinik Hewan (Skripsi)", mockup layar web.
- Kartu 3 (opsional): latar krem, label "Branding", hanya jika ada konten nyata; jika tidak, jangan dibuat.
- Klik kartu membuka halaman/modal case study (Problem, Proses, Solusi, Hasil, Tools) sesuai prompt sebelumnya. Hover: kartu naik 4px dan shadow menguat.

### 3.6 Testimoni (opsional / diganti)

Referensi memiliki "People talk about us". **Jangan membuat testimoni palsu.** Pilih salah satu:

- **Default (disarankan):** ganti dengan section **"Skills & Tools"** bergaya sama (judul rata tengah, 3 kartu putih, avatar/ikon bulat menimpa tepi atas kartu), berisi Hard Skill, Soft Skill, dan Tools (Figma, Canva, Microsoft Office, Spreadsheet).
- **Jika Tarmizi punya testimoni asli** (dosen, atasan magang, dll.): pakai layout referensi: 3 kartu, avatar bulat di tepi atas kartu, kutipan, nama tebal, jabatan kecil, titik pagination di bawah, kartu tengah sedikit lebih besar. Isi lewat `data.js` dan sembunyikan section bila array kosong.

### 3.7 CTA + Footer

- Blok besar krem: kiri H2 `Mari buat sesuatu yang luar biasa bersama.` dan di bawahnya `Mulai dengan menyapa` dengan kata **"menyapa" berwarna oranye + underline oranye** (link ke form/mailto).
- Kanan: kolom **Informasi**: lokasi `Pekanbaru, Riau`, email, WhatsApp, lalu daftar link kecil (Services, Works, Notes/Experience, Contact) dengan item aktif memakai outline pill teal. Tambahkan ikon LinkedIn.
- Form kontak (nama, email, pesan) dari prompt sebelumnya tetap ada, tampil di bawah CTA dalam kartu putih bergaya sama (input radius 14px, border `--line`, fokus ring teal).
- **Footer minimal:** garis tipis, kiri logo script kecil + `© 2026 Mhd. Tarmizi`, kanan `Dibuat dengan React & Vercel`.

---

## 4. Komponen Reusable

| Komponen | Spesifikasi |
|---|---|
| `Button` | Pill, tinggi 44px. Varian: `solid` (teal, teks putih), `outline` (border `--ink`, teks `--ink`), `link` (oranye + underline). Hover: naik 1-2px. |
| `NavPill` | Teks uppercase kecil, aktif = outline 1px teal + teks teal, radius 999px. |
| `IconCircle` | Lingkaran 48-56px, latar teal/kuning/oranye, ikon putih. |
| `ServiceCard` | Putih, radius 20px, shadow halus, `IconCircle` + judul + meta. |
| `TimelineItem` | Dot berwarna di garis tengah, kolom kiri (instansi, tanggal), kolom kanan (peran, deskripsi). |
| `ProjectCard` | Latar berwarna, radius 20px, label di kiri atas, mockup di bawah, hover lift. |
| `Stat` | Angka besar 700 + label kecil abu di bawah. |
| `BrushStroke` | SVG coretan kuas teal, dapat diganti warna lewat props. |
| `SectionHeading` | H2 + subjudul opsional, perataan `left` atau `center` lewat props. |

---

## 5. Animasi & Interaksi (Framer Motion)

- Fade-up halus (`y: 24 -> 0`, 0.5s, ease-out) saat section masuk viewport, dengan stagger 0.08s untuk kartu.
- Hero: brush stroke "tergambar" (clip/scale dari kiri), foto naik halus.
- Garis timeline tumbuh dari atas ke bawah saat discroll.
- Hover kartu: `translateY(-4px)` + shadow lebih kuat. Hover tombol: naik 2px.
- Smooth scroll antar section, scroll-spy untuk menu aktif.
- Hormati `prefers-reduced-motion` (matikan animasi non-esensial).
- Tidak ada animasi berlebihan, partikel, atau efek neon.

---

## 6. Responsif

| Breakpoint | Perilaku |
|---|---|
| >= 1024px | Layout penuh seperti referensi (hero 3 kolom visual, services 2 kolom, timeline 2 sisi) |
| 768-1023px | Hero: foto di tengah, teks tagline turun di bawah H1; services 1 kolom |
| < 768px | Semua 1 kolom. H1 40-44px. Foto di bawah teks dengan brush stroke tetap. Timeline satu sisi. Carousel project swipe. Navbar jadi hamburger |

---

## 7. Aset yang Perlu Disiapkan (placeholder bila belum ada)

- `public/profile.png`: foto setengah badan **tanpa background** (PNG transparan). Placeholder: siluet netral + komentar `GANTI DI SINI`.
- `public/cv-mhd-tarmizi.pdf`: untuk tombol Download CV.
- `src/assets/brush.svg`: coretan kuas teal (agent boleh membuat SVG path sendiri).
- `src/assets/projects/`: screenshot project (sewa mobil, klinik hewan) + link prototype Figma.
- Logo script "Tarmizi": teks dengan font script, tanpa file gambar.

---

## 8. Aturan Konten (tetap berlaku dari prompt sebelumnya)

- Gunakan hanya data dari CV. **Jangan mengarang** angka, testimoni, jumlah project, klien, atau tahun pengalaman.
- Perbaiki typo CV: "Fresh Graduate", "Graphic Design", "Organization Experience", "Kualitas", "Ketua Divisi Kaderisasi".
- Bahasa utama: Indonesia, profesional dan hangat.

---

## 9. Kriteria Selesai (Checklist untuk Agent)

- [ ] Latar halaman mustard dengan kanvas krem/putih membulat, sama seperti referensi
- [ ] Hero: H1 besar kiri, tagline kanan, email oranye, angka besar kiri bawah, foto cut-out + brush stroke teal, badge bulat kanan bawah
- [ ] Navbar: logo script, menu uppercase dengan pill aktif teal, nomor + tombol telepon bulat
- [ ] Section layanan: 3 kartu berikon bulat (teal, kuning, oranye) + teks kanan + 2 stat
- [ ] Timeline tengah dengan dot berwarna dan layout dua sisi
- [ ] Carousel project berwarna (kuning, teal) dengan hover lift
- [ ] CTA dengan kata oranye bergaris bawah + kolom informasi + footer minimal
- [ ] Hanya 3 warna aksen (teal, kuning, oranye) + navy + krem; tidak ada warna lain
- [ ] Responsif penuh, animasi halus, lolos Lighthouse 90+
- [ ] Siap deploy ke Vercel
