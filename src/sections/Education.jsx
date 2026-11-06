import React from 'react'
import { motion } from 'framer-motion'
import { GraduationCap, Award, BookOpen, Calendar, MapPin } from 'lucide-react'
import { educationData } from '../data/data'
import SectionHeading from '../components/SectionHeading'

export default function Education() {
  return (
    <section className="py-14 sm:py-20 px-4 sm:px-8 bg-surface border-t border-line/60">
      <div className="max-w-canvas mx-auto">
        
        <SectionHeading
          badge="Latar Belakang Akademik"
          title="Pendidikan Formal"
          align="left"
          className="!mb-8"
        />

        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="bg-hero rounded-canvas p-6 sm:p-10 border border-line shadow-card relative overflow-hidden"
        >
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-light/40 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Kolom Kiri: Gelar, Universitas, IPK */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              <div className="flex items-center gap-3">
                <div className="w-14 h-14 rounded-2xl bg-teal text-white flex items-center justify-center shadow-sm">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-teal bg-teal-light px-2.5 py-0.5 rounded-full border border-teal/20">
                    Gelar Sarjana
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-ink mt-1">
                    {educationData.degree}
                  </h3>
                </div>
              </div>

              <div className="mt-4 space-y-1.5 text-sm font-medium text-ink-soft">
                <p className="font-semibold text-ink text-base">
                  {educationData.institution}
                </p>
                <div className="flex items-center gap-4 text-xs">
                  <span className="flex items-center gap-1 text-orange font-semibold">
                    <Calendar className="w-3.5 h-3.5" />
                    {educationData.period}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-ink-muted" />
                    Pekanbaru, Riau
                  </span>
                </div>
              </div>

              {/* IPK Badge */}
              <div className="mt-6 inline-flex items-center gap-3 bg-white px-4 py-3 rounded-2xl border border-line shadow-sm self-start">
                <div className="w-10 h-10 rounded-xl bg-yellow-light text-ink font-bold flex items-center justify-center border border-yellow/30">
                  <Award className="w-5 h-5 text-yellow" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-ink-soft uppercase tracking-wider block">
                    Indeks Prestasi Kumulatif
                  </span>
                  <span className="text-xl font-extrabold text-ink leading-none">
                    {educationData.gpa}
                  </span>
                </div>
              </div>
            </div>

            {/* Kolom Kanan: Skripsi */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-7 rounded-card border border-line shadow-sm">
              <div className="flex items-center gap-2 text-teal font-bold text-xs uppercase tracking-wider mb-2">
                <BookOpen className="w-4 h-4" />
                Penelitian Skripsi Kelulusan
              </div>
              <h4 className="text-base sm:text-lg font-bold text-ink leading-snug">
                "{educationData.thesisTitle}"
              </h4>
              <p className="mt-3 text-xs sm:text-sm text-ink-soft leading-relaxed">
                {educationData.thesisDescription}
              </p>
              
              <div className="mt-4 pt-4 border-t border-line/60 flex flex-wrap gap-2">
                <span className="text-xs bg-hero text-ink font-semibold px-3 py-1 rounded-full border border-line">
                  Pendekatan Agile Scrum
                </span>
                <span className="text-xs bg-hero text-ink font-semibold px-3 py-1 rounded-full border border-line">
                  Algoritma K-Means Clustering
                </span>
                <span className="text-xs bg-hero text-ink font-semibold px-3 py-1 rounded-full border border-line">
                  Web-Based Application
                </span>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  )
}

