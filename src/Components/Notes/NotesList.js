import React from "react";
import Card from "./Card";

export default function NotesList({ data }) {
	return (
		<div id="notesList">
			{data
				.slice(0)
				.reverse()
				.map((d) => {
					return <Card key={d._id} id={d._id} title={d.title} des={d.body} />;
				})}
		</div>
	);
}
