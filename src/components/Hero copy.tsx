import Image from 'next/image';

export default function Hero() {
	return (
		<section className='w-full py-12 md:py-24 lg:py-32' id='about'>
			<div className='container px-4 md:px-6'>
				<div className='flex flex-col items-center space-y-4 text-center'>
					<div className='space-y-2'>
						<h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none'>Denis Arriola</h1>
						<p className='mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400'>Desarrollador de Software</p>
					</div>
					<Image
						alt='Denis Arriola'
						className='rounded-full'
						height='200'
						src='/images/Hero.jpg'
						style={{
							aspectRatio: '200/200',
							objectFit: 'cover',
						}}
						width='200'
					/>
					<p className='mx-auto max-w-[700px] text-gray-500 md:text-lg dark:text-gray-400'>Estoy enfocado en el desarrollo backend, con conocimientos en Node.js. Tengo experiencia en crear e implementar soluciones para plataformas de comunicación, así como en integrar servicios y mejorar aplicaciones web. Actualmente, estoy trabajando en mejorar mis habilidades en desarrollo de frontend, especialmente en React.js.</p>
				</div>
			</div>
		</section>
	)
}
