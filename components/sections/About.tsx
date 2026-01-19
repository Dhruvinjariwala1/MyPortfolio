'use client'

import { motion } from 'framer-motion'
import { FaCode, FaLaptopCode, FaRocket } from 'react-icons/fa'

export default function About() {
  return (
    <section
      id="about"
      className="relative w-full min-h-screen flex items-center justify-center bg-slate-950 text-white px-6 md:px-16"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <p className="text-gray-400 leading-relaxed text-lg">
            I'm a passionate <span className="text-white font-semibold">Asp.net Mvc Developer </span>
            with strong expertise in <span className="text-cyan-400">ASP.NET Core MVC</span>, 
            modern JavaScript frameworks, and database-driven applications.
          </p>

          <p className="text-gray-400 leading-relaxed text-lg">
           I enjoy building scalable, secure, and high-performance systems, focusing on clean backend architecture while delivering visually engaging and user-friendly frontend experiences. I believe great software is a balance of robust logic, intuitive design, and seamless performance.
          </p>

          <p className="text-gray-400 leading-relaxed text-lg">
          With hands-on experience in real-world projects, I’m driven to continuously learn new technologies, follow best coding practices, and transform ideas into reliable digital solutions that create real impact.
          </p>

          <div className="flex gap-4 pt-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-600 transition font-semibold"
            >
              View Projects
            </a>

            <a
              href="#contact"
              className="px-6 py-3 rounded-lg border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition font-semibold"
            >
              Contact Me
            </a>
          </div>
        </motion.div>

        {/* RIGHT CARDS */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid gap-6"
        >
          <AboutCard
            icon={<FaCode />}
            title="Backend Expertise"
            description="ASP.NET Core MVC, REST APIs, authentication, role management, SQL & PostgreSQL."
          />

          <AboutCard
            icon={<FaLaptopCode />}
            title="Frontend Skills"
            description="Next.js, React, Tailwind CSS, Three.js, Framer Motion & responsive UI."
          />

          <AboutCard
            icon={<FaRocket />}
            title="Problem Solver"
            description="Focused on performance, security, clean architecture, and scalable solutions."
          />
        </motion.div>
      </div>

      {/* BACKGROUND GLOW */}
      <div className="absolute -z-10 top-1/2 left-1/2 w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] -translate-x-1/2 -translate-y-1/2"></div>
    </section>
  )
}

/* CARD COMPONENT */
function AboutCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode
  title: string
  description: string
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 200 }}
      className="flex items-start gap-4 p-6 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-400 transition"
    >
      <div className="text-cyan-400 text-3xl">
        {icon}
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-1">
          {title}
        </h3>
        <p className="text-gray-400 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  )
}
