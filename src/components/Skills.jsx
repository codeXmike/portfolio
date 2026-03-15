import GlassCard from './GlassCard.jsx'
import Reveal from './Reveal.jsx'
import { SKILLS } from '../lib/data.js'

function Bar({ value }) {
  return (
    <div className="mt-2 h-2 w-full rounded-full bg-white/8">
      <div
        className="h-2 rounded-full bg-violet-500/90 shadow-[0_0_20px_rgba(139,92,246,0.25)]"
        style={{ width: `${Math.max(12, Math.min(100, value))}%` }}
      />
    </div>
  )
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="mx-auto w-full max-w-6xl px-1 pt-16 w100:px-2 w250:px-4"
    >
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
          Skills
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">
          Tools I build with
        </h2>

        <div className="mt-6 grid gap-4 w750:grid-cols-2">
          {SKILLS.map((group) => (
            <GlassCard key={group.title} className="p-6">
              <p className="text-sm font-semibold text-white/90">
                {group.title}
              </p>
              <div className="mt-4 grid gap-3">
                {group.items.map((item) => (
                  <div key={item.name}>
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-sm text-white/80">
                        {item.name}
                      </span>
                      <span className="text-xs text-white/45">
                        {item.level}%
                      </span>
                    </div>
                    <Bar value={item.level} />
                  </div>
                ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
