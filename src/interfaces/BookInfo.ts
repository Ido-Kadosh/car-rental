export class BookInfo {
	constructor(
		public carId: string = '',
		public pickUpLoc: string = '',
		public dropOffLoc: string = '',
		public pickUpTime: number = 0,
		public dropOffTime: number = 0,
		public personalInfo: PersonalInfo = new PersonalInfo()
	) {}
}

export class PersonalInfo {
	constructor(
		public firstName: string = '',
		public lastName: string = '',
		public phone: number = 0,
		public age: number = 0,
		public email: string = '',
		public address: string = '',
		public city: string = '',
		public zipCode: number = 0
	) {}
}
