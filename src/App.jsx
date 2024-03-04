import React, { Fragment, useState } from "react";
// import React from "react";
// import home from "./assets/home.png";
// import account from "./assets/account.png";
// import project from "./assets/project.png";
import dice from "./assets/dice.png";
import "./button.css";
import About from "./about";
import { useNavigate } from "react-router-dom";
import Nav from "./nav";

const AboutModal = ({ isOpen, toggleModal }) => {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex justify-center ">
			<div className="p-8 rounded-lg relative w-3/4 overflow-scrol overflow-scroll">
				<button
					onClick={toggleModal}
					className="absolute top-0 right-0 m-2 bg-red-50"
				>
					&times; {/* This is a simple 'X' button to close the modal */}
				</button>
				<div className="overflow-scroll">
					<About />
				</div>
			</div>
		</div>
	);
};

function App() {
	const [isAboutModalOpen, setAboutModalOpen] = useState(false);

	const toggleAboutModal = () => {
		setAboutModalOpen(!isAboutModalOpen);
	};

	return (
		<div className="flex flex-col lg:flex-row p-5 pb-16 bg-zinc-900 h-screen overflow-auto">
			<img
				className="rounded-full lg:rounded-lg aspect-square bg-black border border-amber-500"
				src={dice}
				alt="image"
			/>

			<div className="flex flex-col justify-center items-center gap-4">
				<div className="flex flex-col items-center justify-center">
					<h1 className="text-2xl md:text-5xl text-amber-500 font-bold">
						- ABENEZER LEGESSE -
					</h1>
					<h1 className="text-1xl md:text-4xl text-white   font-bold">
						SOFTWARE ENGINEER
					</h1>
					<h2 className="  text-white text-center mx-4 lg:mx-8 pt-2">
						I am a passionate and detail-oriented software engineer with
						Front-end and Back-end development skills. I'm committed to
						building efficient, user-friendly applications and constantly
						exploring new technologies to expand my expertise.
					</h2>
					<div className=" flex justify-center items-center pt-5 ">
						<div className=" flex justify-center text-white w-48  hover:bg-amber-500  border border-amber-500  rounded-full  ">
							<button className="text-center" onClick={toggleAboutModal}>
								About me{" "}
							</button>
						</div>
					</div>
				</div>
				<Nav />
			</div>
			<AboutModal isOpen={isAboutModalOpen} toggleModal={toggleAboutModal} />
		</div>
	);
}

export default App;
