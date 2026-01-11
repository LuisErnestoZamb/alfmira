import { Scale, CheckCircle2 } from 'lucide-react';

export default function LegalPage() {
  const servicios = ["Auditoría de Títulos", "Contratos Inmobiliarios", "Asesoría Fiscal", "Cierre de Ventas"];

  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div>
          <div className="bg-orange-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
            <Scale className="text-orange-600" size={32} />
          </div>
          <h2 className="text-4xl font-black text-stone-800 mb-6">Protección Legal Integral</h2>
          <p className="text-lg text-stone-600 mb-8 leading-relaxed">
            No deje su inversión al azar. Nuestro equipo de abogados especializados
            garantiza que cada transacción sea transparente y legalmente sólida.
          </p>
          <div className="space-y-4">
            {servicios.map((s) => (
              <div key={s} className="flex items-center space-x-3 text-stone-700 font-semibold">
                <CheckCircle2 className="text-orange-600" size={20} />
                <span>{s}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-stone-100 aspect-square rounded-[3rem] border border-stone-200 overflow-hidden">
          {/* Aquí iría una imagen de oficina o abogados */}
          <div className="w-full h-full flex items-center justify-center text-stone-400 font-bold italic uppercase tracking-widest text-sm">
            Professional Legal Service Image
          </div>
        </div>
      </div>
    </div>
  );
}