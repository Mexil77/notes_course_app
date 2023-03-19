import React from "react";
import { Form } from "react-router-dom";

export default function MyForm() {
	return (
		<div id="formNote">
			<h1>Agregar Nota</h1>
			<Form method="post" action="">
				<input placeholder="Title" type="text" name="title" />
				<input placeholder="Description" type="text" name="body" />
				<button type="submit" className="btn">
					Guardar
				</button>
			</Form>
		</div>
	);
}
