import React, { Fragment, useState } from "react";
// import React from "react";
import home from "./assets/home.png";
import account from "./assets/account.png";
import project from "./assets/project.png";
import "./button.css";
import { useNavigate } from "react-router-dom";
const Nav = ({ styles }) => {
	const navigate = useNavigate();
	return (
		<div
			className={`flex  gap-16 lg:gap-20 pl-7 ${styles ? "flex-col" : ""}`}
		>
			<button
				onClick={() => navigate("/")}
				className="button"
				style={{ "--color": "#f59e0b" }}
			>
				<span></span>
				<img className="w-8" src={home} alt="home" />
			</button>

			<button
				onClick={() => navigate("/about")}
				className="button"
				style={{ "--color": "#f59e0b" }}
			>
				<span></span>
				<img className="w-8" src={account} alt="about" />
			</button>

			<button
				className="button "
				onClick={() => navigate("/projects")}
				style={{ "--color": "#f59e0b" }}
			>
				<span></span>
				<img className="w-8" src={project} alt="Project" />
			</button>
		</div>
	);
};
export default Nav;
