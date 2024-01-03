import { useState } from 'react'
import { TbChevronDown } from 'react-icons/tb'

export const FrequentlyAsked = () => {
	const [selectedQuestionIdx, setSelectedQuestionIdx] = useState(0)

	const toggleSelected = (idx: number) => {
		if (selectedQuestionIdx === idx) return setSelectedQuestionIdx(-1) // unselect
		setSelectedQuestionIdx(idx)
	}

	return (
		<section className="frequently-asked  py-24   bg-frequently bg-no-repeat bg-auto ">
			<div className="flex  flex-col main-content gap-20">
				<div className="max-w-[50rem]">
					<h4 className="font-bold text-xl text-center mb-2">FAQ</h4>
					<h2 className="font-bold text-4xl mb-4 text-center">Frequently Asked Questions</h2>
					<p className="text-slate-500 text-center">
						Frequently Asked Questions About the Car Rental Booking Process on Our Website: Answers to
						Common Concerns and Inquiries.
					</p>
				</div>
				<div>
					<ul className="flex flex-col max-w-[50rem] px-4 ">
						<li
							onClick={() => {
								toggleSelected(0)
							}}
							className="flex flex-col cursor-pointer shadow-[0_3px_6px_0_rgba(0,0,0,.1)]"
						>
							<div
								className={`flex justify-between py-5 px-11 ${
									selectedQuestionIdx === 0
										? 'bg-brand text-white shadow-[0_10px_15px_0_rgba(255,83,48,.35)]'
										: 'bg-white text-black'
								}`}
							>
								<p className="text-lg  font-medium ">
									1. What is special about comparing rental car deals?
								</p>
								<div className="flex items-center justify-center">
									<TbChevronDown size={24} />
								</div>
							</div>

							<div
								className={`transition-all duration-300 bg-white text-slate-500 overflow-hidden px-11 ${
									selectedQuestionIdx === 0 ? 'active-question' : 'max-h-0 p-0'
								}`}
							>
								You can find car rental deals by researching online and comparing prices from different
								rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare
								prices and view available rental options. It is also recommended to sign up for email
								newsletters and follow rental car companies on social media to be informed of any
								special deals or promotions.
							</div>
						</li>
						<li
							onClick={() => {
								toggleSelected(1)
							}}
							className="flex flex-col cursor-pointer shadow-[0_3px_6px_0_rgba(0,0,0,.1)]"
						>
							<div
								className={`flex justify-between py-5 px-11 ${
									selectedQuestionIdx === 1
										? 'bg-brand text-white shadow-[0_10px_15px_0_rgba(255,83,48,.35)]'
										: 'bg-white text-black'
								}`}
							>
								<p className="text-lg  font-medium ">2. How do I find the car rental deals?</p>
								<div className="flex items-center justify-center">
									<TbChevronDown size={24} />
								</div>
							</div>

							<div
								className={`transition-all duration-300 bg-white  text-slate-500 overflow-hidden px-11 ${
									selectedQuestionIdx === 1 ? 'active-question' : 'max-h-0 p-0'
								}`}
							>
								You can find car rental deals by researching online and comparing prices from different
								rental companies. Websites such as Expedia, Kayak, and Travelocity allow you to compare
								prices and view available rental options. It is also recommended to sign up for email
								newsletters and follow rental car companies on social media to be informed of any
								special deals or promotions.
							</div>
						</li>
						<li
							onClick={() => {
								toggleSelected(2)
							}}
							className="flex flex-col  cursor-pointer shadow-[0_3px_6px_0_rgba(0,0,0,.1)]"
						>
							<div
								className={`flex justify-between py-5 px-11 ${
									selectedQuestionIdx === 2
										? 'bg-brand text-white shadow-[0_10px_15px_0_rgba(255,83,48,.35)]'
										: 'bg-white text-black'
								}`}
							>
								<p className="text-lg  font-medium ">3. How do I find such low rental car prices?</p>
								<div className="flex items-center justify-center">
									<TbChevronDown size={24} />
								</div>
							</div>

							<div
								className={`transition-all duration-300 bg-white text-slate-500 overflow-hidden px-11 ${
									selectedQuestionIdx === 2 ? 'active-question ' : 'max-h-0 p-0 '
								}`}
							>
								Book in advance: Booking your rental car ahead of time can often result in lower prices.
								Compare prices from multiple companies: Use websites like Kayak, Expedia, or Travelocity
								to compare prices from multiple rental car companies. Look for discount codes and
								coupons: Search for discount codes and coupons that you can use to lower the rental
								price. Renting from an off-airport location can sometimes result in lower prices.
							</div>
						</li>
					</ul>
				</div>
			</div>
		</section>
	)
}
