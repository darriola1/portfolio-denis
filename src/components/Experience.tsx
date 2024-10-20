import { Card, CardContent } from '@/components/ui/Card';

export default function Education() {
	return (
		<section className='w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800' id='experience'>
			{/* <section className='mx-auto max-w-[700px] py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800' id='experience'> */}
			<div className='mx-auto max-w-[1200px] container px-4 md:px-6'>
				<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8'>Experiencia Laboral</h2>
				<div className='grid gap-6 sm:grid-cols-2'>
				{/* <div className='flex flex-col lg:flex-row items-center lg:items-start justify-between text-center lg:text-left'> */}
					<Card>
						<CardContent className='p-6'>
							<h3 className='font-bold text-lg mb-2'>Support Assistant</h3>
							<p className='text-sm text-gray-500 dark:text-gray-400 mb-4'><strong>Isbel</strong> | septiembre 2022 - Presente</p>
							<p className='text-sm'>Brindo soporte técnico y asistencia en la integración de sistemas.</p>
						</CardContent>
					</Card>
					<Card>
						<CardContent className='p-6'>
							<h3 className='font-bold text-lg mb-2'>Desarrollador de Software</h3>
							<p className='text-sm text-gray-500 dark:text-gray-400 mb-4'><strong>Fortex Servicios Financieros</strong> | 2012 - 2022</p>
							<p className='text-sm'>Desarrollé soluciones de software para servicios financieros.</p>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
}
