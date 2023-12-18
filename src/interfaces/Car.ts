export class Car {
	constructor(
		public _id: string = '',
		public model: string = '',
		public imgUrl: string = '',
		public price: number = 0,
		public transmission: 'manual' | 'automatic' = 'manual'
	) {}
}
