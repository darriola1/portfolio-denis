'use client';

import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

import { useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';
import Hero from '@/components/Hero';
import Education from '@/components/education';
import Navbar from '@/components/navbar';

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
			<main className='flex-1 pt-20'>
				<Hero />
				<section className='w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800' id='experience'>
					<div className='container px-4 md:px-6'>
						<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8'>Experiencia Laboral</h2>
						<div className='grid gap-6 sm:grid-cols-2'>
							<Card>
								<CardContent className='p-6'>
									<h3 className='font-bold text-lg mb-2'>Support Assistant</h3>
									<p className='text-sm text-gray-500 dark:text-gray-400 mb-4'>Isbel | septiembre 2022 - Presente</p>
									<p className='text-sm'>Brindo soporte técnico y asistencia en la integración de sistemas.</p>
								</CardContent>
							</Card>
							<Card>
								<CardContent className='p-6'>
									<h3 className='font-bold text-lg mb-2'>Desarrollador de Software</h3>
									<p className='text-sm text-gray-500 dark:text-gray-400 mb-4'>Fortex Servicios Financieros | 2012 - 2022</p>
									<p className='text-sm'>Desarrollé soluciones de software para servicios financieros.</p>
								</CardContent>
							</Card>
						</div>
					</div>
				</section>
				<Education />
				<section className='w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800' id='skills'>
					<div className='container px-4 md:px-6'>
						<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8'>Habilidades</h2>
						<div className='grid gap-4 sm:grid-cols-2 md:grid-cols-3'>
							<Card>
								<CardContent className='p-4'>
									<h3 className='font-bold text-lg mb-2'>Lenguajes de Programación</h3>
									<p className='text-sm text-gray-500 dark:text-gray-400'>JavaScript, Python, C#, PHP</p>
								</CardContent>
							</Card>
							<Card>
								<CardContent className='p-4'>
									<h3 className='font-bold text-lg mb-2'>Tecnologías Web</h3>
									<p className='text-sm text-gray-500 dark:text-gray-400'>HTML, CSS, React.js, Node.js</p>
								</CardContent>
							</Card>
							<Card>
								<CardContent className='p-4'>
									<h3 className='font-bold text-lg mb-2'>Bases de Datos</h3>
									<p className='text-sm text-gray-500 dark:text-gray-400'>MySQL, SQL Server</p>
								</CardContent>
							</Card>
						</div>
					</div>
				</section>
				<section className='w-full py-12 md:py-24 lg:py-32' id='contact'>
					<div className='container px-4 md:px-6'>
						<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8'>Contacto</h2>
						<div className='flex flex-col items-center space-y-4'>
							<div className='flex items-center space-x-2'>
								<Mail className='h-5 w-5' />
								<a href='mailto:darriola.dev@gmail.com' className='text-blue-600 hover:underline'>
									darriola.dev@gmail.com
								</a>
							</div>
							<div className='flex items-center space-x-2'>
								<Phone className='h-5 w-5' />
								<span>(598) 94467208</span>
							</div>
							<div className='flex items-center space-x-2'>
								<MapPin className='h-5 w-5' />
								<span>Turubi 441, Montevideo</span>
							</div>
							<div className='flex space-x-4 mt-4'>
								<Button>
									{/* <Button variant='outline' size='icon'> */}
									<Link href='https://github.com/darriola1' target='_blank' rel='noopener noreferrer'>
										<Github className='h-5 w-5' />
									</Link>
								</Button>
								<Button>
									{/* <Button variant='outline' size='icon'> */}
									<Link href='https://www.linkedin.com/in/denis-arriola/' target='_blank' rel='noopener noreferrer'>
										<Linkedin className='h-5 w-5' />
									</Link>
								</Button>
							</div>
						</div>
					</div>
				</section>
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
