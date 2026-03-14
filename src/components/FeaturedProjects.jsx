import React, { useState } from 'react'
import { Github, ExternalLink, Server, Eye } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'

const PROJECTS = [
  {
    title: 'Visitor Management System',
    description: 'Full-stack VMS for managing visitor entries, check-ins/check-outs, and host notifications. Secure JWT auth, real-time updates, and an admin dashboard.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST APIs'],
    frontendGithub: 'https://github.com/Nilu024/VMS_Frontend',
    backendGithub: 'https://github.com/Nilu024/VMS_Backend',
    demo: 'https://vms-frontend-nine.vercel.app',
    emoji: '🏢',
    gradient: 'from-indigo-500 via-violet-500 to-purple-600',
    glow: 'rgba(99,102,241,0.25)',
    badge: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/25',
    num: '01',
  },
  {
    title: 'Task Manager',
    description: 'Kanban-based task management with secure auth, CRUD, prioritization, deadline tracking, drag-and-drop UI, and optimized MongoDB queries.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JWT', 'REST APIs'],
    frontendGithub: 'https://github.com/Nilu024/Todo-Frontend',
    backendGithub: 'https://github.com/Nilu024/Todo-Backend',
    demo: 'https://todo-frontend-henna-two.vercel.app/',
    emoji: '✅',
    gradient: 'from-violet-500 via-purple-500 to-fuchsia-600',
    glow: 'rgba(139,92,246,0.25)',
    badge: 'bg-violet-500/10 text-violet-400 border-violet-500/25',
    num: '02',
  },
  {
    title: 'E-Commerce Website',
    description: 'Scalable full-stack e-commerce platform with auth, product management, filtering, search, cart & order system, and full admin panel.',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'REST APIs'],
    frontendGithub: 'https://github.com/Nilu024/E-commerce',
    backendGithub: null,
    demo: null,
    emoji: '🛒',
    gradient: 'from-cyan-500 via-sky-500 to-blue-600',
    glow: 'rgba(6,182,212,0.25)',
    badge: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/25',
    num: '03',
  },
  {
    title: 'Netflix Clone',
    description: 'Responsive Netflix-inspired frontend with modern UI design, movie browsing, category navigation, and polished streaming interface.',
    tech: ['React.js', 'CSS3', 'JavaScript', 'API Integration'],
    frontendGithub: 'https://github.com/Nilu024/netflix-clone',
    backendGithub: null,
    demo: 'https://netflix-clone-phi-lake.vercel.app/',
    emoji: '🎬',
    gradient: 'from-red-500 via-rose-500 to-pink-600',
    glow: 'rgba(239,68,68,0.25)',
    badge: 'bg-red-500/10 text-red-400 border-red-500/25',
    num: '04',
  },
  {
    title: 'Learning Platform',
    description: 'Interactive deep learning educational platform with course content, lesson modules, and clean UI for structured ML knowledge delivery.',
    tech: ['React.js', 'JavaScript', 'HTML5', 'CSS3'],
    frontendGithub: 'https://github.com/Nilu024/DeepLearning',
    backendGithub: null,
    demo: 'https://deep-learning-phi.vercel.app/',
    emoji: '🧠',
    gradient: 'from-emerald-500 via-teal-500 to-cyan-600',
    glow: 'rgba(16,185,129,0.25)',
    badge: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/25',
    num: '05',
  },
]

