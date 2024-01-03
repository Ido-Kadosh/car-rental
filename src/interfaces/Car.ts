export interface Car {
	_id: string
	name: string
	model: string
	make: string
	imgUrl: string
	price: number
	year: number
	fuelType: 'gasoline' | 'diesel' | 'hybrid'
	transmission: 'manual' | 'automatic'
}
