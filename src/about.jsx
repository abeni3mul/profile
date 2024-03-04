import React from "react";
import Nav from "./nav";

const About = () => {
	return (
		<div className=" bg-zinc-900 text-white pl-8 h-screen overflow-auto">
			<h2 className="text-4xl md:text-5xl text-amber-500 font-bold mb-3 text-center  pt-5">
				About Me
			</h2>
			<div className="flex flex-col  justify-center items-center pr-10 pt-2">
				<Nav />
			</div>

			<div className="mb-8">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					{/* Left Column */}
					<div>
						<div className="grid gap-4 font-semibold">
							<h3 className="font-semibold text-2xl ">Pesronal Info</h3>
							<p>Full Name: Abenezer Legesse</p>
							<p>Email: abenezer.legessem@gmail.com </p>
							<p>Phone Number: +1(614)599-3864</p>

							<a
								className="text-emerald-500"
								href="https://www.linkedin.com/in/abenezer-legesse-973803250"
								target="_blank"
							>
								LinkedIn Profile
							</a>
							<a
								className="text-emerald-500"
								href="https://github.com/abeni3mul"
								target="_blank"
							>
								GitHub
							</a>
						</div>
					</div>
					{/* Right Column */}
					<div className="flex">
						<div className="md:w-1/2 md:mt-0 ">
							<h3 className=" text-2xl">Education</h3>
							<h1>
								BSc in Computer Science at Southwest Minnesota State
								University
							</h1>
						</div>
					</div>
				</div>
			</div>

			{/* Skills Section */}
			<section className="mb-6 ">
				<h2 className="text-3xl text-center font-bold mb-3 py-5">
					My Skills
				</h2>
				<div className=" flex justify-center gap-4 md:gap-28 pr-5  ">
					{/* Skill Item */}
					<div className="w-1/2 md:w-1/4 pt-2">
						<div className="relative pt-1">
							<div className="flex mb-2 items-center justify-between">
								<div>
									<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-yellow-600 bg-yellow-200">
										HTML
									</span>
								</div>
								<div className="text-right">
									<span className="text-xs font-semibold inline-block text-yellow-600">
										85%
									</span>
								</div>
							</div>
							<div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-yellow-200">
								<div
									style={{ width: "85%" }}
									className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-500"
								></div>
							</div>
						</div>
						<div className="relative pt-1">
							<div className="flex mb-2 items-center justify-between">
								<div>
									<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-yellow-600 bg-yellow-200">
										CSS
									</span>
								</div>
								<div className="text-right">
									<span className="text-xs font-semibold inline-block text-yellow-600">
										75%
									</span>
								</div>
							</div>
							<div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-yellow-200">
								<div
									style={{ width: "75%" }}
									className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-500"
								></div>
							</div>
						</div>
						<div className="relative pt-1">
							<div className="flex mb-2 items-center justify-between">
								<div>
									<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-yellow-600 bg-yellow-200">
										Js
									</span>
								</div>
								<div className="text-right">
									<span className="text-xs font-semibold inline-block text-yellow-600">
										70%
									</span>
								</div>
							</div>
							<div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-yellow-200">
								<div
									style={{ width: "70%" }}
									className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-500"
								></div>
							</div>
						</div>
						<div className="relative pt-1">
							<div className="flex mb-2 items-center justify-between">
								<div>
									<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-yellow-600 bg-yellow-200">
										react
									</span>
								</div>
								<div className="text-right">
									<span className="text-xs font-semibold inline-block text-yellow-600">
										60%
									</span>
								</div>
							</div>
							<div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-yellow-200">
								<div
									style={{ width: "60%" }}
									className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-500"
								></div>
							</div>
						</div>
					</div>
					<div className="w-1/2 md:w-1/4 pt-2">
						<div className="relative pt-1">
							<div className="flex mb-2 items-center justify-between">
								<div>
									<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-yellow-600 bg-yellow-200">
										Python
									</span>
								</div>
								<div className="text-right">
									<span className="text-xs font-semibold inline-block text-yellow-600">
										70%
									</span>
								</div>
							</div>
							<div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-yellow-200">
								<div
									style={{ width: "70%" }}
									className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-500"
								></div>
							</div>
						</div>
						<div className="relative pt-1">
							<div className="flex mb-2 items-center justify-between">
								<div>
									<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-yellow-600 bg-yellow-200">
										java
									</span>
								</div>
								<div className="text-right">
									<span className="text-xs font-semibold inline-block text-yellow-600">
										85%
									</span>
								</div>
							</div>
							<div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-yellow-200">
								<div
									style={{ width: "85%" }}
									className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-500"
								></div>
							</div>
						</div>
						<div className="relative pt-1">
							<div className="flex mb-2 items-center justify-between">
								<div>
									<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-yellow-600 bg-yellow-200">
										C++
									</span>
								</div>
								<div className="text-right">
									<span className="text-xs font-semibold inline-block text-yellow-600">
										70%
									</span>
								</div>
							</div>
							<div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-yellow-200">
								<div
									style={{ width: "70%" }}
									className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-500"
								></div>
							</div>
						</div>
						<div className="relative pt-1">
							<div className="flex mb-2 items-center justify-between">
								<div>
									<span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-yellow-600 bg-yellow-200">
										SQl
									</span>
								</div>
								<div className="text-right">
									<span className="text-xs font-semibold inline-block text-yellow-600">
										75%
									</span>
								</div>
							</div>
							<div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-yellow-200">
								<div
									style={{ width: "75%" }}
									className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-500"
								></div>
							</div>
						</div>
					</div>
					{/* Repeat for other skills */}
				</div>
			</section>

			{/* Experience & Education Section */}
			<section>
				<h2 className="text-3xl text-center font-bold mb-3 py-5">
					Experience
				</h2>
				<div className="">
					{/* Experience Column */}
					<div>
						{/* Experience Items */}
						<div className="pt-8">
							<div>
								<h1 className="font-bold">
									Software Development Skills:
								</h1>
								<p>
									Experience in the complete Software Development Life
									Cycle using Agile methodology, including design,
									development, implementation, verification, and
									validation.
								</p>
							</div>
							<div className="pt-5 ">
								<h1 className="font-bold">Pogramming Languages:</h1>
								<p> Proficiency in Java, C, C++, Python, and SQL.</p>
							</div>
							<div className="pt-5">
								<h1 className="font-bold">Web Technologies: </h1>
								<p>
									Skilled in HTML5, CSS3, JavaScript, AJAX, JSON,
									Flask, Bootstrap, jQuery, Angular, React JS, and
									NodeJS.
								</p>
							</div>
							<div className="pt-5">
								<h1 className="font-bold">Database Management:</h1>
								<p>Experienced in SQL Server, MySQL, and MongoDB.</p>
							</div>
							<div className="pt-5">
								<h1 className="font-bold">
									Server and Cloud Technologies:
								</h1>
								<p>
									Knowledge of Oracle WebLogic, IBM WebSphere, JBoss,
									Glassfish, Apache Tomcat, and public cloud
									environments like Azure, AWS, GCP.
								</p>
							</div>
							<div className="pt-5">
								<h1 className="font-bold">DevOps and Testing Tools:</h1>
								<h1>
									Familiarity with Jenkins, Azure DevOps, Docker,
									Kubernetes, JUnit, TestNG, Mockito, Jasmine, Karma,
									Mocha, Chai, and Protractor.
								</h1>
							</div>
							<div className="pt-5">
								<h1 className="font-bold">
									Version Control and Project Management:
								</h1>
								<p>Proficient in GIT, JIRA, and Microsoft Project.</p>
							</div>
							<div className="pt-5">
								<h1 className="font-bold">Operating Systems:</h1>
								<p>
									Comfortable working with Windows, Linux, Unix, MAC,
									MS-DOS.
								</p>
							</div>
							<div className="pt-5">
								<h1 className="font-bold">
									tegrated Development Environments (IDEs):
								</h1>
								<p>
									Experience with Eclipse, Visual Studio, IntelliJ,
									Spring Tool Suite, Sublime Text, WinSCP, and Putty.
								</p>
							</div>
							<div className="pt-5 pb-12">
								<h1 className="font-bold">Professional Experience:</h1>
								<p>
									Includes internships at 3M and United Healthgroup,
									with hands-on experience in microservices
									architecture, cloud services, and container
									technologies.
								</p>
							</div>
						</div>
						{/* ... */}
					</div>
					{/* Education Column */}
				</div>
			</section>
		</div>
	);
};

export default About;
