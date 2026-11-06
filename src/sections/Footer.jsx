import React from 'react'
import { ArrowUp, Heart } from 'lucide-react'
import { personalData, navLinks } from '../data/data'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-hero py-10 px-4 sm:px-8 border-t border-line/60 rounded-b-canvas">
      <div className="max-w-canvas mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Kiri: Logo Script + Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 text-center sm:text-left">
          <span className="font-script text-3xl font-bold text-ink select-none">
            {personalData.nickname}
          </span>
          <span className="hidden sm:inline text-line text-lg">|</span>
          <p className="text-xs sm:text-sm text-ink-soft">
            © {new Date().getFullYear()} {personalData.name}. Hak Cipta Dilindungi.
          </p>
        </div>

        {/* Tengah: Quick Links */}
        <div className="flex items-center gap-4 text-xs font-semibold text-ink-soft uppercase tracking-wider">
          {navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-teal transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Kanan: Badge & Back to Top */}
        <div className="flex items-center gap-4">
          <span className="text-xs text-ink-soft">
            Dibuat dengan <span className="font-semibold text-ink">React</span> & <span className="font-semibold text-ink">Vercel</span>
          </span>

          <button
            onClick={scrollToTop}
            aria-label="Kembali ke atas"
            className="w-9 h-9 rounded-full bg-white hover:bg-teal hover:text-white text-ink flex items-center justify-center border border-line shadow-sm transition-all duration-200 cursor-pointer"
            title="Kembali ke atas"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  )
}

