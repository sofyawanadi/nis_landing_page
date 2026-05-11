import { motion } from 'framer-motion'
import {
  HiOutlineRefresh,
  HiOutlineDeviceMobile,
  HiOutlineLightningBolt,
  HiOutlinePencilAlt,
  HiOutlineTrendingUp,
  HiOutlineSupport,
} from 'react-icons/hi'

const advantages = [
  {
    icon: HiOutlineRefresh,
    title: 'Revisi Fleksibel',
    desc: 'Tidak puas dengan hasilnya? Kami revisi sampai sesuai visi Anda — tanpa biaya tambahan.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
  },
  {
    icon: HiOutlineDeviceMobile,
    title: 'Mobile-First Design',
    desc: '80% trafik UMKM berasal dari HP. Setiap pixel kami optimalkan untuk tampilan layar mobile.',
    color: 'text-indigo-400',
    bg: 'bg-indigo-500/10',
  },
  {
    icon: HiOutlineLightningBolt,
    title: 'Selesai 3–7 Hari',
    desc: 'Proses pengerjaan efisien dari konsultasi hingga launch, tanpa mengorbankan kualitas.',
    color: 'text-violet-400',
    bg: 'bg-violet-500/10',
  },
  {
    icon: HiOutlinePencilAlt,
    title: 'Copywriting Termasuk',
    desc: 'Tim penulis iklan kami ada di setiap paket — tidak perlu hire copywriter terpisah.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10',
  },
  {
    icon: HiOutlineTrendingUp,
    title: 'Fokus Konversi',
    desc: 'Setiap elemen — CTA, warna, layout — dirancang secara strategis untuk mendorong aksi.',
    color: 'text-blue-400',
    bg: 'bg-blue-500/10',
  },
  {
    icon: HiOutlineSupport,
    title: 'Support Pasca-Launch',
    desc: 'Bantuan teknis tersedia setelah landing page Anda live dan mulai mendapatkan trafik.',
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
            Kami tidak hanya membangun landing page — kami memastikan setiap
            halaman yang kami buat benar-benar bekerja untuk bisnis Anda.
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
