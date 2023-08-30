import About from '@/components/pages/About-Section'
import Contact from '@/components/pages/Contact-Section'
import Experience from '@/components/pages/Experience-Section'
import Header from '@/components/organisms/Header'
import Main from '@/components/pages/Hero-Section'
import Projects from '@/components/pages/Project-Section'
import Skills from '@/components/pages/Skill-Section'

export default function Home() {
  return (
    <main className="h-screen snap-y snap-mandatory overflow-scroll z-0">
      <Header />

      <section id="main" className="snap-start">
        <Main />
      </section>

      <section id="about" className="snap-center">
        <About />
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
