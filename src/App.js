import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import "./Styles/Buttons.css";

import Root from "./Components/Root/Root";
import Notes from "./Components/Notes/Notes";
import Banner from "./Components/Landing/Banner";

function App() {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Root />,
			children: [
				{
					path: "",
					element: <Banner />,
				},
				{
					path: "notes",
					element: <Notes />,
				},
			],
		},
	]);

	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
