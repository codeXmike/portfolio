import { motion as Motion } from 'framer-motion'
import { ArrowRight, Github, Mail } from 'lucide-react'
import GlassCard from './GlassCard.jsx'
import Reveal from './Reveal.jsx'
import { PROFILE } from '../lib/config.js'

function scrollTo(id) {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
}

export default function Hero() {
  return (
    <section
      id="top"
      className="mx-auto w-full max-w-6xl px-1 pt-8 w100:px-2 w100:pt-10 w250:px-4 w250:pt-14"
    >
      <div className="grid items-start gap-5 w500:gap-6 w1000:grid-cols-2 w1000:gap-8">
        <Reveal>
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
              Available for high-impact builds
            </div>

            <h1 className="text-balance text-2xl font-semibold tracking-tight text-white w250:text-3xl w500:text-4xl w750:text-5xl">
              {PROFILE.name}
            </h1>
            <p className="text-sm text-white/75 w250:text-base w500:text-lg w750:text-xl">
              {PROFILE.role} · {PROFILE.stack}
            </p>
            <p className="max-w-xl text-pretty text-sm leading-relaxed text-white/70 w250:text-base">
              {PROFILE.tagline}
            </p>

            <div className="flex flex-wrap gap-3 pt-1">
              <button
                type="button"
                className="focus-ring inline-flex items-center rounded-xl bg-violet-500 px-4 py-2.5 text-sm font-semibold text-white shadow-[0_0_30px_rgba(139,92,246,0.35)] transition hover:bg-violet-400"
                onClick={() => scrollTo('projects')}
              >
                View Projects <ArrowRight className="ml-2 h-4 w-4" />
              </button>
              <button
                type="button"
                className="focus-ring inline-flex items-center rounded-xl border border-white/12 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white/90 transition hover:border-violet-400/45 hover:bg-white/7"
                onClick={() => scrollTo('contact')}
              >
                Contact <Mail className="ml-2 h-4 w-4" />
              </button>
              <a
                className="focus-ring inline-flex items-center rounded-xl border border-white/12 bg-white/5 px-4 py-2.5 text-sm font-semibold text-white/90 transition hover:border-violet-400/45 hover:bg-white/7"
                href={PROFILE.socials.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub <Github className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <GlassCard className="glow-pulse overflow-hidden p-5">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-white/90">
                cmd
              </p>
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/90" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-300/90" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/90" />
              </div>
            </div>

            <div className="mt-4 rounded-xl border border-white/10 bg-black/30 p-4 font-mono text-sm leading-relaxed text-white/80">
              <p className="text-white/70">{'> whoami'}</p>
              <p className="pl-3 text-white">{PROFILE.name}</p>
              <div className="h-3" />
              <p className="text-white/70">{'> stack'}</p>
              <p className="pl-3 text-white">
                Java JavaFX Python scikit-learn Node React PostgreSQL MongoDB
              </p>
              <div className="h-3" />
              <Motion.p
                aria-hidden="true"
                className="text-white/60"
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              >
                {'> _'}
              </Motion.p>
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  )
}
