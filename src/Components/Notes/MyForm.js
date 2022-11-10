import React, { useState } from "react";

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
					onClick={(e) => {
						e.preventDefault();
						setData([
							...data,
							{
								id: data.length + 1,
								userId: 11,
								title,
								body,
							},
						]);
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
