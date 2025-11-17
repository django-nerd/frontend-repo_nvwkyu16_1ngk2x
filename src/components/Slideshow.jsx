import { useEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const slidesData = [
  {
    id: 1,
    title: 'Novità Videogiochi 2025',
    subtitle: 'Blockbuster, indie e retro – tutto in un unico store',
    cta: { label: 'Scopri i nuovi titoli', href: '/?category=videogiochi' },
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2000&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'Carte Collezionabili',
    subtitle: 'Yu-Gi-Oh!, Pokémon, Magic e tanto altro',
    cta: { label: 'Vai alle carte', href: '/?category=carte' },
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=2000&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Gadget Esclusivi',
    subtitle: 'Figurine, accessori, limited edition e articoli da collezione',
    cta: { label: 'Esplora i gadget', href: '/?category=gadget' },
    image: 'https://images.unsplash.com/photo-1526657782461-9fe13402a841?q=80&w=2000&auto=format&fit=crop',
  },
]

function Slide({ slide }) {
  return (
    <div className="relative h-[52vh] sm:h-[60vh] lg:h-[70vh] w-full overflow-hidden rounded-2xl">
      <motion.img
        key={slide.image}
        src={slide.image}
        alt={slide.title}
        className="absolute inset-0 h-full w-full object-cover"
        initial={{ scale: 1.1, opacity: 0.6 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 1.05, opacity: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(800px_200px_at_10%_90%,rgba(99,102,241,0.25),transparent)]" />

      <div className="relative z-10 h-full w-full flex items-end sm:items-center">
        <div className="p-6 sm:p-10 lg:p-14 text-white max-w-2xl">
          <motion.h2
            className="text-3xl sm:text-5xl font-black tracking-tight"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {slide.title}
          </motion.h2>
          <motion.p
            className="mt-3 sm:mt-4 text-sm sm:text-lg text-white/90"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.05 }}
          >
            {slide.subtitle}
          </motion.p>
          <motion.div
            className="mt-5"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          >
            <a href={slide.cta.href} className="inline-flex items-center px-5 py-3 rounded-md bg-white text-gray-900 font-semibold hover:bg-white/90 transition">
              {slide.cta.label}
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default function Slideshow() {
  const [index, setIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const timeoutRef = useRef(null)
  const slides = useMemo(() => slidesData, [])

  const next = () => setIndex((i) => (i + 1) % slides.length)
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length)

  useEffect(() => {
    if (isPaused) return
    timeoutRef.current && clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => next(), 5000)
    return () => timeoutRef.current && clearTimeout(timeoutRef.current)
  }, [index, isPaused, slides.length])

  return (
    <section aria-label="TopGames Slideshow" className="py-6 sm:py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative">
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={slides[index].id}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                <Slide slide={slides[index]} />
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="absolute inset-0 flex items-center justify-between px-2 sm:px-4">
              <button
                aria-label="Precedente"
                className="inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white/80 backdrop-blur text-gray-900 shadow hover:bg-white"
                onClick={prev}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m15 18-6-6 6-6"/></svg>
              </button>
              <button
                aria-label="Successivo"
                className="inline-flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full bg-white/80 backdrop-blur text-gray-900 shadow hover:bg-white"
                onClick={next}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m9 18 6-6-6-6"/></svg>
              </button>
            </div>

            {/* Dots */}
            <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2">
              {slides.map((s, i) => (
                <button
                  key={s.id}
                  aria-label={`Vai alla slide ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-2.5 rounded-full transition-all ${i === index ? 'w-7 bg-white shadow' : 'w-2.5 bg-white/70'} `}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
