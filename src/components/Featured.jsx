import { useEffect, useState } from 'react'

function ProductCard({ product }) {
  return (
    <div className="group rounded-xl ring-1 ring-black/5 bg-white overflow-hidden shadow hover:shadow-lg transition">
      <div className="relative">
        <img src={product.image_url || 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1200&auto=format&fit=crop'} alt={product.title} className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-500"/>
        {product.in_stock === false && (
          <span className="absolute top-3 left-3 text-xs font-semibold bg-red-600 text-white px-2 py-1 rounded">Esaurito</span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold line-clamp-1">{product.title}</h3>
        <p className="text-sm text-gray-500 line-clamp-2 mt-1">{product.description || '—'}</p>
        <div className="mt-3 flex items-center justify-between">
          <div className="text-lg font-bold">€ {product.price?.toFixed ? product.price.toFixed(2) : product.price}</div>
          <button className="inline-flex items-center px-3 py-2 rounded-md bg-gray-900 text-white text-sm font-semibold hover:bg-gray-800 transition">Aggiungi</button>
        </div>
      </div>
    </div>
  )
}

function Featured() {
  const [items, setItems] = useState([])

  useEffect(() => {
    const load = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/featured`)
        const data = await res.json()
        setItems(data)
      } catch (e) {
        setItems([])
      }
    }
    load()
  }, [])

  return (
    <section id="novita" className="py-12 sm:py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">In evidenza</h2>
          <a href="#" className="text-sm font-semibold text-indigo-600 hover:text-indigo-700">Vedi tutto →</a>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {items.length === 0 ? (
            [...Array(8)].map((_,i) => (
              <div key={i} className="h-72 bg-white rounded-xl ring-1 ring-black/5 animate-pulse"/>
            ))
          ) : (
            items.map(p => <ProductCard key={p.id} product={p} />)
          )}
        </div>
      </div>
    </section>
  )
}

export default Featured
