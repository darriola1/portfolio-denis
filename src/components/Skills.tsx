import { Card, CardContent } from '@/components/ui/Card';

export default function Skills() {
	return (
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
	);
}
