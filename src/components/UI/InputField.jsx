/* eslint-disable react/prop-types */
import {
	faCreditCardAlt,
	faEye,
	faEyeSlash,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const InputField = ({
	type,
	password,
	placeholder,
	error,
	value,
	name,
	label,
	onBlur,
	onChange,
	icons,
	disable,
	errorTextSize,
	min,
	max,
}) => {
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);

	const togglePasswordVisibility = () => {
		setIsPasswordVisible(!isPasswordVisible);
	};

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
				<input
					type={isPasswordVisible ? "text" : type}
					disabled={disable}
					name={name}
					id={name}
					value={value}
					onChange={onChange}
					onBlur={onBlur}
					min={min ?? ""}
					max={max ?? ""}
					className={`bg-gray-50 border ${
						error
							? " border-red-300 focus:ring-red-500 focus:border-red-500"
							: "border-gray-300"
					} text-gray-900 sm:text-sm rounded-lg block w-full p-2.5 `}
					placeholder={placeholder}
				/>
				<button
					type="button"
					className={`absolute transform -translate-y-1/2 focus:outline-none top-1/2 right-4`}
					onClick={togglePasswordVisibility}
				>
					{password &&
						(isPasswordVisible ? (
							<FontAwesomeIcon icon={faEyeSlash} /> // Icône pour masquer le mot de passe
						) : (
							<FontAwesomeIcon icon={faEye} />
						))}
					{icons && <FontAwesomeIcon icon={icons || faCreditCardAlt} />}
				</button>
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

export default InputField;
