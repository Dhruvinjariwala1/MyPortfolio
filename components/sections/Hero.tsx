'use client'

import { motion, type Variants } from 'framer-motion'
import Scene from '../canvas/Scene'

/* CONTAINER VARIANT */
const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
}

/* ITEM VARIANT */
const item: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1], // ✅ easeOut equivalent (TS safe)
    },
  },
}

export default function Hero() {
  return (
    <section
  id="home"
  className="
    relative h-screen w-full
    flex items-center justify-between
    px-10 md:px-20 pt-24
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
        className="w-full md:w-1/2 space-y-6"
      >
        <motion.h1
          variants={item}
          className="text-5xl md:text-6xl font-bold leading-tight"
        >
          Hello Hi, I&apos;m{' '}
          <span className="relative text-cyan-400">
            Dhruvin
            <span className="absolute -inset-1 bg-cyan-400/20 blur-lg -z-10"></span>
          </span>
        </motion.h1>

        <motion.p
          variants={item}
          className="text-gray-400 max-w-xl text-lg"
        >
          ASP.NET MVC Developer modern, scalable,
          and visually engaging web experiences.
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div
          variants={item}
          className="flex gap-4 pt-4"
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

      {/* RIGHT 3D SCENE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="hidden md:block w-1/2 h-full"
      >
        <Scene />
      </motion.div>

      {/* BACKGROUND GLOW */}
      <div className="absolute -z-10 top-1/2 right-24 w-[400px] h-[400px] bg-cyan-500/20 blur-[140px]" />
    </section>
  )
}
