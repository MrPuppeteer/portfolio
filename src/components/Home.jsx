import React, { useState } from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll';

const Home = () => {
	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);

	return (
		<div name="home" className="w-full h-screen bg-EbonyClay">
			{/* Container */}
			<div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
				<p className="text-BondiBlue">Hi, my name is</p>
				<h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-Gallery">
					Bagas Nuriksan
				</h1>
				<h2 className="text-4xl sm:text-5xl md:text-7xl font-bold text-slate-400">
					I code stuff.
				</h2>
				<p className="text-slate-400 py-4 max-w-[700px]">
					I'm a full-stack developer. I spent my day staring at the screen,
					centering a div. Currently, I'm focused on learning and building
					responsive full-stack web applications.
				</p>
				<div>
					<button className="text-Gallery border-Gallery group border-2 px-6 py-3 my-2 flex items-center hover:bg-BondiBlue hover:border-BondiBlue focus-visible:outline-0">
						<Link
							className="flex items-center"
							onClick={handleClick}
							to="about"
							smooth={true}
							duration={500}
						>
							View
							<span className="group-hover:rotate-90 duration-300">
								<HiArrowNarrowRight className="ml-6" />
							</span>
						</Link>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
