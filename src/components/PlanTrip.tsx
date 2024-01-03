import planCar from '../assets/img/plan-car.png'
import planDrive from '../assets/img/plan-drive.png'
import planOperator from '../assets/img/plan-operator.png'

export const PlanTrip = () => {
	return (
		<section className="flex flex-col main-content justify-center  font-poppins py-20 mb-40">
			<h3 className="font-semibold text-2xl mb-3">Plan your trip now</h3>
			<h2 className="font-bold text-5xl mb-20 text-center">Quick & easy car rental</h2>
			<div className="flex flex-col lg:flex-row gap-40 items-center justify-center">
				<div className="flex flex-col items-center">
					<img className="w-44" src={planCar} alt="" />
					<h3 className="font-bold text-2xl mb-3">Select Car</h3>
					<p className="text-center text-slate-500 px-20 lg:px-0">
						We offer a big range of vehicles for all your driving needs. We have the perfect car to meet
						your needs
					</p>
				</div>
				<div className="flex flex-col items-center">
					<img className="w-44" src={planOperator} alt="" />
					<h3 className="font-bold text-2xl mb-3">Contact Operator</h3>
					<p className="text-center text-slate-500 px-20 lg:px-0">
						Our knowledgeable and friendly operators are always ready to help with any questions or concerns
					</p>
				</div>
				<div className="flex flex-col items-center">
					<img className="w-44" src={planDrive} alt="" />
					<h3 className="font-bold text-2xl mb-3">Let's Drive</h3>
					<p className="text-center text-slate-500 px-10 lg:px-0">
						Whether you're hitting the open road, we've got you covered with our wide range of cars
					</p>
				</div>
			</div>
		</section>
	)
}
