import React from 'react'
import { motion } from 'framer-motion'
import { Layers, Wrench, HeartHandshake, Check, CheckCircle2 } from 'lucide-react'
import { skillsData } from '../data/data'
import SectionHeading from '../components/SectionHeading'

export default function Skills() {
  return (
    <section id="skills" className="py-20 sm:py-28 px-4 sm:px-8 bg-hero border-t border-line/60">
      <div className="max-w-canvas mx-auto">
        
        {/* Judul Rata Tengah */}
        <SectionHeading
          badge="Kompetensi Utama"
          title="Keahlian & Alat Kerja"
          subtitle="Kombinasi keahlian teknis (hard skills), penguasaan perangkat lunak, dan keterampilan interpersonal."
          align="center"
        />

        {/* 3 Kartu Putih dengan Avatar/Ikon Bulat Menimpa Tepi Atas sesuai DESIGN.md 3.6 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mt-16 sm:mt-20 pt-6">
          
          {/* Kartu 1: Hard Skills (Lingkaran Teal) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="bg-white rounded-card p-6 sm:p-8 pt-10 shadow-card hover:shadow-card-hover border border-line/60 relative flex flex-col transition-all duration-300"
          >
            {/* Lingkaran Ikon Bulat Menimpa Tepi Atas dengan animasi pop */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: [0, 1.25, 1] }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.2 }}
              className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-teal text-white flex items-center justify-center shadow-md border-4 border-white"
            >
              <Layers className="w-6 h-6" />
            </motion.div>

            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-ink tracking-tight">Hard Skills</h3>
              <p className="text-xs text-ink-soft mt-1">Keahlian Teknis & Desain</p>
            </div>

            <div className="space-y-3 flex-1">
              {skillsData.hardSkills.map((skill, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-hero/60 border border-line/40 hover:bg-teal-light/40 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-teal shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-ink">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-teal uppercase tracking-wider bg-white px-2 py-0.5 rounded-full border border-teal/20">
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Kartu 2: Tools & Software (Lingkaran Kuning) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            whileHover={{ y: -8, scale: 1.01 }}
            className="bg-white rounded-card p-6 sm:p-8 pt-10 shadow-card hover:shadow-card-hover border border-line/60 relative flex flex-col transition-all duration-300 md:-translate-y-2"
          >
            {/* Lingkaran Ikon Bulat Menimpa Tepi Atas */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: [0, 1.25, 1] }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.3 }}
              className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-yellow text-white flex items-center justify-center shadow-md border-4 border-white"
            >
              <Wrench className="w-6 h-6" />
            </motion.div>

            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-ink tracking-tight">Tools & Software</h3>
              <p className="text-xs text-ink-soft mt-1">Perangkat Desain & Administrasi</p>
            </div>

            <div className="space-y-3 flex-1">
              {skillsData.tools.map((tool, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between p-2.5 rounded-xl bg-hero/60 border border-line/40 hover:bg-yellow-light/60 transition-colors"
                >
                  <div>
                    <span className="text-xs sm:text-sm font-bold text-ink block">
                      {tool.name}
                    </span>
                    <span className="text-[11px] text-ink-soft">
                      {tool.desc}
                    </span>
                  </div>
                  <span className="text-[10px] font-bold text-ink uppercase tracking-wider bg-white px-2 py-0.5 rounded-full border border-line">
                    {tool.badge}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Kartu 3: Soft Skills (Lingkaran Oranye) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ duration: 0.55, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="bg-white rounded-card p-6 sm:p-8 pt-10 shadow-card hover:shadow-card-hover border border-line/60 relative flex flex-col transition-all duration-300"
          >
            {/* Lingkaran Ikon Bulat Menimpa Tepi Atas */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: [0, 1.25, 1] }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.45, delay: 0.4 }}
              className="absolute -top-7 left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-orange text-white flex items-center justify-center shadow-md border-4 border-white"
            >
              <HeartHandshake className="w-6 h-6" />
            </motion.div>

            <div className="text-center mb-6">
              <h3 className="text-xl font-bold text-ink tracking-tight">Soft Skills</h3>
              <p className="text-xs text-ink-soft mt-1">Komunikasi & Karakter Kerja</p>
            </div>

            <div className="space-y-3 flex-1">
              {skillsData.softSkills.map((soft, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-xl bg-hero/60 border border-line/40 hover:bg-orange-light/50 transition-colors text-left"
                >
                  <span className="text-xs sm:text-sm font-bold text-ink flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange" />
                    {soft.name}
                  </span>
                  <p className="text-[11px] text-ink-soft mt-0.5 leading-snug">
                    {soft.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}

