import { TbPhone } from 'react-icons/tb'

export const GetInTouch = () => {
	return (
		<div className="bg-get-in-touch relative flex items-center justify-center bg-neutral-800 text-center py-16">
			<div className="h-full absolute w-full bg-stone-800 opacity-90"></div>
			<div className="relative  flex items-center justify-center gap-6">
				<h2 className="text-3xl  px-4 font-bold text-white ">Book a car by getting in touch with us</h2>

				<span className="flex relative items-center gap-4 text-brand font-bold text-3xl">
					<TbPhone size={36} />
					054-123456789
				</span>
			</div>
		</div>
	)
}
