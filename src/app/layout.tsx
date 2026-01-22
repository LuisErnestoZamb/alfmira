"use client";

import { createClient } from '@supabase/supabase-js'
// const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_PROJECT_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import './globals.css';
import Providers from './providers';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	const [isOpen, setIsOpen] = useState(false);

	const secret = process.env.NEXT_PUBLIC_SUPABASE_PROJECT_URL

	console.log(secret) // OK (solo en servidor) console.log(publicValue) // OK (expuesto al cliente)

	const links = [
		{ name: 'Propiedades', href: '/properties' },
		{ name: 'Legales', href: '/legal' },
		{ name: 'Registrar inmueble', href: '/register' },
		{ name: 'Nosotros', href: '/about' },
	];

	return (
		<html lang="es">
			<body className="bg-white text-stone-800">
				<nav className="bg-white border-b border-stone-100 sticky top-0 z-50">
					<div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
						{/* LOGO */}
						<Link href="/" className="font-black text-xl tracking-tighter">
							ESTATE <span className="text-orange-600">&</span> LAW
						</Link>

						{/* DESKTOP NAV */}
						<div className="hidden md:flex items-center space-x-8 text-sm font-bold">
							{links.map((link) => (
								<Link key={link.name} href={link.href} className="hover:text-orange-600 transition">
									{link.name}
								</Link>
							))}
							<Link href="/contact" className="bg-orange-600 text-white px-6 py-2 rounded-full hover:bg-orange-700 transition">
								CONTACTAR
							</Link>
						</div>

						{/* BOTÓN MÓVIL (Solo Icono) */}
						<button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
							{isOpen ? <X size={28} /> : <Menu size={28} />}
						</button>
					</div>

					{/* MENÚ MÓVIL (Simple Toggle) */}
					{isOpen && (
						<div className="md:hidden bg-white border-b border-stone-100 flex flex-col p-6 space-y-4 font-bold shadow-xl">
							{links.map((link) => (
								<Link
									key={link.name}
									href={link.href}
									onClick={() => setIsOpen(false)}
									className="text-lg py-2 border-b border-stone-50"
								>
									{link.name}
								</Link>
							))}
							<Link
								href="/contact"
								onClick={() => setIsOpen(false)}
								className="bg-orange-600 text-white text-center py-4 rounded-xl"
							>
								CONTACTAR
							</Link>
						</div>
					)}
				</nav>

				<main>
					<Providers>{children}</Providers>
				</main>
			</body>
		</html>
	);
}