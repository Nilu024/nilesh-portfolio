import React, { useState } from 'react'
import { Mail, Phone, MapPin, Github, Linkedin, ArrowUpRight, Copy, Check } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Badge } from '@/components/ui/badge'

const CONTACTS = [
  { icon: Mail,   label: 'Email',    value: 'nileshdesale24@gmail.com', href: 'mailto:nileshdesale24@gmail.com',
    color: 'text-indigo-400', bg: 'bg-indigo-500/10', ring: 'hover:ring-indigo-500/25', copy: true },
  { icon: Phone,  label: 'Phone',    value: '+91 9699951857',           href: 'tel:+919699951857',
    color: 'text-violet-400', bg: 'bg-violet-500/10', ring: 'hover:ring-violet-500/25', copy: false },
  { icon: MapPin, label: 'Location', value: 'Pune, Maharashtra',        href: null,
    color: 'text-cyan-400',   bg: 'bg-cyan-500/10',   ring: 'hover:ring-cyan-500/25',   copy: false },
]

const SOCIALS = [
  { icon: Github,   href: 'https://github.com/Nilu024/',                          label: 'GitHub',   color: 'hover:border-white/20 hover:text-white hover:bg-white/5' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/nilesh-desale-a79872282/', label: 'LinkedIn', color: 'hover:border-blue-500/40 hover:text-blue-400 hover:bg-blue-500/5' },
  { icon: Mail,     href: 'mailto:nileshdesale24@gmail.com',                      label: 'Email',    color: 'hover:border-primary/40 hover:text-primary hover:bg-primary/5' },
]

export default function Contact() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText('nileshdesale24@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <TooltipProvider>
      <section id="contact" className="relative py-28 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 mesh-bg" />
        <div className="absolute top-0 left-0 right-0 h-px divider-gradient" />

        {/* Center glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/6 blur-[130px] pointer-events-none animate-orbFloat" />

        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center mb-14 reveal">
            <p className="text-xs font-semibold text-primary tracking-[0.2em] uppercase mb-3 flex items-center justify-center gap-2">
              <span className="w-8 h-px bg-primary/50" />Get in touch<span className="w-8 h-px bg-primary/50" />
            </p>
            <h2 className="font-display font-bold text-4xl md:text-5xl text-foreground tracking-tight mb-4">
              Let's Work <span className="text-shimmer">Together</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-xl mx-auto">
              I'm actively looking for internship and full-time opportunities.
              Whether you have a project in mind or just want to say hi — my inbox is always open!
            </p>
            <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-primary to-violet-500" />
          </div>

          {/* Contact cards */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 reveal">
            {CONTACTS.map(({ icon: Icon, label, value, href, color, bg, ring, copy }) => {
              const inner = (
                <Card className={`spotlight gradient-border card-shimmer group bg-card border-border
                  contact-card-hover ring-2 ring-transparent ${ring} cursor-pointer
                  transition-all duration-300 w-72`}>
                  <CardContent className="flex items-center gap-4 p-5">
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0
                      ${bg} ${color} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={19} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs text-muted-foreground mb-0.5 font-medium uppercase tracking-wider">{label}</p>
                      <p className="text-sm font-semibold text-foreground truncate">{value}</p>
                    </div>
                    {copy && (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <button onClick={(e) => { e.preventDefault(); copyEmail() }}
                            className="shrink-0 w-7 h-7 rounded-lg flex items-center justify-center
                              text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200">
                            {copied ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                          </button>
                        </TooltipTrigger>
                        <TooltipContent>{copied ? 'Copied!' : 'Copy email'}</TooltipContent>
                      </Tooltip>
                    )}
                    {href && !copy && (
                      <ArrowUpRight size={14} className={`shrink-0 ${color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                    )}
                  </CardContent>
                </Card>
              )
              return href ? (
                <a key={label} href={href} className="no-underline">{inner}</a>
              ) : <div key={label}>{inner}</div>
            })}
          </div>

          {/* CTA + socials */}
          <div className="flex flex-col items-center gap-6 reveal">
            <Button asChild size="lg"
              className="rounded-full px-8 font-semibold bg-primary hover:bg-primary/90
                shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/45
                hover:-translate-y-0.5 transition-all duration-200 gap-2 group animate-glow-pulse">
              <a href="mailto:nileshdesale24@gmail.com">
                <Mail size={16} />
                Send a Message
                <ArrowUpRight size={14} className="opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </Button>

            <div className="flex items-center gap-3">
              {SOCIALS.map(({ icon: Icon, href, label, color }) => (
                <Tooltip key={label}>
                  <TooltipTrigger asChild>
                    <Button variant="outline" size="icon" asChild
                      className={`w-12 h-12 rounded-full border-border/60 text-muted-foreground
                        ${color} transition-all duration-200 hover:-translate-y-1`}>
                      <a href={href} target="_blank" rel="noopener noreferrer">
                        <Icon size={18} />
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent>{label}</TooltipContent>
                </Tooltip>
              ))}
            </div>

            {/* Available status */}
            <Badge variant="outline"
              className="border-emerald-500/35 bg-emerald-500/8 text-emerald-400 gap-2 px-4 py-1.5 text-xs badge-glow">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Open to new opportunities
            </Badge>
          </div>
        </div>
      </section>
    </TooltipProvider>
  )
}
