import { BreadCrumbs } from '../components/BreadCrumbs'
import { GetInTouch } from '../components/GetInTouch'
import { Testimonials } from '../components/Testimonials'

export const TestimonialsPage = () => {
	return (
		<div>
			<BreadCrumbs title={'Testimonials'} />
			<Testimonials />
			<GetInTouch />
		</div>
	)
}
