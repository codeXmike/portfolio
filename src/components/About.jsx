import GlassCard from './GlassCard.jsx'
import Reveal from './Reveal.jsx'

export default function About() {
  return (
    <section
      id="about"
      className="mx-auto w-full max-w-6xl px-1 pt-16 w100:px-2 w250:px-4"
    >
      <Reveal>
        <div className="mb-6 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
              About
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">
              Systems-first engineering
            </h2>
          </div>
        </div>

        <GlassCard className="p-6">
          <p className="text-white/75">
            I build secure, scalable software systems and intelligent tools.
          </p>
          <p className="mt-4 text-white/65">My focus areas include:</p>
          <ul className="mt-3 grid gap-2 text-sm text-white/70 w750:grid-cols-2">
            <li className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
              Backend architecture
            </li>
            <li className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
              Encryption systems
            </li>
            <li className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
              Intelligent automation
            </li>
            <li className="rounded-xl border border-white/10 bg-white/5 px-3 py-2">
              Full-stack development
            </li>
          </ul>
        </GlassCard>
      </Reveal>
    </section>
  )
}
