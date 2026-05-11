import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import { team } from '../data/team'

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.6 },
  }),
}

export default function Team() {
  return (
    <section id="team" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-blue-600/10 text-blue-400 text-sm font-medium border border-blue-500/20 mb-4">
            Tim Kami
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Developer{' '}
            <span className="gradient-text">Berpengalaman & Berdedikasi</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Tim kami terdiri dari developer profesional yang berpengalaman membangun
            solusi teknologi berkualitas enterprise.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, i) => (
            <motion.div
              key={member.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
              variants={fadeUp}
              className="glass rounded-2xl p-6 border border-white/10 card-hover group text-center"
            >
              {/* Avatar with online indicator */}
              <div className="relative inline-block mb-4">
                {member.avatar ? (
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-20 h-20 rounded-full object-cover mx-auto shadow-lg"
                  />
                ) : (
                  <div
                    className={`w-20 h-20 rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center text-2xl font-bold text-white mx-auto shadow-lg`}
                  >
                    {member.initials}
                  </div>
                )}
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-400 rounded-full border-2 border-navy-900" />
              </div>

              <h3 className="font-bold text-white text-lg mb-1">{member.name}</h3>
              <p
                className={`text-sm font-medium mb-3 bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent`}
              >
                {member.role}
              </p>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {member.bio}
              </p>

              {/* Social links */}
              <div className="flex items-center justify-center gap-3">
                <a
                  href={member.github}
                  aria-label="GitHub"
                  className="p-2 rounded-lg glass border border-white/10 text-gray-400 hover:text-white hover:border-blue-500/40 transition-all duration-200"
                >
                  <FiGithub className="w-4 h-4" />
                </a>
                <a
                  href={member.linkedin}
                  aria-label="LinkedIn"
                  className="p-2 rounded-lg glass border border-white/10 text-gray-400 hover:text-white hover:border-blue-500/40 transition-all duration-200"
                >
                  <FiLinkedin className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
