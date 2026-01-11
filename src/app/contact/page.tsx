import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-16">

        {/* COLUMNA 1: INFORMACIÓN */}
        <div>
          <h1 className="text-5xl font-black text-stone-800 mb-6 leading-tight">
            Estamos aquí para <span className="text-orange-600">ayudarte.</span>
          </h1>
          <p className="text-lg text-stone-600 mb-10 leading-relaxed">
            Ya sea que busques la casa de tus sueños o necesites blindaje legal para una operación, nuestro equipo te responderá en menos de 24 horas.
          </p>

          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="bg-orange-100 p-3 rounded-xl text-orange-600">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-stone-800">Llámanos</h4>
                <p className="text-stone-600">+34 900 123 456</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-orange-100 p-3 rounded-xl text-orange-600">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-stone-800">Email</h4>
                <p className="text-stone-600">contacto@estatelaw.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="bg-orange-100 p-3 rounded-xl text-orange-600">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-stone-800">Oficina Central</h4>
                <p className="text-stone-600">Caracas, Venezuela</p>
              </div>
            </div>
          </div>
        </div>

        {/* COLUMNA 2: FORMULARIO */}
        <div className="bg-stone-50 p-8 md:p-12 rounded-[2.5rem] border border-stone-100 shadow-sm">
          <form className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex flex-col space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-stone-500 ml-1">Nombre</label>
                <input type="text" placeholder="Tu nombre" className="p-4 rounded-2xl border-none ring-1 ring-stone-200 focus:ring-2 focus:ring-orange-600 outline-none transition-all" />
              </div>
              <div className="flex flex-col space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-stone-500 ml-1">Email</label>
                <input type="email" placeholder="tu@email.com" className="p-4 rounded-2xl border-none ring-1 ring-stone-200 focus:ring-2 focus:ring-orange-600 outline-none transition-all" />
              </div>
            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-stone-500 ml-1">Asunto</label>
              <select className="p-4 rounded-2xl border-none ring-1 ring-stone-200 focus:ring-2 focus:ring-orange-600 outline-none bg-white transition-all">
                <option>Interés en Propiedad</option>
                <option>Consulta Legal</option>
                <option>Otro</option>
              </select>
            </div>

            <div className="flex flex-col space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-stone-500 ml-1">Mensaje</label>
              <textarea rows={4} placeholder="¿Cómo podemos ayudarte?" className="p-4 rounded-2xl border-none ring-1 ring-stone-200 focus:ring-2 focus:ring-orange-600 outline-none transition-all resize-none"></textarea>
            </div>

            <button className="w-full bg-orange-600 text-white font-bold py-4 rounded-2xl hover:bg-orange-700 transition-all shadow-lg shadow-orange-200 flex items-center justify-center space-x-2">
              <span>Enviar Mensaje</span>
              <Send size={18} />
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}