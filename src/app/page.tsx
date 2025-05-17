import Footer from '@/components/organisms/Footer'
import AboutSection from '@/components/pages/About-Section'
import Contact from '@/components/pages/Contact-Section'
import Experience from '@/components/pages/Experience-Section'
import Hero from '@/components/pages/Hero-Section'
import Skills from '@/components/pages/Skill-Section'
import { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <main className="relative h-screen z-0 p-12 max-w-4/5 w-4/5 mx-auto">
      <section id="main">
        <Hero />
      </section>

      <section id="about">
        <AboutSection />
      </section>

      <section id="experience">
        <Experience />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <footer id="footer">
        <Footer />
      </footer>
    </main>
  )
}

export default Home
