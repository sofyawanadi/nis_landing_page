# PT Nayfos IT Solution — Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Membangun landing page profesional single-scroll untuk PT Nayfos IT Solution menggunakan Vite + React + Tailwind CSS + Framer Motion, sepenuhnya responsive, 9 section, konten Bahasa Indonesia.

**Architecture:** Single page application tanpa routing. Semua section dimount langsung di `App.jsx`. Data dummy dipisah di `src/data/`. Setiap komponen section berdiri sendiri dan menerima data via props atau import langsung dari data files.

**Tech Stack:** Vite 5, React 18, Tailwind CSS 3, Framer Motion 11, React Icons 5

---

## File Map

| File | Tanggung Jawab |
|------|---------------|
| `package.json` | Dependencies & scripts |
| `vite.config.js` | Vite config |
| `tailwind.config.js` | Tailwind theme + custom colors |
| `postcss.config.js` | PostCSS |
| `index.html` | Entry HTML + Google Fonts |
| `src/main.jsx` | React mount point |
| `src/App.jsx` | Semua section diassemble di sini |
| `src/index.css` | Global styles, scrollbar, base |
| `src/data/services.js` | Data 3 layanan |
| `src/data/team.js` | Data 4 anggota tim |
| `src/data/portfolio.js` | Data 4 project |
| `src/data/testimonials.js` | Data 4 testimoni |
| `src/components/Navbar.jsx` | Sticky nav glassmorphism |
| `src/components/Hero.jsx` | Hero full viewport |
| `src/components/About.jsx` | Profil + 4 statistik |
| `src/components/Services.jsx` | 3 service card |
| `src/components/Team.jsx` | 4 developer card |
| `src/components/WhyUs.jsx` | 6 keunggulan grid |
| `src/components/Portfolio.jsx` | 4 project card |
| `src/components/Testimonials.jsx` | Carousel testimoni |
| `src/components/CTA.jsx` | Form kontak + WA/Email |
| `src/components/Footer.jsx` | Footer 4 kolom |

---

### Task 1: Scaffold Proyek Vite + React

**Files:**
- Create: `package.json`
- Create: `vite.config.js`
- Create: `index.html`
- Create: `src/main.jsx`
- Create: `src/App.jsx`

- [ ] **Step 1: Inisialisasi proyek Vite**
```bash
cd /home/sofyan/project/ns/landing-page
npm create vite@latest . -- --template react
```
Pilih `React` dan `JavaScript` saat diminta. Jawab `y` jika ditanya overwrite.

- [ ] **Step 2: Install dependencies utama**
```bash
npm install framer-motion react-icons
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

- [ ] **Step 3: Verifikasi instalasi berjalan**
```bash
npm run dev
```
Expected: Server berjalan di `http://localhost:5173` tanpa error.

- [ ] **Step 4: Commit scaffold**
```bash
git init
git add .
git commit -m "chore: init vite react project with dependencies"
```

---

### Task 2: Konfigurasi Tailwind + Design System

**Files:**
- Modify: `tailwind.config.js`
- Modify: `src/index.css`
- Modify: `index.html`

- [ ] **Step 1: Update `tailwind.config.js`**
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0A0F1E',
          800: '#0D1526',
          700: '#111827',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #2563EB, #6D28D9)',
        'gradient-hero': 'linear-gradient(135deg, #0A0F1E 0%, #1E1B4B 50%, #0A0F1E 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
```

- [ ] **Step 2: Update `src/index.css`**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  * {
    scroll-behavior: smooth;
  }
  body {
    @apply bg-navy-900 text-gray-100 font-sans antialiased;
  }
  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-track {
    @apply bg-navy-900;
  }
  ::-webkit-scrollbar-thumb {
    @apply bg-blue-600 rounded-full;
  }
}

@layer utilities {
  .glass {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }
  .glass-dark {
    background: rgba(10, 15, 30, 0.6);
    backdrop-filter: blur(16px);
    border: 1px solid rgba(99, 102, 241, 0.2);
  }
  .gradient-text {
    @apply bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-violet-400;
  }
  .glow-blue {
    box-shadow: 0 0 40px rgba(37, 99, 235, 0.3);
  }
  .glow-purple {
    box-shadow: 0 0 40px rgba(124, 58, 237, 0.3);
  }
  .card-hover {
    @apply transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl;
  }
}
```

