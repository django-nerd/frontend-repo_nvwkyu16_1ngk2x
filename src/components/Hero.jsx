function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(1000px_400px_at_10%_-10%,rgba(99,102,241,0.25),transparent),radial-gradient(800px_300px_at_80%_-10%,rgba(232,121,249,0.25),transparent)]"/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 px-3 py-1 rounded-full text-xs font-semibold">
              Nuovo • Estate 2025
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl font-black tracking-tight text-gray-900">
              TopGames
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-fuchsia-600"> Carte, Gadget, Videogiochi</span>
            </h1>
            <p className="mt-4 text-lg text-gray-600 max-w-prose">
              Il tuo store per carte collezionabili, gadget esclusivi e videogiochi. Scopri le novità e approfitta delle offerte.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#categorie" className="inline-flex items-center px-5 py-3 bg-gray-900 text-white rounded-md font-semibold hover:bg-gray-800 transition">Esplora Categorie</a>
              <a href="#novita" className="inline-flex items-center px-5 py-3 border border-gray-300 text-gray-900 rounded-md font-semibold hover:bg-gray-50 transition">Ultime Novità</a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-gray-600">
              <div className="flex items-center gap-2"><span className="font-bold text-gray-900">Spedizione 24/48h</span></div>
              <div className="flex items-center gap-2"><span className="font-bold text-gray-900">Resi Facili</span></div>
              <div className="flex items-center gap-2"><span className="font-bold text-gray-900">Pagamenti Sicuri</span></div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5">
              <img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1600&auto=format&fit=crop" alt="TopGames hero" />
            </div>
            <div className="absolute -bottom-6 -left-6 hidden sm:block">
              <div className="bg-white rounded-xl shadow-lg ring-1 ring-black/5 p-4">
                <p className="text-sm font-semibold">+5000 prodotti</p>
                <p className="text-xs text-gray-500">Aggiornati ogni settimana</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
