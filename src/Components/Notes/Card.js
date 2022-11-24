import React from "react";
import axios from "axios";

export default function Card({ id, title }) {
	return (
		<div className="card">
			<h3>Id: {id}</h3>
			<p>prioridad</p>
			<h3 className="card_title">{title}</h3>
			<div className="buttons">
				<button
					className="btn btn-primary"
					onClick={async () => {
						await axios.put(`http://localhost:5000/api/notes/${id}`, {
							title: "hola",
							body: "adios",
						});
					}}
				>
					Editar
				</button>
				<button
					className="btn btn-danger"
					onClick={async () => {
						await axios.delete(`http://localhost:5000/api/notes/${id}`);
					}}
				>
					Borrar
				</button>
			</div>
		</div>
	);
}
