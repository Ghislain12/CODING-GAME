/* eslint-disable react/prop-types */

import ReactQuill from "react-quill";

const TextareaField = ({
	error,
	value,
	name,
	label,
	onBlur,
	onChange,
	disable,
	errorTextSize,
}) => {
	return (
		<div className="flex flex-col w-full h-full">
			{label && (
				<label
					htmlFor={name}
					className="block mb-2 text-sm font-medium text-gray-900"
				>
					{label}
				</label>
			)}
			<ReactQuill
				className="w-full h-full mb-10"
				onBlur={onBlur}
				disable={disable}
				theme="snow"
				value={value}
				onChange={onChange}
			/>
			{error && (
				<div
					className={`text-[#ff0000] ${errorTextSize ? `text-[${errorTextSize}px]` : ""
						}`}
				>
					{error}
				</div>
			)}
		</div>
	);
};

export default TextareaField;
