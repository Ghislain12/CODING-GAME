/* eslint-disable react/prop-types */
const CheckboxField = ({
	error,
	name,
	label,
	onBlur,
	onChange,
	disable,
	errorTextSize,
	checked,
}) => {
	return (
		<div className="flex items-center mb-4">
			<input
				disabled={disable}
				name={name}
				id={name}
				value={true}
				onChange={onChange}
				onBlur={onBlur}
				type="checkbox"
				checked={checked}
				className="w-4 h-4 bg-gray-100 border-gray-300 rounded text-neutral-900 focus:ring-neutral-900"
			/>
			<label htmlFor={name} className="ml-2 text-sm font-medium text-gray-900">
				{label}
			</label>
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

export default CheckboxField;
