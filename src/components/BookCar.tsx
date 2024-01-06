import { useEffect, useMemo, useState } from 'react'
import { Select } from './Select'
import { SelectOption } from './Select'
import { carService } from '../services/car.service'
import { useSelector } from 'react-redux'
import { RootState } from '../redux/store'

const locationOptions: SelectOption[] = carService.getLocationOptions()
export const BookCar = () => {
	const [bookInfo, setBookInfo] = useState(carService.getEmptyBookInfo())
	const { cars } = useSelector((state: RootState) => state.cars)
	const carOptions = useMemo(() => carService.getCarOptions(cars), [cars])

	const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
		ev.preventDefault()
		//TODO open modal
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
		<div id="book" className="bg-book p-10 max-w-7xl m-auto shadow-[0_10px_20px_0_rgba(0,0,0,.1)] mb-40">
			<h2 className="font-bold text-2xl mb-4">Book a car</h2>
			<form onSubmit={handleSubmit} className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
				<div className="flex flex-col">
					<label className="font-semibold mb-3" htmlFor="carId">
						Select your car type
					</label>
					<Select
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
					<Select
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
					<Select
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
