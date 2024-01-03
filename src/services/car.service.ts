import { SelectOption } from '../components/Select'
import { BookInfo } from '../interfaces/BookInfo'
import { Car } from '../interfaces/Car'

import { utilService } from './util.service'

//creating demo data
const _createCars = (): Car[] => {
	return [
		{
			_id: utilService.makeId(),
			name: 'Audi A1',
			model: 'A1',
			make: 'Audi',
			imgUrl: 'https://res.cloudinary.com/diyikz4gq/image/upload/v1703424169/rk3fbzpdof2heofjfrqt.png',
			price: 45,
			year: 2022,
			fuelType: 'gasoline',
			transmission: 'manual',
		},
		{
			_id: utilService.makeId(),
			name: 'VW Golf 6',
			model: 'golf 6',
			make: 'Volkswagen',
			imgUrl: 'https://res.cloudinary.com/diyikz4gq/image/upload/v1703424169/nuhyucr6ilj7mk15bkmc.png',
			price: 37,
			year: 2021,
			fuelType: 'diesel',
			transmission: 'manual',
		},
		{
			_id: utilService.makeId(),
			name: 'Toyota Camry',
			model: 'Camry',
			make: 'Toyota',
			imgUrl: 'https://res.cloudinary.com/diyikz4gq/image/upload/v1703424169/phl4pt2umiperhq03hwd.png',
			price: 30,
			year: 2023,
			fuelType: 'hybrid',
			transmission: 'automatic',
		},
		{
			_id: utilService.makeId(),
			name: 'BMW 320 ModernLine',
			model: '320',
			make: 'BMW',
			imgUrl: 'https://res.cloudinary.com/diyikz4gq/image/upload/v1703424169/wboi0enj6gh5wldzfetu.png',
			price: 35,
			year: 2019,
			fuelType: 'diesel',
			transmission: 'manual',
		},
		{
			_id: utilService.makeId(),
			name: 'Mercedes-Benz GLK',
			model: 'GLK',
			make: 'Mercedes-Benz',
			imgUrl: 'https://res.cloudinary.com/diyikz4gq/image/upload/v1703424169/rskudc6g6mk4zj9sryfx.png',
			price: 50,
			year: 2024,
			fuelType: 'diesel',
			transmission: 'manual',
		},
		{
			_id: utilService.makeId(),
			name: 'VW Passat CC',
			model: 'Passat CC',
			make: 'Volkswagen',
			imgUrl: 'https://res.cloudinary.com/diyikz4gq/image/upload/v1703424169/ezxqyfdqy3tnagckkbsr.png',
			price: 25,
			year: 2016,
			fuelType: 'gasoline',
			transmission: 'automatic',
		},
	]
}

const cars = _createCars()

//usually comes from server, so we return as async. delay used to mimic server.
const query = async (): Promise<Car[]> => {
	return new Promise(res => {
		setTimeout(() => {
			res(cars)
		}, 100)
	})
}

const getCarOptions = (cars: Car[]): SelectOption[] => {
	return cars.map(car => ({ value: car._id, txt: car.model }))
}

const getLocationOptions = (): SelectOption[] => {
	return [
		{ value: '1', txt: 'Tel Aviv' },
		{ value: '2', txt: 'Ramat Gan' },
		{ value: '3', txt: 'Eilat' },
		{ value: '4', txt: 'Bnei Brak' },
	]
}

const getEmptyCar = () => {
	return {
		_id: '',
		model: '',
		imgUrl: '',
		price: 25,
		transmission: 'automatic',
	}
}

const getEmptyBookInfo = () => {
	return new BookInfo()
}

export const carService = {
	getCarOptions,
	getLocationOptions,
	getEmptyCar,
	getEmptyBookInfo,
	query,
}
