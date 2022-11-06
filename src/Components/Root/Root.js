import React from "react";
import { Outlet } from "react-router-dom";
import MyNav from "../Common/MyNav";
import MyFooter from "../Common/MyFooter";

export default function Root() {
	return (
		<>
			<MyNav />
			<div id="content">
				<Outlet />
			</div>
			<MyFooter />
		</>
	);
}
