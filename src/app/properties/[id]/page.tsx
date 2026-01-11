import { MapPin, Maximize, BedDouble, Bath, ShieldCheck, CheckCircle2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function PropertyDetail({ params }: { params: { id: string } }) {
  // Simulamos los datos de la propiedad
  const property = {
    titulo: "Villa Mediterránea de Lujo",
    precio: "540.000€",
    ubicacion: "Valencia, España",
    descripcion: "Una propiedad excepcional que combina el diseño moderno con la calidez del mediterráneo. Esta villa no solo destaca por su arquitectura, sino por su situación jurídica impecable, verificada por nuestro equipo.",
    specs: { beds: 4, baths: 3, sqft: "210m²" },
    legalFeatures: ["Escrituras registradas", "Libre de cargas", "Certificado energético A", "IBI al día"]
  };

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* Botón Volver */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <Link href="/properties" className="inline-flex items-center text-stone-500 hover:text-orange-600 font-bold transition">
          <ArrowLeft size={20} className="mr-2" /> Volver al catálogo
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12">

        {/* COLUMNA IZQUIERDA: GALERÍA Y DESCRIPCIÓN */}
        <div className="lg:col-span-8">
          {/* Main Image Placeholder */}
          <div className="aspect-video bg-stone-100 rounded-[3rem] border border-stone-100 overflow-hidden mb-8 shadow-sm">
            <div className="w-full h-full flex items-center justify-center text-stone-300">
              <span className="font-bold italic uppercase tracking-widest">Imagen Principal de la Propiedad</span>
            </div>
          </div>

          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-4xl font-black text-stone-800 mb-2">{property.titulo}</h1>
              <div className="flex items-center text-stone-500 font-medium">
                <MapPin size={18} className="mr-2 text-orange-600" />
                {property.ubicacion}
              </div>
            </div>
            <div className="text-3xl font-black text-orange-600">{property.precio}</div>
          </div>

          {/* Características Rápidas */}
          <div className="grid grid-cols-3 gap-4 py-8 border-y border-stone-100 mb-8">
            <div className="flex flex-col items-center text-center">
              <BedDouble className="text-orange-600 mb-2" />
              <span className="text-stone-800 font-bold">{property.specs.beds} Hab.</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <Bath className="text-orange-600 mb-2" />
              <span className="text-stone-800 font-bold">{property.specs.baths} Baños</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <Maximize className="text-orange-600 mb-2" />
              <span className="text-stone-800 font-bold">{property.specs.sqft}</span>
            </div>
          </div>

          <h3 className="text-2xl font-black text-stone-800 mb-4">Descripción</h3>
          <p className="text-stone-600 leading-relaxed text-lg">
            {property.descripcion}
          </p>
        </div>

        {/* COLUMNA DERECHA: CAJA LEGAL Y CONTACTO */}
        <div className="lg:col-span-4 space-y-6">
          {/* Card Legal (Tu diferencial) */}
          <div className="bg-orange-50 border border-orange-100 p-8 rounded-[2.5rem] shadow-sm">
            <div className="flex items-center space-x-3 mb-6">
              <ShieldCheck className="text-orange-600" size={28} />
              <h3 className="text-xl font-black text-stone-800 uppercase tracking-tighter">Estado Legal</h3>
            </div>
            <div className="space-y-4 mb-8">
              {property.legalFeatures.map((item) => (
                <div key={item} className="flex items-center text-stone-700 font-semibold text-sm">
                  <CheckCircle2 size={16} className="mr-3 text-orange-600" />
                  {item}
                </div>
              ))}
            </div>
            <p className="text-xs text-stone-500 leading-tight">
              * Propiedad auditada por nuestro equipo legal interno el 10 de Enero, 2026.
            </p>
          </div>

          {/* Botón de Acción */}
          <Link href="/contact" className="block w-full bg-stone-900 text-white text-center py-5 rounded-2xl font-black text-lg hover:bg-stone-800 transition-colors shadow-xl">
            SOLICITAR VISITA
          </Link>

          <div className="text-center">
            <p className="text-sm text-stone-400">Referencia de la propiedad: #EL-{params.id}</p>
          </div>
        </div>

      </div>
    </div>
  );
}