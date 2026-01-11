import { Home, MapPin, ShieldCheck, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';

export default function PropertiesPage() {
  const casas = [
    {
      id: 1,
      precio: "540.000$",
      titulo: "Villa Mediterránea",
      ubicacion: "Valencia, VE",
      area: "150m²",
      imagen: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 2,
      precio: "820.000$",
      titulo: "Ático Loft Moderno",
      ubicacion: "Caracas, VE",
      area: "120m²",
      imagen: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 3,
      precio: "1.250.000$",
      titulo: "Residencia Colonial",
      ubicacion: "La Grita, VE",
      area: "350m²",
      imagen: "https://images.pexels.com/photos/209296/pexels-photo-209296.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 4,
      precio: "310.000$",
      titulo: "Apartamento Costero",
      ubicacion: "Merida, VE",
      area: "85m²",
      imagen: "https://images.pexels.com/photos/259588/pexels-photo-259588.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 5,
      precio: "950.000$",
      titulo: "Finca Rústica",
      ubicacion: "Maracaibo, VE",
      area: "500m²",
      imagen: "https://images.pexels.com/photos/164558/pexels-photo-164558.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 6,
      precio: "425.000$",
      titulo: "Casa de Campo",
      ubicacion: "Miranda, VE",
      area: "180m²",
      imagen: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
  ];

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Encabezado */}
        <div className="mb-16">
          <h1 className="text-5xl font-black text-stone-800 tracking-tight mb-4">
            Propiedades <span className="text-orange-600">Disponibles</span>
          </h1>
          <p className="text-stone-500 font-medium border-l-4 border-orange-600 pl-4">
            Inmuebles verificados legalmente en toda Venezuela.
          </p>
        </div>

        {/* Grid de Propiedades */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {casas.map((casa) => (
            <Link href={`/properties/${casa.id}`} key={casa.id} className="group block cursor-pointer">

              {/* Contenedor de Imagen */}
              <div className="relative aspect-[4/3] rounded-[2.5rem] bg-stone-100 overflow-hidden mb-6 border border-stone-100 shadow-sm transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-orange-100 group-hover:-translate-y-2">

                {/* Badge Legal */}
                <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full flex items-center space-x-2 border border-orange-100 shadow-sm">
                  <ShieldCheck className="text-orange-600" size={16} />
                  <span className="text-[10px] font-black text-stone-800 uppercase tracking-tighter">Legal Verified</span>
                </div>

                {/* Imagen Real de Pexels */}
                <img
                  src={casa.imagen}
                  alt={casa.titulo}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Botón Flotante */}
                <div className="absolute bottom-4 right-4 bg-orange-600 text-white p-3 rounded-full opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-lg">
                  <ArrowUpRight size={24} />
                </div>
              </div>

              {/* Información */}
              <div className="px-2">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-black text-stone-800 group-hover:text-orange-600 transition-colors">
                    {casa.titulo}
                  </h3>
                  <span className="text-xl font-bold text-orange-600">{casa.precio}</span>
                </div>

                <div className="flex items-center text-stone-500 space-x-4 text-sm font-semibold">
                  <div className="flex items-center">
                    <MapPin size={14} className="mr-1 text-orange-600" />
                    {casa.ubicacion}
                  </div>
                  <div className="h-1 w-1 bg-stone-300 rounded-full" />
                  <span>{casa.area}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Call to Action Final */}
        <div className="mt-24 p-12 rounded-[3rem] bg-stone-900 text-center text-white relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">¿No encuentras lo que buscas?</h2>
            <p className="text-stone-400 mb-8 max-w-md mx-auto">Nuestro equipo legal e inmobiliario puede buscar propiedades personalizadas para ti.</p>
            <Link href="/contact" className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-8 py-4 rounded-2xl font-black transition-all">
              SOLICITAR BÚSQUEDA PERSONALIZADA
            </Link>
          </div>
          {/* Círculos decorativos de fondo */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-600/10 rounded-full -mr-20 -mt-20 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-orange-600/5 rounded-full -ml-20 -mb-20 blur-3xl" />
        </div>
      </div>
    </div>
  );
}