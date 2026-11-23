import React, { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export const allCarRentalImages = [
  {
    id: 1,
    src: "/projects/car-rental/1.jpeg",
    alt: "Aplikasi Pemesanan Sewa Mobil - Desain Mockup & Showcase Halaman 1",
    title: "1. Tampilan Utama & Desain Antarmuka",
    desc: "Perancangan UI/UX aplikasi pemesanan sewa mobil mobile-first"
  },
  {
    id: 2,
    src: "/projects/car-rental/2.jpeg",
    alt: "Aplikasi Pemesanan Sewa Mobil - Alur Pemesanan & Rincian Armada Halaman 2",
    title: "2. Alur Transaksi & Detail Armada Mobil",
    desc: "Katalog unit mobil, pilihan durasi sewa, dan alur checkout"
  },
  {
    id: 3,
    src: "/projects/car-rental/3.jpeg",
    alt: "Aplikasi Pemesanan Sewa Mobil - Halaman 3",
    title: "3. Fitur Filter & Detail Spesifikasi Kendaraan",
    desc: "Spesifikasi armada, filter transmisi, dan kalkulator harga"
  },
  {
    id: 4,
    src: "/projects/car-rental/4.jpeg",
    alt: "Aplikasi Pemesanan Sewa Mobil - Halaman 4",
    title: "4. Konfirmasi Pembayaran & E-Tiket Digital",
    desc: "Ringkasan pemesanan dan bukti transaksi sewa mobil"
  }
]

export default function CarRentalMockup({ className = "", isModal = false }) {
  const [activeIdx, setActiveIdx] = useState(0)
  // Default to the images that exist on disk (1 and 2), with dynamic check for 3 and 4
  const [availableImages, setAvailableImages] = useState(allCarRentalImages.slice(0, 2))

  useEffect(() => {
    // Check if 3.jpeg and 4.jpeg are present
    [3, 4].forEach((num) => {
      const img = new Image()
      img.src = `/projects/car-rental/${num}.jpeg`
      img.onload = () => {
        setAvailableImages((prev) => {
          if (prev.some((item) => item.id === num)) return prev
          const match = allCarRentalImages.find((item) => item.id === num)
          return match ? [...prev, match].sort((a, b) => a.id - b.id) : prev
        })
      }
    })
  }, [])

  const handlePrev = (e) => {
    e.stopPropagation()
    setActiveIdx((prev) => (prev === 0 ? availableImages.length - 1 : prev - 1))
  }

  const handleNext = (e) => {
    e.stopPropagation()
    setActiveIdx((prev) => (prev === availableImages.length - 1 ? 0 : prev + 1))
  }

  const handleSelect = (idx, e) => {
    e.stopPropagation()
    setActiveIdx(idx)
  }

  const activeImg = availableImages[activeIdx] || availableImages[0]

  return (
    <div className={`w-full max-w-[560px] ${isModal ? 'max-w-[760px]' : ''} mx-auto bg-white rounded-2xl shadow-2xl border border-line/80 overflow-hidden select-none text-left ${className}`}>
      
      {/* Top App / Window Bar */}
      <div className="bg-[#FAF9F5] px-3.5 sm:px-4 py-2.5 flex items-center justify-between border-b border-line/60">
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-400 inline-block" />
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-400 inline-block" />
          <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-400 inline-block" />
        </div>

        {/* Title Bar */}
        <div className="bg-hero rounded-full px-3 sm:px-4 py-0.5 text-[10px] sm:text-[11px] font-mono text-ink-soft border border-line/60 flex items-center gap-1.5 w-1/2 sm:w-3/5 justify-center truncate">
          <span className="text-orange font-bold shrink-0">🚗</span>
          <span className="truncate">SewaMobilApp • UI/UX Design</span>
        </div>

        {/* Badge Slide Counter */}
        <div className="flex items-center gap-1">
          <span className="text-[10px] sm:text-[11px] font-bold text-ink bg-yellow-light px-2 py-0.5 rounded-full border border-yellow/30 whitespace-nowrap">
            {activeIdx + 1} / {availableImages.length}
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
        {availableImages.length > 1 && (
          <>
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
          </>
        )}

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

        {/* Interactive Dots */}
        {availableImages.length > 1 && (
          <div className="flex items-center gap-1.5 shrink-0">
            {availableImages.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={(e) => handleSelect(idx, e)}
                aria-label={`Pilih Foto ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-200 cursor-pointer ${
                  activeIdx === idx
                    ? 'w-6 bg-ink'
                    : 'w-2 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Modal Extra: Thumbnail Row for Case Study Modal */}
      {isModal && availableImages.length > 1 && (
        <div className="p-3 bg-white border-t border-line/60 grid grid-cols-2 sm:grid-cols-4 gap-2">
          {availableImages.map((img, idx) => (
            <button
              key={img.id}
              type="button"
              onClick={(e) => handleSelect(idx, e)}
              className={`rounded-lg overflow-hidden border-2 transition-all relative aspect-[16/9] ${
                activeIdx === idx
                  ? 'border-ink shadow-md ring-2 ring-ink/20 scale-[1.02]'
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
