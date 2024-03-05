/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import Loading from "../components/UI/Loading";
import { UserContext } from "../context/userContext";
import AppRouter from "./appRouter";

const AppNavigation = () => {
	const { isLoading } = useContext(UserContext);

	const Navigator = () => {
		/* This code is used to conditionally render different components based on whether a
        user is logged in or not. */

		return <AppRouter />;
	};

	return (
		<>
			{isLoading ? (
				<div className="flex items-center justify-center w-screen h-screen">
					<Loading />
				</div>
			) : (
				<Navigator />
			)}
		</>
	);
};

export default AppNavigation;
