import { ProfileForm } from '@/components/forms/ProfileForm';
import { Scale, CheckCircle2 } from 'lucide-react';

export default function RegisterPage() {
  const servicios = ["Auditoría de Títulos", "Contratos Inmobiliarios", "Asesoría Fiscal", "Cierre de Ventas"];

  return (

    <div className="py-20 max-w-5xl mx-auto px-6">
      <div className="text-center mb-16">
        <span className="text-orange-600 font-bold tracking-widest uppercase text-sm">Registrar inmueble</span>
        <h1 className="text-5xl font-black text-stone-800 mt-4">Unimos Propiedades con Protección.</h1>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <ProfileForm />
      </div>
    </div>
  );
}