import { useMemo, useState } from 'react'
import Reveal from './Reveal.jsx'
import ProjectCard from './ProjectCard.jsx'
import { PROFILE } from '../lib/config.js'
import { PROJECTS } from '../lib/data.js'

const ALL = 'All'

export default function Projects() {
  const [filter, setFilter] = useState(ALL)

  const categories = useMemo(() => {
    const set = new Set()
    for (const p of PROJECTS) for (const c of p.categories) set.add(c)
    return [ALL, ...Array.from(set).sort()]
  }, [])

  const ordered = useMemo(() => {
    const featured = PROJECTS.filter((p) => p.featured)
    const rest = PROJECTS.filter((p) => !p.featured)
    return [...featured, ...rest]
  }, [])

  const visible = useMemo(() => {
    if (filter === ALL) return ordered
    return ordered.filter((p) => p.categories.includes(filter))
  }, [filter, ordered])

  return (
    <section
      id="projects"
      className="mx-auto w-full max-w-6xl px-1 pt-16 w100:px-2 w250:px-4"
    >
      <Reveal>
        <div className="flex flex-col items-start justify-between gap-4 w750:flex-row w750:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
              Projects
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">
              Systems I ship
            </h2>
            <p className="mt-3 max-w-2xl text-sm text-white/65">
              {PROFILE.projectTagline}
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((c) => {
              const active = c === filter
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setFilter(c)}
                  className={`focus-ring rounded-full border px-3 py-1 text-xs transition ${
                    active
                      ? 'border-violet-400/50 bg-violet-500/15 text-violet-100'
                      : 'border-white/10 bg-white/5 text-white/70 hover:border-violet-400/30 hover:text-white'
                  }`}
                >
                  {c}
                </button>
              )
            })}
          </div>
        </div>

        <div className="mt-6 grid gap-4 w750:grid-cols-2">
          {visible.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </Reveal>
    </section>
  )
}
