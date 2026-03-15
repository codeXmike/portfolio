import { Suspense, lazy, useEffect } from 'react'
import { motion as Motion } from 'framer-motion'
import Background from './components/Background.jsx'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import { THEME } from './lib/config.js'

const GithubSection = lazy(() => import('./components/GithubSection.jsx'))

export default function App() {
  const accent = THEME.accent
  useEffect(() => {
    document.documentElement.style.setProperty('--accent', accent)
  }, [accent])

  return (
    <div className="min-h-[100svh]">
      <Background />
      <Navbar />
      <Motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <Suspense
          fallback={
            <div className="mx-auto w-full max-w-6xl px-1 pt-16 text-white/70 w100:px-2 w250:px-4">
              Loading...
            </div>
          }
        >
          <Home GithubSection={GithubSection} />
        </Suspense>
      </Motion.div>
    </div>
  )
}
