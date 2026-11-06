/**
 * DATA RESMI PORTOFOLIO MHD. TARMIZI, S.KOM
 * 
 * Semua data bersumber langsung dari CV resmi dan DESIGN.md.
 * Pengguna dapat mengubah atau memperbarui informasi di file ini secara terpusat.
 */

export const personalData = {
  name: "Mhd. Tarmizi, S.Kom",
  firstName: "Tarmizi",
  nickname: "Tarmizi",
  heroGreeting: "Halo, Saya",
  heroName: "Tarmizi.",
  title: "Fresh Graduate Teknik Informatika | UI/UX Designer",
  typingTitles: [
    "Fresh Graduate Teknik Informatika",
    "UI/UX Designer",
    "Web Design Enthusiast",
    "Data & Administration Specialist",
  ],
  tagline: "Saya merancang antarmuka yang sederhana, fungsional, dan nyaman digunakan, serta mengelola data dengan presisi dan ketelitian tinggi.",
  heroBadge: "S.KOM / TEKNIK INFORMATIKA / UI/UX DESIGNER",
  openToWork: true,
  openToWorkText: "Terbuka untuk Peluang Kerja (Open to Work)",
  
  // Kontak resmi
  email: "tarmiziabd12@gmail.com",
  phone: "+62 822-8701-2572",
  phoneDisplay: "+62 822-8701-2572",
  whatsappUrl: "https://wa.me/6282287012572?text=Halo%20Tarmizi,%20saya%20tertarik%20dengan%20portofolio%20Anda.",
  linkedin: "linkedin.com/in/mhd-tarmizi-304106221/",
  linkedinUrl: "https://linkedin.com/in/mhd-tarmizi-304106221/",
  location: "Pekanbaru, Riau, Indonesia",
  cvFile: "/cv-mhd-tarmizi.pdf", // GANTI DI SINI jika file PDF diubah
  photoCutout: "/profile.png", // GANTI DI SINI jika ingin mengganti foto
  photoOriginal: "/profile-original.jpeg",

  // Ringkasan personal (maksimal 3 paragraf dari data CV)
  summaryParagraphs: [
    "Saya adalah lulusan Sarjana Komputer (S.Kom) Teknik Informatika dari Universitas Sains dan Teknologi Indonesia dengan Indeks Prestasi Kumulatif (IPK) 3.58 dari 4.00.",
    "Memiliki pengalaman kerja dan magang di bidang penaksiran nilai barang, pelayanan nasabah, administrasi data, hingga redesign website resmi instansi pemerintahan di Pekanbaru.",
    "Menguasai UI/UX Design, pembuatan wireframe dan prototipe di Figma, serta mahir dalam Microsoft Office dan pengolahan spreadsheet dengan dedikasi tinggi pada ketelitian dan kepuasan pengguna."
  ],

  // Statistik angka nyata dari CV
  stats: [
    { value: "3.58", label: "IPK Kelulusan (Skala 4.00)", highlight: "Sains & Teknologi" },
    { value: "2", label: "Pengalaman Kerja & Magang", highlight: "Industri & Pemerintahan" },
    { value: "2+", label: "Portofolio Project Utama", highlight: "UI/UX & Web Skripsi" },
    { value: "2 Thn", label: "Kepemimpinan Organisasi", highlight: "Ketua Kaderisasi LDK" }
  ]
};

// Layanan / Bidang Keahlian ("What do I help?")
export const servicesData = [
  {
    id: "ui-ux",
    title: "UI/UX Design",
    subtitle: "Desain Antarmuka Berpusat Pengguna",
    meta: "Figma & Usability Testing",
    color: "teal", // token: --teal (#1F6B5C)
    iconName: "Monitor",
    description: "Merancang visual website dan aplikasi mobile yang bersih, modern, dan intuitif sehingga pengguna merasa nyaman dan mudah menyelesaikan tujuannya."
  },
  {
    id: "wireframing",
    title: "Wireframing & Prototyping",
    subtitle: "Alur Navigasi & Prototipe Interaktif",
    meta: "Figma Interactive Flow",
    color: "yellow", // token: --yellow (#F2B83B)
    iconName: "Smartphone",
    description: "Memetakan user journey dari awal hingga akhir, membuat struktur wireframe, serta merakit prototipe interaktif yang siap diuji sebelum pengembangan kode."
  },
  {
    id: "graphic-data",
    title: "Graphic Design & Administrasi Data",
    subtitle: "Materi Promosi & Manajemen Data",
    meta: "Canva & MS Spreadsheet",
    color: "orange", // token: --orange (#F0643C)
    iconName: "Palette",
    description: "Membuat desain visual promosi informatif serta mengelola pencatatan administrasi dan entry data harian dengan akurasi dan ketelitian tingkat tinggi."
  }
];

