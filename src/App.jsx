import { BrowserRouter } from "react-router-dom";
import "./App.css";
import AppNavigation from "./router";

function App() {
	return (
		<BrowserRouter>
			<AppNavigation />
		</BrowserRouter>
	);
}

export default App;
