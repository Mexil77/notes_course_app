import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./App.css";
import "./Styles/Buttons.css";

import Root from "./Components/Root/Root";
import Notes from "./Components/Notes/Notes";
import Banner from "./Components/Landing/Banner";

import { getNotes } from "./Loaders/Notes";
import { saveNote } from "./Actions/Notes";
import MyForm from "Components/Notes/MyForm";

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
					loader: getNotes,
					action: saveNote,
				},
				{
					path: "notes/edit/:id",
					element: <MyForm />,
				},
				{
					path: "notes/newNote",
					element: <MyForm />,
					action: saveNote,
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
