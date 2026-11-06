import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronRight, Mail, Linkedin, MapPin, Sparkles, Send } from 'lucide-react'
import { personalData, navLinks } from '../data/data'
import NavPill from './NavPill'
import Button from './Button'

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('services')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Scroll-spy to highlight active menu section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)

      const sectionIds = ['contact', 'skills', 'education', 'experience', 'works', 'services']
      const scrollPosition = window.scrollY + 220

      for (const id of sectionIds) {
        const element = document.getElementById(id)
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(id)
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  // Close mobile menu on ESC key or desktop resize
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setMobileMenuOpen(false)
    }

    const handleResize = () => {
      if (window.innerWidth >= 1024) setMobileMenuOpen(false)
    }

    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    setMobileMenuOpen(false)
    const targetId = href.replace('#', '')
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-hero/95 backdrop-blur-md shadow-sm border-b border-line/60 py-3'
            : 'bg-transparent py-4 sm:py-6'
        }`}
      >
        <div className="max-w-canvas mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Kiri: Logo Script "Tarmizi" */}
          <a
            href="#"
            className="font-script text-3xl sm:text-4xl font-bold text-ink hover:text-teal transition-colors tracking-wide select-none"
            aria-label="Kembali ke atas"
          >
            {personalData.nickname}
          </a>

          {/* Tengah: Nav Menu Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/70 backdrop-blur-sm p-1.5 rounded-full border border-line/70 shadow-sm">
            {navLinks.map((item) => {
              const sectionKey = item.href.replace('#', '')
              const isActive = activeSection === sectionKey
              return (
                <NavPill
                  key={item.href}
                  href={item.href}
                  active={isActive}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  {item.label}
                </NavPill>
              )
            })}
          </nav>

          {/* Kanan: Tombol CTA Hubungi Cepat (Desktop) */}
          <div className="hidden sm:flex items-center">
            <Button
              href="#contact"
              variant="solid"
              className="!px-5 !py-2 !text-xs font-semibold uppercase tracking-wider"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Hubungi Saya
            </Button>
          </div>

          {/* Hamburger Mobile Toggle Button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="w-11 h-11 rounded-full bg-white text-ink flex items-center justify-center shadow-card border border-line/80 active:scale-95 transition-all cursor-pointer"
              aria-label="Buka Menu Navigasi"
            >
              <Menu className="w-5 h-5 text-ink" />
            </button>
          </div>
        </div>
      </header>

      {/* Modern Immersive Mobile Menu Modal (Kaca Buram Blur Putih / White Frosted Glassmorphism) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            animate={{ opacity: 1, backdropFilter: 'blur(32px)' }}
            exit={{ opacity: 0, backdropFilter: 'blur(0px)' }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-50 bg-white/80 backdrop-blur-3xl backdrop-saturate-150 flex flex-col justify-between overflow-y-auto"
            role="dialog"
            aria-modal="true"
          >
            {/* Top Bar inside Mobile Menu with Glassmorphism */}
            <div className="px-6 py-5 border-b border-line/60 flex items-center justify-between bg-white/70 backdrop-blur-md sticky top-0 z-20">
              <div className="flex items-center gap-3">
                <span className="font-script text-3xl font-bold text-ink select-none">
                  {personalData.nickname}
                </span>
                <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold uppercase tracking-wider border border-emerald-500/20 shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  Available
                </span>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-11 h-11 rounded-full bg-white text-ink flex items-center justify-center shadow-card border border-line/80 active:scale-95 hover:bg-slate-50 transition-all cursor-pointer"
                aria-label="Tutup Menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Menu Navigation Items (Editorial Card Style on White Frosted Blur) */}
            <div className="px-6 py-6 flex-1 flex flex-col justify-center max-w-md mx-auto w-full space-y-2.5">
              <span className="text-[11px] font-bold text-ink-soft uppercase tracking-wider block px-1 mb-1">
                Navigasi Halaman
              </span>

              {navLinks.map((item, index) => {
                const sectionKey = item.href.replace('#', '')
                const isActive = activeSection === sectionKey

                return (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center justify-between p-3.5 rounded-2xl transition-all duration-200 active:scale-[0.98] ${
                      isActive
                        ? 'bg-teal text-white shadow-lg shadow-teal/25 border border-teal'
                        : 'bg-white/90 backdrop-blur-md hover:bg-white text-ink border border-line/70 shadow-sm'
                    }`}
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      {/* Number Pill */}
                      <span
                        className={`w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center shrink-0 ${
                          isActive
                            ? 'bg-white/20 text-white'
                            : 'bg-hero text-ink-soft'
                        }`}
                      >
                        {item.num || `0${index + 1}`}
                      </span>

                      {/* Title & Subtitle */}
                      <div className="truncate">
                        <div className="flex items-center gap-2">
                          <span className={`text-base font-bold tracking-tight ${isActive ? 'text-white' : 'text-ink'}`}>
                            {item.name}
                          </span>
                          <span className={`text-[10px] font-semibold uppercase tracking-wider px-1.5 py-0.5 rounded ${
                            isActive ? 'bg-white/20 text-white' : 'text-ink-muted bg-slate-100'
                          }`}>
                            {item.label}
                          </span>
                        </div>
                        {item.desc && (
                          <span className={`text-xs block mt-0.5 truncate ${
                            isActive ? 'text-white/80' : 'text-ink-soft'
                          }`}>
                            {item.desc}
                          </span>
                        )}
                      </div>
                    </div>

                    <ChevronRight className={`w-5 h-5 shrink-0 ml-2 transition-transform ${
                      isActive ? 'text-white translate-x-0.5' : 'text-ink-muted'
                    }`} />
                  </motion.a>
                )
              })}
            </div>

            {/* Bottom Contact Drawer Footer (Frosted White Glass Container) */}
            <div className="p-6 bg-white/75 backdrop-blur-xl border-t border-line/60 space-y-4 max-w-md mx-auto w-full rounded-t-3xl shadow-sm">
              {/* Direct CTA Button */}
              <Button
                href="#contact"
                variant="solid"
                icon={Send}
                iconPosition="right"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full !py-3.5 text-center !rounded-2xl !text-sm shadow-md"
              >
                Mulai Percakapan / Hubungi Saya
              </Button>

              {/* Direct Quick Info Strip */}
              <div className="flex flex-col gap-2 pt-1 text-xs">
                <a
                  href={`mailto:${personalData.email}`}
                  className="flex items-center gap-2 text-ink hover:text-orange font-semibold truncate"
                >
                  <Mail className="w-3.5 h-3.5 text-orange shrink-0" />
                  <span className="truncate">{personalData.email}</span>
                </a>

                <div className="flex items-center justify-between text-ink-soft pt-1 border-t border-line/40">
                  <a
                    href={personalData.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 hover:text-teal font-medium"
                  >
                    <Linkedin className="w-3.5 h-3.5 text-[#0A66C2]" />
                    <span>Profil LinkedIn</span>
                  </a>

                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-teal" />
                    <span>Pekanbaru, Riau</span>
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
