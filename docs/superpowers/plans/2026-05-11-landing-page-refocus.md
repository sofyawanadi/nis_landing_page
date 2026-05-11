# Refokus Nayfos ke Spesialis Landing Page — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Mengubah seluruh konten landing page dari perusahaan IT umum menjadi spesialis pembuatan landing page untuk UMKM & bisnis lokal Indonesia, plus menambahkan section "Proses Kami".

**Architecture:** Content-only refactor — semua komponen tetap ada, hanya teks/data/copy yang berubah. Satu komponen baru (`Process.jsx`) ditambahkan. Tidak ada perubahan pada design system, animasi, atau stack teknologi.

**Tech Stack:** Vite 5, React 18, Tailwind CSS v3, Framer Motion 11, react-icons/hi

---

## Task 1: Update `src/data/services.js`

**Files:**
- Modify: `src/data/services.js`

- [ ] **Ganti seluruh isi file dengan 3 layanan landing page:**

```js
export const services = [
  {
    id: 1,
    icon: 'HiOutlineTemplate',
    title: 'Desain & Development',
    description:
      'Landing page custom yang responsif di semua perangkat, dengan desain modern dan kode yang bersih serta cepat dimuat.',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    id: 2,
    icon: 'HiOutlinePencilAlt',
    title: 'Copywriting Profesional',
    description:
      'Teks persuasif yang menonjolkan nilai bisnis Anda dan mendorong pengunjung untuk mengambil tindakan nyata.',
    color: 'from-indigo-500 to-violet-600',
  },
  {
    id: 3,
    icon: 'HiOutlineSearchCircle',
    title: 'SEO & Optimasi Kecepatan',
    description:
      'Meta tags, struktur URL, dan performa halaman yang dioptimasi agar mudah ditemukan di Google dan loading super cepat.',
    color: 'from-violet-500 to-purple-600',
  },
]
```

- [ ] **Commit:**

```bash
git add src/data/services.js
git commit -m "content: update services to landing page focus"
```

---

## Task 2: Update `src/components/Services.jsx`

**Files:**
- Modify: `src/components/Services.jsx`

- [ ] **Ganti import icons dan update iconMap + heading copy:**

```jsx
import { motion } from 'framer-motion'
import {
  HiOutlineTemplate,
  HiOutlinePencilAlt,
  HiOutlineSearchCircle,
} from 'react-icons/hi'
import { services } from '../data/services'

const iconMap = {
  HiOutlineTemplate,
  HiOutlinePencilAlt,
  HiOutlineSearchCircle,
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
            Paket Lengkap{' '}
            <span className="gradient-text">Landing Page Profesional</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Dari desain hingga copywriting dan optimasi, semua sudah termasuk
            dalam satu paket — tidak perlu hire vendor berbeda.
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
```

- [ ] **Commit:**

```bash
git add src/components/Services.jsx
git commit -m "content: update Services heading and iconMap for LP services"
```

---

## Task 3: Update `src/data/portfolio.js`

**Files:**
- Modify: `src/data/portfolio.js`

- [ ] **Ganti seluruh isi dengan 4 niche landing page:**

```js
export const portfolio = [
  {
    id: 1,
    title: 'Klinik Kecantikan Sari Ayu',
    niche: 'Klinik & Kesehatan',
    description:
      'Landing page untuk klinik kecantikan lokal dengan CTA booking WhatsApp, daftar layanan, dan testimoni pelanggan.',
    tags: ['Desain Custom', 'Copywriting', 'SEO'],
    color: 'from-pink-500 to-rose-600',
    icon: '🏥',
  },
  {
    id: 2,
    title: 'Resto Padang Mak Ijah',
    niche: 'Kuliner',
    description:
      'Landing page restoran dengan menu digital, tombol pesan via WhatsApp, dan foto menu yang menggugah selera.',
    tags: ['Mobile-First', 'WhatsApp CTA', 'Fast Load'],
    color: 'from-orange-500 to-amber-600',
    icon: '🍜',
  },
  {
    id: 3,
    title: 'Perumahan Griya Asri',
    niche: 'Properti',
    description:
      'Landing page perumahan dengan gallery, spesifikasi unit, dan form lead yang siap dipakai untuk Google Ads.',
    tags: ['Google Ads Ready', 'Lead Form', 'Konversi'],
    color: 'from-emerald-500 to-teal-600',
    icon: '🏠',
  },
  {
    id: 4,
    title: 'Butik Elora Tasikmalaya',
    niche: 'Fashion & Retail',
    description:
      'Landing page butik fashion lokal dengan lookbook, size guide, dan CTA pemesanan yang elegan.',
    tags: ['Desain Elegan', 'Copywriting', 'SEO'],
    color: 'from-violet-500 to-purple-600',
    icon: '👗',
  },
]
```

- [ ] **Commit:**

