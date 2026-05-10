import { motion } from 'framer-motion'
import {
  HiOutlineCode,
  HiOutlineLightningBolt,
  HiOutlineShieldCheck,
  HiOutlineUsers,
} from 'react-icons/hi'

const stats = [
  { icon: HiOutlineCode, value: '50+', label: 'Project Selesai', color: 'text-blue-400' },
  { icon: HiOutlineUsers, value: '30+', label: 'Client Puas', color: 'text-violet-400' },
  { icon: HiOutlineLightningBolt, value: '8', label: 'Developer Expert', color: 'text-indigo-400' },
  { icon: HiOutlineShieldCheck, value: '24/7', label: 'Support Aktif', color: 'text-purple-400' },
]

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
}

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-72 h-72 bg-violet-600/10 rounded-full blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={fadeUp}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-blue-600/10 text-blue-400 text-sm font-medium border border-blue-500/20 mb-4">
              Tentang Kami
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 leading-tight">
              Inovasi Teknologi untuk{' '}
              <span className="gradient-text">Bisnis yang Lebih Cerdas</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              PT Nayfos IT Solution adalah perusahaan teknologi yang berfokus pada
              pengembangan solusi digital berkualitas tinggi. Kami hadir untuk membantu
              bisnis Anda bertransformasi secara digital melalui sistem yang inovatif,
              efisien, dan handal.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Dengan tim developer berpengalaman dan pendekatan yang berfokus pada
              kebutuhan klien, kami memastikan setiap solusi yang kami bangun memberikan
              nilai nyata dan hasil terukur bagi pertumbuhan bisnis Anda.
            </p>
          </motion.div>

          {/* Right — Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i + 1}
                variants={fadeUp}
                className="glass rounded-2xl p-6 border border-white/10 card-hover group"
              >
                <stat.icon
                  className={`w-8 h-8 ${stat.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                />
                <p className={`text-3xl font-extrabold ${stat.color} mb-1`}>
                  {stat.value}
                </p>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
