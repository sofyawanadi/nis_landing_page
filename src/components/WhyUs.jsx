import { motion } from 'framer-motion'
import {
  HiOutlineUserGroup,
  HiOutlineTemplate,
  HiOutlineShieldCheck,
  HiOutlineLightningBolt,
  HiOutlineScale,
  HiOutlineSupport,
} from 'react-icons/hi'

const advantages = [
  {
    icon: HiOutlineUserGroup,
    title: 'Professional Team',
    desc: 'Tim developer bersertifikat dengan pengalaman multi-industri.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
  },
  {
    icon: HiOutlineTemplate,
    title: 'Clean Architecture',
    desc: 'Kode bersih, terstruktur, dan mudah di-maintain jangka panjang.',
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/10',
  },
  {
    icon: HiOutlineShieldCheck,
    title: 'Secure System',
    desc: 'Keamanan data menjadi prioritas utama di setiap sistem yang kami bangun.',
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
  },
  {
    icon: HiOutlineLightningBolt,
    title: 'Fast Development',
    desc: 'Metodologi agile memastikan pengembangan cepat tanpa mengorbankan kualitas.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
  },
  {
    icon: HiOutlineScale,
    title: 'Scalable Application',
    desc: 'Sistem dirancang untuk tumbuh seiring kebutuhan bisnis Anda berkembang.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
  },
  {
    icon: HiOutlineSupport,
    title: 'Maintenance & Support',
    desc: 'Dukungan teknis aktif 24/7 untuk memastikan sistem selalu berjalan optimal.',
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/10',
  },
]

export default function WhyUs() {
  return (
    <section className="py-24 bg-navy-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-indigo-600/10 text-indigo-400 text-sm font-medium border border-indigo-500/20 mb-4">
            Keunggulan
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Mengapa Memilih{' '}
            <span className="gradient-text">Nayfos?</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Kami tidak hanya membangun software — kami membangun kemitraan jangka
            panjang yang berfokus pada kesuksesan bisnis Anda.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass rounded-2xl p-6 border border-white/10 card-hover group flex gap-4"
            >
              <div
                className={`shrink-0 w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
              >
                <item.icon className={`w-6 h-6 ${item.color}`} />
              </div>
              <div>
                <h3 className="font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
