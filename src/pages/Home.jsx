import About from '../components/About.jsx'
import Hero from '../components/Hero.jsx'
import Projects from '../components/Projects.jsx'
import Skills from '../components/Skills.jsx'
import Contact from '../components/Contact.jsx'

export default function Home({ GithubSection }) {
  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <GithubSection />
      <Contact />
    </main>
  )
}

