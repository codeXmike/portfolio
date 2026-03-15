import { useMemo, useState } from 'react'
import { Github, Linkedin, Mail, Send } from 'lucide-react'
import GlassCard from './GlassCard.jsx'
import Reveal from './Reveal.jsx'
import { PROFILE } from '../lib/config.js'

function encodeMailto({ to, subject, body }) {
  const s = new URLSearchParams()
  s.set('subject', subject)
  s.set('body', body)
  return `mailto:${encodeURIComponent(to)}?${s.toString()}`
}

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const mailto = useMemo(() => {
    const subject = `Portfolio contact — ${name || 'New message'}`
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}\n`
    return encodeMailto({ to: PROFILE.contactEmail, subject, body })
  }, [name, email, message])

  return (
    <section
      id="contact"
      className="mx-auto w-full max-w-6xl px-1 pb-20 pt-16 w100:px-2 w250:px-4"
    >
      <Reveal>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
          Contact
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white">
          Build something serious
        </h2>

        <div className="mt-6 grid gap-4 w750:grid-cols-2">
          <GlassCard className="p-6">
            <p className="text-sm font-semibold text-white/90">Message</p>
            <form className="mt-4 grid gap-3">
              <label className="grid gap-2">
                <span className="text-xs text-white/55">Name</span>
                <input
                  className="focus-ring w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-sm text-white placeholder:text-white/30"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <label className="grid gap-2">
                <span className="text-xs text-white/55">Email</span>
                <input
                  className="focus-ring w-full rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-sm text-white placeholder:text-white/30"
                  placeholder="you@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  inputMode="email"
                />
              </label>
              <label className="grid gap-2">
                <span className="text-xs text-white/55">Message</span>
                <textarea
                  className="focus-ring min-h-[120px] w-full resize-y rounded-xl border border-white/10 bg-black/30 px-3 py-2 text-sm text-white placeholder:text-white/30"
                  placeholder="Tell me what you're building…"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </label>

              <a
                className="focus-ring inline-flex items-center justify-center rounded-xl bg-violet-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-400"
                href={mailto}
              >
                Send <Send className="ml-2 h-4 w-4" />
              </a>

              <p className="text-xs text-white/45">
                Updates contact email in `src/lib/config.js`.
              </p>
            </form>
          </GlassCard>

          <GlassCard className="p-6">
            <p className="text-sm font-semibold text-white/90">Links</p>
            <div className="mt-4 grid gap-3">
              <a
                className="focus-ring inline-flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm text-white/80 transition hover:border-violet-400/35 hover:text-white"
                href={PROFILE.socials.github}
                target="_blank"
                rel="noreferrer"
              >
                <span className="inline-flex items-center gap-2">
                  <Github className="h-4 w-4" />
                  GitHub
                </span>
                <span className="text-xs text-white/45">github.com</span>
              </a>

              <a
                className="focus-ring inline-flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm text-white/80 transition hover:border-violet-400/35 hover:text-white"
                href={mailto}
              >
                <span className="inline-flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  Email
                </span>
                <span className="text-xs text-white/45">
                  {PROFILE.contactEmail}
                </span>
              </a>

              {PROFILE.socials.linkedin ? (
                <a
                  className="focus-ring inline-flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-sm text-white/80 transition hover:border-violet-400/35 hover:text-white"
                  href={PROFILE.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="inline-flex items-center gap-2">
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </span>
                  <span className="text-xs text-white/45">profile</span>
                </a>
              ) : null}
            </div>

            <div className="mt-6 rounded-xl border border-white/10 bg-black/30 p-4">
              <p className="text-sm font-semibold text-white/90">
                My line
              </p>
              <p className="mt-2 text-sm text-white/65">
                {PROFILE.identityLine}
              </p>
            </div>
          </GlassCard>
        </div>
      </Reveal>
    </section>
  )
}
