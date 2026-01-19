'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements ', href: '#achievements'},
  { name: 'WorkExperience ', href: '#experience'},
  { name: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="mx-auto max-w-8xl px-6 md:px-16 py-4 flex items-center justify-between
                      bg-black/40 backdrop-blur-md border-b border-white/10">

        {/* LOGO */}
        <a
          href="#home"
          className="text-xl font-bold tracking-wide"
        >
          𝓓𝒽𝓻𝓾𝓿𝓲𝓷 𝓙𝓪𝓻𝓲𝔀𝓪𝓵𝓪<span className="text-cyan-400">.</span>
        </a>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.name} className="relative group">
              <a
                href={item.href}
                className="text-sm text-gray-300 hover:text-white transition"
              >
                {item.name}
              </a>
              <span
                className="absolute left-0 -bottom-1 w-0 h-[2px] bg-cyan-400
                           group-hover:w-full transition-all duration-300"
              />
            </li>
          ))}
        </ul>

        {/* MOBILE BUTTON */}
        <button
          aria-label="Toggle menu"
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
          <span className="w-6 h-[2px] bg-white"></span>
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="md:hidden bg-black/90 backdrop-blur-md border-b border-white/10"
        >
          <ul className="flex flex-col gap-6 px-6 py-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-gray-300 hover:text-cyan-400 transition"
              >
                {item.name}
              </a>
            ))}
          </ul>
        </motion.div>
      )}
    </header>
  )
}
