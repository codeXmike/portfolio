import { ExternalLink } from 'lucide-react'
import GlassCard from './GlassCard.jsx'
import { PROFILE } from '../lib/config.js'

export default function ProjectCard({ project }) {
  return (
    <GlassCard
      as="a"
      href={PROFILE.socials.github}
      target="_blank"
      rel="noreferrer"
      aria-label={`${project.title} - view on GitHub`}
      className="group block h-full p-6 transition will-change-transform hover:-translate-y-1"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-base font-semibold text-white/95">
            {project.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-white/70">
            {project.description}
          </p>
        </div>
        <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition group-hover:border-violet-400/40 group-hover:text-white">
          <ExternalLink className="h-4 w-4" />
        </div>
      </div>

      {project.highlights?.length ? (
        <ul className="mt-4 grid gap-2 text-sm text-white/70">
          {project.highlights.slice(0, 3).map((h) => (
            <li
              key={h}
              className="rounded-xl border border-white/10 bg-white/5 px-3 py-2"
            >
              {h}
            </li>
          ))}
        </ul>
      ) : null}

      <div className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs text-white/75"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.categories.map((c) => (
          <span
            key={c}
            className="rounded-full border border-violet-400/25 bg-violet-500/10 px-3 py-1 text-xs text-violet-200/90"
          >
            {c}
          </span>
        ))}
      </div>
    </GlassCard>
  )
}
