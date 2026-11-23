import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ExternalLink, Figma, CheckCircle, Calendar, User, Wrench, AlertCircle } from 'lucide-react'
import Button from './Button'
import CarRentalMockup from './CarRentalMockup'
import ClinicWebMockup from './ClinicWebMockup'

export default function CaseStudyModal({ project, isOpen, onClose }) {
  // ESC key handler & body scroll lock
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }

    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!project) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-ink/70 backdrop-blur-sm transition-opacity"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-surface rounded-[24px] sm:rounded-[32px] shadow-2xl overflow-y-auto z-10 border border-line my-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* Top Sticky Header */}
            <div className="sticky top-0 z-20 bg-surface/95 backdrop-blur-md px-6 sm:px-8 py-4 sm:py-5 border-b border-line flex items-center justify-between">
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-light text-teal border border-teal/20">
                  {project.category}
                </span>
                <span className="text-xs sm:text-sm text-ink-soft flex items-center gap-1 font-medium">
                  <Calendar className="w-3.5 h-3.5" />
                  {project.period}
                </span>
              </div>

              <button
                onClick={onClose}
                className="w-10 h-10 rounded-full bg-hero hover:bg-slate-200 text-ink flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Tutup Detail Case Study"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-8">
              {/* Title & Overview */}
              <div>
                <h3 id="modal-title" className="text-2xl sm:text-3xl lg:text-4xl font-bold text-ink tracking-tight">
                  {project.title}
                </h3>
                <p className="mt-2 text-base sm:text-lg text-teal font-medium">
                  {project.subtitle}
                </p>
                <p className="mt-4 text-base text-ink-soft leading-relaxed">
                  {project.overview}
                </p>
              </div>

              {/* Quick Meta Info (Role & Tools) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-hero p-5 rounded-2xl border border-line/60">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-teal shadow-sm shrink-0">
                    <User className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-ink-soft uppercase tracking-wider">Peran Proyek</span>
                    <p className="font-bold text-ink text-sm sm:text-base mt-0.5">{project.role}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-orange shadow-sm shrink-0">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-ink-soft uppercase tracking-wider">Metode & Alat</span>
                    <div className="flex flex-wrap gap-1.5 mt-1.5">
                      {project.tools.map((tool, idx) => (
                        <span key={idx} className="text-xs bg-white text-ink px-2.5 py-0.5 rounded-full border border-line font-medium">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Visual Showcase (Mockup) */}
              <div className="bg-[#F8F6ED] p-6 sm:p-8 rounded-2xl border border-line text-center overflow-hidden">
                <div className="text-xs text-ink-soft font-semibold uppercase tracking-wider mb-4 flex items-center justify-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-teal" />
                  Pratinjau Antarmuka Visual (Interactive Mockup)
                </div>

                {project.id === 'project-sewa-mobil' ? (
                  <CarRentalMockup />
                ) : (
                  <ClinicWebMockup isModal={true} />
                )}

                <p className="mt-4 text-xs text-ink-soft italic">
                  * Pratinjau tangkapan layar langsung (*direct screenshot*) dari sistem web Optimasi Layanan Klinik Hewan berbasis algoritma K-Means.
                </p>
              </div>

              {/* 4 Pillars Case Study: Problem, Process, Solution, Result */}
              {project.caseStudy && (
                <div className="space-y-6">
                  <h4 className="text-xl font-bold text-ink border-b border-line pb-2">
                    Laporan Studi Kasus (Case Study)
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Problem */}
                    <div className="bg-orange-light/40 border border-orange/20 p-5 rounded-2xl">
                      <div className="flex items-center gap-2 text-orange font-bold text-sm mb-2 uppercase tracking-wide">
                        <AlertCircle className="w-4 h-4" />
                        1. Problem (Tantangan Masalah)
                      </div>
                      <p className="text-sm sm:text-base text-ink-soft leading-relaxed">
                        {project.caseStudy.problem}
                      </p>
                    </div>

                    {/* Process */}
                    <div className="bg-yellow-light/60 border border-yellow/30 p-5 rounded-2xl">
                      <div className="flex items-center gap-2 text-ink font-bold text-sm mb-2 uppercase tracking-wide">
                        <Wrench className="w-4 h-4 text-yellow" />
                        2. Proses & Metodologi
                      </div>
                      <p className="text-sm sm:text-base text-ink-soft leading-relaxed">
                        {project.caseStudy.process}
                      </p>
                    </div>

                    {/* Solution */}
                    <div className="bg-teal-light/40 border border-teal/20 p-5 rounded-2xl">
                      <div className="flex items-center gap-2 text-teal font-bold text-sm mb-2 uppercase tracking-wide">
                        <CheckCircle className="w-4 h-4" />
                        3. Solusi Desain
                      </div>
                      <p className="text-sm sm:text-base text-ink-soft leading-relaxed">
                        {project.caseStudy.solution}
                      </p>
                    </div>

                    {/* Result */}
                    <div className="bg-hero border border-line p-5 rounded-2xl">
                      <div className="flex items-center gap-2 text-ink font-bold text-sm mb-2 uppercase tracking-wide">
                        <CheckCircle className="w-4 h-4 text-teal" />
                        4. Hasil & Dampak
                      </div>
                      <p className="text-sm sm:text-base text-ink-soft leading-relaxed">
                        {project.caseStudy.result}
                      </p>
                    </div>
                  </div>

                  {/* Key Features List */}
                  {project.caseStudy.features && (
                    <div className="bg-white p-5 rounded-2xl border border-line">
                      <h5 className="font-bold text-ink text-sm sm:text-base mb-3">
                        Fitur Utama yang Dirancang:
                      </h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {project.caseStudy.features.map((feat, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-sm text-ink-soft">
                            <span className="w-1.5 h-1.5 rounded-full bg-teal shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Action Buttons */}
              <div className="pt-4 border-t border-line flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  {project.figmaUrl && (
                    <Button
                      href={project.figmaUrl}
                      variant="solid"
                      icon={Figma}
                      iconPosition="left"
                    >
                      Buka di Figma
                    </Button>
                  )}
                  {project.demoUrl && (
                    <Button
                      href={project.demoUrl}
                      variant="outline"
                      icon={ExternalLink}
                      iconPosition="right"
                    >
                      Live Demo
                    </Button>
                  )}
                </div>

                <Button
                  onClick={onClose}
                  variant="outline"
                >
                  Tutup
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

