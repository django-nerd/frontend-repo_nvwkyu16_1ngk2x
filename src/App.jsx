import { useMemo } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Slideshow from './components/Slideshow'
import Categories from './components/Categories'
import Featured from './components/Featured'
import Highlights from './components/Highlights'
import Articles from './components/Articles'

function App() {
  // Legge query param per categoria
  const selectedCategory = useMemo(() => {
    const params = new URLSearchParams(window.location.search)
    return params.get('category')
  }, [])

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Slideshow />
        <Highlights />
        <Categories />
        <Featured selectedCategory={selectedCategory} />
        <Articles />
        <section id="offerte" className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl overflow-hidden bg-gradient-to-r from-indigo-600 to-fuchsia-600 p-8 sm:p-12 text-white shadow-xl">
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight">Super Offerte Weekend</h3>
              <p className="mt-2 text-white/90 max-w-prose">Sconti fino al 50% su una selezione di videogiochi e accessori. Offerta valida fino a domenica.</p>
              <div className="mt-6">
                <a href="#" className="inline-flex items-center px-5 py-3 bg-white text-gray-900 rounded-md font-semibold hover:bg-white/90 transition">Scopri le offerte</a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm text-gray-600">
          <div>
            <h4 className="text-gray-900 font-semibold">TopGames</h4>
            <p className="mt-2">Il negozio per i veri appassionati: carte, gadget, videogiochi.</p>
          </div>
          <div>
            <h4 className="text-gray-900 font-semibold">Assistenza</h4>
            <ul className="mt-2 space-y-1">
              <li>Spedizioni</li>
              <li>Resi</li>
              <li>Pagamenti</li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-900 font-semibold">Categorie</h4>
            <ul className="mt-2 space-y-1">
              <li>Carte Collezionabili</li>
              <li>Gadget</li>
              <li>Videogiochi</li>
            </ul>
          </div>
          <div>
            <h4 className="text-gray-900 font-semibold">Contatti</h4>
            <ul className="mt-2 space-y-1">
              <li>Email: info@topgames.it</li>
              <li>Tel: +39 000 000000</li>
            </ul>
          </div>
        </div>
        <div className="py-6 text-center text-xs text-gray-500">© {new Date().getFullYear()} TopGames. Tutti i diritti riservati.</div>
      </footer>
    </div>
  )
}

export default App
