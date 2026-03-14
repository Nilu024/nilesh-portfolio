import React, { useEffect } from 'react'
import CommonHeader from './header/CommonHeader'
import HeroSection from './components/HeroSection'
import TechnicalExpertise from './components/TechnicalExpertise'
import Experience from './components/Experience'
import FeaturedProjects from './components/FeaturedProjects'
import Interests from './components/Interests'
import Contact from './components/Contact'

export default function App() {
  /* ── Scroll-reveal observer ── */
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.07, rootMargin: '0px 0px -60px 0px' }
    )
    document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.reveal-scale,.section-observe,.card-observe,.slide-left')
      .forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  /* ── Scroll progress bar ── */
  useEffect(() => {
    const bar = document.getElementById('scroll-progress')
    if (!bar) return
    const update = () => {
      const scrolled = window.scrollY
      const total = document.body.scrollHeight - window.innerHeight
      bar.style.width = `${(scrolled / total) * 100}%`
    }
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  /* ── Spotlight mouse tracking ── */
  useEffect(() => {
    const update = (e) => {
      document.querySelectorAll('.spotlight').forEach((el) => {
        const rect = el.getBoundingClientRect()
        el.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`)
        el.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`)
      })
    }
    window.addEventListener('mousemove', update, { passive: true })
    return () => window.removeEventListener('mousemove', update)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div id="scroll-progress" />
      <CommonHeader />
      <HeroSection />
      <TechnicalExpertise />
      <Experience />
      <FeaturedProjects />
      <Interests />
      <Contact />
      <footer className="border-t border-border/50 py-8 text-center bg-background">
        <p className="text-sm text-muted-foreground">
          © 2025 <span className="text-gradient font-semibold">Nilesh Desale</span> — Crafted with React, Vite, Tailwind CSS & ShadCN UI
        </p>
      </footer>
    </div>
  )
}
