import { useEffect, useState } from 'react'
import { GitHubCalendar } from 'react-github-calendar'
import { Github, Star } from 'lucide-react'
import GlassCard from './GlassCard.jsx'
import Reveal from './Reveal.jsx'
import { PROFILE } from '../lib/config.js'

const USERNAME = 'CodeXmike'

export default function GithubSection() {
  const [repos, setRepos] = useState([])
  const [status, setStatus] = useState('idle')

  const repoUrl = PROFILE.socials.github

  useEffect(() => {
    let alive = true
    const run = async () => {
      try {
        setStatus('loading')
        const res = await fetch(
          `https://api.github.com/users/${USERNAME}/repos?sort=updated&per_page=6`,
        )
        if (!res.ok) throw new Error(`GitHub API ${res.status}`)
        const data = await res.json()
        if (!alive) return
        setRepos(
          Array.isArray(data)
            ? data.map((r) => ({
                name: r.name,
                url: r.html_url,
                description: r.description,
                stars: r.stargazers_count ?? 0,
                language: r.language,
              }))
            : [],
        )
        setStatus('ready')
      } catch {
        if (!alive) return
        setStatus('error')
      }
    }
    run()
    return () => {
      alive = false
    }
  }, [])

  return (
    <section
      id="github"
      className="mx-auto w-full max-w-6xl px-1 pt-16 w100:px-2 w250:px-4"
    >
      <Reveal>
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
              GitHub
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">
              Open source footprint
            </h2>
          </div>
          <a
            className="focus-ring inline-flex items-center rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white/80 transition hover:border-violet-400/40 hover:text-white"
            href={repoUrl}
            target="_blank"
            rel="noreferrer"
          >
            <Github className="mr-2 h-4 w-4" />
            {USERNAME}
          </a>
        </div>

        <div className="mt-6 grid gap-4 w750:grid-cols-2">
          <GlassCard className="p-6">
            <p className="text-sm font-semibold text-white/90">
              Contribution graph
            </p>
            <div className="mt-4 overflow-x-auto">
              <div className="min-w-[720px]">
                <GitHubCalendar
                  username={USERNAME}
                  colorScheme="dark"
                  blockSize={11}
                  blockMargin={4}
                  fontSize={12}
                />
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-6">
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm font-semibold text-white/90">
                Latest repositories
              </p>
              <p className="text-xs text-white/50">
                {status === 'loading'
                  ? 'Loading…'
                  : status === 'error'
                    ? 'Unavailable'
                    : 'Updated'}
              </p>
            </div>
            <div className="mt-4 grid gap-3">
              {repos.length ? (
                repos.map((r) => (
                  <a
                    key={r.url}
                    href={r.url}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring rounded-xl border border-white/10 bg-white/5 px-3 py-3 transition hover:border-violet-400/35"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-sm font-semibold text-white/90">
                        {r.name}
                      </p>
                      <span className="inline-flex items-center gap-1 text-xs text-white/55">
                        <Star className="h-3.5 w-3.5" />
                        {r.stars}
                      </span>
                    </div>
                    <p className="mt-1 line-clamp-2 text-xs text-white/65">
                      {r.description || 'No description yet.'}
                    </p>
                    <p className="mt-2 text-[11px] text-white/45">
                      {r.language || '—'}
                    </p>
                  </a>
                ))
              ) : (
                <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/65">
                  Connect repositories by updating your GitHub profile (or try
                  again later).
                </div>
              )}
            </div>
          </GlassCard>
        </div>
      </Reveal>
    </section>
  )
}
