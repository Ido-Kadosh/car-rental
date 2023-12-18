import { SelectOption } from '../components/Select'
import { BookInfo } from '../interfaces/BookInfo'
import { Car } from '../interfaces/Car'

import { utilService } from './util.service'

const _createCar = (car: Car) => {
	return new Car(car._id, car.model, car.imgUrl, car.price, car.transmission)
}

//creating demo data
const _createCars = () => {
	return [
		_createCar({
			_id: utilService.makeId(),
			model: 'Audi A1',
			imgUrl: '',
			price: 45,
			transmission: 'manual',
		}),
		_createCar({
			_id: utilService.makeId(),
			model: 'VW Golf 6',
			imgUrl: '',
			price: 37,
			transmission: 'manual',
		}),
		_createCar({
			_id: utilService.makeId(),
			model: 'Toyota Camry',
			imgUrl: '',
			price: 30,
			transmission: 'automatic',
		}),
		_createCar({
			_id: utilService.makeId(),
			model: 'BMW 320 ModernLine',
			imgUrl: '',
			price: 35,
			transmission: 'manual',
		}),
		_createCar({
			_id: utilService.makeId(),
			model: 'Mercedes-Benz GLK',
			imgUrl: '',
			price: 50,
			transmission: 'manual',
		}),
		_createCar({
			_id: utilService.makeId(),
			model: 'VW Passat CC',
			imgUrl: '',
			price: 25,
			transmission: 'automatic',
		}),
	]
}

const cars = _createCars()

//usually comes from server, so we return as async
const query = async (): Promise<Car[]> => {
	return new Promise(res => {
		setTimeout(() => {
			res(cars)
		}, 2000)
	})
}

//value will be id in the future
const getCarOptions = async (): Promise<SelectOption[]> => {
	const cars = await query()
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
	return new Car()
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
