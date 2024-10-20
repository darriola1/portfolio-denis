'use client';
import { useEffect, useState } from 'react';

import Hero from '@/components/Hero';
import Education from '@/components/Education';
import Navbar from '@/components/Navbar';
import Experience from '@/components/Experience';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

export default function Portfolio() {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 50) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<div className='flex flex-col min-h-screen bg-background items-center'>
			<header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
				<Navbar isScrolled={isScrolled} />
			</header>
			<main className='max-w-[1200px] flex-1 pt-20'>
				<Hero />
				<Experience />
				<Education />
				<Skills />
				<Contact/>
			</main>
			<footer className='flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t'>
				<p className='text-xs text-gray-500 dark:text-gray-400'>© 2024 Denis Arriola. Todos los derechos reservados.</p>
				{/* <nav className='sm:ml-auto flex gap-4 sm:gap-6'>
					<a className='text-xs hover:underline underline-offset-4' href='#'>
						Términos de Servicio
					</a>
					<a className='text-xs hover:underline underline-offset-4' href='#'>
						Política de Privacidad
					</a>
				</nav> */}
			</footer>
		</div>
	);
}
