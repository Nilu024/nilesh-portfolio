import React, { useState } from 'react'
import { Monitor, Server, Database, GitBranch, Cpu } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

const GROUPS = [
  {
    category: 'Frontend',
    icon: Monitor, color: 'text-indigo-400', bg: 'bg-indigo-500/10',
    hoverBorder: 'hover:border-indigo-500/35', hoverShadow: 'hover:shadow-indigo-500/8',
    skills: ['React.js', 'Redux', 'TanStack Query', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'Tailwind CSS', 'ShadCN UI'],
  },
  {
    category: 'Backend',
    icon: Server, color: 'text-violet-400', bg: 'bg-violet-500/10',
    hoverBorder: 'hover:border-violet-500/35', hoverShadow: 'hover:shadow-violet-500/8',
    skills: ['Node.js', 'Express.js', 'REST APIs', 'JWT Authentication'],
  },
  {
    category: 'Database',
    icon: Database, color: 'text-cyan-400', bg: 'bg-cyan-500/10',
    hoverBorder: 'hover:border-cyan-500/35', hoverShadow: 'hover:shadow-cyan-500/8',
    skills: ['MongoDB', 'Mongoose', 'MySQL'],
  },
  {
    category: 'Tools & Version Control',
    icon: GitBranch, color: 'text-emerald-400', bg: 'bg-emerald-500/10',
    hoverBorder: 'hover:border-emerald-500/35', hoverShadow: 'hover:shadow-emerald-500/8',
    skills: ['Git', 'GitHub', 'Agile / Scrum'],
  },
  {
    category: 'Core Concepts',
    icon: Cpu, color: 'text-amber-400', bg: 'bg-amber-500/10',
    hoverBorder: 'hover:border-amber-500/35', hoverShadow: 'hover:shadow-amber-500/8',
    skills: ['OOP', 'DBMS', 'Data Structures', 'RESTful Architecture'],
  },
]

export default function TechnicalExpertise() {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="skills" className="relative py-28 overflow-hidden">
      {/* Section BG */}
      <div className="absolute inset-0 bg-card/20" />
      <div className="absolute top-0 left-0 right-0 h-px divider-gradient" />
      <div className="absolute bottom-0 left-0 right-0 h-px divider-gradient" />
      <div className="absolute top-16 right-8 w-64 h-64 rounded-full bg-primary/4 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-16 left-8 w-48 h-48 rounded-full bg-violet-500/4 blur-[60px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <SectionHeader label="What I work with" title="Technical Expertise" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {GROUPS.map(({ category, icon: Icon, color, bg, hoverBorder, hoverShadow, skills }, i) => (
            <Card key={category}
              className={`reveal spotlight card-shimmer gradient-border group
                bg-card border-border transition-all duration-300
                hover:-translate-y-2 hover:shadow-2xl ${hoverShadow} ${hoverBorder}`}
              style={{ transitionDelay: `${i * 75}ms` }}>
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-3 text-base font-display font-bold">
                  <span className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0
                    ${bg} ${color} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={19} />
                  </span>
                  <span className={color}>{category}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="secondary"
                      onMouseEnter={() => setHovered(skill)}
                      onMouseLeave={() => setHovered(null)}
                      className={`text-xs font-normal tag-bounce cursor-default border
                        transition-all duration-200
                        ${hovered === skill
                          ? 'bg-primary/15 text-primary border-primary/30 shadow-sm shadow-primary/10'
                          : 'bg-secondary/60 text-muted-foreground border-transparent hover:bg-secondary'
                        }`}>
                      {skill}
                    </Badge>
                  ))}
                </div>
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
        <span className="w-8 h-px bg-primary/50" />
        {label}
        <span className="w-8 h-px bg-primary/50" />
      </p>
      <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground tracking-tight">{title}</h2>
      <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-violet-500" />
    </div>
  )
}
