import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, MessageSquare, Linkedin, CheckCircle, Copy, ExternalLink } from 'lucide-react'
import { personalData, navLinks } from '../data/data'
import Button from '../components/Button'

export default function Contact({ onShowToast }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulasi pengiriman form & fallback mailto / WhatsApp
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      if (onShowToast) onShowToast('Pesan Anda telah siap! Mengalihkan ke email/WhatsApp...', 'success')

      // Fallback langsung membuat link mailto dengan pesan yang diketik
      const subject = encodeURIComponent(`Pesan dari Portofolio: ${formData.name}`)
      const body = encodeURIComponent(`Halo Tarmizi,\n\nNama: ${formData.name}\nEmail: ${formData.email}\n\nPesan:\n${formData.message}`)
      window.location.href = `mailto:${personalData.email}?subject=${subject}&body=${body}`
    }, 800)
  }

  const copyToClipboard = (text, label) => {
    navigator.clipboard.writeText(text)
    if (onShowToast) onShowToast(`${label} disalin ke clipboard!`, 'success')
  }

  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-8 bg-surface border-t border-line/60">
      <div className="max-w-canvas mx-auto">
        
        {/* Blok Besar Krem sesuai DESIGN.md 3.7 */}
        <div className="bg-hero rounded-canvas p-8 sm:p-12 lg:p-16 border border-line shadow-card relative overflow-hidden">
          {/* Subtle Accent Glow */}
          <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-orange-light/50 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 relative z-10">
            
            {/* Kolom Kiri: H2 + "Mulai dengan menyapa" (kata menyapa oranye + underline) */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider uppercase text-teal bg-teal-light rounded-full border border-teal/20">
                  Mari Terhubung
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-ink tracking-tight leading-[1.15]">
                  Mari buat sesuatu yang luar biasa bersama.
                </h2>
                
                <p className="mt-4 text-xl sm:text-2xl text-ink font-semibold">
                  Mulai dengan{' '}
                  <a
                    href={`mailto:${personalData.email}`}
                    className="text-orange underline underline-offset-8 decoration-2 hover:opacity-85 transition-opacity"
                  >
                    menyapa
                  </a>
                  .
                </p>

                <p className="mt-3 text-sm sm:text-base text-ink-soft leading-relaxed max-w-lg">
                  Saya selalu antusias menyambut peluang baru, baik sebagai full-time UI/UX Designer, staf administrasi & data, maupun proyek kolaborasi.
                </p>
              </div>

              {/* Direct Quick Contact Buttons */}
              <div className="mt-8 pt-8 border-t border-line flex flex-wrap items-center gap-3">
                <Button
                  href={personalData.whatsappUrl}
                  variant="solid"
                  icon={Phone}
                  iconPosition="left"
                  className="!bg-teal hover:!bg-teal-hover"
                >
                  Chat WhatsApp
                </Button>

                <Button
                  href={`mailto:${personalData.email}`}
                  variant="outline"
                  icon={Mail}
                  iconPosition="left"
                >
                  Kirim Email
                </Button>

                <Button
                  href={personalData.linkedinUrl}
                  variant="white"
                  icon={Linkedin}
                  iconPosition="left"
                >
                  LinkedIn
                </Button>
              </div>
            </div>

            {/* Kolom Kanan: Informasi Kontak & Lokasi */}
            <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-card border border-line shadow-sm flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold text-ink uppercase tracking-wider text-xs border-b border-line pb-3">
                  Informasi Kontak Resmi
                </h3>

                <div className="mt-5 space-y-4 text-sm">
                  {/* Lokasi */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-hero flex items-center justify-center text-teal shrink-0 border border-line">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[11px] font-semibold text-ink-soft uppercase tracking-wider block">
                        Lokasi Saat Ini
                      </span>
                      <span className="font-bold text-ink">{personalData.location}</span>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-orange-light flex items-center justify-center text-orange shrink-0 border border-orange/20">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[11px] font-semibold text-ink-soft uppercase tracking-wider block">
                        Alamat Email
                      </span>
                      <div className="flex items-center justify-between gap-2">
                        <a href={`mailto:${personalData.email}`} className="font-bold text-ink hover:text-orange truncate">
                          {personalData.email}
                        </a>
                        <button
                          onClick={() => copyToClipboard(personalData.email, 'Email')}
                          className="text-ink-soft hover:text-ink p-1 rounded hover:bg-slate-100"
                          title="Salin Email"
                        >
                          <Copy className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-teal-light flex items-center justify-center text-teal shrink-0 border border-teal/20">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[11px] font-semibold text-ink-soft uppercase tracking-wider block">
                        WhatsApp / Seluler
                      </span>
                      <div className="flex items-center justify-between gap-2">
                        <a href={personalData.whatsappUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-ink hover:text-teal truncate">
                          {personalData.phoneDisplay}
                        </a>
                        <button
                          onClick={() => copyToClipboard(personalData.phone, 'Nomor WhatsApp')}
                          className="text-ink-soft hover:text-ink p-1 rounded hover:bg-slate-100"
                          title="Salin Nomor"
                        >
                          <Copy className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* LinkedIn */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-[#EBF4FA] flex items-center justify-center text-[#0A66C2] shrink-0 border border-[#0A66C2]/20">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[11px] font-semibold text-ink-soft uppercase tracking-wider block">
                        Profil LinkedIn
                      </span>
                      <a href={personalData.linkedinUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-ink hover:text-teal truncate flex items-center gap-1">
                        <span>mhd-tarmizi</span>
                        <ExternalLink className="w-3 h-3 text-ink-soft" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Status Respons Cepat */}
              <div className="mt-6 pt-4 border-t border-line/60 flex items-center gap-2 text-xs text-ink-soft">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Biasanya merespon dalam waktu kurang dari 24 jam</span>
              </div>
            </div>

          </div>

          {/* Form Kontak di Bawah CTA sesuai DESIGN.md */}
          <div className="mt-10 sm:mt-12 bg-white rounded-card p-6 sm:p-10 border border-line shadow-sm relative z-10">
            <h3 className="text-xl font-bold text-ink mb-1">
              Kirim Pesan Langsung
            </h3>
            <p className="text-xs sm:text-sm text-ink-soft mb-6">
              Silakan isi formulir di bawah ini atau hubungi langsung via WhatsApp untuk respon cepat.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-ink-soft mb-1.5">
                    Nama Lengkap *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Contoh: Budi Santoso"
                    className="w-full px-4 py-3 rounded-[14px] bg-hero/50 border border-line focus:border-teal focus:bg-white focus:ring-2 focus:ring-teal/20 outline-none transition-all text-sm text-ink"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-ink-soft mb-1.5">
                    Alamat Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="nama@perusahaan.com"
                    className="w-full px-4 py-3 rounded-[14px] bg-hero/50 border border-line focus:border-teal focus:bg-white focus:ring-2 focus:ring-teal/20 outline-none transition-all text-sm text-ink"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-ink-soft mb-1.5">
                  Pesan Anda *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tuliskan tawaran kerja, proyek UI/UX, atau pesan Anda di sini..."
                  className="w-full px-4 py-3 rounded-[14px] bg-hero/50 border border-line focus:border-teal focus:bg-white focus:ring-2 focus:ring-teal/20 outline-none transition-all text-sm text-ink resize-none"
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <Button
                  type="submit"
                  variant="solid"
                  icon={Send}
                  iconPosition="right"
                  className="w-full sm:w-auto min-w-[180px]"
                >
                  {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
                </Button>

                <span className="text-xs text-ink-soft text-center sm:text-right">
                  Atau klik untuk chat langsung di{' '}
                  <a href={personalData.whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-teal font-bold hover:underline">
                    WhatsApp (+62 822-8701-2572)
                  </a>
                </span>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  )
}

