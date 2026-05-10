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
            Project yang{' '}
            <span className="gradient-text">Telah Kami Kerjakan</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Berikut beberapa project unggulan yang menunjukkan kemampuan dan
            kualitas pengerjaan tim kami.
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
              {/* Mockup header with gradient background */}
              <div
                className={`bg-gradient-to-br ${project.color} p-8 flex items-center justify-center relative overflow-hidden`}
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
                {/* Browser chrome dots */}
                <div className="absolute top-3 left-4 flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
                  <div className="w-2.5 h-2.5 rounded-full bg-white/30" />
                </div>
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