// Timeline Pengalaman (terbaru ke lama)
export const experiencesData = [
  {
    id: "exp-1",
    role: "Penaksir",
    company: "PT Gadai Siaga Sejahtera",
    period: "Mar 2026 - Mei 2026",
    color: "teal",
    type: "Pekerjaan Profesional",
    location: "Pekanbaru, Riau",
    responsibilities: [
      "Menilai barang jaminan sesuai dengan standar operasional prosedur perusahaan untuk memastikan akurasi nilai taksiran.",
      "Melayani dan memberikan konsultasi kepada nasabah dengan ramah, komunikatif, dan transparan.",
      "Mengelola administrasi dan pencatatan transaksi penaksiran secara teliti dan sistematis.",
      "Menjaga kerahasiaan informasi data nasabah serta integritas transaksi harian."
    ]
  },
  {
    id: "exp-2",
    role: "Intern / Redesign Website",
    company: "Dinas Pendidikan Kota Pekanbaru",
    period: "Agu 2024 - Sep 2024",
    color: "orange",
    type: "Magang Instansi Pemerintah",
    location: "Pekanbaru, Riau",
    responsibilities: [
      "Berkolaborasi langsung dengan tim IT dalam proyek evaluasi dan desain ulang (redesign) tampilan website resmi instansi.",
      "Mengelola administrasi berkas dan melakukan entri data kegiatan harian instansi secara terstruktur.",
      "Menyusun dokumentasi teknis, rangkuman evaluasi antarmuka, serta laporan berkala proyek."
    ]
  },
  {
    id: "exp-3",
    role: "Ketua Divisi Kaderisasi",
    company: "Lembaga Dakwah Kampus (LDK)",
    period: "Agu 2022 - Agu 2024",
    color: "yellow",
    type: "Kepemimpinan Organisasi",
    location: "Universitas Sains dan Teknologi Indonesia",
    responsibilities: [
      "Mengoordinasikan dan merancang alur kaderisasi penerimaan serta pembinaan anggota baru secara komprehensif.",
      "Menyusun strategi pengembangan potensi, peningkatan mutu, dan kapasitas kepemimpinan anggota.",
      "Menyelenggarakan pelatihan berkala, lokakarya motivasi, dan forum pembinaan berkelanjutan.",
      "Mengawasi, mengevaluasi, dan menyusun laporan pertanggungjawaban program kerja kaderisasi."
    ]
  }
];

// Pendidikan Resmi
export const educationData = {
  degree: "Sarjana Komputer (S.Kom) Teknik Informatika",
  institution: "Universitas Sains dan Teknologi Indonesia",
  period: "Sep 2021 - Agu 2025",
  gpa: "3.58 / 4.00",
  thesisTitle: "Optimasi Layanan Klinik Hewan Berbasis Web dengan Pendekatan Agile Menggunakan Algoritma K-Means untuk Peningkatan Efisiensi",
  thesisDescription: "Penelitian skripsi yang menggabungkan perancangan sistem web responsif, metodologi Agile Scrum untuk pengembangan adaptif, serta algoritma machine learning K-Means clustering untuk mengelompokkan riwayat penanganan pasien hewan peliharaan secara efisien."
};

