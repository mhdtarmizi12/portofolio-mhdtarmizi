import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
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

      const sectionIds = ['contact', 'skills', 'experience', 'works', 'services']
      const scrollPosition = window.scrollY + 200

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

        {/* Kanan: Tombol CTA Hubungi Cepat */}
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

        {/* Hamburger Mobile Toggle */}
        <div className="flex items-center sm:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 rounded-full bg-white text-ink flex items-center justify-center shadow-sm border border-line cursor-pointer"
            aria-label="Menu Navigasi"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-hero/98 backdrop-blur-xl border-b border-line shadow-2xl p-6 transition-all duration-300">
          <div className="flex flex-col gap-3">
            {navLinks.map((item) => {
              const sectionKey = item.href.replace('#', '')
              const isActive = activeSection === sectionKey
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-3 rounded-2xl text-sm font-semibold tracking-wide uppercase transition-all ${
                    isActive
                      ? 'bg-teal text-white shadow-sm'
                      : 'text-ink hover:bg-white/60'
                  }`}
                >
                  {item.name} ({item.label})
                </a>
              )
            })}

            <div className="pt-3 mt-2 border-t border-line/60 flex items-center justify-between text-xs text-ink-soft px-2">
              <span className="text-orange font-semibold">{personalData.email}</span>
              <span className="text-teal font-semibold">Pekanbaru, Riau</span>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

