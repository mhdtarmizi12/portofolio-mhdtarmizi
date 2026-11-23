import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Mail, Award, Sparkles, Copy, Check, ExternalLink, ArrowRight, MapPin, GraduationCap } from 'lucide-react'
import { personalData } from '../data/data'
import Button from '../components/Button'

export default function Hero({ onCopyToast }) {
  const [copied, setCopied] = useState(false)
  const [titleIndex, setTitleIndex] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  // Typing effect for titles
  useEffect(() => {
    const currentTitle = personalData.typingTitles[titleIndex]
    const typingSpeed = isDeleting ? 40 : 80

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentTitle) {
        setTimeout(() => setIsDeleting(true), 1800)
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false)
        setTitleIndex((prev) => (prev + 1) % personalData.typingTitles.length)
      } else {
        const nextText = isDeleting
          ? currentTitle.substring(0, displayText.length - 1)
          : currentTitle.substring(0, displayText.length + 1)
        setDisplayText(nextText)
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [displayText, isDeleting, titleIndex])

  const copyEmail = () => {
    navigator.clipboard.writeText(personalData.email)
    setCopied(true)
    if (onCopyToast) onCopyToast('Email berhasil disalin ke clipboard!')
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section className="relative bg-hero pt-6 sm:pt-10 pb-0 overflow-hidden rounded-t-canvas border-b border-line/60">
      <div className="max-w-canvas mx-auto px-4 sm:px-8">
        
        {/* Modern 2-Column Balanced Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          
          {/* Kolom Kiri: Informasi, Bio, CTAs & Kartu Highlight */}
          <div className="lg:col-span-7 flex flex-col justify-center pb-8 sm:pb-14 pt-2">
            
            {/* Open to Work Pill */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 self-start bg-white px-3.5 py-1.5 rounded-full shadow-xs border border-line/80 mb-5"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs font-semibold text-ink tracking-tight">
                {personalData.openToWorkText}
              </span>
            </motion.div>

            {/* H1 Besar Dua Baris */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold text-ink leading-[1.1] tracking-tight"
            >
              <span className="block text-ink-soft/90 font-medium text-2xl sm:text-4xl mb-1">
                {personalData.heroGreeting}
              </span>
              <span>{personalData.name}</span>
            </motion.h1>

            {/* Dynamic Typing Role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-8 mt-3 flex items-center"
            >
              <span className="text-base sm:text-xl font-bold text-teal flex items-center">
                <span>{displayText}</span>
                <span className="w-0.5 h-5 bg-teal ml-1.5 animate-pulse" />
              </span>
            </motion.div>

            {/* Tagline / Ringkasan Singkat */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-sm sm:text-base text-ink-soft leading-relaxed max-w-xl mt-4"
            >
              {personalData.tagline}
            </motion.p>

            {/* Tombol CTA & Quick Email Copy */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-wrap items-center gap-3 mt-6 sm:mt-7"
            >
              <Button
                href="#works"
                variant="solid"
                icon={ArrowRight}
                iconPosition="right"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Lihat Project
              </Button>

              <Button
                href="#contact"
                variant="outline"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Hubungi Saya
              </Button>

              {/* Quick Email Pill with Copy */}
              <div className="inline-flex items-center gap-2 bg-white px-3.5 py-2.5 rounded-full border border-line shadow-xs">
                <a
                  href={`mailto:${personalData.email}`}
                  className="text-xs font-semibold text-orange hover:underline truncate max-w-[170px] sm:max-w-none"
                  title="Kirim Email"
                >
                  {personalData.email}
                </a>
                <button
                  onClick={copyEmail}
                  className="p-1 rounded-md hover:bg-slate-100 text-ink-soft hover:text-ink transition-colors cursor-pointer"
                  title="Salin Email"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-teal" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </motion.div>

            {/* Mini Bento Highlight Cards (IPK 3.58 & Gelar S.Kom) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-7 mt-7 border-t border-line/70"
            >
              {/* Card 1: IPK */}
              <div className="bg-white p-3.5 rounded-2xl border border-line/70 shadow-xs">
                <span className="text-2xl sm:text-3xl font-extrabold text-ink leading-none">
                  3.58
                </span>
                <span className="text-xs font-bold text-ink-soft block mt-1">
                  IPK Kelulusan
                </span>
                <span className="text-[10px] text-teal font-semibold block mt-0.5">
                  Skala 4.00
                </span>
              </div>

              {/* Card 2: Gelar & Prodi */}
              <div className="bg-white p-3.5 rounded-2xl border border-line/70 shadow-xs">
                <div className="flex items-center gap-1.5 text-teal mb-0.5">
                  <GraduationCap className="w-4 h-4" />
                  <span className="text-xs font-bold uppercase tracking-wider">S.Kom</span>
                </div>
                <span className="text-xs font-bold text-ink block">
                  Teknik Informatika
                </span>
                <span className="text-[10px] text-ink-muted block mt-0.5 truncate">
                  Univ. Sains & Teknologi
                </span>
              </div>

              {/* Card 3: Lokasi */}
              <div className="bg-white p-3.5 rounded-2xl border border-line/70 shadow-xs col-span-2 sm:col-span-1 flex flex-col justify-center">
                <div className="flex items-center gap-1.5 text-orange mb-0.5">
                  <MapPin className="w-3.5 h-3.5" />
                  <span className="text-[11px] font-bold uppercase tracking-wider">Lokasi</span>
                </div>
                <span className="text-xs font-bold text-ink block">
                  Pekanbaru, Riau
                </span>
                <span className="text-[10px] text-ink-muted block mt-0.5">
                  Indonesia
                </span>
              </div>
            </motion.div>

          </div>

          {/* Kolom Kanan: Foto Profil Berdiri Bersih & Tegap (Tanpa Background Hijau) */}
          <div className="lg:col-span-5 flex justify-center items-end relative min-h-[380px] sm:min-h-[460px] lg:min-h-[540px]">
            
            {/* Ambient Soft Light Glow (Sangat halus, tidak ada bentuk lingkaran hijau kasar) */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[280px] sm:w-[360px] h-[360px] bg-gradient-to-t from-amber-100/40 via-teal-50/20 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

            {/* Foto Cut-Out Tarmizi berdiri bersih menempel ke dasar kanvas */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{
                opacity: 1,
                y: [0, -6, 0]
              }}
              transition={{
                opacity: { duration: 0.7, delay: 0.25 },
                y: { repeat: Infinity, duration: 4.8, ease: "easeInOut", delay: 0.9 }
              }}
              className="relative z-10 w-full max-w-[300px] sm:max-w-[360px] lg:max-w-[400px] -mb-1 flex justify-center"
            >
              <img
                src={personalData.photoCutout}
                alt="Mhd. Tarmizi, S.Kom - Fresh Graduate Teknik Informatika & UI/UX Designer"
                className="w-full h-auto object-contain drop-shadow-xl select-none"
                loading="eager"
                onError={(e) => {
                  e.target.onerror = null
                  e.target.src = personalData.photoOriginal
                }}
              />
            </motion.div>

            {/* Floating Glass Pill Badge (Tengah di mobile, rapi di samping pada desktop) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: [0, -6, 0]
              }}
              transition={{ 
                opacity: { duration: 0.5, delay: 0.5 },
                scale: { duration: 0.5, delay: 0.5 },
                y: { repeat: Infinity, duration: 4.2, ease: "easeInOut", delay: 1 }
              }}
              className="absolute bottom-4 left-0 right-0 mx-auto w-max sm:left-auto sm:right-4 sm:mx-0 sm:w-auto md:right-8 lg:bottom-20 lg:-right-6 xl:bottom-24 xl:-right-10 z-20 bg-white/95 backdrop-blur-md px-3.5 py-2 sm:px-3.5 sm:py-2.5 rounded-2xl border border-line shadow-card flex items-center gap-2 sm:gap-2.5 hover:scale-105 transition-transform"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-xl bg-teal-light text-teal flex items-center justify-center font-bold text-xs shrink-0">
                <Award className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </div>
              <div className="text-left">
                <span className="text-[11px] sm:text-xs font-bold text-ink block leading-tight">
                  UI/UX & Web System
                </span>
                <span className="text-[9px] sm:text-[10px] font-semibold text-teal uppercase tracking-wider block mt-0.5">
                  Fresh Graduate S.Kom
                </span>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  )
}
