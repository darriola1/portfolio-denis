interface NavbarProps {
    isScrolled: boolean;
}


export default function Navbar({ isScrolled }: NavbarProps) {
	return (
		<div className='flex justify-center items-center w-auto mx-auto px-4 py-2'>
			<nav className={`flex justify-center items-center bg-white dark:bg-gray-800 rounded-full shadow-lg transition-all duration-300 ${isScrolled ? 'py-2 px-4 opacity-65' : 'py-3 px-6'}`}>
				<a className='text-sm font-medium hover:text-primary mx-3' href='#about'>
					Sobre mí
				</a>
				<a className='text-sm font-medium hover:text-primary mx-3' href='#experience'>
					Experiencia
				</a>
				<a className='text-sm font-medium hover:text-primary mx-3' href='#education'>
					Educación
				</a>
				<a className='text-sm font-medium hover:text-primary mx-3' href='#skills'>
					Habilidades
				</a>
				<a className='text-sm font-medium hover:text-primary mx-3' href='#contact'>
					Contacto
				</a>
			</nav>
		</div>
	);
}
