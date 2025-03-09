import { useState } from 'react';
import Crew1 from "../assets/crew1.png"
import Crew2 from "../assets/crew2.png"
import Crew3 from "../assets/crew3.png"
import Crew4 from "../assets/crew4.png"

function Destination() {
	const destinations = {
		Moon: {
			name: "DOUGLAS HURLEY",
			job:"COMMANDER",
			description:
			"Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2. He is a good man and captain",
			image: Crew1,
		},
		Mars: {
			name: "MARK SHUTTLEWORTH",
			job:"MISSION SPECIALIST",
			description:
			"Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
			image: Crew2,
		},
		Europa: {
			name: "VICTOR GLOVER",
			job:"PILOT",
			description:
			"Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
			image: Crew3,
		},
		Titan: {
			name: "ANOUSHEH ANSARI",
			job:"FLIGHT ENGINEER",
			description:
				"Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
			image: Crew4,
		},
	};

	const [activeDestination, setActiveDestination] = useState(destinations.Moon);

	return (
		<div className="bg-black bg-[url(./assets/DesktopCrew.png)] bg-no-repeat bg-cover h-screen flex justify-between items-start flex-col pt-20 max-[637px]:pt-20 max-[637px]:px-5 max-[637px]:">
			<div className='pl-52 pt-[50px] max-[1025px]:px-10 max-[637px]:pl-0 max-[637px]:pt-0'>
				<h1 className='text-white text-3xl max-[637px]:text-2xl font-BarlowCondensed tracking-widest'><span>02 </span>MEET YOUR CREW</h1>
			</div>
			<div className=" w-full flex justify-between items-center px-52 gap-y-1 max-[1025px]:flex-col max-[1025px]:px-20 max-[1025px]:gap-y-20 max-[637px]:flex-col max-[637px]:px-0 max-[637px]:gap-y-10">
				<div className="w-[700px] h-[300px] text-white flex flex-col justify-between max-[1025px]:text-center max-[1025px]:items-center max-[637px]:w-full max-[637px]:gap-y-5 max-[637px]:h-auto">
					<h3 className='text-white text-3xl max-[637px]:text-xl font-Bellefair mb-[15px]'>{activeDestination.job}</h3>
					<h1 className="text-6xl max-[637px]:text-2xl font-Bellefair mb-[27px]">{activeDestination.name}</h1>
					<p className="text-lg leading-8 w-[450px] h-[160px] max-[1025px]:h-[160px] max-[1025px]:w-[550px] max-[637px]:text-sm max-[637px]:w-full max-[637px]:h-auto font-Barlow mb-[120px] max-[637px]:mb-[50px]">
						{activeDestination.description}
					</p>
					
					<ul className="text-white flex w-fit gap-x-5 max-[637px]:gap-x-3">
						{Object.keys(destinations).map((key) => (
							<li
								key={key}
								onClick={() => setActiveDestination(destinations[key])}
								className={`text-8xl cursor-pointer border-b-4 border-transparent hover:border-white ${
									activeDestination.name === key.toUpperCase() ? 'border-white' : ''
								}`}
							>
								<div className='w-3 h-3 bg-white rounded-full'></div>
							</li>
						))}
					</ul>
				</div>
				<div className='h-[702px] flex justify-center items-end max-[1025px]:w-96 max-[1025px]:h-[600px] max-[769px]:h-fit max-[637px]:w-auto max-[637px]:h-[255px]'>
					<img className='w-auto max-[637px]:h-full' src={activeDestination.image} alt={activeDestination.name} />
				</div>
			</div>
		</div>
	);
}

export default Destination;
