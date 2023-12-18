import { useEffect, useState } from 'react'
import CustomSelect from './Select'
import { SelectOption } from './Select'
import { carService } from '../services/car.service'

const locationOptions: SelectOption[] = carService.getLocationOptions()
const BookCar = () => {
	const [bookInfo, setBookInfo] = useState(carService.getEmptyBookInfo())
	const [carOptions, setCarOptions] = useState<SelectOption[]>()
	const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
		ev.preventDefault()
		console.log(bookInfo)
		//TODO open modal
	}

	useEffect(() => {
		getCarOptions()
	}, [])

	const getCarOptions = async () => {
		const options = await carService.getCarOptions()
		setCarOptions(options)
	}

	const handleChange = (ev: React.ChangeEvent<HTMLSelectElement>) => {
		const { name, value } = ev.target
		setBookInfo(prev => ({ ...prev, [name]: value }))
	}

	const handleDateChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = ev.target
		const ms = new Date(value).getTime()
		setBookInfo(prev => ({ ...prev, [name]: ms }))
	}

	return (
		<div className="bg-book-bg p-10 shadow-[0_10px_20px_0_rgba(0,0,0,.1)]">
			<h2 className="font-bold text-2xl mb-4">Book a car</h2>
			<form onSubmit={handleSubmit} className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
				<div className="flex flex-col">
					<label className="font-semibold mb-3" htmlFor="carId">
						Select your car type
					</label>
					<CustomSelect
						value={bookInfo.carId}
						onChange={handleChange}
						name="carId"
						options={carOptions}
						placeholder="Select your car type"
					/>
				</div>
				<div className="flex flex-col">
					<label className="font-semibold mb-3" htmlFor="pickUpLoc">
						Pick-up Location
					</label>
					<CustomSelect
						value={bookInfo.pickUpLoc}
						onChange={handleChange}
						name="pickUpLoc"
						options={locationOptions}
						placeholder="Select pick up location"
					/>
				</div>
				<div className="flex flex-col">
					<label className="font-semibold mb-3" htmlFor="dropOffLoc">
						Drop-off Location
					</label>
					<CustomSelect
						value={bookInfo.dropOffLoc}
						onChange={handleChange}
						name="dropOffLoc"
						options={locationOptions}
						placeholder="Select drop off location"
					/>
				</div>
				<div className="flex flex-col">
					<label className="font-semibold mb-3" htmlFor="pickUpTime">
						Pick-up Date
					</label>
					<input
						className="text-zinc-500 border p-3"
						type="date"
						name="pickUpTime"
						id="pickUpTime"
						onChange={handleDateChange}
						placeholder=""
					/>
				</div>
				<div className="flex flex-col">
					<label className="font-semibold mb-3" htmlFor="dropOffTime">
						Drop-off Date
					</label>
					<input
						className="text-zinc-500 border p-3"
						type="date"
						name="dropOffTime"
						id="dropOffTime"
						onChange={handleDateChange}
						placeholder=""
					/>
				</div>
				<button className="primary-btn shadow-btn bg-brand p-[0.875rem] rounded-none self-end">Search</button>
			</form>
		</div>
	)
}

export default BookCar
