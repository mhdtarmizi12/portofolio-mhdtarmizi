import React from 'react'
import { motion } from 'framer-motion'
import { Monitor, Smartphone, Palette, ArrowRight } from 'lucide-react'
import { servicesData, personalData } from '../data/data'
import IconCircle from '../components/IconCircle'
import SectionHeading from '../components/SectionHeading'
import Stat from '../components/Stat'
import Button from '../components/Button'

export default function Services() {
  const iconMap = {
    Monitor: Monitor,
    Smartphone: Smartphone,
    Palette: Palette,
  }

  return (
    <section id="services" className="bg-surface py-16 sm:py-24 px-4 sm:px-8">
      <div className="max-w-canvas mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Kolom Kiri: 3 Kartu Horizontal Bertumpuk */}
          <div className="lg:col-span-6 flex flex-col gap-4">
            {servicesData.map((service, index) => {
              const IconComp = iconMap[service.iconName] || Monitor
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -4 }}
                  className="bg-white p-5 sm:p-6 rounded-card shadow-card hover:shadow-card-hover border border-line/60 transition-all duration-200 flex items-center gap-4 sm:gap-5 group"
                >
                  <IconCircle
                    icon={IconComp}
                    color={service.color}
                    size="lg"
                    className="group-hover:scale-105 transition-transform"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg sm:text-xl font-bold text-ink tracking-tight group-hover:text-teal transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-ink-soft mt-1 leading-snug">
                      {service.description}
                    </p>
                    <span className="inline-block mt-2 text-[11px] font-semibold text-ink-muted uppercase tracking-wider">
                      {service.meta}
                    </span>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Kolom Kanan: H2 "Apa yang bisa saya bantu?" + Paragraf Ringkasan + 2 Stat */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
            >
              <SectionHeading
                badge="Keahlian & Layanan"
                title="Apa yang bisa saya bantu?"
                align="left"
                className="!mb-6"
              />

              <div className="space-y-4 text-ink-soft text-base leading-relaxed">
                <p>
                  Sebagai lulusan Teknik Informatika dengan minat mendalam pada desain produk digital, saya menggabungkan pemikiran analitis sistematis dengan kepekaan estetika antarmuka.
                </p>
                <p>
                  Fokus utama saya adalah memastikan produk digital memiliki alur yang jelas, navigasi yang intuitif, serta didukung oleh pengelolaan data dan administrasi yang tertata rapi.
                </p>
              </div>

              {/* Dua Stat Berdampingan sesuai DESIGN.md */}
              <div className="grid grid-cols-2 gap-6 sm:gap-8 pt-8 mt-8 border-t border-line">
                <Stat
                  value={personalData.stats[0].value}
                  label={personalData.stats[0].label}
                  highlight="Teknik Informatika"
                />
                <Stat
                  value={personalData.stats[1].value}
                  label={personalData.stats[1].label}
                  highlight="Industri & Instansi"
                />
              </div>

              {/* CTA Ringkas */}
              <div className="mt-8">
                <Button
                  href="#contact"
                  variant="outline"
                  icon={ArrowRight}
                  iconPosition="right"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  Diskusikan Kebutuhan Anda
                </Button>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}

