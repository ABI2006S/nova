import { Routes, Route } from "react-router-dom"
import { useLenis } from "@/hooks/useLenis"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ScrollProgress } from "@/components/effects/ScrollProgress"
import { Hero } from "@/components/sections/Hero"
import { Trust } from "@/components/sections/Trust"
import { Services } from "@/components/sections/Services"
import { WhyChoose } from "@/components/sections/WhyChoose"
import { Portfolio } from "@/components/sections/Portfolio"
import { Process } from "@/components/sections/Process"
import { About } from "@/components/sections/About"
import { Contact } from "@/components/sections/Contact"
import { FinalCTA } from "@/components/sections/FinalCTA"

function Home() {
  return (
    <>
      <Hero />
      <Trust />
      <Services />
      <WhyChoose />
      <Portfolio />
      <Process />
      <About />
      <Contact />
      <FinalCTA />
    </>
  )
}

export default function App() {
  useLenis()

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}
