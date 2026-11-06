import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Mail, Award, Sparkles, Copy, Check, ExternalLink, MessageSquare } from 'lucide-react'
import { personalData } from '../data/data'
import BrushStroke from '../components/BrushStroke'
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
        // Pause at full word
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
    <section className="relative bg-hero pt-4 pb-0 sm:pt-6 overflow-hidden rounded-t-canvas border-b border-line/60">
      <div className="max-w-canvas mx-auto px-4 sm:px-8">
        
        {/* Top Row: Left H1 & Right Tagline + CTAs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start pt-4 sm:pt-6">
          
          {/* Kolom Kiri Atas: Badge + H1 + Typing Title */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            {/* Open to Work Pill */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 self-start bg-white px-3.5 py-1.5 rounded-full shadow-sm border border-line/80 mb-4"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs font-semibold text-ink tracking-tight">
                {personalData.openToWorkText}
              </span>
            </motion.div>

            {/* H1 Besar Dua Baris sesuai DESIGN.md */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-6xl lg:text-[72px] font-bold text-ink leading-[1.08] tracking-tight"
            >
              <span className="block text-ink-soft/90 font-semibold text-3xl sm:text-5xl lg:text-[56px]">
                {personalData.heroGreeting}
              </span>
              <span className="block text-ink font-extrabold mt-1">
                {personalData.heroName}
              </span>
            </motion.h1>

            {/* Dynamic Typing Subtitle */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="h-8 mt-3 flex items-center"
            >
              <span className="text-sm sm:text-lg font-semibold text-teal flex items-center">
                <span>{displayText}</span>
                <span className="w-0.5 h-5 bg-teal ml-1 animate-pulse" />
              </span>
            </motion.div>
          </div>

          {/* Kolom Kanan Atas: Tagline Pendek & Tombol CTA */}
          <div className="lg:col-span-5 flex flex-col justify-between pt-2 lg:pt-6">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="text-sm sm:text-base text-ink-soft leading-relaxed max-w-md"
            >
              "{personalData.tagline}"
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.35 }}
              className="flex flex-wrap items-center gap-3 mt-5"
            >
              <Button
                href="#works"
                variant="solid"
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
            </motion.div>
          </div>
        </div>

        {/* Middle/Bottom Visual Composition: 3 Visual Pillars */}
        <div className="relative mt-8 sm:mt-10 lg:mt-12 min-h-[360px] sm:min-h-[440px] lg:min-h-[480px] flex flex-col justify-end">
          
          {/* Kolom Kiri Bawah: Email & Stat IPK */}
          <div className="absolute left-0 bottom-6 sm:bottom-12 z-20 hidden md:flex flex-col gap-6 max-w-[220px]">
            {/* Email link with copy micro-interaction */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="bg-white/80 backdrop-blur-sm p-3 rounded-2xl border border-line/60 shadow-sm"
            >
              <span className="text-[10px] uppercase font-bold text-ink-soft tracking-wider block mb-1">
                Surel Resmi
              </span>
              <div className="flex items-center justify-between gap-2">
                <a
                  href={`mailto:${personalData.email}`}
                  className="text-xs sm:text-sm font-semibold text-orange hover:underline truncate"
                  title="Kirim Email"
                >
                  {personalData.email}
                </a>
                <button
                  onClick={copyEmail}
                  className="p-1 rounded-lg hover:bg-slate-100 text-ink-soft hover:text-ink transition-colors"
                  title="Salin Email"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-teal" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              </div>
            </motion.div>

            {/* Stat IPK */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-white/90 backdrop-blur-sm p-4 rounded-2xl border border-line/60 shadow-card"
            >
              <div className="text-4xl sm:text-5xl font-extrabold text-ink leading-none">
                3.58
              </div>
              <div className="text-xs font-bold text-ink mt-1.5 leading-tight">
                IPK / Kelulusan S.Kom
              </div>
              <div className="text-[11px] text-teal font-semibold mt-0.5">
                Teknik Informatika UST
              </div>
            </motion.div>
          </div>

          {/* Kolom Tengah: Brush Stroke Teal + Foto Profil Cut-out */}
          <div className="relative mx-auto flex justify-center items-end z-10 w-full max-w-[420px] sm:max-w-[480px]">
            {/* SVG Brush Stroke Organik Hijau Teal di Belakang Foto */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, rotate: -3 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -top-10 sm:-top-16 inset-x-0 w-full h-[320px] sm:h-[420px] z-0 flex items-center justify-center pointer-events-none"
            >
              <BrushStroke className="w-full h-full transform scale-110 sm:scale-125" color="#1F6B5C" />
            </motion.div>

            {/* Foto Cut-out Tarmizi menempel ke dasar kanvas (no bottom gap) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative z-10 w-[260px] sm:w-[320px] lg:w-[360px] -mb-1 flex justify-center"
            >
              <img
                src={personalData.photoCutout}
                alt="Mhd. Tarmizi, S.Kom - Fresh Graduate Teknik Informatika & UI/UX Designer"
                className="w-full h-auto object-contain drop-shadow-xl select-none"
                loading="eager"
                onError={(e) => {
                  // Fallback jika profile.png gagal dimuat
                  e.target.onerror = null
                  e.target.src = personalData.photoOriginal
                }}
              />
            </motion.div>
          </div>

          {/* Kolom Kanan Bawah: Badge Sertifikasi / Gelar Akademik */}
          <div className="absolute right-0 bottom-6 sm:bottom-12 z-20 hidden md:flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.45 }}
              className="bg-white/95 backdrop-blur-sm p-4 rounded-2xl border border-line/60 shadow-card flex flex-col items-center text-center max-w-[190px]"
            >
              {/* Logo / Ikon Badge Bulat Line Art */}
              <div className="w-12 h-12 rounded-full bg-teal-light border-2 border-teal/30 flex items-center justify-center text-teal mb-2 shadow-sm">
                <Award className="w-6 h-6 text-teal" />
              </div>
              <span className="text-[11px] font-extrabold text-ink tracking-wider uppercase">
                S.Kom
              </span>
              <span className="text-[10px] font-bold text-ink-soft uppercase tracking-wider">
                Teknik Informatika
              </span>
              <span className="text-[9px] font-semibold text-orange uppercase tracking-wider mt-0.5">
                UI/UX Designer
              </span>
            </motion.div>
          </div>
        </div>

        {/* Mobile Info Strip (tampil hanya di layar kecil yang menyembunyikan kolom samping) */}
        <div className="md:hidden py-6 bg-white/60 -mx-4 px-4 border-t border-line/60 flex items-center justify-between text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-teal text-white flex items-center justify-center font-bold text-xs shadow-sm">
              3.58
            </div>
            <div>
              <span className="text-xs font-bold text-ink block">IPK 3.58 / S.Kom</span>
              <span className="text-[11px] text-ink-soft">Univ. Sains & Teknologi</span>
            </div>
          </div>

          <a
            href={`mailto:${personalData.email}`}
            className="text-xs font-semibold text-orange underline"
          >
            Kirim Surel
          </a>
        </div>
      </div>
    </section>
  )
}

