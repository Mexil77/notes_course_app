import axios from "axios";

export async function saveNote({ request }) {
	const formData = await request.formData();

	await axios.post(`${process.env.REACT_APP_URL}/api/notes`, {
		userId: "emgarcia",
		title: formData.get("title"),
		body: formData.get("body"),
	});
}