```bash
git add src/data/portfolio.js
git commit -m "content: update portfolio to per-niche landing page examples"
```

---

## Task 4: Update `src/components/Portfolio.jsx`

**Files:**
- Modify: `src/components/Portfolio.jsx`

- [ ] **Update: hapus browser chrome dots, tambah niche badge di header, update section heading:**

```jsx
import { motion } from 'framer-motion'
import { portfolio } from '../data/portfolio'

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-600/10 text-purple-400 text-sm font-medium border border-purple-500/20 mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Landing Page untuk{' '}
            <span className="gradient-text">Berbagai Industri</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Kami telah membantu berbagai jenis bisnis lokal tampil profesional
            secara online dengan landing page yang mengkonversi.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {portfolio.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="glass rounded-2xl overflow-hidden border border-white/10 card-hover group"
            >
              {/* Niche card header */}
              <div
                className={`bg-gradient-to-br ${project.color} p-8 flex items-center justify-between relative overflow-hidden`}
              >
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle, white 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }}
                />
                <span className="text-5xl relative z-10 drop-shadow-lg select-none">
                  {project.icon}
                </span>
                <span className="relative z-10 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold backdrop-blur-sm border border-white/30">
                  {project.niche}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-bold text-white text-xl mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full glass border border-white/10 text-xs text-gray-300 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
```

- [ ] **Commit:**

```bash
git add src/components/Portfolio.jsx
git commit -m "feat: update Portfolio to per-niche card layout with niche badge"
```

---

## Task 5: Create `src/components/Process.jsx`

**Files:**
- Create: `src/components/Process.jsx`

- [ ] **Buat komponen baru dengan 4 langkah proses:**

```jsx
import { motion } from 'framer-motion'
import {
  HiOutlineChatAlt2,
  HiOutlineColorSwatch,
  HiOutlineCheckCircle,
  HiOutlineRocketLaunch,
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
    icon: HiOutlineRocketLaunch,
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
              {/* Step number circle */}
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
```

**Catatan:** `HiOutlineRocketLaunch` tidak ada di react-icons/hi (v1). Gunakan `HiOutlineArrowCircleUp` sebagai gantinya. Cek icon yang tersedia dengan memilih yang paling sesuai dari: `HiOutlineArrowRight`, `HiOutlineStatusOnline`, `HiOutlineBell`.

- [ ] **Commit:**

```bash
git add src/components/Process.jsx
git commit -m "feat: add Process section with 4-step workflow"
```

---

## Task 6: Update `src/components/Hero.jsx`

**Files:**
- Modify: `src/components/Hero.jsx`

- [ ] **Update floatingCards, headline, subtext, CTA, dan stats di dashboard:**

Ganti baris 4–8 (floatingCards):
```jsx
const floatingCards = [
  { label: '100+ Landing Page', icon: '🚀', delay: 0 },
  { label: 'UMKM Puas', icon: '🤝', delay: 0.5 },
  { label: 'Selesai 7 Hari', icon: '⚡', delay: 1 },
]
```

Ganti baris 43 (badge text):
```jsx
PT Nayfos IT Solution
```
(tidak berubah — tetap sama)

Ganti baris 52–54 (headline):
```jsx
Landing Page yang{' '}
<span className="gradient-text">Mengkonversi</span>{' '}
Pengunjung Jadi Pelanggan
```

Ganti baris 63–65 (subtext):
```jsx
Nayfos membuat landing page profesional untuk UMKM & bisnis lokal
Indonesia — lengkap dengan desain, copywriting, dan optimasi
agar bisnis Anda segera mendapat pelanggan online.
```

Ganti baris 79 (CTA primer):
```jsx
Buat Landing Page Saya
```

Ganti baris 86 (CTA sekunder):
```jsx
<HiPlay className="w-4 h-4 text-blue-400" />
Lihat Contoh
```
Dan ganti `href="#services"` menjadi `href="#portfolio"`.

Ganti baris 107 (URL bar di dashboard):
```jsx
nayfos.id/landing-page
```

Ganti baris 133–143 (stats di dashboard):
```jsx
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
```

- [ ] **Commit:**

```bash
git add src/components/Hero.jsx
git commit -m "content: update Hero copy and stats for LP focus"
```

---

## Task 7: Update `src/components/About.jsx`

**Files:**
- Modify: `src/components/About.jsx`

- [ ] **Ganti seluruh isi komponen:**

