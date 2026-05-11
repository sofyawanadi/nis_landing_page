import { motion } from 'framer-motion'
import { HiArrowRight, HiPlay } from 'react-icons/hi'

const floatingCards = [
  { label: '100+ Landing Page', icon: '🚀', delay: 0 },
  { label: 'UMKM Puas', icon: '🤝', delay: 0.5 },
  { label: 'Selesai 7 Hari', icon: '⚡', delay: 1 },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-navy-900"
    >
      {/* Background glow orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-600/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-3xl" />
      </div>

      {/* Grid dots background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(99,102,241,0.3) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-blue-500/30 text-blue-400 text-sm font-medium mb-6"
            >
              <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
              PT Nayfos IT Solution
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6"
            >
              Landing Page yang{' '}
              <span className="gradient-text">Mengkonversi</span>{' '}
              Pengunjung Jadi Pelanggan
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-400 text-lg leading-relaxed mb-8 max-w-lg"
            >
              Nayfos membuat landing page profesional untuk UMKM & bisnis
              lokal Indonesia — lengkap dengan desain, copywriting, dan
              optimasi agar bisnis Anda segera mendapat pelanggan online.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#cta"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold text-sm hover:opacity-90 transition-all duration-200 shadow-xl shadow-blue-900/40 glow-blue"
              >
                Buat Landing Page Saya
                <HiArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#portfolio"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full glass border border-white/10 text-white font-semibold text-sm hover:border-blue-500/40 hover:bg-blue-500/10 transition-all duration-200"
              >
                <HiPlay className="w-4 h-4 text-blue-400" />
                Lihat Contoh
              </a>
            </motion.div>
          </div>

          {/* Right — Tech Dashboard Visual */}
          <div className="relative hidden lg:flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative w-full max-w-md"
            >
              {/* Main dashboard card */}
              <div className="glass rounded-2xl p-6 border border-blue-500/20 glow-blue">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/70" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                    <div className="w-3 h-3 rounded-full bg-green-500/70" />
                  </div>
                  <span className="text-gray-400 text-xs font-mono">nayfos.id/landing-page</span>
                </div>
                {/* Mock chart bars */}
                <div className="flex items-end gap-2 h-32 mb-4">
                  {[60, 85, 45, 90, 70, 95, 55, 80].map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ delay: 0.5 + i * 0.1, duration: 0.5 }}
                      style={{ height: `${h}%` }}
                      className={`flex-1 rounded-t-md origin-bottom ${
                        i % 2 === 0
                          ? 'bg-gradient-to-t from-blue-600 to-blue-400'
                          : 'bg-gradient-to-t from-violet-600 to-violet-400'
                      }`}
                    />
                  ))}
                </div>
                <div className="flex justify-between text-xs text-gray-500 font-mono">
                  {['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agt'].map((m) => (
                    <span key={m}>{m}</span>
                  ))}
                </div>
                <div className="mt-4 pt-4 border-t border-white/10 flex justify-between">
                  <div>
                    <p className="text-xs text-gray-500">Landing Page</p>
                    <p className="text-xl font-bold gradient-text">100+</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">UMKM Puas</p>
                    <p className="text-xl font-bold gradient-text">80+</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Selesai</p>
                    <p className="text-xl font-bold text-green-400">3-7 Hari</p>
                  </div>
                </div>
              </div>

              {/* Floating mini cards */}
              {floatingCards.map((card, i) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + card.delay, duration: 0.5 }}
                  className={`absolute glass rounded-xl px-4 py-2 border border-white/10 text-sm font-medium flex items-center gap-2 animate-float ${
                    i === 0
                      ? '-top-4 -left-8'
                      : i === 1
                      ? 'top-1/2 -right-10'
                      : '-bottom-4 left-8'
                  }`}
                  style={{ animationDelay: `${i * 2}s` }}
                >
                  <span>{card.icon}</span>
                  <span className="text-gray-200">{card.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
