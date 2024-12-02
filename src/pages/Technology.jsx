import { useState } from 'react';
import Tech1 from "../assets/tech1.jpg";
import Tech2 from "../assets/tech2.jpg";
import Tech3 from "../assets/tech3.jpg";

function Technology() {
	const destinations = {
		1: {
			name: "LAUNCH VEHICLE",
			job: "THE TERMINOLOGY...",
			description:
				"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
			image: Tech1,
		},
		2: {
			name: "SPACEPORT",
			job: "THE TERMINOLOGY...",
			description:
				"A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
			image: Tech2,
		},
		3: {
			name: "SPACE CAPSULE",
			job: "THE TERMINOLOGY...",
			description:
				"A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
			image: Tech3,
		},
	};

	const [activeDestination, setActiveDestination] = useState(destinations[1]);

	return (
		<div className="bg-black bg-[url(./assets/DesktopTech.jpg)] bg-no-repeat bg-cover h-screen flex justify-between items-start flex-col pt-20 max-[1025px]:gap-y-10 max-[1025px]:justify-start max-[637px]:pt-10 max-[637px]:px-5">
			<div className="pl-52 pt-[50px] max-[1025px]:px-10 max-[637px]:pl-0">
				<h1 className="text-white text-3xl max-[637px]:text-2xl font-BarlowCondensed tracking-widest">
					<span>03 </span>SPACE LAUNCH 101
				</h1>
			</div>
			<div className="w-full flex justify-between items-center px-52 max-[1025px]:flex-col-reverse max-[1025px]:px-10 max-[637px]:px-0">
				<div className="w-[600px] h-[303px] text-white flex justify-between max-[1025px]:flex-col max-[637px]:w-full">
					<ul className="text-white flex flex-col w-fit gap-y-5 justify-between max-[1025px]:flex-row max-[1025px]:m-auto max-[1025px]:gap-x-5 max-[1025px]:mb-14 max-[637px]:gap-x-3 max-[637px]:mb-10">
						{Object.keys(destinations).map((key) => (
							<li
								key={key}
								onClick={() => setActiveDestination(destinations[key])}
								className={`text-5xl cursor-pointer border border-white rounded-full w-16 h-16 flex justify-center items-center hover:bg-white hover:text-black transition-all duration-300 ${
									activeDestination.name === destinations[key].name
										? "bg-white text-black"
										: "text-white"
								}`}
							>
								{key}
							</li>
						))}
					</ul>
					<div className="flex flex-col justify-between h-[303px] w-[512px] pl-5 gap-x-5 max-[1025px]:m-auto max-[1025px]:text-center max-[637px]:w-full max-[637px]:pl-0 max-[637px]:h-auto">
						<h3 className="text-white text-xl max-[1025px]:mb-5 max-[637px]:text-lg font-BarlowCondensed tracking-widest">{activeDestination.job}</h3>
						<h1 className="text-6xl max-[1025px]:mb-5 max-[637px]:text-3xl font-Bellefair">{activeDestination.name}</h1>
						<p className="text-lg leading-8 w-[450px] h-[192px] max-[1025px]:w-full max-[637px]:text-sm max-[637px]:w-full max-[637px]:h-auto font-Barlow">
							{activeDestination.description}
						</p>
					</div>
				</div>
				<div className="h-[702px] flex justify-center items-center rounded-xl max-[1025px]:w-full max-[1025px]:h-80 max-[1025px]:mb-14 max-[637px]:h-32 max-[637px]:w-full max-[637px]:mb-4">
					<img
						className="w-full rounded-3xl max-[1025px]:w-full max-[1025px]:h-80 max-[1025px]:object-cover max-[637px]:h-full"
						src={activeDestination.image}
						alt={activeDestination.name}
					/>
				</div>
			</div>
		</div>
	);
}

export default Technology;