export default function FeaturedProjects() {
  const [hoveredCard, setHoveredCard] = useState(null)

  return (
    <TooltipProvider>
      <section id="projects" className="relative py-28 overflow-hidden">
        <div className="absolute inset-0 bg-card/15" />
        <div className="absolute top-0 left-0 right-0 h-px divider-gradient" />
        <div className="absolute bottom-0 left-0 right-0 h-px divider-gradient" />
        <div className="absolute top-1/2 left-0 w-72 h-72 -translate-y-1/2 rounded-full bg-primary/4 blur-[100px] pointer-events-none" />
        <div className="absolute top-1/2 right-0 w-72 h-72 -translate-y-1/2 rounded-full bg-violet-500/4 blur-[100px] pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-6">
          <SectionHeader label="What I've built" title="Featured Projects" />

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {PROJECTS.map((p, i) => (
              <Card key={p.title}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
                className="reveal card-shimmer card-top-shine spotlight group bg-card border-border
                  flex flex-col overflow-hidden cursor-default
                  hover:-translate-y-3 hover:shadow-2xl hover:border-white/10"
                style={{
                  transitionDelay: `${i * 65}ms`,
                  transition: 'transform 0.35s cubic-bezier(0.16,1,0.3,1), box-shadow 0.35s ease, border-color 0.2s ease',
                  boxShadow: hoveredCard === i ? `0 24px 60px rgba(0,0,0,0.4), 0 0 40px ${p.glow}` : undefined,
                }}>

                {/* Top gradient stripe + number */}
                <div className={`relative h-28 bg-gradient-to-br ${p.gradient} overflow-hidden`}>
                  {/* Noise overlay */}
                  <div className="absolute inset-0 opacity-20"
                    style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")" }} />
                  {/* Emoji */}
                  <span className="absolute bottom-3 left-5 text-4xl group-hover:scale-110 transition-transform duration-300 drop-shadow-lg">
                    {p.emoji}
                  </span>
                  {/* Number */}
                  <span className="absolute top-3 right-4 font-display font-black text-3xl text-white/20 select-none">
                    {p.num}
                  </span>
                  {/* Live preview icon */}
                  {p.demo && (
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon" asChild
                          className="absolute top-2 left-3 h-8 w-8 text-white/60 hover:text-white hover:bg-white/10
                            opacity-0 group-hover:opacity-100 transition-all duration-200">
                          <a href={p.demo} target="_blank" rel="noopener noreferrer"><Eye size={15} /></a>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Preview Live</TooltipContent>
                    </Tooltip>
                  )}
                </div>

                <CardHeader className="pb-2 pt-4">
                  <CardTitle className="font-display text-[1.05rem] text-foreground leading-tight">{p.title}</CardTitle>
                  <CardDescription className="text-sm leading-relaxed mt-1">{p.description}</CardDescription>
                </CardHeader>

                <CardContent className="flex-1 pb-3">
                  <div className="flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <Badge key={t} variant="outline"
                        className={`tag-bounce text-xs border cursor-default ${p.badge}`}>
                        {t}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="gap-2 pt-0 pb-4 flex-wrap border-t border-border/40 pt-3 mt-1">
                  {p.frontendGithub && (
                    <Button variant="outline" size="sm" asChild
                      className="h-8 text-xs border-border/70 hover:border-primary/50 hover:text-primary
                        hover:bg-primary/5 gap-1.5 transition-all duration-200">
                      <a href={p.frontendGithub} target="_blank" rel="noopener noreferrer">
                        <Github size={12} />
                        {p.backendGithub ? 'Frontend' : 'GitHub'}
                      </a>
                    </Button>
                  )}
                  {p.backendGithub && (
                    <Button variant="outline" size="sm" asChild
                      className="h-8 text-xs border-border/70 hover:border-primary/50 hover:text-primary
                        hover:bg-primary/5 gap-1.5 transition-all duration-200">
                      <a href={p.backendGithub} target="_blank" rel="noopener noreferrer">
                        <Server size={12} />
                        Backend
                      </a>
                    </Button>
                  )}
                  {p.demo && (
                    <Button size="sm" asChild
                      className={`h-8 text-xs ml-auto bg-gradient-to-r ${p.gradient} border-0 text-white
                        hover:opacity-90 hover:shadow-lg gap-1.5 transition-all duration-200`}
                      style={{ boxShadow: hoveredCard === i ? `0 4px 20px ${p.glow}` : undefined }}>
                      <a href={p.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={12} />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </TooltipProvider>
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
