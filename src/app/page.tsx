import Footer from '@/components/organisms/Footer'
import AboutSection from '@/components/pages/About-Section'
import Contact from '@/components/pages/Contact-Section'
import Experience from '@/components/pages/Experience-Section'
import Hero from '@/components/pages/Hero-Section'
import Skills from '@/components/pages/Skill-Section'
import { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <main className="h-screen sm:p-12 p-6 lg:max-w-4/5 lg:w-4/5 w-full max-w-full mx-auto">
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
