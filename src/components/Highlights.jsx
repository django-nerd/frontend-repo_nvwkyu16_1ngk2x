import { BadgePercent, Flame, Gift, Rocket } from "lucide-react";

const highlights = [
  {
    title: "Offerte lampo",
    desc: "Sconti fino al 50% su articoli selezionati",
    icon: Flame,
    color: "bg-rose-500/10 text-rose-600",
  },
  {
    title: "Spedizione veloce",
    desc: "Ordini spediti in 24/48 ore",
    icon: Rocket,
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    title: "Regali perfetti",
    desc: "Idee regalo per tutte le età",
    icon: Gift,
    color: "bg-amber-500/10 text-amber-600",
  },
  {
    title: "Prezzi top",
    desc: "Promozioni e bundle esclusivi",
    icon: BadgePercent,
    color: "bg-emerald-500/10 text-emerald-600",
  },
];

export default function Highlights() {
  return (
    <section id="offerte" className="py-12 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {highlights.map(({ title, desc, icon: Icon, color }, i) => (
            <div key={i} className="rounded-2xl border border-black/10 bg-white p-5 flex items-start gap-3">
              <div className={`h-10 w-10 rounded-xl flex items-center justify-center ${color}`}>
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-slate-900">{title}</div>
                <div className="text-sm text-slate-600">{desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