// Project Portofolio & Case Study Lengkap
export const projectsData = [
  {
    id: "project-sewa-mobil",
    title: "Aplikasi Pemesanan Sewa Mobil",
    subtitle: "Mobile App UI/UX Design & Interactive Prototype",
    category: "App Design",
    typeBadge: "UI/UX Case Study",
    cardBg: "yellow", // Mengikuti DESIGN.md: latar kuning untuk App Design
    period: "Okt 2023 - Des 2023",
    role: "UI/UX Designer",
    tools: ["Figma", "FigJam", "User Flow", "Wireframing", "Usability Testing"],
    // Placeholder link Figma - dapat diganti oleh user
    figmaUrl: "https://www.figma.com/", // GANTI DI SINI: ganti dengan URL embed atau file Figma Anda
    thumbnailNote: "Mockup Mobile App 18+ Screens",
    overview: "Perancangan antarmuka aplikasi pemesanan sewa mobil mobile-first yang mengutamakan kemudahan pengguna dalam mencari unit mobil, memilih durasi sewa dengan transparansi biaya, hingga konfirmasi pembayaran cepat.",
    caseStudy: {
      problem: "Banyak pengguna kesulitan saat menyewa kendaraan melalui layanan konvensional karena lambatnya respon chat, ketidakpastian ketersediaan armada mobil secara langsung (real-time), dan alur rincian biaya yang seringkali tersembunyi hingga tahap akhir.",
      process: "Dimulai dari user research terhadap perilaku calon penyewa, pembuatan Information Architecture (IA), perancangan User Flow dari halaman katalog hingga invoice, pembuatan Low-Fidelity Wireframe, eksplorasi sistem warna & komponen di Figma, hingga High-Fidelity Interactive Prototype.",
      solution: "Menghadirkan tampilan bersih dengan filter pintar (transmisi otomatis/manual, kapasitas kursi, rentang tarif per hari), halaman detail kendaraan yang lengkap dengan foto 360°, serta alur checkout 3 langkah tanpa formulir bertele-tele.",
      result: "Menghasilkan lebih dari 18 screen desain konsisten dan prototipe interaktif yang telah diuji dengan prinsip Usability Heuristics, menghasilkan alur pemesanan yang cepat dan tanpa friksi.",
      features: [
        "Katalog Armada Interaktif dengan Filter Cepat",
        "Kalkulator Tarif Sewa Otomatis & Transparan",
        "Formulir Identitas & SIM Terintegrasi",
        "Multi-Metode Pembayaran (Transfer Bank & E-Wallet)",
        "Halaman Konfirmasi & E-Tiket Digital"
      ]
    }
  },
  {
    id: "project-klinik-hewan",
    title: "Optimasi Layanan Klinik Hewan Berbasis Web",
    subtitle: "Skripsi S.Kom: Agile Methodology & K-Means Clustering",
    category: "Web Design & System",
    typeBadge: "Thesis & Web System",
    cardBg: "teal", // Mengikuti DESIGN.md: latar teal untuk Web Design
    period: "Sep 2024 - Agu 2025",
    role: "Lead Researcher & Frontend / UI Designer",
    tools: ["Figma", "React.js", "Algoritma K-Means", "Agile Scrum", "Tailwind CSS"],
    figmaUrl: "https://www.figma.com/", // GANTI DI SINI jika ada link Figma
    demoUrl: "", // GANTI DI SINI jika ada live demo
    thumbnailNote: "Dashboard & Online Booking Web Portal",
    overview: "Sistem informasi manajemen dan reservasi klinik hewan berbasis web yang dirancang untuk mengatasi antrean panjang di klinik dan memetakan pola jenis penanganan penyakit hewan menggunakan algoritma clustering K-Means.",
    caseStudy: {
      problem: "Pemilik hewan seringkali harus mengantre berjam-jam tanpa kepastian giliran, sementara pihak klinik mengalami kendala dalam mengarsipkan riwayat medis manual serta menganalisis tren penyakit hewan yang sering berulang.",
      process: "Menggunakan pendekatan Agile dengan siklus iterasi sprint 2 mingguan. Menggali kebutuhan dokter hewan, perawat, dan pemilik pasien melalui wawancara mendalam, merancang wireframe sistem antrean, dan merancang skema clustering K-Means untuk data rekam medis.",
      solution: "Portal berbasis web terintegrasi dengan dua sisi utama: portal publik untuk pendaftaran janji temu online (booking) dengan nomor antrean real-time, serta portal staf medis untuk manajemen rekam medis digital dan analisis klaster K-Means.",
      result: "Mengurangi waktu penumpukan antrean pasien di klinik, mempercepat pencarian histori perawatan hewan peliharaan, dan skripsi berhasil dipertahankan dengan predikat kelulusan sangat memuaskan (IPK 3.58).",
      features: [
        "Sistem Reservasi & Antrean Online Real-Time",
        "Rekam Medis Digital Hewan Peliharaan Terpusat",
        "Modul Clustering K-Means untuk Analisis Tren Penyakit",
        "Dashboard Dokter & Pengingat Jadwal Vaksinasi",
        "Tampilan Web Responsif Desktop dan Mobile"
      ]
    }
  }
];

