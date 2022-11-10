import React from "react";

export default function Card({ id, title }) {
	return (
		<div className="card">
			<h3>Id: {id}</h3>
			<p>prioridad</p>
			<h3 className="card_title">{title}</h3>
			<div className="buttons">
				<button className="btn btn-primary">Editar</button>
				<button className="btn btn-danger">Borrar</button>
			</div>
		</div>
	);
}
