import { TbQuote } from 'react-icons/tb'
import TestimonyRon from '../assets/img/testimony-ron.jpg'
import TestimonyParry from '../assets/img/testimony-parry.jpg'
export const Testimonials = () => {
	return (
		<section className="bg-zinc-100 py-24">
			<div className="flex flex-col main-content px-4">
				<div className="mb-12 max-w-[43rem]">
					<h4 className="font-medium text-2xl text-center mb-2">Reviewed by People</h4>
					<h2 className="font-bold text-5xl text-center mb-4">Client's Testimonials</h2>
					<p className="text-slate-500 text-center">
						Discover the positive impact we've made on the our clients by reading through their
						testimonials. Our clients have experienced our service and results, and they're eager to share
						their positive experiences with you.
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-5">
					<div className="flex flex-col gap-6 justify-between bg-white max-w-[33.75rem] p-14 shadow-[0_20px_40px_0_rgba(0,0,0,.08)]">
						<p className="text-2xl font-medium">
							"We rented a car from this website and had an amazing experience! The booking was easy and
							the rental rates were very affordable. "
						</p>
						<div className="flex justify-between  items-center">
							<div className="flex items-center gap-4">
								<div className="max-w-[4.375rem]">
									<img src={TestimonyParry} alt="user" className="rounded-full" />
								</div>
								<div>
									<h4 className="font-bold text-lg">Parry Hotter</h4>
									<p>Hogwarts</p>
								</div>
							</div>
							<TbQuote size={60} style={{ color: '#ff4d30' }} />
						</div>
					</div>
					<div className="flex flex-col gap-6 justify-between bg-white max-w-[33.75rem] p-14 shadow-[0_20px_40px_0_rgba(0,0,0,.08)]">
						<p className="text-2xl font-medium">
							"The car was in great condition and made our trip even better. I Highly recommend this car
							rental website!"
						</p>
						<div className="flex justify-between items-center">
							<div className="flex items-center gap-4">
								<div className="max-w-[4.375rem]">
									<img src={TestimonyRon} alt="user" className="rounded-full" />
								</div>
								<div>
									<h4 className="font-bold text-lg">Ron Rizzly</h4>
									<p>Narnia</p>
								</div>
							</div>
							<TbQuote size={60} style={{ color: '#ff4d30' }} />
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
