import React, { useState, useEffect } from 'react'
import { Menu, X, Code2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'

const NAV = ['about', 'skills', 'experience', 'projects', 'interests', 'contact']

export default function CommonHeader() {
  const [open, setOpen]       = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive]   = useState('about')

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
      let cur = 'about'
      NAV.forEach((id) => {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 140) cur = id
      })
      setActive(cur)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled
          ? 'bg-background/80 backdrop-blur-2xl border-b border-border/50 shadow-2xl shadow-black/30'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">

        {/* Logo */}
        <button
          onClick={() => scrollTo('about')}
          className="group flex items-center gap-2 font-display font-black text-xl tracking-tight"
        >
          <span className={cn(
            'w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300',
            'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white group-hover:shadow-glow-sm'
          )}>
            <Code2 size={16} />
          </span>
          <span className="text-foreground group-hover:text-gradient transition-all duration-300">
            ND<span className="text-primary">.</span>
          </span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-0.5">
          {NAV.map((s) => (
            <button
              key={s}
              onClick={() => scrollTo(s)}
              className={cn(
                'relative px-4 py-2 text-sm font-medium rounded-lg capitalize transition-all duration-200',
                'hover:bg-primary/8 hover:text-foreground',
                active === s
                  ? 'text-primary bg-primary/10'
                  : 'text-muted-foreground'
              )}
            >
              {s}
              {active === s && (
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-primary" />
              )}
            </button>
          ))}
        </nav>

        {/* Mobile toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden h-9 w-9 text-muted-foreground hover:text-foreground hover:bg-primary/8"
          onClick={() => setOpen((v) => !v)}
        >
          <div className={cn('transition-all duration-300', open ? 'rotate-90' : 'rotate-0')}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </div>
        </Button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn('md:hidden overflow-hidden', open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0')}
        style={{ transition: 'max-height 0.4s cubic-bezier(0.16,1,0.3,1), opacity 0.3s ease' }}
      >
        <div className="bg-background/95 backdrop-blur-2xl border-b border-border/50">
          <Separator className="bg-border/50" />
          <nav className="flex flex-col gap-1 px-4 py-3">
            {NAV.map((s, i) => (
              <button
                key={s}
                onClick={() => scrollTo(s)}
                className={cn(
                  'flex items-center gap-3 px-4 py-3 rounded-xl capitalize text-sm font-medium transition-all duration-200',
                  'hover:bg-primary/8 hover:translate-x-1',
                  active === s ? 'text-primary bg-primary/10' : 'text-muted-foreground'
                )}
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                {active === s && <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />}
                {s}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  )
}
