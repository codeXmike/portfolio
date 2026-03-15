import { useEffect, useRef, useState } from 'react'
import { Github, Mail, Menu, X } from 'lucide-react'
import GlassCard from './GlassCard.jsx'
import { PROFILE } from '../lib/config.js'

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'github', label: 'GitHub' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const year = new Date().getFullYear()
  const wrapRef = useRef(null)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    const onPointerDown = (e) => {
      const el = wrapRef.current
      if (!el) return
      if (!el.contains(e.target)) setOpen(false)
    }
    window.addEventListener('pointerdown', onPointerDown)
    return () => window.removeEventListener('pointerdown', onPointerDown)
  }, [])

  const scrollTo = (id) => {
    setOpen(false)
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="sticky top-2 z-50 mx-auto w-full max-w-6xl px-1 w100:px-2 w250:top-3 w250:px-4">
      <div ref={wrapRef} className="relative">
        <GlassCard className="glass-nav px-4 py-3">
          <div className="flex items-center justify-between gap-3">
            <button
              type="button"
              className="focus-ring flex items-center gap-2 rounded-xl px-2 py-1 text-sm font-semibold tracking-tight text-white/90"
              onClick={() => scrollTo('top')}
              aria-label="Go to top"
            >
              <span className="h-2 w-2 rounded-full bg-violet-500 shadow-[0_0_24px_rgba(139,92,246,0.9)]" />
              {PROFILE.name}
              <span className="hidden text-white/40 w500:inline">· {year}</span>
            </button>

            <div className="hidden items-center gap-1 w750:flex">
              {LINKS.map((l) => (
                <button
                  key={l.id}
                  type="button"
                  onClick={() => scrollTo(l.id)}
                  className="focus-ring rounded-xl px-3 py-2 text-sm text-white/70 transition hover:text-white"
                >
                  {l.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <a
                className="focus-ring hidden rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 transition hover:border-violet-400/40 hover:text-white w750:inline-flex"
                href={PROFILE.socials.github}
                target="_blank"
                rel="noreferrer"
              >
                <Github className="mr-2 h-4 w-4" />
                GitHub
              </a>
              <button
                type="button"
                className="focus-ring hidden rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 transition hover:border-violet-400/40 hover:text-white w750:inline-flex"
                onClick={() => scrollTo('contact')}
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact
              </button>

              <button
                type="button"
                className="focus-ring inline-flex rounded-xl border border-white/10 bg-white/5 p-2 text-white/80 transition hover:border-violet-400/40 hover:text-white w750:hidden"
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? 'Close menu' : 'Open menu'}
                aria-expanded={open}
              >
                {open ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </GlassCard>

        {open ? (
          <div className="absolute left-0 right-0 top-full mt-2 w750:hidden">
            <GlassCard className="glass-nav glass-menu p-2">
              <div className="grid gap-1">
                {LINKS.map((l) => (
                  <button
                    key={l.id}
                    type="button"
                    onClick={() => scrollTo(l.id)}
                    className="focus-ring rounded-xl px-3 py-2 text-left text-sm text-white/80 transition hover:bg-white/5 hover:text-white"
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </GlassCard>
          </div>
        ) : null}
      </div>
    </div>
  )
}
