import { useState } from 'react';
import logo from "../assets/logo.png";
import { Link, useLocation } from 'react-router-dom';

function Navbar() {
	const location = useLocation();
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	// Toggle burger menu
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	return (
		<nav className='h-20 px-52 flex justify-between items-center bg-black bg-opacity-10 backdrop-blur-lg fixed w-full max-[1025px]:px-10 z-50'>
			<img src={logo} alt="Logo" />
			{/* Burger menu icon */}
			<div className="lg:hidden cursor-pointer z-20" onClick={toggleMenu}>
				<div className={`w-8 h-1 bg-white mb-1 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
				<div className={`w-8 h-1 bg-white mb-1 transition-all ${isMenuOpen ? 'opacity-0' : ''}`} />
				<div className={`w-8 h-1 bg-white transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
			</div>

			{/* Desktop Links */}
			<ul className='hidden lg:flex gap-3 text-white gap-x-10 translate-x-2 font-BarlowCondensed'>
				<li className={`h-20 flex justify-center items-center border-transparent border-b-4 hover:border-white ${location.pathname === '/' ? 'border-white' : ''} transition-all`}>
					<Link className="py-8 tracking-widest text-xl" to="/"><span className='font-bold'>00</span> Home</Link>
				</li>
				<li className={`h-20 flex justify-center items-center border-transparent border-b-4 hover:border-white ${location.pathname === '/about' ? 'border-white' : ''} transition-all`}>
					<Link className="py-8 tracking-widest text-xl" to="/about"><span className='font-bold'>01</span> Destination</Link>
				</li>
				<li className={`h-20 flex justify-center items-center border-transparent border-b-4 hover:border-white ${location.pathname === '/contact' ? 'border-white' : ''} transition-all`}>
					<Link className="py-8 tracking-widest text-xl" to="/contact"><span className='font-bold'>02</span> Crew</Link>
				</li>
				<li className={`h-20 flex justify-center items-center border-transparent border-b-4 hover:border-white ${location.pathname === '/technology' ? 'border-white' : ''} transition-all`}>
					<Link className="py-8 tracking-widest text-xl" to="/technology"><span className='font-bold'>03</span> Technology</Link>
				</li>
			</ul>

			{/* Burger menu links (mobile) */}
			<div
				className={`fixed top-0 left-0 h-full w-64 bg-black bg-opacity-90 backdrop-blur-lg transform transition-transform duration-300 ease-in-out z-50 ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}
			>
				<ul className='text-white flex flex-col gap-y-8 mt-20 p-10 bg-black h-screen z-10 font-BarlowCondensed tracking-widest'>
					<li className={`border-transparent border-b-4 hover:border-white ${location.pathname === '/' ? 'border-white' : ''}`}>
						<Link className="py-8" to="/" onClick={toggleMenu}><span>00</span> Home</Link>
					</li>
					<li className={`border-transparent border-b-4 hover:border-white ${location.pathname === '/about' ? 'border-white' : ''}`}>
						<Link className="py-8" to="/about" onClick={toggleMenu}><span>01</span> Destination</Link>
					</li>
					<li className={`border-transparent border-b-4 hover:border-white ${location.pathname === '/contact' ? 'border-white' : ''}`}>
						<Link className="py-8" to="/contact" onClick={toggleMenu}><span>02</span> Crew</Link>
					</li>
					<li className={`border-transparent border-b-4 hover:border-white ${location.pathname === '/technology' ? 'border-white' : ''}`}>
						<Link className="py-8" to="/technology" onClick={toggleMenu}><span>03</span> Technology</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Navbar;
