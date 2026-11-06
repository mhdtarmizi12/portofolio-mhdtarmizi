import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Services from './sections/Services'
import Projects from './sections/Projects'
import Experience from './sections/Experience'
import Education from './sections/Education'
import Skills from './sections/Skills'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Toast from './components/Toast'

export default function App() {
  const [toast, setToast] = useState({
    isVisible: false,
    message: '',
    type: 'success'
  })

  const showToast = (message, type = 'success') => {
    setToast({
      isVisible: true,
      message,
      type
    })
    setTimeout(() => {
      setToast((prev) => ({ ...prev, isVisible: false }))
    }, 3200)
  }

  return (
    // Latar Luar Halaman: Kuning Mustard (--bg-page: #F0B03A) dengan Frame Padding sesuai DESIGN.md
    <div className="min-h-screen bg-page py-3 px-2 sm:py-8 sm:px-6 lg:py-10 lg:px-10 flex flex-col justify-center items-center">
      
      {/* Kanvas Kartu Besar Bersudut Membulat 28px di Tengah */}
      <main className="w-full max-w-[1240px] bg-white rounded-[22px] sm:rounded-canvas shadow-canvas overflow-hidden border border-amber-500/20 flex flex-col">
        {/* Sticky Navbar */}
        <Navbar />

        {/* 1. Hero Section */}
        <Hero onCopyToast={showToast} />

        {/* 2. Layanan / "What do I help?" */}
        <Services />

        {/* 3. Project / Case Study */}
        <Projects />

        {/* 4. Pengalaman Kerja / Timeline */}
        <Experience />

        {/* 5. Pendidikan Formal */}
        <Education />

        {/* 6. Skills & Tools (menggantikan testimoni sesuai DESIGN.md 3.6) */}
        <Skills />

        {/* 7. Kontak & CTA */}
        <Contact onShowToast={showToast} />

        {/* 8. Footer Minimal */}
        <Footer />
      </main>

      {/* Floating Toast Notification */}
      <Toast
        isVisible={toast.isVisible}
        message={toast.message}
        type={toast.type}
        onClose={() => setToast((prev) => ({ ...prev, isVisible: false }))}
      />
    </div>
  )
}

