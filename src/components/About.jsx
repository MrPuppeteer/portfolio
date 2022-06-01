import React from 'react';

const About = () => {
	return (
		<div name="about" className="w-full h-screen bg-Gallery text-BondiBlue">
			<div className="flex flex-col justify-center items-center w-full h-full">
				<div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8">
					<div className="sm:text-right pb-8 pl-4">
						<p className="text-4xl font-bold inline border-b-4 border-BondiBlue">
							About
						</p>
					</div>
					<div></div>
				</div>
				<div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
					<div className="text-EbonyClay sm:text-right text-3xl md:text-4xl font-bold">
						<p>Hello world! I'm BagasN, nice to meet you.</p>
					</div>
					<div className="text-BrightGray">
						<p>
							I'm passionate about building excelent software using web-related
							technologies. I love exploring new things. Especially when they
							involve programming, mathematics, psychology. While in my spare
							time, I read novels or playing video games.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
