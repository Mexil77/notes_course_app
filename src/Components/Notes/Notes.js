import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Notes.css";

import NotesList from "./NotesList";
import MyForm from "./MyForm";

export default function Notes() {
	const [data, setData] = useState([]);

	const fetchData = async () => {
		const res = await axios.get("http://localhost:5000/api/notes");
		setData(res.data);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div id="notes">
			<MyForm data={data} setData={setData} />
			<NotesList data={data} />
		</div>
	);
}
