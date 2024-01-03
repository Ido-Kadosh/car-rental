import { BreadCrumbs } from '../components/BreadCrumbs'
import { GetInTouch } from '../components/GetInTouch'
import { TeamList } from '../components/TeamList'

export const TeamPage = () => {
	return (
		<div>
			<BreadCrumbs title={'Our Team'} />
			<TeamList />
			<GetInTouch />
		</div>
	)
}
