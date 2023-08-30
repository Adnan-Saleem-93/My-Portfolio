import About from '@/components/About'
import Contact from '@/components/Contact'
import Experience from '@/components/Experience-Section'
import Header from '@/components/Header'
import Main from '@/components/Main'
import Projects from '@/components/Project-Section'
import Skills from '@/components/Skill-Section'

export default function Home() {
  return (
    <main
      className="h-screen snap-y snap-mandatory overflow-scroll z-0"
      style={{backgroundImage: 'url(/images/Hexagon.svg)'}}
    >
      <Header />

      <Main />

      <About />

      <Experience />

      <Skills />

      <Projects />

      <Contact />
    </main>
  )
}
