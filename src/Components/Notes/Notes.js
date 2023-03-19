import React, { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import "./Notes.css";

import NotesList from "./NotesList";
import MyForm from "./MyForm";

export default function Notes() {
	const [data, setData] = useState([]);
	const dataLoader = useLoaderData();

	useEffect(() => {
		setData(dataLoader);
	}, [dataLoader]);

	return (
		<div id="notes">
			<MyForm />
			<NotesList data={data} />
		</div>
	);
}
