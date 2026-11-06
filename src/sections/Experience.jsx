import React from 'react'
import { motion } from 'framer-motion'
import { Briefcase, Calendar, MapPin, CheckCircle2 } from 'lucide-react'
import { experiencesData } from '../data/data'
import SectionHeading from '../components/SectionHeading'

export default function Experience() {
  const dotColorMap = {
    teal: "bg-teal ring-teal/20",
    orange: "bg-orange ring-orange/20",
    yellow: "bg-yellow ring-yellow/30"
  }

  const badgeColorMap = {
    teal: "bg-teal-light text-teal border-teal/20",
    orange: "bg-orange-light text-orange border-orange/20",
    yellow: "bg-yellow-light text-ink border-yellow/30"
  }

  return (
    <section id="experience" className="py-20 sm:py-28 px-4 sm:px-8 bg-gradient-to-b from-white via-soft to-[#F7F2DE] border-t border-line/60">
      <div className="max-w-canvas mx-auto">
        
        {/* H2 Rata Tengah sesuai DESIGN.md */}
        <SectionHeading
          badge="Jejak Karir & Kontribusi"
          title="Pengalaman Saya"
          subtitle="Pengalaman profesional, magang instansi pemerintah, dan kepemimpinan organisasi."
          align="center"
        />

        {/* Timeline Container */}
        <div className="relative mt-12 sm:mt-16">
          {/* Garis vertikal tengah di desktop, garis kiri di mobile */}
          <div className="absolute top-0 bottom-0 left-4 sm:left-6 md:left-1/2 -translate-x-1/2 w-0.5 bg-line/90" />

          <div className="space-y-12 sm:space-y-16">
            {experiencesData.map((item, index) => {
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex flex-col md:flex-row items-start md:items-center"
                >
                  {/* Dot Berwarna di Garis */}
                  <div
                    className={`absolute left-4 sm:left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full ring-8 z-10 ${dotColorMap[item.color] || dotColorMap.teal}`}
                  />

                  {/* Sisi Kiri (Desktop): Instansi & Tanggal */}
                  <div
                    className={`pl-12 sm:pl-16 md:pl-0 md:w-1/2 ${
                      isEven ? 'md:pr-12 md:text-right' : 'md:order-2 md:pl-12 md:text-left'
                    }`}
                  >
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-2 border shadow-2xs"
                         style={{}}
                    >
                      <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold border ${badgeColorMap[item.color]}`}>
                        {item.type}
                      </span>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-ink tracking-tight">
                      {item.company}
                    </h3>

                    <div className={`flex items-center gap-3 text-xs sm:text-sm font-semibold text-ink-soft mt-1 ${isEven ? 'md:justify-end' : 'md:justify-start'}`}>
                      <span className="flex items-center gap-1 text-orange">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.period}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-ink-muted" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Sisi Kanan (Desktop): Peran & Deskripsi */}
                  <div
                    className={`pl-12 sm:pl-16 md:pl-0 md:w-1/2 mt-3 md:mt-0 ${
                      isEven ? 'md:pl-12 md:text-left' : 'md:order-1 md:pr-12 md:text-right'
                    }`}
                  >
                    <div className="bg-white p-5 sm:p-6 rounded-card shadow-card hover:shadow-card-hover border border-line/60 transition-all duration-200">
                      <div className="flex items-center gap-2 mb-2">
                        <Briefcase className="w-4 h-4 text-teal" />
                        <h4 className="text-lg font-bold text-ink">
                          {item.role}
                        </h4>
                      </div>

                      <ul className="space-y-2 mt-3 text-left">
                        {item.responsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-2 text-xs sm:text-sm text-ink-soft leading-relaxed">
                            <CheckCircle2 className="w-3.5 h-3.5 text-teal shrink-0 mt-1" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}

