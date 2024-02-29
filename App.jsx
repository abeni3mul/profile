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

				{/* <form onCreateAccount={handleCreateAccount}></form> */}
			</div>
		</div>
	);
};

function App() {
	const [isAboutModalOpen, setAboutModalOpen] = useState(false);

	// Function to toggle the login modal's visibility
	const toggleAboutModal = () => {
		setAboutModalOpen(!isAboutModalOpen);
	};

	return (
		<div className="flex p-16 bg-zinc-900">
			<div>
				<img
					className=" rounded-lg w-4/5 pt-40 bg-black"
					src={dice}
					alt="image"
				/>
			</div>
			<div>
				<div className="pt-40">
					<div className="pl-8 pb-24">
						<h1 className="text-5xl pl-8 text-amber-500 font-bold">
							- ABENEZER LEGESSE -
						</h1>
						<h1 className="text-4xl text-white pl-28 pt-4  font-bold">
							SOFTWARE ENGINEER
						</h1>
						<h2 className="pl-28 py-8 text-white">
							I am a passionate and detail-oriented software engineer
							with <br />
							Front-end and Back-end development skills. I'm committed to
							<br /> building efficient, user-friendly applications and
							constantly
							<br />
							exploring new technologies to expand my expertise.
						</h2>
						<div className="pl-28">
							<div className="  p-1  text-white w-48  hover:bg-amber-500  border border-amber-500  rounded-full  ">
								<button className="pl-12 " onClick={toggleAboutModal}>
									About me{" "}
								</button>
							</div>
						</div>
					</div>
					<Nav />
				</div>
			</div>
			<AboutModal isOpen={isAboutModalOpen} toggleModal={toggleAboutModal} />
		</div>
	);
}

export default App;
