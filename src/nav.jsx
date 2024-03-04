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
		<div className={`flex gap-4 lg:gap-10 pl-32 ${styles ? "flex-col" : ""}`}>
			<div className=" w-28 ">
				<button
					onClick={() => navigate("/")}
					className="button"
					style={{ "--color": "#f59e0b" }}
				>
					<span></span>
					<img className="w-8" src={home} alt="home" />
				</button>
			</div>
			<div className=" w-28  ">
				<button
					onClick={() => navigate("/about")}
					className="button"
					style={{ "--color": "#f59e0b" }}
				>
					<span></span>
					<img className="w-8" src={account} alt="about" />
				</button>
			</div>
			<div className=" w-28 ">
				<button
					className="button "
					onClick={() => navigate("/projects")}
					style={{ "--color": "#f59e0b" }}
				>
					<span></span>
					<img className="w-8" src={project} alt="Project" />
				</button>
			</div>
		</div>
	);
};
export default Nav;
