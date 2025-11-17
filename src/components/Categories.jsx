import { useEffect, useState } from 'react'

const CategoryCard = ({ label, image, href }) => (
  <a href={href} className="group relative overflow-hidden rounded-xl ring-1 ring-black/5 shadow hover:shadow-lg transition block">
    <img src={image} alt={label} className="h-44 w-full object-cover group-hover:scale-105 transition-transform duration-500" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-transparent"/>
    <div className="absolute bottom-3 left-3">
      <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/90 text-gray-900">{label}</div>
    </div>
  </a>
)

function Categories() {
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const load = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/categories`)
        const data = await res.json()
        setCategories(data)
      } catch (e) {
        setCategories([
          { key: 'carte', label: 'Carte Collezionabili', image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?q=80&w=1600&auto=format&fit=crop' },
          { key: 'gadget', label: 'Gadget', image: 'https://images.unsplash.com/photo-1526657782461-9fe13402a841?q=80&w=1600&auto=format&fit=crop' },
          { key: 'videogiochi', label: 'Videogiochi', image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1600&auto=format&fit=crop' },
        ])
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  if (loading) return (
    <section id="categorie" className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-12 w-32 bg-gray-200 rounded animate-pulse"/>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(3)].map((_,i) => (
            <div key={i} className="h-44 w-full bg-gray-100 rounded-xl animate-pulse"/>
          ))}
        </div>
      </div>
    </section>
  )

  return (
    <section id="categorie" className="py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Categorie in evidenza</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {categories.map(cat => (
            <CategoryCard key={cat.key} label={cat.label} image={cat.image} href={`/?category=${cat.key}`} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Categories
