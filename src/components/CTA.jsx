import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiMessageCircle, FiSend } from 'react-icons/fi'

export default function CTA() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Placeholder: integrate with EmailJS or Formspree in production
    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <section id="cta" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-indigo-900/30 to-violet-900/40" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — headline + contact buttons */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 text-white text-sm font-medium border border-white/20 mb-4">
              Mulai Sekarang
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
              Siap Punya{' '}
              <span className="gradient-text">Landing Page yang Menghasilkan?</span>
            </h2>
            <p className="text-gray-300 leading-relaxed mb-8">
              Konsultasikan kebutuhan bisnis Anda sekarang — gratis, tanpa komitmen.
              Kami bantu UMKM & bisnis lokal Anda tampil profesional dan mulai
              mendapat pelanggan dari online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/6285870089917"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-green-500 hover:bg-green-600 text-white font-semibold transition-colors duration-200 shadow-lg shadow-green-900/30"
              >
                <FiMessageCircle className="w-5 h-5" />
                Chat via WhatsApp
              </a>
              <a
                href="mailto:sofyanwanadi6@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full glass border border-white/20 text-white font-semibold hover:border-blue-400/40 hover:bg-blue-500/10 transition-all duration-200"
              >
                <FiMail className="w-5 h-5" />
                Kirim Email
              </a>
            </div>
          </motion.div>

          {/* Right — Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-3xl p-8 border border-white/10"
          >
            {sent ? (
              <div className="text-center py-8">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Pesan Terkirim!
                </h3>
                <p className="text-gray-400">
                  Kami akan menghubungi Anda segera.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Masukkan nama Anda"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/5 transition-all duration-200 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="nama@perusahaan.com"
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/5 transition-all duration-200 text-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Pesan
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Ceritakan bisnis Anda dan apa yang ingin dicapai dari landing page..."
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/5 transition-all duration-200 text-sm resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold hover:opacity-90 transition-opacity duration-200 shadow-xl shadow-blue-900/30"
                >
                  <FiSend className="w-4 h-4" />
                  Kirim Pesan
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
