import { TeamItem } from './TeamItem'
import LukeMiller from '../assets/img/luke-miller.png'
import MichaelDiaz from '../assets/img/michael-diaz.png'
import BriannaRoss from '../assets/img/briana-ross.png'
import LaurenRivera from '../assets/img/lauren-rivera.png'
import MartinRizz from '../assets/img/martin-rizz.png'
import CaitlynHunt from '../assets/img/caitlyn-hunt.png'
export const TeamList = () => {
	return (
		<ul className="grid gap-10 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 max-w-fit m-auto mb-32 py-24">
			<TeamItem name="Luke Miller" profession="Salesman" imgUrl={LukeMiller} />
			<TeamItem name="Michael Diaz" profession="Business Owner" imgUrl={MichaelDiaz} />
			<TeamItem name="Briana Ross" profession="Photographer" imgUrl={BriannaRoss} />
			<TeamItem name="Lauren Rivera" profession="Car Detailist" imgUrl={LaurenRivera} />
			<TeamItem name="Martin Rizz" profession="Mechanic" imgUrl={MartinRizz} />
			<TeamItem name="Caitlyn Hunt" profession="Manager" imgUrl={CaitlynHunt} />
		</ul>
	)
}
