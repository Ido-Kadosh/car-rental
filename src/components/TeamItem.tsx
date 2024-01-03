interface PropTypes {
	name: string
	profession: string
	imgUrl: string
}

export const TeamItem = ({ name, profession, imgUrl }: PropTypes) => {
	return (
		<li className="shadow-[0_20px_10px_0_rgba(0,0,0,.08)] max-w-fit ">
			<div className="bg-neutral-100">
				<img src={imgUrl} alt="name" />
			</div>
			<div className="text-center p-8">
				<h3 className="text-2xl font-bold">{name}</h3>
				<p className="text-slate-500 font-medium">{profession}</p>
			</div>
		</li>
	)
}
