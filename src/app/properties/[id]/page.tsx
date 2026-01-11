
import { MapPin, Maximize, BedDouble, Bath, ShieldCheck, CheckCircle2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { GalleryList } from './gallery';

export default async function PropertyDetail({ params }: { params: { id: string } }) {
  const { id } = await params;

  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <Link href="/properties" className="inline-flex items-center text-stone-500 hover:text-orange-600 font-bold transition">
          <ArrowLeft size={20} className="mr-2" /> Volver al catálogo
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8">

          <GalleryList id={id} />

          <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-8 gap-4">
            <div>
              <h1 className="text-4xl font-black text-stone-800 mb-2 leading-tight">Villa Mediterránea de Lujo {id}</h1>
              <div className="flex items-center text-stone-500 font-bold">
                <MapPin size={18} className="mr-2 text-orange-600" />
                Valencia, España
              </div>
            </div>
            <div className="text-4xl font-black text-orange-600">540.000€</div>
          </div>

          <div className="grid grid-cols-3 gap-4 py-8 border-y border-stone-100 mb-8">
            <div className="flex flex-col items-center">
              <BedDouble className="text-orange-600 mb-1" />
              <span className="text-stone-800 font-black">4 Hab.</span>
            </div>
            <div className="flex flex-col items-center">
              <Bath className="text-orange-600 mb-1" />
              <span className="text-stone-800 font-black">3 Baños</span>
            </div>
            <div className="flex flex-col items-center">
              <Maximize className="text-orange-600 mb-1" />
              <span className="text-stone-800 font-black">210m²</span>
            </div>
          </div>

          <h3 className="text-2xl font-black text-stone-800 mb-4">Sobre esta propiedad</h3>
          <p className="text-stone-600 leading-relaxed text-lg">
            Esta propiedad excepcional combina el diseño moderno con la calidez del mediterráneo.
            Cuenta con acabados de primera calidad y una situación jurídica impecable verificada.
          </p>
        </div>

        {/* SIDEBAR LEGAL */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-orange-50 border border-orange-100 p-8 rounded-[2.5rem] sticky top-28">
            <div className="flex items-center space-x-3 mb-6">
              <ShieldCheck className="text-orange-600" size={28} />
              <h3 className="text-xl font-black text-stone-800 uppercase tracking-tighter">Estado Legal</h3>
            </div>
            <div className="space-y-4 mb-10">
              {["Escrituras Registradas", "Sin Cargas", "IBI al día", "Auditoría 2026"].map((check) => (
                <div key={check} className="flex items-center text-stone-700 font-bold text-sm">
                  <CheckCircle2 size={16} className="mr-3 text-orange-600" />
                  {check}
                </div>
              ))}
            </div>
            <Link href="/contact" className="block w-full bg-stone-900 text-white text-center py-5 rounded-2xl font-black text-lg hover:bg-orange-600 transition-all shadow-xl shadow-stone-200">
              SOLICITAR VISITA
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}