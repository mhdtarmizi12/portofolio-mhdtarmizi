import React from 'react'

export default function CarRentalMockup({ className = "" }) {
  return (
    <div className={`relative w-full max-w-[280px] sm:max-w-[320px] mx-auto aspect-[9/18] bg-ink rounded-[36px] p-2.5 shadow-2xl border-4 border-ink/40 select-none ${className}`}>
      {/* Speaker / Notch */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-ink rounded-full z-20 flex items-center justify-center">
        <div className="w-2.5 h-2.5 rounded-full bg-slate-800 mr-2" />
        <div className="w-8 h-1 rounded-full bg-slate-800" />
      </div>

      {/* Screen container */}
      <div className="w-full h-full bg-[#FAF9F5] rounded-[28px] overflow-hidden flex flex-col pt-7 px-3.5 pb-2.5 text-ink text-left">
        {/* Top App Header */}
        <div className="flex items-center justify-between py-1">
          <div>
            <span className="text-[10px] text-ink-soft uppercase font-semibold tracking-wider">Lokasi Anda</span>
            <div className="flex items-center gap-1 font-bold text-xs text-ink">
              <span>📍 Pekanbaru, Riau</span>
            </div>
          </div>
          <div className="w-7 h-7 rounded-full bg-yellow-light border border-yellow/30 flex items-center justify-center text-[11px] font-bold text-ink">
            MT
          </div>
        </div>

        {/* Promo / Banner Card */}
        <div className="mt-2.5 bg-gradient-to-r from-teal to-[#287A6A] text-white p-3 rounded-xl shadow-sm">
          <span className="text-[9px] bg-white/20 px-2 py-0.5 rounded-full uppercase font-bold tracking-wide">
            Promo Akhir Pekan
          </span>
          <h4 className="text-xs font-bold mt-1">Sewa Mobil Mudah & Cepat</h4>
          <p className="text-[10px] text-white/80 mt-0.5">Diskon 15% khusus armada MPV</p>
        </div>

        {/* Categories / Filter Pills */}
        <div className="mt-3 flex gap-1.5 overflow-x-auto no-scrollbar py-0.5 text-[10px] font-medium">
          <span className="px-2.5 py-1 bg-ink text-white rounded-full">Semua</span>
          <span className="px-2.5 py-1 bg-white border border-line text-ink rounded-full">Matic</span>
          <span className="px-2.5 py-1 bg-white border border-line text-ink rounded-full">Manual</span>
          <span className="px-2.5 py-1 bg-white border border-line text-ink rounded-full">SUV</span>
        </div>

        {/* Car Item 1 */}
        <div className="mt-3 bg-white p-2.5 rounded-xl border border-line/60 shadow-sm flex flex-col">
          <div className="flex justify-between items-start">
            <div>
              <span className="text-[9px] text-teal font-semibold uppercase">Toyota</span>
              <h5 className="text-[11px] font-bold text-ink">Avanza Veloz 2023</h5>
            </div>
            <span className="text-[9px] bg-yellow-light text-ink font-bold px-1.5 py-0.5 rounded">
              ★ 4.9
            </span>
          </div>

          {/* Car Graphic / Vector Silhouette */}
          <div className="my-2 h-14 bg-hero rounded-lg flex items-center justify-center relative overflow-hidden">
            <svg viewBox="0 0 160 60" className="w-32 h-12 text-ink" fill="currentColor">
              <path d="M15 35 C15 35 25 35 30 25 C35 15 50 12 80 12 C110 12 125 18 135 25 C145 32 150 35 150 42 C150 46 145 48 140 48 C140 43 133 39 125 39 C117 39 110 43 110 48 L50 48 C50 43 43 39 35 39 C27 39 20 43 20 48 L10 48 C7 48 5 45 5 42 C5 38 10 35 15 35 Z" opacity="0.85"/>
              <circle cx="35" cy="48" r="8" fill="#1F6B5C"/>
              <circle cx="125" cy="48" r="8" fill="#1F6B5C"/>
              <circle cx="35" cy="48" r="4" fill="#FAF9F5"/>
              <circle cx="125" cy="48" r="4" fill="#FAF9F5"/>
              <path d="M45 22 L75 22 L75 32 L38 32 Z" fill="#FAF9F5" opacity="0.6"/>
              <path d="M80 22 L112 22 L118 32 L80 32 Z" fill="#FAF9F5" opacity="0.6"/>
            </svg>
          </div>

          <div className="flex justify-between items-center pt-1 border-t border-line/40 text-[10px]">
            <div>
              <span className="text-[8px] text-ink-soft">Tarif Sewa</span>
              <p className="font-bold text-ink">Rp 350.000<span className="text-[8px] font-normal text-ink-soft">/hari</span></p>
            </div>
            <button className="bg-teal text-white px-2.5 py-1 rounded-full text-[9px] font-bold">
              Pilih
            </button>
          </div>
        </div>

        {/* Bottom Floating Bar */}
        <div className="mt-auto pt-2 border-t border-line/60 flex justify-between items-center text-[10px]">
          <span className="text-teal font-bold flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-teal animate-ping" /> Figma Prototype
          </span>
          <span className="text-[9px] text-ink-soft bg-slate-100 px-2 py-0.5 rounded-full">
            Mobile UI/UX
          </span>
        </div>
      </div>
    </div>
  )
}

