import carImg from '../assets/img/hero-car.png'
import bgImg from '../assets/img/hero-bg.png'
import { CiCircleCheck } from 'react-icons/ci'
import { MdArrowForwardIos } from 'react-icons/md'

const Hero = () => {
	return (
		<>
			<img src={bgImg} alt="background" className="absolute right-0 top-0 -z-10 sm:block hidden" />
			<section className="flex h-screen max-w-7xl items-center px-6">
				<div className="flex flex-col text-center sm:text-left">
					<h2 className="text-2xl font-semibold mb-5">Plan your trip now</h2>
					<h1 className="text-6xl font-bold mb-6">
						Save <span className="text-brand">big</span> with our car rental
					</h1>
					<h4 className="text-zinc-500 mb-6">
						Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and
						much more.
					</h4>
					<div className="flex gap-5 sm:justify-start justify-center">
						<button className="flex items-center gap-2 rounded font-bold bg-brand text-white py-4 px-7 shadow-[0_10px_15px_0_rgba(255,83,48,0.35)] ">
							<span className="min-w-max">Book Ride</span>
							<CiCircleCheck size={24} style={{ strokeWidth: '1' }} />
						</button>
						<button className="flex items-center gap-2 rounded font-bold bg-black text-white py-4 px-7">
							<span className="min-w-max"> Learn More</span>
							<MdArrowForwardIos />
						</button>
					</div>
				</div>
				<div>
					<img src={carImg} alt="car" className="sm:block hidden" />
				</div>
			</section>
		</>
	)
}

export default Hero
