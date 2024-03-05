import { Route, Routes } from "react-router-dom";
import routerConstant from "../constants/routerConstant.js";
import NotFound from "../pages/NotFoundScreen.jsx";

/* 
	The `AdminRouter` component is a React component that defines the routing configuration for the
	admin section of a web application.
*/
const AppRouter = () => {
	return (
		<Routes>
			{routerConstant.map((route, index) => {
				return (
					<Route
						key={`${route.name}` + index}
						path={route.path}
						element={<route.screen />}
					/>
				);
			})}
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

export default AppRouter;
