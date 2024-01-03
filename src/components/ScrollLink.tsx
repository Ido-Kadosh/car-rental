interface ScrollLinkProps {
	href: string
	children: React.ReactNode
	className: string
	offset?: number
}

export const ScrollLink = ({ href, children, className, offset = 0 }: ScrollLinkProps) => {
	const handleClick = (ev: React.MouseEvent<HTMLAnchorElement>) => {
		ev.preventDefault()

		const targetId = href.substring(1) //get id without #
		const targetElement = document.getElementById(targetId)

		if (targetElement) {
			window.scrollTo({
				top: targetElement.offsetTop + offset,
				behavior: 'smooth',
			})
		}
	}

	return (
		<a className={className} href="#" onClick={handleClick}>
			{children}
		</a>
	)
}
