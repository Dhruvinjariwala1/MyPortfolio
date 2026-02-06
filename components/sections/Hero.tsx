'use client'

import { motion, type Variants } from 'framer-motion'
import Scene from '../canvas/Scene'

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
}

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] },
  },
}

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative min-h-screen w-full
        flex flex-col md:flex-row
        items-center justify-center
        px-6 md:px-20 pt-28
        overflow-hidden
        bg-slate-950
        bg-gradient-to-r from-slate-950 via-black to-slate-950
      "
    >
      {/* LEFT CONTENT */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="w-full md:w-1/2 space-y-6 text-center md:text-left"
      >
        <motion.h1
          variants={item}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          Hello Hi, I&apos;m{' '}
          <span className="relative text-cyan-400">
            Dhruvin
            <span className="absolute -inset-1 bg-cyan-400/20 blur-lg -z-10" />
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="text-gray-400 max-w-xl text-base md:text-lg mx-auto md:mx-0"
        >
          ASP.NET MVC Developer modern, scalable,
          and visually engaging web experiences.
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-cyan-500 text-black font-semibold hover:bg-cyan-600 transition"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="px-6 py-3 rounded-lg border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
          >
            Contact Me
          </a>
        </motion.div>
      </motion.div>

      {/* 3D SCENE (VISIBLE ON MOBILE TOO) */}
      <div className="w-full md:w-1/2 h-[320px] md:h-[520px] mt-12 md:mt-0">
        <Scene />
      </div>

      {/* BACKGROUND GLOW */}
      <div className="absolute -z-10 top-1/2 right-1/2 md:right-24 w-[300px] md:w-[400px] h-[300px] md:h-[400px] bg-cyan-500/20 blur-[120px]" />
    </section>
  )
}
