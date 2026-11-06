import React from 'react'

export default function ClinicWebMockup({ className = "" }) {
  return (
    <div className={`w-full max-w-[480px] sm:max-w-[540px] mx-auto bg-white rounded-2xl shadow-2xl border border-line/80 overflow-hidden select-none text-left ${className}`}>
      {/* Browser Bar */}
      <div className="bg-[#EFECE1] px-4 py-2.5 flex items-center justify-between border-b border-line/60">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-rose-400 inline-block" />
          <span className="w-3 h-3 rounded-full bg-amber-400 inline-block" />
          <span className="w-3 h-3 rounded-full bg-emerald-400 inline-block" />
        </div>
        <div className="bg-white/80 rounded-full px-4 py-0.5 text-[11px] font-mono text-ink-soft border border-line/60 flex items-center gap-1.5 w-3/5 justify-center">
          <span className="text-teal font-bold">🔒</span>
          <span className="truncate">klinikhewan-agile.id/dashboard</span>
        </div>
        <div className="w-6" />
      </div>

      {/* App Interface Body */}
      <div className="p-4 sm:p-5 bg-[#FAF9F5] text-ink">
        {/* Top Header */}
        <div className="flex justify-between items-center pb-3 border-b border-line/60">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-bold text-ink">Klinik Hewan Sehat</span>
              <span className="text-[10px] bg-teal-light text-teal font-semibold px-2 py-0.5 rounded-full border border-teal/20">
                Agile K-Means System
              </span>
            </div>
            <p className="text-[11px] text-ink-soft mt-0.5">Dashboard Manajemen Antrean & Analisis Klaster</p>
          </div>
          <span className="text-[11px] text-ink-soft bg-white px-2.5 py-1 rounded-lg border border-line/60 font-medium">
            Dr. Hewan Jaga: Aktif
          </span>
        </div>

        {/* 3 Metric Cards */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3 my-3 sm:my-4">
          <div className="bg-white p-2.5 rounded-xl border border-line/60 shadow-sm">
            <span className="text-[10px] text-ink-soft uppercase font-semibold">Total Pasien</span>
            <div className="text-base sm:text-lg font-bold text-ink mt-0.5">48 Ekor</div>
            <span className="text-[9px] text-emerald-600 font-medium">↑ 12% hari ini</span>
          </div>
          <div className="bg-white p-2.5 rounded-xl border border-line/60 shadow-sm">
            <span className="text-[10px] text-ink-soft uppercase font-semibold">Antrean Aktif</span>
            <div className="text-base sm:text-lg font-bold text-orange mt-0.5">04 Pasien</div>
            <span className="text-[9px] text-ink-soft">Est. 25 Menit</span>
          </div>
          <div className="bg-white p-2.5 rounded-xl border border-line/60 shadow-sm">
            <span className="text-[10px] text-ink-soft uppercase font-semibold">K-Means Klaster</span>
            <div className="text-base sm:text-lg font-bold text-teal mt-0.5">3 Klaster</div>
            <span className="text-[9px] text-teal font-medium">Optimasi Agile</span>
          </div>
        </div>

        {/* Visual K-Means Matrix & Queue Preview */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {/* K-Means Scatter Visual */}
          <div className="bg-white p-3 rounded-xl border border-line/60 shadow-sm">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[11px] font-bold text-ink">Peta Klaster Penyakit (K-Means)</span>
              <span className="text-[9px] text-teal font-semibold">k = 3</span>
            </div>
            <div className="h-24 bg-hero rounded-lg relative overflow-hidden flex items-center justify-center p-2 border border-line/40">
              {/* Cluster Dots Visual */}
              <div className="absolute inset-0 grid grid-cols-6 grid-rows-4 opacity-15 pointer-events-none">
                {Array.from({ length: 24 }).map((_, i) => (
                  <div key={i} className="border-b border-r border-ink/40" />
                ))}
              </div>
              {/* Cluster 1 (Teal) */}
              <div className="absolute top-3 left-4 flex flex-col items-center">
                <span className="w-3.5 h-3.5 rounded-full bg-teal ring-4 ring-teal/20" />
                <span className="text-[8px] font-bold text-teal mt-0.5">Vaksinasi</span>
              </div>
              <div className="absolute top-6 left-12 w-2 h-2 rounded-full bg-teal" />
              <div className="absolute top-2 left-16 w-2.5 h-2.5 rounded-full bg-teal" />

              {/* Cluster 2 (Orange) */}
              <div className="absolute bottom-3 left-20 flex flex-col items-center">
                <span className="w-3.5 h-3.5 rounded-full bg-orange ring-4 ring-orange/20" />
                <span className="text-[8px] font-bold text-orange mt-0.5">Penyakit Kulit</span>
              </div>
              <div className="absolute bottom-6 left-32 w-2 h-2 rounded-full bg-orange" />
              <div className="absolute bottom-2 left-28 w-2 h-2 rounded-full bg-orange" />

              {/* Cluster 3 (Yellow/Amber) */}
              <div className="absolute top-4 right-6 flex flex-col items-center">
                <span className="w-3.5 h-3.5 rounded-full bg-yellow ring-4 ring-yellow/30" />
                <span className="text-[8px] font-bold text-ink mt-0.5">Pemeriksaan Rutin</span>
              </div>
              <div className="absolute top-8 right-16 w-2.5 h-2.5 rounded-full bg-yellow" />
            </div>
          </div>

          {/* Queue List Preview */}
          <div className="bg-white p-3 rounded-xl border border-line/60 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-bold text-ink">Antrean Berjalan</span>
              <div className="mt-2 space-y-1.5 text-[10px]">
                <div className="flex items-center justify-between p-1.5 bg-teal-light rounded-lg">
                  <div>
                    <span className="font-bold text-ink">#A-01 Milo (Kucing)</span>
                    <span className="text-[8px] block text-ink-soft">Pemilik: Sarah</span>
                  </div>
                  <span className="text-[9px] font-bold text-teal px-1.5 py-0.5 bg-white rounded">
                    Diperiksa
                  </span>
                </div>
                <div className="flex items-center justify-between p-1.5 bg-hero rounded-lg">
                  <div>
                    <span className="font-bold text-ink">#A-02 Bruno (Anjing)</span>
                    <span className="text-[8px] block text-ink-soft">Pemilik: Hendra</span>
                  </div>
                  <span className="text-[9px] font-medium text-ink-soft px-1.5 py-0.5 bg-white rounded">
                    Menunggu
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-line/40 flex justify-between items-center text-[9px] text-ink-soft">
              <span>Metode: Agile Scrum</span>
              <span className="text-teal font-semibold">Skripsi S.Kom UST</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

