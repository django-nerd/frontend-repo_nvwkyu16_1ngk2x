import { useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-md bg-gradient-to-br from-indigo-600 to-fuchsia-500 grid place-items-center text-white font-black">
              TG
            </div>
            <span className="text-xl font-bold tracking-tight">TopGames</span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
            <a href="#categorie" className="hover:text-gray-900 transition-colors">Categorie</a>
            <a href="#novita" className="hover:text-gray-900 transition-colors">Novità</a>
            <a href="#offerte" className="hover:text-gray-900 transition-colors">Offerte</a>
            <a href="/test" className="hover:text-gray-900 transition-colors">Stato</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden sm:inline-flex items-center rounded-md bg-gray-900 text-white px-4 py-2 text-sm font-semibold shadow hover:bg-gray-800 transition">Accedi</button>
            <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden inline-flex items-center justify-center p-2 rounded-md border border-gray-300">
              <span className="sr-only">Menu</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16"/></svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="md:hidden py-3 border-t border-gray-200">
            <nav className="grid gap-2 text-sm font-medium text-gray-700">
              <a href="#categorie" className="px-2 py-2 rounded hover:bg-gray-100">Categorie</a>
              <a href="#novita" className="px-2 py-2 rounded hover:bg-gray-100">Novità</a>
              <a href="#offerte" className="px-2 py-2 rounded hover:bg-gray-100">Offerte</a>
              <a href="/test" className="px-2 py-2 rounded hover:bg-gray-100">Stato</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
