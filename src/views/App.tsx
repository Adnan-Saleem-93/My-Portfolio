"use client";

import About from "@/views/About";
import Contact from "@/views/Contact";
import HomePage from "@/views/HomePage";
import Navbar from "@/views/Navbar";
import Projects from "@/views/Projects";
import Skills from "@/views/Skills";

const App = () => {
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

export default App