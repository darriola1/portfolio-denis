import { Button } from './ui/Button';
import Link from 'next/link';
import Github from './icons/Github';
import Linkedin from './icons/Linkedin';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Skills() {
	return (
		<section className='w-full py-12 md:py-24 lg:py-32' id='contact'>
			<div className='container px-4 md:px-6'>
				<h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8'>Contacto</h2>
				<div className='flex flex-col items-center space-y-4'>
					<div className='flex items-center space-x-2'>
						<Mail/>
						<a href='mailto:darriola.dev@gmail.com' className='text-blue-600 hover:underline'>
							darriola.dev@gmail.com
						</a>
					</div>
					<div className='flex items-center space-x-2'>
						<Phone/>
						<span>(598) 94467208</span>
					</div>
					<div className='flex items-center space-x-2'>
						<MapPin/>
						<span>Turubi 441, Montevideo</span>
					</div>
					<div className='flex space-x-4 mt-4'>
						<Button>
							{/* <Button variant='outline' size='icon'> */}
							<Link href='https://github.com/darriola1' target='_blank' rel='noopener noreferrer'>
								<Github/>
							</Link>
						</Button>
						<Button>
							{/* <Button variant='outline' size='icon'> */}
							<Link href='https://www.linkedin.com/in/denis-arriola/' target='_blank' rel='noopener noreferrer'>
								<Linkedin/>
							</Link>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
