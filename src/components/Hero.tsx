import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/Button';
import Github from '@/components/icons/Github';
import LinkedIn from '@/components/icons/Linkedin';
import Globe from './icons/Globe';

const Hero = () => {
	return (
		<section className='w-full py-12 md:py-24 lg:py-32' id='about'>
			<div className='mx-auto max-w-[1200px] container px-4 md:px-6 flex flex-col lg:flex-row items-center lg:items-start justify-between text-center lg:text-left'>
				{/* <div className='mx-auto max-w-[700px] lg:w-2/3 space-y-4'> */}
				<div className='max-w-[700px] lg:w-2/3 space-y-4'>
					<h1 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none'>Denis Arriola</h1>
					<p className='text-gray-500 md:text-xl dark:text-gray-400'>Desarrollador de Software</p>
					<p className='text-gray-500 md:text-lg dark:text-gray-400'>Estoy enfocado en el desarrollo backend, con conocimientos en Node.js. Tengo experiencia en crear e implementar soluciones para plataformas de comunicación, así como en integrar servicios y mejorar aplicaciones web. Actualmente, estoy trabajando en mejorar mis habilidades en desarrollo de frontend, especialmente en React.js.</p>
					<div className='flex mx-auto max-w-[700px] justify-center lg:justify-start items-center space-x-2'>
						<Globe />
						<span className='text-gray-500 dark:text-gray-400'>Montevideo, Uruguay</span>
						<Button>
							<Link href='https://github.com/darriola1' target='_blank' rel='noopener noreferrer'>
								{/* <Github className='h-5 w-5' /> */}
								<Github />
							</Link>
						</Button>
						<Button>
							<Link href='https://www.linkedin.com/in/denis-arriola/' target='_blank' rel='noopener noreferrer'>
								<LinkedIn />
							</Link>
						</Button>
					</div>
				</div>
				<div className='mt-8 lg:mt-0 lg:w-1/3 flex justify-center lg:items-center'>
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
				</div>
			</div>
		</section>
	);
};

export default Hero;
