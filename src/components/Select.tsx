export interface SelectOption {
	value: string
	txt: string
	id?: string
}

interface propTypes {
	name: string
	value: string
	onChange: (ev: any) => void
	options?: SelectOption[]
	className?: string
	placeholder?: string
}

/**CustomSelect renders an html select element
 *
 * @component
 * @example
 * //Usage Example:
 * <CustomSelect name="letter" options={options} placeholder="Select letter" />
 *
 * @param {Object} props - The component props.
 * @param {String} props.name - The name and id for the select element, to be used with label.
 * @param {Array} props.value - The array of values to map for each selected option
 * @param {Function} props.onChange - A callback that runs when an option is selected
 * @param {SelectOption[]} [props.options] - An options array. each option consisting of value and txt
 * @param {String} [props.className] - An optional className for styling. pass empty string to disable default styling.
 * @param {String} [props.placeholder] - An optional placeholder for the select element.
 * @returns {JSX.Element} JSX element representing the custom select.
 */
const CustomSelect = ({ name, value, onChange, options, className, placeholder }: propTypes): JSX.Element => {
	if (!options)
		return (
			<select disabled value="" className={className ?? 'text-zinc-500 border p-3'}>
				<option value="" disabled>
					Loading Data...
				</option>
			</select>
		)
	return (
		<select
			value={value}
			onChange={onChange}
			className={className ?? 'text-zinc-500 border p-3'}
			name={name}
			id={name}
		>
			{placeholder && (
				<option disabled value="">
					{placeholder}
				</option>
			)}
			{options.map((option, idx) => (
				<option key={option.id ?? idx} value={option.value}>
					{option.txt}
				</option>
			))}
		</select>
	)
}

export default CustomSelect
