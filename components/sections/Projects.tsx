"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

type Project = {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github?: string;
  live?: string;
};

const projects: Project[] = [
  {
    title: "Online Library Management System",
    description:
      "Online Library Management System is a which mainly focuses on basic operations in a library like added new member, new books and updated new information, searching books and members and facility to issue and return books",
    tech: ["ASP.NET","C#", "SSMS", "Bootstrap 4", "CSS", "Jquery", "Javascript"],
    image: "/images/project-lms.png",
    //github: "#",
  },
  {
    title: "Custom Tour and Travel",
    description:
      "Travel is simply the process of getting from one place to another by some means of transport. Many people travel from home to work or school by the same means of transport, each day of the working week. Travelling on a regular basis to work is called commuting.",
    tech: ["JSF", "CSS", "Bootstrap", "Javascript", "JPA", "EJB", "Rest", "Client", "Mysql"],
    image: "/images/project-tms.png",
    //github: "#",
  },
  {
    title: "Hospital Management System",
    description:
      "Developed a comprehensive hospital management system webiste with functionalities for both admin and user , admin manage to patient,appointment,room,ipd,reports",
    tech: ["ASP.NET MVC Core","Entity FrameWork", "SSMS", "Bootstrap", "Ajax", "Jquery"],
    image: "/images/project-hms.png",
    //github: "#",
  },
  {
    title: "Subscription Management System",
    description:
      "The Subscription Management System is an advanced platform designed to simplify subscription management for users and empower business to monetize their services through customizable subscription plans. With a sleek, modern interface powered by React Vite and Ant Design, the system offers an intuitive and seamless user experience for all stakeholders.",
    tech: ["React","Vite","Ant Design","ASP.NET Core Web API 8", "Entity FrameWork", "PostgreSQL"],
    image: "/images/project-sms.png",
    //github: "#",
  },
  {
    title: "Human Resource Management System",
    description:
      "Complete HRMS with attendance import, payroll PDF generation, employee notifications, and role-based access control.",
    tech: ["ASP.NET MVC Core","Entity FrameWork", "SSMS", "Bootstrap", "Ajax", "Jquery"],
    image: "/images/project-hrms.png",
    //github: "#",
  },
  {
    title: "Lariox Technologies - Website",
    description:
      "Lariox Technologies is an industrial automation and technology solutions company based in Surat, Gujarat, India. Founded with a vision to drive innovation and engineering excellence, Lariox helps industries optimize processes, improve operational efficiency, and harness the power of data through smart automation and software solutions",
    tech: ["React", "Vite"],
    image: "/images/project-website.png",
    //github: "#",
  },
  // {
  //   title: "3D Developer Portfolio",
  //   description:
  //     "Modern 3D portfolio using Three.js, React Three Fiber, smooth animations, and dark UI.",
  //   tech: ["Next.js", "Three.js", "Tailwind", "Framer Motion"],
  //   image: "/images/project-portfolio.jpg",
  //   live: "#",
  // },
];

export default function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section
      id="projects"
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
            My <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A selection of real-world applications showcasing backend strength,
            frontend polish, and scalable architecture.
          </p>
        </motion.div>

        {/* PROJECT GRID */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.04 }}
              onClick={() => setActiveProject(project)}
              className="cursor-pointer bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-cyan-400 transition"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-5">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-md bg-slate-800 text-cyan-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* MODAL */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center px-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative bg-slate-900 rounded-xl max-w-xl w-full overflow-hidden"
            >
              <button
                onClick={() => setActiveProject(null)}
                aria-label="Close project details"
                title="Close"
                className="absolute top-4 right-4 text-white hover:text-cyan-400"
              >
                <FaTimes size={20} />
              </button>

              <img
                src={activeProject.image}
                alt={activeProject.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3">
                  {activeProject.title}
                </h3>
                <p className="text-gray-400 mb-4">
                  {activeProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {activeProject.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-md bg-slate-800 text-cyan-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {activeProject.github && (
                    <a
                      href={activeProject.github}
                      target="_blank"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition"
                    >
                      <FaGithub /> GitHub
                    </a>
                  )}
                  {activeProject.live && (
                    <a
                      href={activeProject.live}
                      target="_blank"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 text-black hover:bg-cyan-600 transition"
                    >
                      <FaExternalLinkAlt /> Live
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* BACKGROUND GLOW */}
      <div className="absolute -z-10 top-1/2 left-1/2 w-[650px] h-[650px] bg-cyan-500/20 blur-[150px] -translate-x-1/2 -translate-y-1/2"></div>
    </section>
  );
}
