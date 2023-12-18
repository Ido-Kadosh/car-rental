import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/img/logo.png'
import { RiMenuLine } from 'react-icons/ri'
import { RiCloseFill } from 'react-icons/ri'

const Navbar = () => {
	const [isMobileOpen, setIsMobileOpen] = useState(false)

	const closeMobileNavbar = () => {
		setIsMobileOpen(false)
	}

	return (
		<>
			<div className="flex absolute py-6 px-5 left-0 right-0 m-auto max-w-7xl justify-between items-center w-full font-medium">
				<div>
					<img src={logo} alt="" className="w-40" />
				</div>
				<NavLinks />
				<div className="lg:flex gap-4 hidden">
					<button className="hover-link">Sign in</button>
					<button className="primary-btn bg-brand px-7 py-3 shadow-btn">Register</button>
				</div>
				<button
					className="lg:hidden flex hover-link"
					onClick={() => {
						setIsMobileOpen(prev => !prev)
					}}
				>
					<RiMenuLine size={30} style={{ strokeWidth: '0.3' }} />
				</button>
			</div>
			<nav
				className={`flex justify-center h-screen w-full fixed flex-col items-center bg-white transition-all duration-500 ${
					isMobileOpen ? 'left-0' : '-left-full'
				} `}
			>
				<button onClick={closeMobileNavbar} className="absolute top-10 right-10 hover-link">
					<RiCloseFill size={30} />
				</button>
				<NavLinks isMobile closeMobileNavbar={closeMobileNavbar} />
			</nav>
		</>
	)
}

interface PropTypes {
	isMobile?: boolean
	closeMobileNavbar?: () => void
}
const NavLinks = ({ isMobile, closeMobileNavbar }: PropTypes) => {
	const handleClick = () => {
		if (isMobile && closeMobileNavbar) {
			closeMobileNavbar()
		}
	}
	return (
		<nav className={`${isMobile ? 'flex flex-col gap-10 text-center' : 'lg:block gap-5 hidden'}`}>
			<ul className={`flex gap-5 ${isMobile ? 'flex-col' : ''} `}>
				<li>
					<NavLink to="/" className={`hover-link ${isMobile ? 'text-3xl' : ''}`} onClick={handleClick}>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink to="/about" className={`hover-link ${isMobile ? 'text-3xl' : ''}`} onClick={handleClick}>
						About
					</NavLink>
				</li>
				<li>
					<NavLink to="/models" className={`hover-link ${isMobile ? 'text-3xl' : ''}`} onClick={handleClick}>
						Vehicle Models
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/testimonials"
						className={`hover-link ${isMobile ? 'text-3xl' : ''}`}
						onClick={handleClick}
					>
						Testimonials
					</NavLink>
				</li>
				<li>
					<NavLink to="/team" className={`hover-link ${isMobile ? 'text-3xl' : ''}`} onClick={handleClick}>
						Our Team
					</NavLink>
				</li>
				<li>
					<NavLink to="/contact" className={`hover-link ${isMobile ? 'text-3xl' : ''}`} onClick={handleClick}>
						Contact
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}

export default Navbar
