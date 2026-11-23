import React, { useState } from 'react'
import { ChevronLeft, ChevronRight, Layers, ExternalLink } from 'lucide-react'

export const clinicImages = [
  {
    id: 1,
    src: "/projects/clinic/1.jpeg",
    alt: "Optimasi Layanan Klinik Hewan - Tampilan Beranda & Informasi Sistem",
    title: "1. Beranda & Portal Informasi Pasien",
    desc: "Antarmuka publik reservasi jadwal klinik dan info layanan"
  },
  {
    id: 2,
    src: "/projects/clinic/2.jpeg",
    alt: "Optimasi Layanan Klinik Hewan - Antarmuka Layanan & Rekam Medis",
    title: "2. Alur Pendaftaran & Riwayat Pemeriksaan",
    desc: "Manajemen data pasien terpadu dengan form pendaftaran responsif"
  },
  {
    id: 3,
    src: "/projects/clinic/3.jpeg",
    alt: "Optimasi Layanan Klinik Hewan - Analisis Klaster Algoritma K-Means",
    title: "3. Visualisasi Hasil Clustering Algoritma K-Means",
    desc: "Pengelompokan riwayat penyakit hewan untuk estimasi penanganan efisien"
  },
  {
    id: 4,
    src: "/projects/clinic/4.jpeg",
    alt: "Optimasi Layanan Klinik Hewan - Dashboard Dokter & Antrean Real-time",
    title: "4. Dashboard Monitoring & Antrean Real-Time",
    desc: "Panel kendali staf medis untuk monitoring status giliran periksa"
  }
]

export default function ClinicWebMockup({ className = "", isModal = false }) {
  const [activeIdx, setActiveIdx] = useState(0)

  const handlePrev = (e) => {
    e.stopPropagation()
    setActiveIdx((prev) => (prev === 0 ? clinicImages.length - 1 : prev - 1))
  }

  const handleNext = (e) => {
    e.stopPropagation()
    setActiveIdx((prev) => (prev === clinicImages.length - 1 ? 0 : prev + 1))
  }

  const handleSelect = (idx, e) => {
    e.stopPropagation()
    setActiveIdx(idx)
  }

  const activeImg = clinicImages[activeIdx]

  return (
    <div className={`w-full max-w-[560px] ${isModal ? 'max-w-[760px]' : ''} mx-auto bg-white rounded-2xl shadow-2xl border border-line/80 overflow-hidden select-none text-left ${className}`}>
      
      {/* Browser Bar */}
      <div className="bg-[#EFECE1] px-3.5 sm:px-4 py-2.5 flex items-center justify-between border-b border-line/60">
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-400 inline-block" />
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-400 inline-block" />
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-400 inline-block" />
        </div>

        {/* Address Bar */}
        <div className="bg-white/90 rounded-full px-3 sm:px-4 py-0.5 text-[10px] sm:text-[11px] font-mono text-ink-soft border border-line/60 flex items-center gap-1.5 w-1/2 sm:w-3/5 justify-center truncate">
          <span className="text-teal font-bold shrink-0">🔒</span>
          <span className="truncate">klinikhewan-agile.id/system</span>
        </div>

        {/* Badge Slide Counter */}
        <div className="flex items-center gap-1">
          <span className="text-[10px] sm:text-[11px] font-bold text-teal bg-teal-light px-2 py-0.5 rounded-full border border-teal/20 whitespace-nowrap">
            {activeIdx + 1} / {clinicImages.length}
          </span>
        </div>
      </div>

      {/* Main Image Stage */}
      <div className="relative aspect-[16/9] sm:aspect-[2.15/1] w-full bg-[#0F172A] overflow-hidden group/stage flex items-center justify-center">
        <img
          key={activeImg.src}
          src={activeImg.src}
          alt={activeImg.alt}
          className="w-full h-full object-contain transition-opacity duration-300"
          loading="eager"
        />

        {/* Navigation Arrows */}
        <button
          onClick={handlePrev}
          type="button"
          aria-label="Foto Sebelumnya"
          className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/90 hover:bg-white text-ink shadow-md flex items-center justify-center transition-all duration-200 opacity-90 hover:opacity-100 hover:scale-105 cursor-pointer z-10 border border-black/10"
        >
          <ChevronLeft className="w-5 h-5 text-ink" />
        </button>

        <button
          onClick={handleNext}
          type="button"
          aria-label="Foto Selanjutnya"
          className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/90 hover:bg-white text-ink shadow-md flex items-center justify-center transition-all duration-200 opacity-90 hover:opacity-100 hover:scale-105 cursor-pointer z-10 border border-black/10"
        >
          <ChevronRight className="w-5 h-5 text-ink" />
        </button>

        {/* Floating Tag at Bottom Left of Image */}
        <div className="absolute bottom-2.5 left-3 sm:bottom-3 sm:left-4 z-10 bg-ink/80 backdrop-blur-md text-white text-[10px] sm:text-[11px] font-medium px-2.5 py-1 rounded-lg border border-white/10 max-w-[75%] truncate shadow-sm">
          {activeImg.title}
        </div>
      </div>

      {/* Footer Controls & Dots */}
      <div className="p-3 sm:p-3.5 bg-[#FAF9F5] border-t border-line/60 flex items-center justify-between gap-2">
        <div className="text-[10px] sm:text-[11px] text-ink-soft truncate font-medium">
          {activeImg.desc}
        </div>

        {/* 4 Interactive Dots */}
        <div className="flex items-center gap-1.5 shrink-0">
          {clinicImages.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={(e) => handleSelect(idx, e)}
              aria-label={`Pilih Foto ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-200 cursor-pointer ${
                activeIdx === idx
                  ? 'w-6 bg-teal'
                  : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Modal Extra: Thumbnail Row for Case Study Modal */}
      {isModal && (
        <div className="p-3 bg-white border-t border-line/60 grid grid-cols-4 gap-2">
          {clinicImages.map((img, idx) => (
            <button
              key={img.id}
              type="button"
              onClick={(e) => handleSelect(idx, e)}
              className={`rounded-lg overflow-hidden border-2 transition-all relative aspect-[16/9] ${
                activeIdx === idx
                  ? 'border-teal shadow-md ring-2 ring-teal/20 scale-[1.02]'
                  : 'border-transparent opacity-70 hover:opacity-100'
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-1 right-1 bg-black/70 text-white text-[9px] font-bold px-1 rounded">
                #{idx + 1}
              </span>
            </button>
          ))}
        </div>
      )}

    </div>
  )
}
