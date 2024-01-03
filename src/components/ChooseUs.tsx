import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { ScrollLink } from './ScrollLink'
import ChooseCars from '../assets/img/choose-cars.png'
import ChooseCar from '../assets/img/choose-car.png'
import ChoosePricing from '../assets/img/choose-pricing.png'
import ChooseCharges from '../assets/img/choose-charges.png'

export const ChooseUs = () => {
	return (
		<section className="choose-car bg-choose bg-no-repeat bg-cover pb-24 ">
			<div className="grid place-items-center mb-10">
				<img src={ChooseCars} alt="cars" />
			</div>
			<div className="flex flex-col bg-left gap-20 lg:gap-0 lg:flex-row main-content justify-around max-w-7xl ">
				<div className="flex flex-col max-w-[32rem]">
					<h4 className="font-semibold text-2xl mb-2 text-center sm:text-start">Why Choose Us</h4>
					<h2 className="font-bold text-5xl mb-5 text-center sm:text-start">
						Best valued deals you will ever find
					</h2>
					<p className="text-slate-500 mb-8 text-center sm:text-start px-4">
						Discover the best deals you'll ever find with our unbeatable offers We're dedicated to providing
						you with the best value for your money, so you can enjoy top-quality services and products
						without breaking the bank. Our deals are designed to give you the ultimate renting experience,
						so don't miss out on your chance to save big.
					</p>
					<ScrollLink href="#home" className="primary-btn bg-brand py-4 px-6 self-center sm:self-start">
						Find Details
						<MdOutlineKeyboardArrowRight size={24} />
					</ScrollLink>
				</div>
				<div className="flex flex-col max-w-[28rem] gap-8">
					<div className="flex gap-3 flex-col sm:flex-row ">
						<img src={ChooseCar} alt="car" className="max-w-[7rem] self-center" />
						<div className="flex flex-col gap-2 px-4">
							<h4 className="font-bold text-2xl self-center sm:self-start">Cross Country Drive</h4>
							<p className="text-slate-500 text-center sm:text-start">
								Take your driving experience to the next level with our top-notch vehicles for your
								cross-country adventures.
							</p>
						</div>
					</div>
					<div className="flex gap-3 flex-col sm:flex-row ">
						<img src={ChoosePricing} alt="coin" className="max-w-[7rem] self-center" />
						<div className="flex flex-col gap-2 px-4">
							<h4 className="font-bold text-2xl self-center sm:self-start">All Inclusive Pricing</h4>
							<p className="text-slate-500 text-center sm:text-start">
								Get everything you need in one convenient, transparent price with our all-inclusive
								pricing policy.
							</p>
						</div>
					</div>
					<div className="flex gap-3 flex-col sm:flex-row ">
						<img src={ChooseCharges} alt="coin" className="max-w-[7rem] self-center" />
						<div className="flex flex-col gap-2 px-4">
							<h4 className="font-bold text-2xl self-center sm:self-start">No Hidden Charges</h4>
							<p className="text-slate-500 text-center sm:text-start">
								Enjoy peace of mind with our no hidden charges policy. We believe in transparent and
								honest pricing.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
