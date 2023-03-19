import axios from "axios";

export async function getNotes() {
	let { data } = await axios.get(`${process.env.REACT_APP_URL}/api/notes`);
	return data;
}