```jsx
import { motion } from 'framer-motion'
import {
  HiOutlineTemplate,
  HiOutlineUsers,
  HiOutlineTrendingUp,
  HiOutlineShieldCheck,
} from 'react-icons/hi'

const stats = [
  { icon: HiOutlineTemplate, value: '100+', label: 'Landing Page Dibuat', color: 'text-blue-400' },
  { icon: HiOutlineUsers, value: '80+', label: 'Klien UMKM Puas', color: 'text-violet-400' },
  { icon: HiOutlineTrendingUp, value: '5x', label: 'Rata-rata Peningkatan Konversi', color: 'text-indigo-400' },
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
              Spesialis Landing Page untuk{' '}
              <span className="gradient-text">UMKM Indonesia</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              PT Nayfos IT Solution hadir khusus untuk membantu UMKM & bisnis
              lokal Indonesia tampil profesional secara online. Kami fokus pada
              satu hal: landing page yang tidak hanya cantik, tapi benar-benar
              menghasilkan konversi nyata bagi bisnis Anda.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Dengan tim desainer dan copywriter berpengalaman, kami memastikan
              setiap landing page yang kami buat mewakili bisnis Anda secara
              tepat dan mendorong calon pelanggan untuk segera bertindak.
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
```

- [ ] **Commit:**

```bash
git add src/components/About.jsx
git commit -m "content: update About copy and stats for LP specialist positioning"
```

---

## Task 8: Update `src/components/WhyUs.jsx`

**Files:**
- Modify: `src/components/WhyUs.jsx`

- [ ] **Ganti seluruh isi komponen:**

```jsx
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
```

- [ ] **Commit:**

```bash
git add src/components/WhyUs.jsx
git commit -m "content: update WhyUs advantages for landing page focus"
```

---

## Task 9: Update `src/components/CTA.jsx`

**Files:**
- Modify: `src/components/CTA.jsx`

- [ ] **Update heading, subtext, dan placeholder textarea:**

Ganti baris 42–44 (heading):
```jsx
<h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
  Siap Punya{' '}
  <span className="gradient-text">Landing Page yang Menghasilkan?</span>
</h2>
```

Ganti baris 46–49 (subtext):
```jsx
<p className="text-gray-300 leading-relaxed mb-8">
  Konsultasikan kebutuhan bisnis Anda sekarang — gratis, tanpa komitmen.
  Kami bantu UMKM & bisnis lokal Anda tampil profesional dan mulai
  mendapat pelanggan dari online.
</p>
```

Ganti baris 127 (textarea placeholder):
```jsx
placeholder="Ceritakan bisnis Anda dan apa yang ingin dicapai dari landing page..."
```

- [ ] **Commit:**

```bash
git add src/components/CTA.jsx
git commit -m "content: update CTA copy for landing page focus"
```

---

## Task 10: Update `src/components/Footer.jsx`

**Files:**
- Modify: `src/components/Footer.jsx`

- [ ] **Update servicesList dan tagline brand:**

Ganti baris 20–26 (servicesList):
```jsx
const servicesList = [
  'Desain & Development',
  'Copywriting Profesional',
  'SEO & Optimasi',
  'Konsultasi Gratis',
]
```

Ganti baris 46–49 (tagline paragraph):
```jsx
<p className="text-gray-400 text-sm leading-relaxed mb-6">
  Spesialis pembuatan landing page untuk UMKM & bisnis lokal Indonesia.
  Desain profesional, copywriting, dan optimasi dalam satu paket.
</p>
```

- [ ] **Commit:**

```bash
git add src/components/Footer.jsx
git commit -m "content: update Footer tagline and services list"
```

---

## Task 11: Update `src/App.jsx`

**Files:**
- Modify: `src/App.jsx`

- [ ] **Tambahkan import Process dan render di antara Services dan WhyUs:**

```jsx
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Process from './components/Process'
import Team from './components/Team'
import WhyUs from './components/WhyUs'
import Portfolio from './components/Portfolio'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-navy-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Process />
        <Team />
        <WhyUs />
        <Portfolio />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
```

- [ ] **Commit:**

```bash
git add src/App.jsx
git commit -m "feat: add Process section to App layout"
```

---

## Task 12: Verify Build

**Files:**
- (none — verifikasi saja)

- [ ] **Jalankan build:**

```bash
npm run build
```

Expected output: `✓ built in X.XXs` tanpa error. Jika ada error import icon yang tidak ditemukan, ganti dengan icon alternatif dari `react-icons/hi`.

- [ ] **Jika build pass, commit terakhir:**

```bash
git add -A
git commit -m "chore: verify build passes after LP refocus"
```

---

## Catatan Penting

### Icon yang perlu diverifikasi
Sebelum Task 5, pastikan icon berikut tersedia di `react-icons/hi`:
- `HiOutlineChatAlt2` ✓
- `HiOutlineColorSwatch` ✓
- `HiOutlineCheckCircle` ✓
- `HiOutlineRocketLaunch` ❌ — **TIDAK ADA** di hi (heroicons v1). Ganti dengan `HiOutlineStatusOnline` atau `HiOutlineArrowCircleRight`

### Icon di WhyUs yang perlu diverifikasi
- `HiOutlineRefresh` ✓
- `HiOutlineDeviceMobile` ✓
- `HiOutlineTrendingUp` ✓
