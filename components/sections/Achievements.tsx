'use client'

import { motion } from 'framer-motion'

type Achievement = {
  title: string
  description: string
  image: string
  link?: string
}

const achievements: Achievement[] = [
  {
    title: 'AWS Certificate',
    description:
      'Completed AWS course and learned basics of AWS such as EC2, S3, EBS, and CloudFront.',
    image: '/images/certificate-aws.png',
    link: 'https://drive.google.com/file/d/1lcUsRJ9L7RusnmfZCJJS4sWdE2mpiTwg/view?usp=drive_link',
  },
  {
    title: 'Scaler Python Certificate',
    description:
      'Completed Python course offered by Scaler including Mastering the fundamentals.',
    image: '/images/certificate-python.png',
    link: 'https://drive.google.com/file/d/1PXJNZTmdyvFsPC4YDzMc7cF5LSBu282N/view?usp=drive_link',
  },
  {
    title: 'Great Learning UI/UX Certificate',
    description:
      'Completed UI/UX course offered by Great Learning Academy friendly designs that solve real problems.',
    image: '/images/certificate-ui.png',
    link: 'https://drive.google.com/file/d/1QhE3Acbl5dUtxANzP_SvgFOnpauoBydq/view?usp=drive_link',
  },
]

export default function Achievements() {
  return (
    <section
      id="achievements"
      className="relative w-full min-h-screen bg-slate-950 text-white px-6 md:px-16 py-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            Achievements / <span className="text-cyan-400">Certifications</span> 🏆
          </h2>
          <p className="text-gray-400 mt-3 text-center">
            Achievements and some best certifications which I have done.
          </p>
        </motion.div>

        {/* CARDS GRID */}
        <div className="grid md:grid-cols-3 gap-10">
          {achievements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="
                relative rounded-2xl border border-white/10
                bg-gradient-to-b from-slate-900/80 to-slate-950
                p-8 text-center shadow-lg
              "
            >
              {/* LOGO */}
              <div className="flex justify-center mb-6">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-20 object-contain opacity-90"
                />
              </div>

              {/* TITLE */}
              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-gray-400 text-sm mb-8">
                {item.description}
              </p>

              {/* BUTTON */}
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  className="
                    inline-block px-6 py-2 rounded-lg
                    bg-purple-600 hover:bg-purple-700
                    text-sm font-semibold transition
                  "
                >
                  View Certificate
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* BACKGROUND GLOW */}
      <div className="absolute -z-10 top-1/2 left-1/2 w-[700px] h-[700px] bg-purple-500/20 blur-[180px] -translate-x-1/2 -translate-y-1/2"></div>
    </section>
  )
}
