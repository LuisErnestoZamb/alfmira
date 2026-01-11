import { Users, ShieldCheck, Star } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="py-20 max-w-5xl mx-auto px-6">
      <div className="text-center mb-16">
        <span className="text-orange-600 font-bold tracking-widest uppercase text-sm">Nuestra Historia</span>
        <h1 className="text-5xl font-black text-stone-800 mt-4">Unimos Propiedades con Protección.</h1>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          { icon: <Users className="text-orange-600" />, title: "Expertos", desc: "Más de 15 años de experiencia en el sector inmobiliario." },
          { icon: <ShieldCheck className="text-orange-600" />, title: "Seguridad", desc: "Cada contrato es revisado por nuestro equipo legal senior." },
          { icon: <Star className="text-orange-600" />, title: "Excelencia", desc: "Buscamos la perfección en cada firma y entrega de llaves." }
        ].map((item, i) => (
          <div key={i} className="p-8 bg-orange-50 rounded-3xl border border-orange-100">
            <div className="mb-4">{item.icon}</div>
            <h3 className="text-xl font-bold text-stone-800 mb-2">{item.title}</h3>
            <p className="text-stone-600 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}