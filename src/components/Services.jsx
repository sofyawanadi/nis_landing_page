import { motion } from 'framer-motion'
import {
  HiOutlineLightBulb,
  HiOutlineCode,
  HiOutlineServer,
} from 'react-icons/hi'
import { services } from '../data/services'

const iconMap = {
  HiOutlineLightBulb,
  HiOutlineCode,
  HiOutlineServer,
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6 },
  }),
}

export default function Services() {
  return (
    <section id="services" className="py-24 bg-navy-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-600/10 text-violet-400 text-sm font-medium border border-violet-500/20 mb-4">
            Layanan Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Solusi Lengkap untuk{' '}
            <span className="gradient-text">Kebutuhan Digital</span> Anda
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Dari konsultasi hingga pengembangan sistem, kami menyediakan layanan
            teknologi end-to-end yang disesuaikan dengan kebutuhan bisnis Anda.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon]
            return (
              <motion.div
                key={service.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i}
                variants={fadeUp}
                className="glass rounded-2xl p-8 border border-white/10 card-hover group cursor-default relative overflow-hidden"
              >
                {/* Subtle gradient glow on hover */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${service.color}`}
                  style={{ zIndex: 0 }}
                />
                <div className="relative z-10">
                  <div
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {service.description}
                  </p>
                  <div
                    className={`mt-6 flex items-center gap-1 text-sm font-medium bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}
                  >
                    Pelajari Lebih Lanjut
                    <span className="ml-1">→</span>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
