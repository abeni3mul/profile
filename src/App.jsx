import React, { Fragment, useState } from "react";
// import React from "react";
// import home from "./assets/home.png";
// import account from "./assets/account.png";
// import project from "./assets/project.png";
import dice from "./assets/dice.png";
import "./button.css";
import link from "./assets/link.png";
import git from "./assets/git.png";
import { Form, useNavigate } from "react-router-dom";
import Nav from "./nav";
import photo8 from "./assets/photo8.png";
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
				<div className="overflow-scroll text-white">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
						{/* Left Column */}
						<div>
							<div className="grid gap-4 font-semibold">
								<h3 className="font-semibold text-2xl text-amber-500">
									Pesronal Info
								</h3>
								<p>Full Name: Abenezer Legesse</p>
								<p>Email: abenezer.legessem@gmail.com </p>
								<p>Phone Number: +1(614)599-3864</p>

								<div className="flex gap-9">
									<a
										className="text-emerald-500"
										href="https://www.linkedin.com/in/abenezer-legesse-973803250"
										target="_blank"
									>
										<img className="h-9" src={link} alt="" />
									</a>
									<a
										className="text-emerald-500"
										href="https://github.com/abeni3mul"
										target="_blank"
									>
										{" "}
										<img className="h-9" src={git} alt="" />
									</a>
								</div>
							</div>
						</div>
						{/* Right Column */}
						<div className="flex">
							<div className="md:w-1/2 md:mt-0 ">
								<h3 className="font-semibold text-2xl text-amber-500">
									Education
								</h3>
								<h1>
									BSc in Computer Science at Southwest Minnesota State
									University
								</h1>
							</div>
						</div>
					</div>
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
				src={photo8}
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
