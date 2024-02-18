import About from '@/components/pages/About-Section'
import Contact from '@/components/pages/Contact-Section'
import Experience from '@/components/pages/Experience-Section'
import Header from '@/components/organisms/Header'
import Main from '@/components/pages/Hero-Section'
import Projects from '@/components/pages/Project-Section'
import Skills from '@/components/pages/Skill-Section'
import {NextPage} from 'next'

const Home: NextPage = () => {
  return (
    <main className="h-screen overflow-scroll z-0">
      <Header />

      <section id="main">
        <Main />
      </section>

      <section id="about">
        <About />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </main>
  )
}

export default Home
