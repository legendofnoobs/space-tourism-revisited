import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function Home() {
	const navigate = useNavigate();

	return (
		<div className="bg-black min-h-screen p-20 px-52 flex bg-[url(./assets/homeBackgroundLandscape.jpg)] bg-no-repeat bg-cover max-[1025px]:bg-[url(./assets/PortraitHome.jpg)] max-[637px]:p-10 max-[637px]:px-5">
			<div className="flex justify-between items-end w-full pb-10 max-[1025px]:flex-col max-[1025px]:justify-around max-[1025px]:items-center max-[1025px]:text-center max-[1025px]:gap-y-20 max-[637px]:pt-12 max-[637px]:pb-0">
				<div className="w-[450px] h-96 flex flex-col justify-between max-[637px]:w-full max-[637px]:h-auto">
					<motion.h3 initial={{ opacity: 0, x: "-10%" }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.2 }} className="text-4xl tracking-widest text-white max-[637px]:text-lg mb-2 font-BarlowCondensed">
						SO, YOU WANT TO TRAVEL TO
					</motion.h3>
					<motion.h1 initial={{ opacity: 0, x: "-10%" }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.2, delay: 0.2 }} className="text-9xl text-white max-[637px]:text-6xl mb-2 font-Bellefair">SPACE</motion.h1>
					<motion.p initial={{ opacity: 0, x: "-10%" }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.2, delay: 0.4 }} className="text-lg leading-8 text-white max-[637px]:text-sm max-[637px]:leading-6 font-Barlow">
						Let’s face it; if you want to go to space, you might as well genuinely go to outer
						space and not hover kind of on the edge of it. Well sit back, and relax because
						we’ll give you a truly out of this world experience!
					</motion.p>
				</div>
				<div>
					<motion.div
						initial={{ opacity: 0, x: "-10%" }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.2, delay: 0.6 }}
						whileHover={{
							scale: 1.1,
							backgroundColor: "rgba(255, 255, 255, 0.3)",
							backdropFilter: "blur(10px)",
						}}
						style={{ willChange: "transform, backdrop-filter" }} // Optimize for animations
						className="bg-white rounded-full w-72 h-72 flex justify-center items-center max-[637px]:w-56 max-[637px]:h-56 cursor-pointer"
						onClick={() => navigate('/about')}
					>
						<button className="text-black text-5xl max-[637px]:text-3xl font-Bellefair">
							EXPLORE
						</button>
					</motion.div>
				</div>
			</div>
		</div>
	);
}

export default Home;
