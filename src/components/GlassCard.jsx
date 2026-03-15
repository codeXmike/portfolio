import { useRef } from 'react'

export default function GlassCard({
  as: Component = 'div',
  className = '',
  children,
  ...props
}) {
  const ref = useRef(null)

  const handleMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    el.style.setProperty('--mx', `${x}px`)
    el.style.setProperty('--my', `${y}px`)
    el.style.setProperty('--px', `${(x / rect.width) * 100}%`)
    el.style.setProperty('--py', `${(y / rect.height) * 100}%`)
    el.style.setProperty('--shine', '1')
  }

  const handleLeave = () => {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--shine', '0')
  }

  return (
    <Component
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={`glass-card rounded-2xl ${className}`}
      {...props}
    >
      <div className="glass-inner" aria-hidden="true" />
      <div className="glass-reflection" aria-hidden="true" />
      <div className="glass-content">{children}</div>
    </Component>
  )
}
