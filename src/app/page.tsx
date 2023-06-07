import About from "@/components/About";
import Contact from "@/components/Contact";
import HomePage from "@/components/HomePage";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Navbar />
      <HomePage />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  )
}
