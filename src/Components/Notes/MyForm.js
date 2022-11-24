import React, { useState } from "react";
import axios from "axios";

export default function MyForm({ data, setData }) {
	const [title, setTitle] = useState("");
	const [body, setBody] = useState("");
	return (
		<div id="formNote">
			<h1>Agregar Nota</h1>
			<form action="">
				<input
					value={title}
					onChange={(e) => {
						setTitle(e.target.value);
					}}
					placeholder="Title"
					type="text"
				/>
				<input
					value={body}
					onChange={(e) => {
						setBody(e.target.value);
					}}
					placeholder="Description"
					type="text"
				/>
				<button
					className="btn"
					onClick={async (e) => {
						e.preventDefault();
						await axios.post("http://localhost:5000/api/notes", {
							userId: "emgarcia",
							title,
							body,
						});
						// setData([
						// 	...data,
						// 	{
						// 		id: data.length + 1,
						// 		userId: 11,
						// 		title,
						// 		body,
						// 	},
						// ]);

						setTitle("");
						setBody("");
					}}
				>
					Guardar
				</button>
			</form>
		</div>
	);
}
