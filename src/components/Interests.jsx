import React from 'react'
import { Zap, BookOpen, Users, Globe, Code2, Layout } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const INTERESTS = [
  { name: 'Full Stack Development', icon: Code2,  color: 'text-indigo-400', bg: 'bg-indigo-500/10', ring: 'group-hover:ring-indigo-500/30',
    desc: 'Building end-to-end web applications with the MERN stack — from database design to pixel-perfect UIs.' },
  { name: 'API Design',             icon: Zap,    color: 'text-violet-400', bg: 'bg-violet-500/10', ring: 'group-hover:ring-violet-500/30',
    desc: 'Designing clean, scalable RESTful APIs with JWT auth and role-based access control for real-world apps.' },
  { name: 'UI/UX Engineering',      icon: Layout, color: 'text-cyan-400',   bg: 'bg-cyan-500/10',   ring: 'group-hover:ring-cyan-500/30',
    desc: 'Crafting responsive, accessible interfaces with React, Tailwind CSS, and ShadCN UI component systems.' },
  { name: 'Open Source',            icon: Globe,  color: 'text-emerald-400',bg: 'bg-emerald-500/10',ring: 'group-hover:ring-emerald-500/30',
    desc: 'Engaging with the developer community through open source projects and learning on GitHub.' },
  { name: 'Continuous Learning',    icon: BookOpen,color:'text-amber-400', bg: 'bg-amber-500/10',  ring: 'group-hover:ring-amber-500/30',
    desc: 'Exploring new tech — currently deepening knowledge in TanStack Query, Redux, and cloud deployments.' },
  { name: 'Agile Collaboration',    icon: Users,  color: 'text-rose-400',   bg: 'bg-rose-500/10',   ring: 'group-hover:ring-rose-500/30',
    desc: 'Thriving in team environments with Git workflows, code reviews, and agile sprints.' },
]

export default function Interests() {
  return (
    <section id="interests" className="relative py-28 bg-background overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px divider-gradient" />
      <div className="absolute bottom-0 left-0 right-0 h-px divider-gradient" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full bg-primary/3 blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <SectionHeader label="What drives me" title="Interests & Learning" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {INTERESTS.map(({ name, icon: Icon, color, bg, ring, desc }, i) => (
            <Card key={name}
              className={`reveal spotlight gradient-border card-shimmer group
                bg-card border-border hover:border-white/10
                transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-black/25`}
              style={{ transitionDelay: `${i * 70}ms` }}>
              <CardContent className="p-6">
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-5
                  ${bg} ${color} ring-2 ring-transparent ${ring}
                  group-hover:scale-110 group-hover:rotate-3`}
                  style={{ transition: 'transform 0.3s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.3s ease' }}
                >
                  <Icon size={22} />
                </div>

                <h3 className="font-display font-bold text-base text-foreground mb-2 group-hover:text-gradient transition-all duration-300">
                  {name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed group-hover:text-muted-foreground/80 transition-colors">
                  {desc}
                </p>

                {/* Animated bottom accent line */}
                <div className="mt-4 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-primary to-violet-500 rounded-full transition-all duration-500 ease-out" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

function SectionHeader({ label, title }) {
  return (
    <div className="text-center mb-16 reveal">
      <p className="text-xs font-semibold text-primary tracking-[0.2em] uppercase mb-3 flex items-center justify-center gap-2">
        <span className="w-8 h-px bg-primary/50" />{label}<span className="w-8 h-px bg-primary/50" />
      </p>
      <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground tracking-tight">{title}</h2>
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-violet-500" />
    </div>
  )
}
