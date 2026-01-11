import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
	return (
		<main className="relative pt-20">
			<div className="max-w-5xl mx-auto px-6 text-center">
				<h1 className="text-5xl md:text-7xl font-black text-stone-800 leading-[1.1] mb-8">
					Encuentra tu hogar. <br />
					<span className="text-orange-600">Asegura tu futuro.</span>
				</h1>
				<p className="text-xl text-stone-500 max-w-2xl mx-auto mb-12 font-medium">
					La plataforma que une bienes raíces de lujo con asesoría legal experta.
					Seguridad en cada paso.
				</p>

				<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
					<Link href="/properties" className="bg-orange-600 text-white px-10 py-4 rounded-2xl font-bold text-lg hover:scale-105 transition-transform flex items-center group">
						Ver Casas <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
					</Link>
					<Link href="/legal" className="bg-white border-2 border-stone-800 text-stone-800 px-10 py-4 rounded-2xl font-bold text-lg hover:bg-stone-50 transition-colors">
						Servicios Legales
					</Link>
				</div>
			</div>

			{/* Decoración sutil de fondo */}
			<div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-full max-w-4xl h-96 bg-orange-50/50 blur-3xl rounded-full" />
		</main>
	);
}