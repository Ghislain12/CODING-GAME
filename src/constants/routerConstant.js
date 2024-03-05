// import InitialRedirect from "../../router/initialRedirect";

import Dashboard from "../pages/Dashboard";
import AlbumDetail from "../pages/AlbumDetail";

const AdminRouterConstant = [
	{
		name: "Dashboard",
		path: "/",
		screen: Dashboard,
	},
	{
		name: "Détail album",
		path: "/album/:id",
		screen: AlbumDetail,
	},
];

export default AdminRouterConstant;
