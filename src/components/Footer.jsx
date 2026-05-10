import {
  FiGithub,
  FiLinkedin,
  FiInstagram,
  FiTwitter,
  FiMail,
  FiPhone,
  FiMapPin,
} from 'react-icons/fi'

const navLinks = [
  { label: 'Beranda', href: '#hero' },
  { label: 'Tentang', href: '#about' },
  { label: 'Layanan', href: '#services' },
  { label: 'Tim', href: '#team' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Kontak', href: '#cta' },
]

const servicesList = [
  'IT Consultation',
  'Web Development',
  'Backend Development',
  'UI/UX Design',
  'System Integration',
]

const socials = [
  { icon: FiGithub, href: '#', label: 'GitHub' },
  { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
  { icon: FiInstagram, href: '#', label: 'Instagram' },
  { icon: FiTwitter, href: '#', label: 'Twitter' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Col 1 — Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="Nayfos" className="h-9 w-auto" />
              <span className="font-bold text-lg gradient-text">Nayfos</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Solusi teknologi modern untuk transformasi digital bisnis Anda.
              Kami hadir untuk mewujudkan visi digital Anda.
            </p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="p-2.5 rounded-lg glass border border-white/10 text-gray-400 hover:text-white hover:border-blue-500/40 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <h4 className="font-bold text-white mb-4">Navigasi</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div>
            <h4 className="font-bold text-white mb-4">Layanan</h4>
            <ul className="space-y-3">
              {servicesList.map((s) => (
                <li key={s}>
                  <span className="text-gray-400 text-sm">{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div>
            <h4 className="font-bold text-white mb-4">Kontak</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-gray-400 text-sm">
                <FiMapPin className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                <span>
                  Jl. Teknologi Digital No.1, Jakarta Selatan, Indonesia
                </span>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <FiPhone className="w-4 h-4 text-blue-400 shrink-0" />
                <a
                  href="tel:+6281234567890"
                  className="hover:text-blue-400 transition-colors"
                >
                  +62 812-3456-7890
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-400 text-sm">
                <FiMail className="w-4 h-4 text-blue-400 shrink-0" />
                <a
                  href="mailto:hello@nayfos.id"
                  className="hover:text-blue-400 transition-colors"
                >
                  hello@nayfos.id
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} PT Nayfos IT Solution. All rights
            reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Built with React + Tailwind CSS + Framer Motion
          </p>
        </div>
      </div>
    </footer>
  )
}
