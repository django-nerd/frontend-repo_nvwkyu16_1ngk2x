import { useMemo } from 'react'

const articles = [
  {
    id: 1,
    title: 'I 10 videogiochi più attesi del 2025',
    excerpt: 'Dai tripla A ai titoli indie, ecco la lista dei giochi che non puoi perdere nei prossimi mesi.',
    image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1600&auto=format&fit=crop',
    tag: 'Guide',
    date: 'Giu 2025',
    href: '#',
  },
  {
    id: 2,
    title: 'Come iniziare a collezionare carte Pokémon',
    excerpt: 'Set consigliati, protezioni e trucchi per conservare il valore nel tempo.',
    image: 'https://images.unsplash.com/photo-1624704768514-df3f9eb33155?q=80&w=1600&auto=format&fit=crop',
    tag: 'Carte',
    date: 'Mag 2025',
    href: '#',
  },
  {
    id: 3,
    title: 'Gadget da avere nella tua postazione gaming',
    excerpt: 'Illuminazione RGB, supporti, action figure e accessori per level-up estetico e funzionale.',
    image: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?q=80&w=1600&auto=format&fit=crop',
    tag: 'Gadget',
    date: 'Apr 2025',
    href: '#',
  },
]

function ArticleCard({ a }) {
  return (
    <a href={a.href} className="group rounded-2xl overflow-hidden ring-1 ring-black/5 bg-white shadow-sm hover:shadow-md transition block">
      <div className="relative">
        <img src={a.image} alt={a.title} className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <div className="absolute top-3 left-3 inline-flex items-center px-2 py-1 rounded-full text-xs font-semibold bg-white/90 text-gray-900">{a.tag}</div>
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-gray-900 line-clamp-2">{a.title}</h3>
        <p className="mt-2 text-sm text-gray-600 line-clamp-2">{a.excerpt}</p>
        <div className="mt-4 text-xs text-gray-500">{a.date}</div>
      </div>
    </a>
  )
}

export default function Articles() {
  const list = useMemo(() => articles, [])
  return (
    <section id="articoli" className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Articoli e Guide</h2>
          <a href="#" className="text-sm font-semibold text-indigo-600 hover:text-indigo-700">Vedi tutti →</a>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {list.map((a) => (
            <ArticleCard key={a.id} a={a} />
          ))}
        </div>
      </div>
    </section>
  )
}