- [ ] **Step 3: Tambahkan Google Fonts di `index.html`**
```html
<!doctype html>
<html lang="id">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/png" href="/logo.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="PT Nayfos IT Solution - Solusi Teknologi Modern untuk Transformasi Digital Bisnis Anda" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet" />
    <title>PT Nayfos IT Solution</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>
```

- [ ] **Step 4: Verifikasi build berjalan tanpa error**
```bash
npm run build
```
Expected: `dist/` folder terbuat tanpa error.

- [ ] **Step 5: Commit**
```bash
git add .
git commit -m "chore: configure tailwind design system and global styles"
```

---

### Task 3: Data Files

**Files:**
- Create: `src/data/services.js`
- Create: `src/data/team.js`
- Create: `src/data/portfolio.js`
- Create: `src/data/testimonials.js`

- [ ] **Step 1: Buat `src/data/services.js`**
```js
export const services = [
  {
    id: 1,
    icon: 'HiOutlineLightBulb',
    title: 'IT Consultation',
    description:
      'Memberikan konsultasi teknologi dan solusi sistem yang tepat sesuai kebutuhan dan tujuan bisnis Anda secara strategis dan efisien.',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    id: 2,
    icon: 'HiOutlineCode',
    title: 'Web Development',
    description:
      'Membangun website modern, responsif, dan skalabel menggunakan teknologi terkini yang disesuaikan dengan kebutuhan perusahaan Anda.',
    color: 'from-indigo-500 to-violet-600',
  },
  {
    id: 3,
    icon: 'HiOutlineServer',
    title: 'Backend Development',
    description:
      'Membangun sistem backend yang aman, cepat, dan terstruktur menggunakan arsitektur modern untuk mendukung pertumbuhan bisnis.',
    color: 'from-violet-500 to-purple-600',
  },
]
```

- [ ] **Step 2: Buat `src/data/team.js`**
```js
export const team = [
  {
    id: 1,
    name: 'Ahmad Rizky',
    role: 'Backend Developer',
    bio: 'Spesialis Node.js & Go dengan pengalaman membangun API skala enterprise.',
    initials: 'AR',
    gradient: 'from-blue-500 to-indigo-600',
    github: '#',
    linkedin: '#',
  },
  {
    id: 2,
    name: 'Sari Dewi',
    role: 'Frontend Developer',
    bio: 'Expert React & Vue.js, fokus pada performa dan aksesibilitas UI.',
    initials: 'SD',
    gradient: 'from-violet-500 to-purple-600',
    github: '#',
    linkedin: '#',
  },
  {
    id: 3,
    name: 'Budi Santoso',
    role: 'Fullstack Developer',
    bio: 'Menguasai full stack dari database hingga deployment di cloud.',
    initials: 'BS',
    gradient: 'from-indigo-500 to-blue-600',
    github: '#',
    linkedin: '#',
  },
  {
    id: 4,
    name: 'Rina Putri',
    role: 'UI/UX Designer',
    bio: 'Merancang pengalaman pengguna yang intuitif, estetis, dan berbasis data.',
    initials: 'RP',
    gradient: 'from-pink-500 to-violet-600',
    github: '#',
    linkedin: '#',
  },
]
```

