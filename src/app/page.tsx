import Contact from '@/components/pages/Contact-Section'
import Experience from '@/components/pages/Experience-Section'
import Hero from '@/components/pages/Hero-Section'
import Projects from '@/components/pages/Project-Section'
import Skills from '@/components/pages/Skill-Section'
import { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <main className="relative h-screen snap-y snap-mandatory overflow-scroll z-0">
      <section id="main" className="snap-start">
        <Hero />
      </section>

      <section id="experience" className="snap-center">
        <Experience />
      </section>

      <section id="skills" className="snap-center">
        <Skills />
      </section>

      <section id="projects" className="snap-center">
        <Projects />
      </section>

      <section id="contact" className="snap-end">
        <Contact />
      </section>
    </main>
  )
}

export default Home
