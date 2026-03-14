import React from 'react'
import { Briefcase, GraduationCap, Calendar, MapPin } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

const TIMELINE = [
  {
    type: 'work',
    role: 'MERN Stack Intern',
    org: 'Instaplex Solution Pvt. Ltd.',
    date: 'Sep 2025 – Present',
    location: 'Pune',
    tag: 'Current',
    points: [
      'Developed and maintained full-stack web applications using the MERN stack.',
      'Designed and implemented RESTful APIs for efficient frontend-backend communication.',
      'Built reusable and responsive React components improving UI consistency.',
      'Optimized MongoDB queries, reducing API response time by ~20%.',
      'Implemented JWT-based authentication and role-based access control.',
      'Collaborated in an agile team environment using Git for version control and deployment.',
    ],
  },
  {
    type: 'edu',
    role: 'B.E. in Information Technology',
    org: 'Savitribai Phule Pune University',
    date: 'Jul 2022 – Jul 2026',
    location: 'Pune',
    detail: 'GPA: 7.5 / 10',
  },
  {
    type: 'edu',
    role: 'Higher Secondary Certificate (HSC)',
    org: 'Maharashtra State Board',
    date: 'Jun 2022',
    location: 'Malegaon, Nashik',
    detail: 'Score: 76%',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="relative py-28 overflow-hidden bg-background">
      <div className="absolute top-0 left-0 right-0 h-px divider-gradient" />
      <div className="absolute bottom-0 left-0 right-0 h-px divider-gradient" />
      <div className="absolute top-20 left-1/2 w-[500px] h-[500px] -translate-x-1/2 rounded-full bg-primary/3 blur-[120px] pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-6">
        <SectionHeader label="My journey" title="Experience & Education" />

        <div className="max-w-3xl mx-auto relative">
          {/* Timeline rail */}
          <div className="absolute left-[18px] top-4 bottom-0 w-0.5 pointer-events-none"
            style={{ background: 'linear-gradient(to bottom, hsl(239,84%,67%), #8b5cf6 60%, transparent)' }} />

          <div className="flex flex-col gap-8">
            {TIMELINE.map((item, i) => (
              <div key={i} className="reveal-left relative pl-14" style={{ transitionDelay: `${i * 110}ms` }}>

                {/* Dot */}
                <div className={`absolute left-0 top-2 w-9 h-9 rounded-full flex items-center justify-center
                  border-2 border-background z-10
                  ${item.type === 'work'
                    ? 'bg-gradient-to-br from-primary to-violet-600 timeline-dot-active'
                    : 'bg-gradient-to-br from-cyan-500 to-teal-600'
                  }`}>
                  {item.type === 'work'
                    ? <Briefcase size={15} className="text-white" />
                    : <GraduationCap size={15} className="text-white" />
                  }
                </div>

                <Card className="spotlight card-shimmer gradient-border bg-card border-border
                  hover:border-primary/30 transition-all duration-300
                  hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1">
                  <CardContent className="p-5">

                    {/* Header row */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-1">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-display font-bold text-lg text-foreground leading-tight">
                            {item.role}
                          </h3>
                          {item.tag && (
                            <Badge className="h-5 text-[10px] px-2 bg-primary/15 text-primary border-primary/25 font-semibold">
                              {item.tag}
                            </Badge>
                          )}
                        </div>
                        <p className="text-primary text-sm font-medium mt-0.5">{item.org}</p>
                      </div>
                      <div className="flex flex-row sm:flex-col gap-1.5 flex-wrap">
                        <Badge variant="secondary"
                          className="gap-1.5 text-xs w-fit bg-secondary text-muted-foreground border border-border/50">
                          <Calendar size={10} />{item.date}
                        </Badge>
                        <Badge variant="outline"
                          className="gap-1.5 text-xs w-fit border-border/70 text-muted-foreground">
                          <MapPin size={10} />{item.location}
                        </Badge>
                      </div>
                    </div>

                    {item.points && (
                      <>
                        <Separator className="my-3.5 bg-border/50" />
                        <ul className="space-y-2.5">
                          {item.points.map((pt, j) => (
                            <li key={j} className="flex gap-3 text-sm text-muted-foreground items-start group/item
                              hover:text-foreground/80 transition-colors duration-200">
                              <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-primary shrink-0
                                group-hover/item:bg-violet-400 transition-colors duration-200" />
                              {pt}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}

                    {item.detail && (
                      <p className="text-sm text-muted-foreground mt-2 font-medium">{item.detail}</p>
                    )}
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
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
