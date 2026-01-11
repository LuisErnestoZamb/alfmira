import Link from 'next/link';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="es">
			<body className="bg-white">
				<nav className="border-b border-stone-100 bg-white/90 backdrop-blur-md sticky top-0 z-50">
					<div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
						<Link href="/" className="font-black text-2xl tracking-tighter text-stone-800">
							ESTATE <span className="text-orange-600">&</span> LAW
						</Link>

						<div className="hidden md:flex items-center space-x-10 text-sm font-bold tracking-wide">
							<Link href="/properties" className="text-stone-600 hover:text-orange-600 transition">PROPIEDADES</Link>
							<Link href="/legal" className="text-stone-600 hover:text-orange-600 transition">SERVICIOS LEGALES</Link>
							{/* <Link href="/about" className="text-stone-600 hover:text-orange-600 transition">NOSOTROS</Link> */}
							<Link href="/contact">
								<button className="bg-orange-600 text-white px-6 py-2.5 rounded-full hover:bg-orange-700 transition shadow-lg shadow-orange-200">
									CONTACTAR
								</button>
							</Link>
						</div>
					</div>
				</nav>
				{children}
			</body>
		</html>
	);
}