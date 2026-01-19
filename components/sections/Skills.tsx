'use client'

import { motion } from 'framer-motion'
import {
  FaReact,
  //FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaDatabase,
  FaAndroid,
  FaPython,
} from 'react-icons/fa'
import {
  SiDotnet,
  //SiMongodb,
  SiPostgresql,
 // SiTailwindcss,
  SiJavascript,
 // SiTypescript,
  //SiKotlin,
  SiJquery
} from 'react-icons/si'

const skills = [
  { name: 'ASP.NET Core MVC', icon: <SiDotnet />, level: 100 },
  { name: 'C# & OOP', icon: <FaCodeIcon />, level: 30 },
  { name: 'Next.js / React', icon: <FaReact />, level: 40 },
  { name: 'JavaScript', icon: <SiJavascript />, level: 40 },
  //{ name: 'TypeScript', icon: <SiTypescript />, level: 75 },
  //{ name: 'Node.js', icon: <FaNodeJs />, level: 70 },
  //{ name: 'MongoDB', icon: <SiMongodb />, level: 70 },
  { name: 'PostgreSQL / SQL', icon: <SiPostgresql />, level: 70 },
  { name: 'HTML5', icon: <FaHtml5 />, level: 100 },
  { name: 'CSS3', icon: <FaCss3Alt />, level: 100 },
  //{ name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 85 },
  { name: 'Git & GitHub', icon: <FaGitAlt />, level: 80 },
  //{ name: 'Git & GitHub', icon: <FaGitAlt />, level: 80 },
  { name: 'Android', icon: <FaAndroid />, level: 60 },
  { name: 'Python', icon: <FaPython />, level: 85 },
  { name: 'Ajax', icon: <SiJquery />, level: 35 },
]

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative w-full min-h-screen bg-slate-950 text-white px-6 md:px-16 py-20"
    >
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="text-cyan-400">Skills</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A blend of backend strength and modern frontend technologies, 
            focused on performance, scalability, and clean architecture.
          </p>
        </motion.div>

        {/* SKILLS GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} index={index} />
          ))}
        </div>
      </div>

      {/* BACKGROUND GLOW */}
      <div className="absolute -z-10 top-1/2 left-1/2 w-[600px] h-[600px] bg-cyan-500/20 blur-[140px] -translate-x-1/2 -translate-y-1/2"></div>
    </section>
  )
}

/* SKILL CARD */
function SkillCard({
  name,
  icon,
  level,
  index,
}: {
  name: string
  icon: React.ReactNode
  level: number
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="bg-slate-900 border border-slate-800 rounded-xl p-6 hover:border-cyan-400 transition"
    >
      <div className="flex items-center gap-4 mb-4">
        <div className="text-3xl text-cyan-400">
          {icon}
        </div>
        <h3 className="text-xl font-semibold">
          {name}
        </h3>
      </div>

      {/* PROGRESS BAR */}
      <div className="w-full h-2 bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="h-full bg-cyan-400 rounded-full"
        />
      </div>

      <p className="text-sm text-gray-400 mt-2">
        Proficiency: {level}%
      </p>
    </motion.div>
  )
}

/* CUSTOM ICON */
function FaCodeIcon() {
  return (
    <FaDatabase className="text-cyan-400" />
  )
}
