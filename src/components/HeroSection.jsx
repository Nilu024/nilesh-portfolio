import React, { useEffect, useState, useRef, useMemo } from 'react'
import { Mail, ArrowRight, Github, Linkedin } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

const ROLES = ['MERN Stack Developer', 'React.js Enthusiast', 'Node.js Engineer', 'Full Stack Builder']

/* Deterministic particles (avoid hydration issues) */
const PARTICLES = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  size: 2 + (i * 1.3) % 4,
  left: (i * 4.5) % 100,
  delay: (i * 0.7) % 8,
  duration: 7 + (i * 1.1) % 7,
}))

const CHIPS = [
  { label: '⚛️ React',    style: 'right-[-3rem] top-8',    delay: '0.5s', color: 'text-cyan-400' },
  { label: '🌿 Node.js',  style: 'left-[-3.5rem] bottom-16', delay: '1.3s', color: 'text-emerald-400' },
  { label: '🍃 MongoDB',  style: 'right-[-3rem] bottom-8',  delay: '0.9s', color: 'text-green-400' },
]

function useTypewriter(words) {
  const [idx, setIdx]       = useState(0)
  const [text, setText]     = useState('')
  const [del, setDel]       = useState(false)
  const [charIdx, setCharIdx] = useState(0)

  useEffect(() => {
    const w = words[idx]
    let t
    if (!del && charIdx < w.length) {
      t = setTimeout(() => { setText(w.slice(0, charIdx + 1)); setCharIdx(c => c + 1) }, 72)
    } else if (!del && charIdx === w.length) {
      t = setTimeout(() => setDel(true), 2000)
    } else if (del && charIdx > 0) {
      t = setTimeout(() => { setText(w.slice(0, charIdx - 1)); setCharIdx(c => c - 1) }, 38)
    } else if (del && charIdx === 0) {
      setDel(false); setIdx(r => (r + 1) % words.length)
    }
    return () => clearTimeout(t)
  }, [charIdx, del, idx, words])
  return text
}

function AnimCounter({ to, suffix = '', delay = 0 }) {
  const [val, setVal] = useState(0)
  const ref           = useRef(null)
  const started       = useRef(false)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !started.current) {
        started.current = true
        const n = parseInt(to), step = Math.ceil(n / 45)
        let c = 0
        setTimeout(() => {
          const iv = setInterval(() => { c = Math.min(c + step, n); setVal(c); if (c >= n) clearInterval(iv) }, 28)
        }, delay)
      }
    }, { threshold: 0.5 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [to, delay])
  return <span ref={ref} className="stat-counter">{val}{suffix}</span>
}

