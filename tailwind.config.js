/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary:     { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
        secondary:   { DEFAULT: "hsl(var(--secondary))", foreground: "hsl(var(--secondary-foreground))" },
        destructive: { DEFAULT: "hsl(var(--destructive))", foreground: "hsl(var(--destructive-foreground))" },
        muted:       { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
        accent:      { DEFAULT: "hsl(var(--accent))", foreground: "hsl(var(--accent-foreground))" },
        popover:     { DEFAULT: "hsl(var(--popover))", foreground: "hsl(var(--popover-foreground))" },
        card:        { DEFAULT: "hsl(var(--card))", foreground: "hsl(var(--card-foreground))" },
      },
      borderRadius: {
        lg: "var(--radius)", md: "calc(var(--radius) - 2px)", sm: "calc(var(--radius) - 4px)",
      },
      fontFamily: {
        sans:    ["DM Sans", "sans-serif"],
        display: ["Syne", "sans-serif"],
        mono:    ["JetBrains Mono", "monospace"],
      },
      keyframes: {
        "accordion-down": { from: { height: "0" }, to: { height: "var(--radix-accordion-content-height)" } },
        "accordion-up":   { from: { height: "var(--radix-accordion-content-height)" }, to: { height: "0" } },

        /* ── Entrance ── */
        "fade-up": {
          from: { opacity: "0", transform: "translateY(32px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        "fade-down": {
          from: { opacity: "0", transform: "translateY(-24px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": { from: { opacity: "0" }, to: { opacity: "1" } },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.82)" },
          to:   { opacity: "1", transform: "scale(1)" },
        },
        "slide-in-left": {
          from: { opacity: "0", transform: "translateX(-40px)" },
          to:   { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-right": {
          from: { opacity: "0", transform: "translateX(40px)" },
          to:   { opacity: "1", transform: "translateX(0)" },
        },
        "blur-in": {
          from: { opacity: "0", filter: "blur(12px)", transform: "scale(1.04)" },
          to:   { opacity: "1", filter: "blur(0)",    transform: "scale(1)" },
        },

        /* ── Rotations ── */
        "spin-slow":    { to: { transform: "rotate(360deg)" } },
        "spin-reverse": { to: { transform: "rotate(-360deg)" } },

        /* ── Float ── */
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":       { transform: "translateY(-12px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%":       { transform: "translateY(-8px) rotate(1deg)" },
          "66%":       { transform: "translateY(-4px) rotate(-1deg)" },
        },

        /* ── Orbs ── */
        "orbFloat": {
          "0%, 100%": { transform: "translateY(0) scale(1)" },
          "50%":       { transform: "translateY(-50px) scale(1.08)" },
        },
        "orbFloat2": {
          "0%, 100%": { transform: "translate(0,0) scale(1)" },
          "33%":       { transform: "translate(20px,-35px) scale(1.05)" },
          "66%":       { transform: "translate(-15px,20px) scale(0.96)" },
        },
        "orbFloat3": {
          "0%, 100%": { transform: "translate(0,0)" },
          "50%":       { transform: "translate(-20px,-20px)" },
        },

        /* ── Shimmer ── */
        "shimmer": {
          "0%":   { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        "shimmer-slide": {
          "0%":   { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },

        /* ── Glow / pulse ── */
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 16px rgba(99,102,241,0.25), 0 0 0 1px rgba(99,102,241,0.1)" },
          "50%":       { boxShadow: "0 0 40px rgba(99,102,241,0.55), 0 0 80px rgba(139,92,246,0.2), 0 0 0 1px rgba(99,102,241,0.3)" },
        },
        "badge-glow": {
          "0%, 100%": { boxShadow: "0 0 6px rgba(16,185,129,0.25)" },
          "50%":       { boxShadow: "0 0 18px rgba(16,185,129,0.55)" },
        },

        /* ── Scroll hint ── */
        "scroll-down": {
          "0%":   { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(14px)", opacity: "0" },
        },

        /* ── Typewriter cursor ── */
        "cursor-blink": {
          "0%, 100%": { opacity: "1" },
          "50%":       { opacity: "0" },
        },

        /* ── Gradient border rotation ── */
        "gradient-rotate": { to: { transform: "rotate(360deg)" } },

        /* ── Particle rise ── */
        "particle-rise": {
          "0%":   { transform: "translateY(0) scale(1)", opacity: "0.6" },
          "100%": { transform: "translateY(-120px) scale(0)", opacity: "0" },
        },

        /* ── Stagger bar fill ── */
        "bar-fill": {
          from: { transform: "scaleX(0)", opacity: "0" },
          to:   { transform: "scaleX(1)", opacity: "1" },
        },

        /* ── Magnetic pop ── */
        "pop": {
          "0%":   { transform: "scale(1)" },
          "50%":  { transform: "scale(1.14)" },
          "100%": { transform: "scale(1.08)" },
        },

        /* ── Typing line ── */
        "line-grow": {
          from: { width: "0" },
          to:   { width: "100%" },
        },

        /* ── Wave for skills section ── */
        "wave": {
          "0%, 100%": { transform: "rotate(0deg)" },
          "25%":       { transform: "rotate(12deg)" },
          "75%":       { transform: "rotate(-8deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up":   "accordion-up 0.2s ease-out",

        /* entrance */
        "fade-up":         "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both",
        "fade-down":       "fade-down 0.7s cubic-bezier(0.16,1,0.3,1) both",
        "fade-in":         "fade-in 0.6s ease both",
        "scale-in":        "scale-in 0.8s cubic-bezier(0.16,1,0.3,1) both",
        "slide-left":      "slide-in-left 0.7s cubic-bezier(0.16,1,0.3,1) both",
        "slide-right":     "slide-in-right 0.7s cubic-bezier(0.16,1,0.3,1) both",
        "blur-in":         "blur-in 0.8s cubic-bezier(0.16,1,0.3,1) both",

        /* continuous */
        "spin-slow":       "spin-slow 9s linear infinite",
        "spin-reverse":    "spin-reverse 12s linear infinite",
        "float":           "float 4s ease-in-out infinite",
        "float-slow":      "float-slow 7s ease-in-out infinite",
        "orbFloat":        "orbFloat 14s ease-in-out infinite",
        "orbFloat2":       "orbFloat2 18s ease-in-out infinite",
        "orbFloat3":       "orbFloat3 11s ease-in-out infinite",
        "shimmer":         "shimmer 3s linear infinite",
        "shimmer-slide":   "shimmer-slide 1.5s ease-in-out infinite",
        "glow-pulse":      "glow-pulse 3s ease-in-out infinite",
        "badge-glow":      "badge-glow 2.5s ease-in-out infinite",
        "cursor-blink":    "cursor-blink 1s step-end infinite",
        "scroll-down":     "scroll-down 2s ease infinite",
        "particle-rise":   "particle-rise linear infinite",
        "gradient-rotate": "gradient-rotate 4s linear infinite",
        "wave":            "wave 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
