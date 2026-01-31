import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Projects from "@/components/Projects"
import Services from "@/components/Services"
import TechStack from "@/components/TechStack"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import About from "@/components/About"

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-gray-100 bg-pattern">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Services />
      <TechStack />
      <Contact />
      <Footer />
    </main>
  )
}