export default function HeroSection() {
  const typed    = useTypewriter(ROLES)
  const secRef   = useRef(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const onMove = (e) => {
    if (!secRef.current) return
    const r = secRef.current.getBoundingClientRect()
    setTilt({
      x: ((e.clientY - r.top - r.height / 2) / r.height) * 10,
      y: ((e.clientX - r.left - r.width / 2) / r.width) * -10,
    })
  }

  return (
    <section
      id="about"
      ref={secRef}
      onMouseMove={onMove}
      onMouseLeave={() => setTilt({ x: 0, y: 0 })}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background px-6 pt-20 pb-16 mesh-bg noise"
    >
      {/* Grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(99,102,241,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(99,102,241,0.05) 1px,transparent 1px)',
        backgroundSize: '64px 64px',
        maskImage: 'radial-gradient(ellipse 85% 75% at 50% 50%,black,transparent)',
      }} />

      {/* Orbs */}
      <div className="absolute -top-48 -left-48 w-[700px] h-[700px] rounded-full bg-primary/10 blur-[140px] animate-orbFloat pointer-events-none" />
      <div className="absolute -bottom-48 -right-48 w-[600px] h-[600px] rounded-full bg-violet-600/8 blur-[120px] animate-orbFloat2 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-[350px] h-[350px] rounded-full bg-cyan-500/5 blur-[90px] animate-orbFloat3 pointer-events-none" />

      {/* Particles */}
      {PARTICLES.map(p => (
        <div key={p.id} className="particle bg-primary/35"
          style={{ width: p.size, height: p.size, left: `${p.left}%`, bottom: 0,
            animationDelay: `${p.delay}s`, animationDuration: `${p.duration}s` }} />
      ))}

      {/* Layout */}
      <div className="relative z-10 max-w-5xl w-full flex flex-col-reverse md:flex-row items-center gap-14 md:gap-20">

        {/* ── Text ── */}
        <div className="flex-1 text-center md:text-left">

          {/* Greeting pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/8 border border-primary/20 mb-5
            animate-[fade-down_0.6s_cubic-bezier(0.16,1,0.3,1)_0.1s_both]">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-xs font-semibold text-primary tracking-[0.15em] uppercase">Full Stack Developer</span>
          </div>

          {/* Name */}
          <h1 className="font-display font-black text-[clamp(2.8rem,7vw,5.5rem)] leading-[1.0] tracking-[-3px] mb-5
            animate-[fade-up_0.8s_cubic-bezier(0.16,1,0.3,1)_0.2s_both]">
            <span className="text-shimmer">Nilesh</span>
            <br />
            <span className="text-foreground">Desale</span>
          </h1>

          {/* Typewriter */}
          <div className="flex items-center gap-1.5 justify-center md:justify-start mb-7
            animate-[fade-up_0.7s_cubic-bezier(0.16,1,0.3,1)_0.38s_both]">
            <span className="font-display font-semibold text-xl md:text-2xl text-violet-400 min-h-[1.8rem]">{typed}</span>
            <span className="font-display font-semibold text-xl md:text-2xl text-primary typed-cursor select-none">|</span>
          </div>

          {/* Bio */}
          <p className="text-muted-foreground text-base md:text-[1.05rem] leading-relaxed max-w-[500px] mb-9 mx-auto md:mx-0
            animate-[fade-up_0.7s_cubic-bezier(0.16,1,0.3,1)_0.52s_both]">
            Passionate full-stack dev specializing in the MERN stack.
            Currently interning at{' '}
            <span className="text-foreground font-medium animated-underline">Instaplex Solution Pvt. Ltd.</span>,
            building scalable apps &amp; RESTful APIs.
            Pursuing B.E. in IT at SPPU (2026).
          </p>

          {/* Stats */}
          <div className="flex items-center gap-8 mb-9 justify-center md:justify-start
            animate-[fade-up_0.7s_cubic-bezier(0.16,1,0.3,1)_0.65s_both]">
            {[
              { to: '5', suffix: '+', label: 'Projects' },
              { to: '6', suffix: '+', label: 'Months Exp.' },
              { to: '7', suffix: '+', label: 'Technologies' },
            ].map(({ to, suffix, label }, i) => (
              <React.Fragment key={label}>
                {i > 0 && <Separator orientation="vertical" className="h-12 bg-border/50" />}
                <div className="text-center group cursor-default">
                  <span className="block font-display font-black text-[2.4rem] text-primary leading-none
                    group-hover:text-shimmer transition-all duration-300 count-up">
                    <AnimCounter to={to} suffix={suffix} delay={i * 180} />
                  </span>
                  <span className="text-[10px] text-muted-foreground uppercase tracking-[0.15em] mt-1.5 block">{label}</span>
                </div>
              </React.Fragment>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex gap-3 flex-wrap justify-center md:justify-start
            animate-[fade-up_0.7s_cubic-bezier(0.16,1,0.3,1)_0.8s_both]">
            <Button asChild size="lg"
              className="rounded-full font-semibold gap-2 bg-primary hover:bg-primary/90
                shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/45
                hover:-translate-y-0.5 transition-all duration-200 group">
              <a href="mailto:nileshdesale24@gmail.com">
                <Mail size={16} />
                Hire Me
                <ArrowRight size={14} className="opacity-60 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
            </Button>
            <Button variant="outline" size="lg"
              className="rounded-full font-medium border-border/70 hover:border-primary/50
                hover:text-primary hover:bg-primary/5 hover:-translate-y-0.5 transition-all duration-200"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
              View Projects
            </Button>
          </div>

          {/* Social mini-links */}
          <div className="flex items-center gap-3 mt-6 justify-center md:justify-start
            animate-[fade-in_0.6s_ease_1.1s_both]">
            <span className="text-xs text-muted-foreground/60 uppercase tracking-widest">Find me on</span>
            {[
              { icon: Github, href: 'https://github.com/Nilu024/', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/nilesh-desale-a79872282/', label: 'LinkedIn' },
            ].map(({ icon: Icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg flex items-center justify-center text-muted-foreground
                  hover:text-primary hover:bg-primary/10 transition-all duration-200 hover:-translate-y-0.5"
                title={label}>
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* ── Avatar ── */}
        <div className="flex-shrink-0 flex flex-col items-center gap-5
          animate-[scale-in_0.9s_cubic-bezier(0.16,1,0.3,1)_0.3s_both]">

          <div className="relative"
            style={{
              transform: `perspective(700px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              transition: 'transform 0.12s ease',
            }}>

            {/* Outer glow ring */}
            <div className="absolute inset-[-20px] rounded-full opacity-20 animate-spin-reverse pointer-events-none"
              style={{ background: 'conic-gradient(transparent 0deg,hsl(239,84%,67%) 100deg,transparent 200deg)' }} />

            {/* Middle gradient ring */}
            <div className="absolute inset-[-9px] rounded-full animate-spin-slow pointer-events-none"
              style={{ background: 'conic-gradient(from 0deg,hsl(239,84%,67%),#8b5cf6,#06b6d4,hsl(239,84%,67%))' }} />

            {/* Ring background */}
            <div className="absolute inset-[-4px] rounded-full bg-background" />

            {/* Avatar */}
            <Avatar className="relative z-10 w-56 h-56 md:w-64 md:h-64 border-[3px] border-background animate-float-slow">
              <AvatarImage src="/images/Nilesh-pic.jpeg" alt="Nilesh Desale" className="object-cover" />
              <AvatarFallback className="text-4xl font-display font-bold bg-secondary text-foreground">ND</AvatarFallback>
            </Avatar>

            {/* Glow pulse */}
            <div className="absolute inset-0 rounded-full animate-[glow-pulse_3s_ease-in-out_infinite] pointer-events-none z-0" />

            {/* Floating chips */}
            {CHIPS.map(({ label, style, delay, color }) => (
              <div key={label}
                className={`absolute chip glass border border-white/8 px-2.5 py-1.5 rounded-xl
                  text-xs font-medium shadow-xl z-20 ${style} ${color}`}
                style={{ animationDuration: '5s', animationDelay: delay }}>
                {label}
              </div>
            ))}
          </div>

          {/* Available badge */}
          <Badge variant="outline"
            className="border-emerald-500/35 bg-emerald-500/8 text-emerald-400 gap-2 px-4 py-1.5 text-xs font-medium badge-glow">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Available for hire
          </Badge>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5
        text-muted-foreground/35 animate-[fade-in_0.8s_ease_1.8s_both]">
        <div className="w-[22px] h-[36px] border-2 border-current rounded-full flex justify-center pt-2">
          <div className="w-0.5 h-2.5 bg-current rounded-full animate-scroll-down" />
        </div>
        <span className="text-[9px] uppercase tracking-[0.25em] font-medium">Scroll</span>
      </div>
    </section>
  )
}