- [ ] **Step 3: Buat `src/data/portfolio.js`**
```js
export const portfolio = [
  {
    id: 1,
    title: 'Dashboard Management System',
    description: 'Sistem manajemen operasional perusahaan dengan analytics real-time dan laporan otomatis.',
    tags: ['React', 'Node.js', 'PostgreSQL'],
    color: 'from-blue-600 to-indigo-700',
    icon: '📊',
  },
  {
    id: 2,
    title: 'Company Profile Website',
    description: 'Website company profile modern dengan CMS, SEO-optimized, dan loading ultra cepat.',
    tags: ['Next.js', 'Tailwind', 'Vercel'],
    color: 'from-indigo-600 to-violet-700',
    icon: '🌐',
  },
  {
    id: 3,
    title: 'ERP System',
    description: 'Sistem ERP terintegrasi mencakup inventory, keuangan, SDM, dan manajemen produksi.',
    tags: ['Vue.js', 'Laravel', 'MySQL'],
    color: 'from-violet-600 to-purple-700',
    icon: '⚙️',
  },
  {
    id: 4,
    title: 'Monitoring System',
    description: 'Platform monitoring infrastruktur real-time dengan alerting otomatis dan visualisasi data.',
    tags: ['React', 'Go', 'InfluxDB'],
    color: 'from-purple-600 to-pink-700',
    icon: '📡',
  },
]
```

- [ ] **Step 4: Buat `src/data/testimonials.js`**
```js
export const testimonials = [
  {
    id: 1,
    name: 'Hendra Wijaya',
    company: 'PT Maju Bersama',
    role: 'CEO',
    comment:
      'Nayfos berhasil mentransformasi sistem operasional kami. Kecepatan pengerjaan dan kualitasnya luar biasa.',
    rating: 5,
    initials: 'HW',
    gradient: 'from-blue-500 to-indigo-600',
  },
  {
    id: 2,
    name: 'Dian Pratiwi',
    company: 'CV Tekno Nusantara',
    role: 'CTO',
    comment:
      'Tim yang sangat profesional. Solusi backend mereka sangat scalable dan sudah berjalan 2 tahun tanpa masalah.',
    rating: 5,
    initials: 'DP',
    gradient: 'from-violet-500 to-purple-600',
  },
  {
    id: 3,
    name: 'Agus Setiawan',
    company: 'Startup Fintech ABC',
    role: 'Founder',
    comment:
      'Konsultasi IT dari Nayfos memberikan kami roadmap teknologi yang jelas. Sangat direkomendasikan!',
    rating: 5,
    initials: 'AS',
    gradient: 'from-indigo-500 to-blue-600',
  },
  {
    id: 4,
    name: 'Maya Kusuma',
    company: 'PT Digital Solusi',
    role: 'Product Manager',
    comment:
      'Website yang mereka bangun sangat modern dan performa tinggi. Traffic naik 300% setelah launch.',
    rating: 5,
    initials: 'MK',
    gradient: 'from-pink-500 to-violet-600',
  },
]
```

- [ ] **Step 5: Commit**
```bash
git add .
git commit -m "feat: add all dummy data files"
```

---

### Task 4: Navbar Component

**Files:**
- Create: `src/components/Navbar.jsx`

### Task 5: Hero Section

**Files:**
- Create: `src/components/Hero.jsx`

### Task 6: About Section

**Files:**
- Create: `src/components/About.jsx`

### Task 7: Services Section

**Files:**
- Create: `src/components/Services.jsx`

### Task 8: Team Section

**Files:**
- Create: `src/components/Team.jsx`

### Task 9: WhyUs Section

**Files:**
- Create: `src/components/WhyUs.jsx`

### Task 10: Portfolio Section

**Files:**
- Create: `src/components/Portfolio.jsx`

### Task 11: Testimonials Section

**Files:**
- Create: `src/components/Testimonials.jsx`

### Task 12: CTA Section

**Files:**
- Create: `src/components/CTA.jsx`

### Task 13: Footer

**Files:**
- Create: `src/components/Footer.jsx`

### Task 14: Assemble App.jsx + Final Polish

**Files:**
- Modify: `src/App.jsx`
- Modify: `src/main.jsx`
