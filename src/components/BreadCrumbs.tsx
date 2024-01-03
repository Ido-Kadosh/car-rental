import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

interface PropTypes {
	title: string
}

export const BreadCrumbs = ({ title }: PropTypes) => {
	let location = useLocation()

	return (
		<section className="bread-crumbs bg-bread bg-no-repeat bg-cover w-full h-[25rem] relative ">
			<div className="bg-[#ffffffeb] h-full absolute top-0 left-0 w-full  ">
				<div className="h-full w-full px-6 flex flex-col justify-center m-auto max-w-7xl">
					<h3 className="capitalize font-bold text-4xl mb-2">{title}</h3>
					<p className="capitalize font-semibold">
						<Link to="/" className="hover-link">
							Home
						</Link>{' '}
						/ {location.pathname.slice(1)}
					</p>
				</div>
			</div>
		</section>
	)
}
