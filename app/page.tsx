import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Contact from '@/components/sections/Contact'
import Achievements from '@/components/sections/Achievements'
import WorkExperience from '@/components/sections/WorkExperience'
import Navbar from '@/components/Navbar'

export const metadata = {
  title: "Dhruvin Jariwala | Portfolio",
  description: "3D Developer Portfolio of Dhruvin Jariwala",
};
export default function Home() {
  return (
    <>
      <Navbar />

      {/* SEO Heading */}
      <h1 className="seo-heading">
        Dhruvin Jariwala – ASP.NET Core & Reactjs Developer
      </h1>
      
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <WorkExperience />
      <Contact />
    </>
  )
}