// Skills & Tools (menggantikan slot testimoni sesuai panduan DESIGN.md bagian 3.6)
export const skillsData = {
  hardSkills: [
    { name: "UI/UX Design", level: "Expertise", icon: "Layout" },
    { name: "Wireframing", level: "Core", icon: "Compass" },
    { name: "Prototyping", level: "Core", icon: "Layers" },
    { name: "Usability Testing", level: "Proficient", icon: "CheckCircle" },
    { name: "User Flow & IA", level: "Proficient", icon: "GitCommit" },
    { name: "Graphic Design", level: "Proficient", icon: "Palette" },
    { name: "Administrasi Data", level: "Core", icon: "FileText" },
    { name: "Data Entry & Reporting", level: "Core", icon: "Table" },
  ],
  tools: [
    { name: "Figma", desc: "Design & Prototyping", category: "Primary", badge: "Utama" },
    { name: "Canva", desc: "Visual Graphic & Social Media", category: "Design", badge: "Mahir" },
    { name: "Microsoft Word", desc: "Dokumentasi & Administrasi", category: "Office", badge: "Mahir" },
    { name: "Microsoft Excel", desc: "Pengolahan Data & Formula", category: "Data", badge: "Mahir" },
    { name: "Microsoft PowerPoint", desc: "Presentasi Interaktif", category: "Office", badge: "Mahir" },
    { name: "Google Sheets", desc: "Spreadsheet Kolaborasi Online", category: "Data", badge: "Mahir" },
    { name: "FigJam", desc: "Brainstorming & User Flow", category: "Design", badge: "Menengah" }
  ],
  softSkills: [
    { name: "Komunikasi", desc: "Mampu menyampaikan ide desain dan berinteraksi secara persuasif dengan nasabah maupun tim." },
    { name: "Kerja Tim (Teamwork)", desc: "Terbiasa berkolaborasi lintas disiplin, baik di lingkungan instansi, organisasi, maupun proyek IT." },
    { name: "Berpikir Kritis", desc: "Menganalisis kebutuhan pengguna secara objektif untuk menemukan akar permasalahan antarmuka." },
    { name: "Manajemen Waktu", desc: "Disiplin dalam memenuhi tenggat waktu proyek dan mengorganisasi prioritas kerja harian." },
    { name: "Problem Solving", desc: "Solutif menghadapi hambatan teknis maupun operasional dengan pendekatan terstruktur." },
    { name: "Adaptabilitas", desc: "Cepat mempelajari alat (tools) baru, prosedur kerja baru, dan lingkungan yang dinamis." },
    { name: "Kemampuan Analisis", desc: "Kritis dalam membedah data transaksi, spesifikasi jaminan, dan metrik interaksi sistem." }
  ]
};

// Navigasi
export const navLinks = [
  { name: "Layanan", href: "#services", label: "SERVICES", desc: "UI/UX, Prototyping & Desain", num: "01" },
  { name: "Proyek", href: "#works", label: "WORKS", desc: "Studi Kasus & Desain Produk", num: "02" },
  { name: "Pengalaman", href: "#experience", label: "EXPERIENCE", desc: "Karir & Kontribusi Organisasi", num: "03" },
  { name: "Pendidikan", href: "#education", label: "EDUCATION", desc: "Gelar S.Kom & Skripsi", num: "04" },
  { name: "Keahlian", href: "#skills", label: "SKILLS", desc: "Hard Skills & Tools Software", num: "05" },
  { name: "Kontak", href: "#contact", label: "CONTACT", desc: "Diskusikan Peluang & Pesan", num: "06" }
];

