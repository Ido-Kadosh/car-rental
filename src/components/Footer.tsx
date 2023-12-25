import { LuPhoneCall } from 'react-icons/lu'
import { FaRegEnvelope } from 'react-icons/fa'

import { HashLink } from 'react-router-hash-link'
const Footer = () => {
	return (
		<footer className="grid grid-cols-1 m-auto text-center sm:text-left sm:grid-cols-2 xl:grid-cols-4 max-w-7xl gap-20 py-24 px-6 font-poppins">
			<div className="flex flex-col">
				<h2 className="text-2xl mb-6">
					<span className="font-bold">CAR</span> Rental
				</h2>
				<p className="mb-4 text-zinc-500">
					We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your
					needs.
				</p>
				<a
					className="hover-link flex justify-center sm:justify-start gap-2 font-semibold mb-4"
					href="tel:054123456789"
					target="_blank"
					rel="noreferrer"
				>
					<span className="flex items-center justify-center">
						<LuPhoneCall size={21} style={{ strokeWidth: '2' }} />
					</span>
					<span>054-123456789</span>
				</a>
				<a
					className="hover-link flex justify-center sm:justify-start gap-2 font-semibold mb-4"
					href="mailto: carrental@gmail.com"
					target="_blank"
					rel="noreferrer"
				>
					<span className="flex items-center justify-center ">
						<FaRegEnvelope size={21} style={{ strokeWidth: '1' }} />
					</span>
					<span>carrental@gmail.com</span>
				</a>
				<a className="hover-link text-sm" target="_blank" rel="noreferrer" href="https://xpeedstudio.com/">
					Design by XpeedStudio
				</a>
			</div>
			<div className="flex flex-col">
				<h2 className="font-bold text-2xl mb-6">COMPANY</h2>
				<ul className="flex flex-col gap-3">
					<li className="hover-link">
						<HashLink smooth to="/#home">
							New York
						</HashLink>
					</li>
					<li className="hover-link">
						<HashLink smooth to="/#home">
							Careers
						</HashLink>
					</li>
					<li className="hover-link">
						<HashLink smooth to="/#home">
							Mobile
						</HashLink>
					</li>
					<li className="hover-link">
						<HashLink smooth to="/#home">
							Blog
						</HashLink>
					</li>
					<li className="hover-link">
						<HashLink smooth to="/#home">
							How we work
						</HashLink>
					</li>
				</ul>
			</div>
			<div>
				<h2 className="font-bold text-2xl mb-6">WORKING HOURS</h2>
				<ul className="flex flex-col gap-3">
					<li>Mon - Fri: 9:00AM - 9:00PM</li>
					<li>Sat: 9:00AM - 19:00PM</li>
					<li>Sun: Closed</li>
				</ul>
			</div>
			<div className="flex flex-col">
				<h2 className="font-bold text-2xl mb-6">SUBSCRIPTION</h2>
				<p className="mb-4">Subscribe your Email address for latest news & updates.</p>
				<input
					type="text"
					className="bg-slate-100 p-3 mb-4 placeholder:text-slate-500"
					placeholder="Enter Email Address"
				/>
				<button className="primary-btn bg-brand p-[0.875rem] rounded-none">Submit</button>
			</div>
		</footer>
	)
}

export default Footer
