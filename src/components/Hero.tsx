import carImg from '../assets/img/hero-car.png'
import bgImg from '../assets/img/hero-bg.png'
import { CiCircleCheck } from 'react-icons/ci'
import { MdArrowForwardIos } from 'react-icons/md'

const Hero = () => {
	return (
		<>
			<img src={bgImg} alt="background" className="absolute right-0 top-0 -z-10 md:block hidden" />
			<section className="flex h-screen max-w-7xl items-center px-6">
				<div className="flex flex-col text-center md:text-left items-center">
					<h2 className="text-2xl font-semibold mb-5">Plan your trip now</h2>
					<h1 className="text-6xl font-bold mb-6">
						Save <span className="text-brand">big</span> with our car rental
					</h1>
					<h4 className="text-zinc-500 mb-6">
						Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and
						much more.
					</h4>
					<div className="flex gap-5 xsm:justify-start xsm:flex-row justify-center flex-col ">
						<button className="primary-btn bg-brand py-4 px-20 xsm:px-7 shadow-btn">
							<span className="min-w-max">Book Ride</span>
							<CiCircleCheck size={24} style={{ strokeWidth: '1' }} />
						</button>
						<button className="primary-btn bg-black py-4 px-20 xsm:px-7">
							<span className="min-w-max"> Learn More</span>
							<MdArrowForwardIos />
						</button>
					</div>
				</div>
				<div>
					<img src={carImg} alt="car" className="md:block hidden" />
				</div>
			</section>
		</>
	)
}

export default Hero
