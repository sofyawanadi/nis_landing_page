# Design Spec: Refokus PT Nayfos IT Solution ke Spesialis Landing Page

**Tanggal:** 2026-05-11  
**Status:** Approved

---

## Ringkasan

Mengubah posisi PT Nayfos IT Solution dari perusahaan IT umum (web dev, backend, konsultasi) menjadi **spesialis pembuatan landing page untuk UMKM & bisnis lokal Indonesia**. Perubahan bersifat konten dan struktur — tidak ada perubahan stack teknologi atau arsitektur komponen.

---

## Konteks

- **Stack:** Vite 5 + React 18 + Tailwind CSS v3 + Framer Motion 11
- **Repo:** `/home/sofyan/project/ns/landing-page`
- **Branch:** master
- **Build:** Passing (`npm run build`)

---

## Keputusan Desain

| Pertanyaan | Jawaban |
|---|---|
| Jenis layanan | Full Package (Design + Dev + Copywriting + SEO dasar) |
| Target klien | UMKM & Bisnis Lokal |
| Tabel harga | Tidak — harga via konsultasi |
| Tampilan portfolio | Per-Niche Cards (bukan mockup browser) |
| Pendekatan | C — Content + Portfolio + Section Proses Kami |

---

## Perubahan per Section

### 1. Hero
- Headline: "Landing Page yang Mengkonversi Pengunjung Jadi Pelanggan"
- Subtext: fokus landing page untuk UMKM & bisnis lokal
- CTA: "Buat Landing Page Saya" + "Lihat Contoh"
- Stats dashboard: 100+ Landing Page / 80+ UMKM Puas / 3-7 Hari

### 2. About
- Headline: "Spesialis Landing Page untuk UMKM Indonesia"
- Body: fokus pada UMKM & konversi
- Stats: 100+ Landing Page Dibuat / 80+ Klien UMKM Puas / 5x Konversi / 24/7 Support

### 3. Services
- Layanan 1: Desain & Development (icon: HiOutlineTemplate)
- Layanan 2: Copywriting Profesional (icon: HiOutlinePencilAlt)
- Layanan 3: SEO & Optimasi Kecepatan (icon: HiOutlineSearchCircle)

### 4. Process (NEW)
- 4 langkah: Konsultasi Gratis → Desain & Copywriting → Revisi & Approval → Launch & Support

### 5. Portfolio
- 4 niche: Klinik Kecantikan Sari Ayu / Resto Padang Mak Ijah / Perumahan Griya Asri / Butik Elora Tasikmalaya
- Tampilan: niche badge di header (bukan browser chrome dots)

### 6. WhyUs
- 6 keunggulan LP-focused: Revisi Fleksibel / Mobile-First / 3-7 Hari / Copywriting Termasuk / Fokus Konversi / Support Pasca-Launch

### 7. CTA
- Heading: "Siap Punya Landing Page yang Menghasilkan?"
- Subtext: konsultasi gratis untuk UMKM

### 8. Footer
- Tagline: "Spesialis pembuatan landing page untuk UMKM & bisnis lokal Indonesia."
- Layanan: Desain & Development / Copywriting / SEO & Optimasi / Konsultasi Gratis

---

## File yang Diubah

| File | Jenis |
|------|-------|
| `src/components/Hero.jsx` | Modifikasi copy |
| `src/components/About.jsx` | Modifikasi copy + stats |
| `src/data/services.js` | Rewrite |
| `src/components/Services.jsx` | Update iconMap + heading |
| `src/data/portfolio.js` | Rewrite |
| `src/components/Portfolio.jsx` | Update card header |
| `src/components/WhyUs.jsx` | Update advantages data |
| `src/components/CTA.jsx` | Update copy |
| `src/components/Footer.jsx` | Update tagline + services |
| `src/components/Process.jsx` | **NEW** |
| `src/App.jsx` | Add Process import + render |
