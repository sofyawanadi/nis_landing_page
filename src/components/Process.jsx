import { motion } from 'framer-motion'
import {
  HiOutlineChatAlt2,
  HiOutlineColorSwatch,
  HiOutlineCheckCircle,
  HiOutlineStatusOnline,
} from 'react-icons/hi'

const steps = [
  {
    number: '01',
    icon: HiOutlineChatAlt2,
    title: 'Konsultasi Gratis',
    desc: 'Ceritakan bisnis & kebutuhan Anda via WhatsApp atau form — gratis, tanpa komitmen apapun.',
    color: 'from-blue-600 to-indigo-600',
  },
  {
    number: '02',
    icon: HiOutlineColorSwatch,
    title: 'Desain & Copywriting',
    desc: 'Kami buat desain visual + teks persuasif yang merepresentasikan karakter unik bisnis Anda.',
    color: 'from-indigo-600 to-violet-600',
  },
  {
    number: '03',
    icon: HiOutlineCheckCircle,
    title: 'Revisi & Approval',
    desc: 'Anda review hasilnya. Kami revisi sampai Anda 100% puas sebelum halaman ditayangkan.',
    color: 'from-violet-600 to-purple-600',
  },
  {
    number: '04',
    icon: HiOutlineStatusOnline,
    title: 'Launch & Support',
    desc: 'Landing page live dan siap menarik pelanggan. Kami pantau performa & bantu pasca-launch.',
    color: 'from-purple-600 to-pink-600',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-600/10 text-blue-400 text-sm font-medium border border-blue-500/20 mb-4">
            Proses Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Dari Konsultasi hingga{' '}
            <span className="gradient-text">Landing Page Live</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Proses transparan, komunikasi mudah, dan hasil yang sesuai ekspektasi
            — itulah yang kami janjikan di setiap proyek.
          </p>
        </motion.div>

        <div className="relative grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Connecting dashed line on desktop */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-px border-t-2 border-dashed border-white/10 z-0" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="relative z-10 glass rounded-2xl p-6 border border-white/10 card-hover group text-center"
            >
              {/* Step icon circle */}
              <div
                className={`w-14 h-14 mx-auto mb-5 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
              >
                <step.icon className="w-7 h-7 text-white" />
              </div>

              {/* Step number badge */}
              <span
                className={`inline-block text-xs font-bold px-2.5 py-0.5 rounded-full bg-gradient-to-r ${step.color} text-white mb-3`}
              >
                {step.number}
              </span>

              <h3 className="font-bold text-white text-lg mb-3">
                {step.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
