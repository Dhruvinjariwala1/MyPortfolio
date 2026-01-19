'use client'

import { motion } from 'framer-motion'

type Experience = {
  role: string
  company: string
  location: string
  duration: string
  description: string
  skills: string
  logoText: string
  logoBg: string
}

const experiences: Experience[] = [
    {
      role: 'Asp.Net MVC Developer',
      company: 'TriBase Solution - Internship',
      location: 'Surat, Gujarat',
      duration: 'Jan 2024 - June 2024',
      description:
        'Working as .NET developer at TriBase Solution creating dynamic web applications using .NET Core.',
      skills: '.NET MVC, C#, SSMS, EntityFrameWork, Bootstrap, Ajax',
      logoText: 'TS',
      logoBg: 'bg-teal-600',
    },
    {
      role: 'Asp.Net Core Developer',
      company: 'InfoWeb Solution - Internship',
      location: 'Surat, Gujarat',
      duration: 'July 2024 - December 2024',
      description:
        'Working as .NET and C# developer at InfoWeb Solution creating dynamic web applications using React, Vite, Ant Design and .NET Core.',
      skills: '.NET Core Web API, C#, Postgresql, React, Vite, Ant Design',
      logoText: 'IW',
      logoBg: 'bg-blue-500',
    },
  {
    role: 'Software Developer',
    company: 'Lariox Technologies',
    location: 'Surat, Gujarat',
    duration: 'Jan 2025 - December 2025',
    description:
      'Working as software developer intern at lariox technologies and gaining deeper knowledge about React and Vite by building real-world applications.',
    skills: 'React, Vite, .Net Mvc, EntityFrameWork',
    logoText: 'LT',
    logoBg: 'bg-orange-500',
  },
]

export default function WorkExperience() {
  return (
    <section
      id="experience"
      className="relative w-full min-h-screen bg-slate-950 text-white px-6 md:px-16 py-24"
    >
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold flex items-center gap-2">
            Experience <span className="text-cyan-400">💼</span>
          </h2>
        </motion.div>

        {/* EXPERIENCE CARDS */}
        <div className="grid md:grid-cols-2 gap-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="
                relative rounded-2xl
                border border-white/10
                bg-gradient-to-b from-slate-900/80 to-slate-950
                p-10 text-center
                shadow-lg
              "
            >
              {/* LOGO CIRCLE */}
              <div
                className={`mx-auto mb-6 w-20 h-20 rounded-full
                flex items-center justify-center text-2xl font-bold
                text-white ${exp.logoBg}`}
              >
                {exp.logoText}
              </div>

              {/* ROLE */}
              <h3 className="text-2xl font-semibold mb-1">
                {exp.role}
              </h3>

              {/* COMPANY */}
              <p className="text-cyan-400 font-medium">
                {exp.company}
              </p>

              {/* Duration */}
              <p className="text-cyan-400 font-medium">
                {exp.duration}
              </p>

              {/* LOCATION */}
              <p className="text-gray-400 text-sm mb-4">
                {exp.location}
              </p>

              {/* DESCRIPTION */}
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {exp.description}
              </p>

              {/* SKILLS */}
              <p className="text-sm">
                <span className="font-semibold text-white">Skills:</span>{' '}
                <span className="text-gray-400">{exp.skills}</span>
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* BACKGROUND GLOW */}
      <div className="absolute -z-10 top-1/2 left-1/2 w-[700px] h-[700px] bg-cyan-500/20 blur-[160px] -translate-x-1/2 -translate-y-1/2"></div>
    </section>
  )
}
