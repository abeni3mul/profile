import "./button.css";
import Nav from "./nav";
import casino from "./assets/casino.png";
import balckjack from "./assets/blackjack.png";
import bank from "./assets/bank.png";
import bms from "./assets/bms.png";
import stock from "./assets/stock.png";
import number from "./assets/number.png";

const Project = () => {
	return (
		<div className="bg-zinc-900  text-white h-full">
			<div className="h-full">
				<div className="text-center text-5xl font-bold pt-5 pb-5">
					PORTFOLIO
				</div>
				<div className="flex pl-72  text-3xl pb-8">
					<div className="gap-28 flex">
						<p className="button " style={{ "--color": "#f59e0b" }}>
							Project
							<span></span>
						</p>
						<p className="button" style={{ "--color": "#f59e0b" }}>
							Cirtefcate
							<span></span>
						</p>
					</div>
					<div className="sticky">
						<Nav styless={"test"} />
					</div>
				</div>
				{/* <div className="pl-12"> */}
				<div className="px-24 grid md:grid-cols-2 gap-4 lg:grid-cols-3">
					{/* <div className="flex gap-8 pl-5 pr-5 "> */}
					<div className=" border border-amber-500  rounded-lg">
						<div className="pl-5">
							<div className="">
								<div className="flex">
									<img
										className="py-5 pl-5 pr-5 max-w-80"
										src={bank}
										alt="img"
									/>
									<div className="pl-5 pb-2 pt-8">
										<button className="pl-8 pr-5 rounded-lg hover:bg-amber-500  py-3 ">
											Demo
										</button>
									</div>
								</div>
								<h1 className="text-center font-bold ">
									Bank Management System
								</h1>
								<h2 className="py-3 font-bold text-emerald-500">
									GitHub
								</h2>
							</div>
							<div className="flex gap-8">
								<h2>Project: Website</h2>
							</div>
							<div>
								<h2>Language: HTML, CSS, JS, SQL</h2>
							</div>
						</div>

						<div className="pl-5 pb-2"></div>
					</div>
					<div className="  border border-amber-500  rounded-lg">
						<div className="pl-5">
							<div className="flex">
								<img
									className="py-5 pl-5 pr-5 max-w-80 "
									src={casino}
									alt=""
								/>
								<div className="pl-5 pb-2 pt-8">
									<button className="pl-8 pr-5 rounded-lg hover:bg-amber-500  py-3 ">
										Demo
									</button>
								</div>
							</div>
							<h1 className="text-center font-bold">casino</h1>
							<h2 className=" py-3 font-bold text-emerald-500">
								GitHub
							</h2>
							<div className="flex gap-8">
								<h2>Project: Website</h2>
							</div>
							<div>
								<h2>Language: HTML, CSS, JS, </h2>
							</div>
						</div>

						<div className="pl-5 pb-2"></div>
					</div>
					<div className="  border border-amber-500  rounded-lg">
						<div className="pl-5">
							<div>
								<div className="flex">
									<img
										className="py-5 pl-5 pr-5 max-w-80"
										src={bms}
										alt=""
									/>
									<div className="pl-5 pb-2 pt-8">
										<button className="pl-8 pr-5 rounded-lg hover:bg-amber-500  py-3 ">
											Demo
										</button>
									</div>
								</div>

								<h1 className="text-center font-bold">
									Hospital Management System
								</h1>
								<h2 className="py-3 font-bold text-emerald-500">
									GitHub
								</h2>
							</div>
							<div className="flex gap-8">
								<h2>Project: Desktop App</h2>
							</div>
							<div>
								<h2>Language: Java, SQL</h2>
							</div>
						</div>
					</div>
					{/* </div> */}
					{/* <div className="flex gap-8 pl-5 pr-5 pt-8 pb-10"> */}
					<div className="  border border-amber-500  rounded-lg">
						<div className="pl-5">
							<div>
								<div className="flex">
									<img
										className="py-5 pl-5 pr-5 max-w-80"
										src={balckjack}
										alt=""
									/>
									<div className="pl-5 pb-2 pt-8">
										<button className="pl-8 pr-5 rounded-lg hover:bg-amber-500  py-3 ">
											Demo
										</button>
									</div>
								</div>
								<h1 className="text-center font-bold">
									Black-Jack Game
								</h1>
								<h2 className="py-3 font-bold text-emerald-500">
									GitHub
								</h2>
							</div>
							<div className="flex gap-8">
								<h2>Project: Website</h2>
							</div>
							<div>
								<h2>Language: HTML, CSS, JS</h2>
							</div>
						</div>
					</div>
					<div className="  border border-amber-500  rounded-lg">
						<div className="pl-5">
							<div>
								<div className="flex">
									<img
										className="py-5 pl-5 pr-5 max-w-80 "
										src={number}
										alt=""
									/>
									<div className="pl-5 pb-2 pt-8">
										<button className="pl-8 pr-5 rounded-lg hover:bg-amber-500  py-3 ">
											Demo
										</button>
									</div>
								</div>
								<h1 className="text-center font-bold">
									Number Prediction
								</h1>
								<h2 className="py-3 font-bold text-emerald-500">
									GitHub
								</h2>
							</div>
							<div className="flex gap-8">
								<h2>Project: Website</h2>
							</div>
							<div>
								<h2>Language: HTML, CSS, JS, Python </h2>
							</div>
						</div>
					</div>
					<div className="  border border-amber-500  rounded-lg ">
						<div className="pl-5">
							<div>
								<div className="flex">
									<img
										className="py-5 pl-5 pr-5 max-w-80"
										src={stock}
										alt=""
									/>
									<div className="pl-5 pb-2 pt-8">
										<button className="pl-8 pr-5 rounded-lg hover:bg-amber-500  py-3 ">
											Demo
										</button>
									</div>
								</div>
								<h1 className="text-center font-bold">
									Stock Market prediction
								</h1>
								<h2 className="py-3 font-bold text-emerald-500">
									GitHub
								</h2>
							</div>
							<div className="flex gap-8">
								<h2>Project: machine Learning</h2>
							</div>
							<div>
								<h2>Language: Python</h2>
							</div>
						</div>
					</div>
					{/* </div> */}
				</div>
				{/* </div> */}
			</div>
		</div>
	);
};
export default Project;
