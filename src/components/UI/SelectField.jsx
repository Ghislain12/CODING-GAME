/* eslint-disable react/prop-types */

const SelectField = ({
	error,
	value,
	name,
	label,
	onBlur,
	onChange,
	disable,
	errorTextSize,
	options,
}) => {
	return (
		<div className="flex flex-col w-full">
			{label && (
				<label
					htmlFor={name}
					className="block mb-2 text-sm font-medium text-gray-900"
				>
					{label}
				</label>
			)}
			<div className="relative flex justify-center">
				<select
					name={name}
					id={name}
					value={value}
					onBlur={onBlur}
					onChange={onChange}
					disabled={disable}
					className={`bg-gray-50 border ${
						error
							? " border-red-300 focus:ring-red-500 focus:border-red-500"
							: "border-gray-300"
					} text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 `}
				>
					
					{options.map((option) => (
						<option key={option.value} value={option.value}>
							{option.name}
						</option>
					))}
				</select>
			</div>
			{error && (
				<div
					className={`text-[#ff0000] ${
						errorTextSize ? `text-[${errorTextSize}px]` : ""
					}`}
				>
					{error}
				</div>
			)}
		</div>
	);
};

export default SelectField;
