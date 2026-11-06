import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Figma, ArrowUpRight, Sparkles, ChevronRight } from 'lucide-react'
import { projectsData } from '../data/data'
import SectionHeading from '../components/SectionHeading'
import CarRentalMockup from '../components/CarRentalMockup'
import ClinicWebMockup from '../components/ClinicWebMockup'
import CaseStudyModal from '../components/CaseStudyModal'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = (project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const cardStyleMap = {
    yellow: "bg-yellow text-ink",
    teal: "bg-teal text-white"
  }

  return (
    <section id="works" className="py-20 sm:py-28 px-4 sm:px-8 bg-surface border-t border-line/60">
      <div className="max-w-canvas mx-auto">
        
        {/* Header Satu Baris sesuai DESIGN.md */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10 sm:mb-14">
          <div>
            <span className="inline-block px-3 py-1 mb-2 text-xs font-semibold tracking-wider uppercase text-teal bg-teal-light rounded-full border border-teal/20">
              Portofolio Pilihan
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-ink tracking-tight">
              Project Terbaru
            </h2>
            <p className="mt-2 text-sm sm:text-base text-ink-soft">
              Solusi digital yang berfokus pada kemudahan pengguna dan efisiensi sistem.
            </p>
          </div>

          <div className="text-xs sm:text-sm font-semibold text-ink-soft flex items-center gap-1.5 self-start sm:self-auto bg-hero px-4 py-2 rounded-full border border-line">
            <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
            Klik kartu untuk membaca Studi Kasus
          </div>
        </div>

        {/* Grid / Horizontal Cards Project */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10">
          {projectsData.map((project, index) => {
            const isYellow = project.cardBg === 'yellow'
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ y: -6 }}
                onClick={() => handleOpenModal(project)}
                className={`rounded-[24px] sm:rounded-[28px] p-6 sm:p-8 cursor-pointer transition-all duration-300 shadow-card hover:shadow-card-hover flex flex-col justify-between overflow-hidden relative group border ${
                  isYellow
                    ? 'bg-[#F4BD44] text-ink border-amber-300'
                    : 'bg-teal text-white border-teal-hover'
                }`}
              >
                {/* Top Label & CTA Icon */}
                <div className="flex items-start justify-between gap-4 z-10">
                  <div>
                    <span
                      className={`inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2 ${
                        isYellow
                          ? 'bg-ink text-white'
                          : 'bg-white text-teal'
                      }`}
                    >
                      {project.category}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-1 leading-snug">
                      {project.title}
                    </h3>
                    <p className={`text-xs sm:text-sm mt-1 font-medium ${isYellow ? 'text-ink/80' : 'text-white/80'}`}>
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Arrow Icon Button */}
                  <div
                    className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 shadow-sm ${
                      isYellow ? 'bg-ink text-white' : 'bg-white text-teal'
                    }`}
                  >
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                {/* Mockup Preview Visual Container */}
                <div className="my-6 sm:my-8 transform group-hover:scale-[1.02] transition-transform duration-300">
                  {project.id === 'project-sewa-mobil' ? (
                    <div className="pt-2">
                      <CarRentalMockup />
                    </div>
                  ) : (
                    <div className="pt-2">
                      <ClinicWebMockup />
                    </div>
                  )}
                </div>

                {/* Bottom Tags & Hint */}
                <div className="pt-4 border-t border-black/10 flex flex-wrap items-center justify-between gap-3 text-xs z-10">
                  <div className="flex flex-wrap gap-1.5">
                    {project.tools.slice(0, 3).map((tool, idx) => (
                      <span
                        key={idx}
                        className={`px-2.5 py-1 rounded-full font-semibold ${
                          isYellow
                            ? 'bg-white/80 text-ink'
                            : 'bg-white/20 text-white'
                        }`}
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <span className={`font-bold flex items-center gap-1 ${isYellow ? 'text-ink' : 'text-white'}`}>
                    Detail Case Study <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Case Study Modal Interactive */}
        <CaseStudyModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />

      </div>
    </section>
  )
}

