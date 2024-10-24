import { useState } from 'react';
import { motion } from 'framer-motion'; // Import framer-motion
import MoonImg from "../assets/Moon.png";
import MarsImg from "../assets/Mars.png";
import EuropaImg from "../assets/Europa.png";
import TitanImg from "../assets/Titan.png";

function Destination() {
	const destinations = {
		Moon: {
			name: "MOON",
			description:
				"See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
			distance: "384,400KM",
			travelTime: "3 DAYS",
			image: MoonImg,
		},
		Mars: {
			name: "MARS",
			description:
				"Explore the red planet! Known for its distinctive color, it's a must-see for space tourists. Visit the Olympus Mons and the infamous Valles Marineris.",
			distance: "225 MIL. KM",
			travelTime: "9 MONTHS",
			image: MarsImg,
		},
		Europa: {
			name: "EUROPA",
			description:
				"The smallest of the Galilean moons, Europa offers an icy wonderland for visitors. Don't forget to check out the subsurface ocean!",
			distance: "628 MIL. KM",
			travelTime: "3 YEARS",
			image: EuropaImg,
		},
		Titan: {
			name: "TITAN",
			description:
				"Experience Titan, the largest moon of Saturn, known for its dense atmosphere and surface liquid lakes. A truly unique destination.",
			distance: "1.2 BIL. KM",
			travelTime: "7 YEARS",
			image: TitanImg,
		},
	};

	const [activeDestination, setActiveDestination] = useState(destinations.Moon);

	// Variants for animation
	const fadeIn = {
		hidden: { opacity: 0, x: -50 },
		visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
		exit: { opacity: 0, x: 50, transition: { duration: 0.5 } },
	};

	const imageVariants = {
		hidden: { opacity: 0, scale: 0.8 },
		visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
		exit: { opacity: 0, scale: 0.8, transition: { duration: 0.5 } },
	};

	return (
		<div className="bg-[url(./assets/DesktopDestination.jpg)] bg-no-repeat bg-cover h-screen flex justify-center items-start flex-col pt-20 max-[1025px]:justify-start max-[637px]:pt-20 max-[637px]:px-5">
			<div className='pl-52 pt-[50px] max-[1025px]:px-10 max-[637px]:pl-0 max-[637px]:pt-0'>
				<h1 className='text-white text-3xl max-[637px]:text-xl'>
					<span>01 </span>PICK YOUR DESTINATION
				</h1>
			</div>
			<div className="w-full flex justify-between items-center p-36 px-52 max-[1025px]:flex-col max-[1025px]:py-20 max-[1025px]:pb-0 max-[769px]:py-5 max-[637px]:px-0 max-[637px]:pt-5">
				<motion.div
					variants={imageVariants}
					initial="hidden"
					animate="visible"
					exit="exit"
					key={activeDestination.name}
					className='max-[1025px]:mb-5 max-[637px]:mb-2 -z-0'
				>
					<img src={activeDestination.image} alt={activeDestination.name} className='max-[637px]:w-40 max-[637px]:h-40 -z-10' />
				</motion.div>
				<div className="w-[445px] h-[472px] text-white flex flex-col justify-between max-[1025px]:text-center max-[769px]:h-fit max-[769px]:gap-y-4 max-[637px]:w-full max-[637px]:gap-y-2">
					<ul className="text-white flex w-fit gap-x-5 max-[1025px]:m-auto max-[1025px]:my-0 max-[637px]:gap-x-3">
						{Object.keys(destinations).map((key) => (
							<li
								key={key}
								onClick={() => setActiveDestination(destinations[key])}
								className={`cursor-pointer text-lg border-b-4 border-transparent hover:border-white ${
									activeDestination.name === destinations[key].name ? 'border-white' : ''
								}`}
							>
								{key}
							</li>
						))}
					</ul>
					<motion.h1
						className="text-8xl max-[637px]:text-5xl"
						variants={fadeIn}
						initial="hidden"
						animate="visible"
						exit="exit"
						key={activeDestination.name}
					>
						{activeDestination.name}
					</motion.h1>
					<motion.p
						className="text-lg leading-8 h-[128px] max-[637px]:text-sm max-[637px]:leading-6 max-[637px]:h-auto"
						variants={fadeIn}
						initial="hidden"
						animate="visible"
						exit="exit"
						key={activeDestination.description}
					>
						{activeDestination.description}
					</motion.p>
					<hr className="max-[637px]:my-4" />
					<div className="flex justify-between max-[637px]:flex-row max-[637px]:gap-y-3">
						<div className="w-1/2 max-[637px]:w-full">
							<div className="text-xs">AVG. DISTANCE</div>
							<div className="text-3xl max-[637px]:text-xl">{activeDestination.distance}</div>
						</div>
						<div className="w-1/2 max-[637px]:w-full">
							<div className="text-xs">EST. TRAVEL TIME</div>
							<div className="text-3xl max-[637px]:text-xl">{activeDestination.travelTime}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Destination;
