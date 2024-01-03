import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Car } from '../interfaces/Car'
import { RootState } from '../redux/store'
import { ScrollLink } from './ScrollLink'

export const CarDisplay = () => {
	const { cars } = useSelector((state: RootState) => state.cars)
	const [selectedCar, setSelectedCar] = useState<Car>(cars[0])

	useEffect(() => {
		setSelectedCar(cars[0])
	}, [cars])

	const onSetSelectedCar = (carId: string) => {
		const car = cars.find(car => car._id === carId)
		car && setSelectedCar({ ...car })
	}

	if (!selectedCar) return <div>Loading...</div>
	return (
		<section className="flex flex-col main-content px-4">
			<h3 className="text-2xl font-medium mb-2">Vehicle Models</h3>
			<h4 className="text-5xl font-bold mb-4 text-center">Our rental fleet</h4>
			<p className="text-slate-500 max-w-lg text-center mb-16">
				Choose from a variety of our amazing vehicles to rent for your next adventure or business trip
			</p>
			<div className="flex gap-40 flex-col xl:flex-row">
				<div className="flex flex-col gap-2">
					{cars.map(car => (
						<button
							onClick={() => {
								onSetSelectedCar(car._id)
							}}
							className={`primary-btn min-w-max hover:bg-brand hover:text-white rounded-none text-xl justify-start text-slate-700  font-semibold py-4 px-6 ${
								selectedCar._id === car._id ? 'bg-brand text-white' : 'bg-neutral-200'
							}`}
							key={car._id}
						>
							{car.name}
						</button>
					))}
				</div>
				<div className="flex gap-24 mb-20 flex-col items-center lg:items-start lg:flex-row">
					<div className="self-center">
						<img className="w-full" src={selectedCar.imgUrl} alt="car" />
					</div>
					<div className="w-[17rem]">
						<div className="text-white text-center bg-brand py-1 px-5">
							<span className="text-3xl font-bold">${selectedCar.price}</span>
							<span className="text-xl"> / rent per day</span>
						</div>
						<div className="grid grid-cols-2 text-center py-2 px-1 border-x-2 border-b-2 border-solid border-slate-700">
							<span className="border-e-2 border-slate-700">Model</span>
							<span>{selectedCar.model}</span>
						</div>
						<div className="grid grid-cols-2 text-center py-2 px-1 border-x-2 border-b-2 border-solid border-slate-700">
							<span className="border-e-2 border-slate-700">Make</span>
							<span>{selectedCar.make}</span>
						</div>

						<div className="grid grid-cols-2 text-center py-2 px-1 border-x-2 border-b-2 border-solid border-slate-700">
							<span className="border-e-2 border-slate-700">Year</span>
							<span>{selectedCar.year}</span>
						</div>
						<div className="grid grid-cols-2 text-center py-2 px-1 border-x-2 border-b-2 border-solid border-slate-700">
							<span className="border-e-2 border-slate-700">Doors</span>
							<span>4/5</span>
						</div>
						<div className="grid grid-cols-2 text-center py-2 px-1 border-x-2 border-b-2 border-solid border-slate-700">
							<span className="border-e-2 border-slate-700">AC</span>
							<span>Yes</span>
						</div>
						<div className="grid grid-cols-2 text-center py-2 px-1 border-x-2 border-b-2 border-solid border-slate-700">
							<span className="border-e-2 border-slate-700">Transmission</span>
							<span className="capitalize">{selectedCar.transmission}</span>
						</div>
						<div className="grid mb-4 grid-cols-2 text-center py-2 px-1 border-x-2 border-b-2 border-solid border-slate-700">
							<span className="border-e-2 border-slate-700">Fuel</span>
							<span className="capitalize">{selectedCar.fuelType}</span>
						</div>
						<ScrollLink
							href="#book"
							className="primary-btn w-[17rem]  shadow-[6px_6px_0_#efe9e9] text-xl py-3 bg-brand uppercase"
							offset={-200}
						>
							Reserve now
						</ScrollLink>
					</div>
				</div>
			</div>
		</section>
	)
}
