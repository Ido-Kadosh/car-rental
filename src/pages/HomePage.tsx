import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import BookCar from '../components/BookCar'
import CarDisplay from '../components/CarDisplay'
import { Hero } from '../components/Hero'
import { setCars } from '../redux/cars'
import { carService } from '../services/car.service'
import ChooseUs from '../components/ChooseUs'
import { AppDispatch } from '../redux/store'
import { Testimonials } from '../components/Testimonials'
import { PlanTrip } from '../components/PlanTrip'
import { FrequentlyAsked } from '../components/FrequentlyAsked'

export const HomePage = () => {
	const dispatch = useDispatch<AppDispatch>()
	useEffect(() => {
		loadCars()
	}, [])

	const loadCars = async () => {
		const cars = await carService.query()
		dispatch(setCars(cars))
	}

	return (
		<div className="home">
			<Hero />
			<BookCar />
			<PlanTrip />
			<CarDisplay />
			<div className="flex flex-col gap-6 bg-neutral-800 text-center py-14">
				<h2 className="text-3xl sm:text-5xl px-4 font-bold text-white ">Save big with our cheap car rental!</h2>
				<h3 className="text-white text-lg sm:text-2xl px-4">
					Top Airports. Local Suppliers. <span className="text-brand">24/7</span> Support.
				</h3>
			</div>
			<ChooseUs />
			<Testimonials />
			<FrequentlyAsked />
		</div>
	)
}
