import { Home, ArrowRight } from 'lucide-react';

export default function PropertiesPage() {
  return (
    <div className="py-16 max-w-6xl mx-auto px-6">
      <div className="flex items-center space-x-3 mb-10">
        <Home className="text-blue-600" size={32} />
        <h1 className="text-4xl font-bold">Nuestras Propiedades</h1>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-white border border-slate-100 shadow-sm rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
            <div className="h-48 bg-slate-50" />
            <div className="p-6">
              <span className="text-blue-600 font-bold">$450,000</span>
              <h4 className="text-xl font-semibold mt-2">Casa de Lujo #{i}</h4>
              <p className="text-slate-500 text-sm">Ubicación Premium • 3 Hab</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}