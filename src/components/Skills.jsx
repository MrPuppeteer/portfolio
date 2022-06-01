import React from 'react';

import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import Github from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Mongo from '../assets/mongo.png';

const Icon = props => {
	return (
		<div className="shadow-md shadow-black hover:scale-110 duration-500">
			<img
				className="w-20 mx-auto mt-2"
				src={props.src}
				alt={props.name + ' icon'}
			/>
			<p className="my-4">{props.name}</p>
		</div>
	);
};

const Skills = () => {
	return (
		<div
			name="skills"
			className="w-full sm:h-screen bg-EbonyClay text-Gallery p-4 pb-16 sm:pb-4"
		>
			{/* Container */}
			<div className="max-w-[1000px] mx-auto p-4 pt-[4.5rem] sm:pt-4 flex flex-col justify-center w-full h-full">
				<div>
					<p className="text-BondiBlue text-4xl font-bold inline border-b-4 border-BondiBlue">
						Skills
					</p>
					<p className="py-4">\\ These are the technologies I've worked with</p>
				</div>

				<div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
					<Icon name="HTML" src={HTML} />
					<Icon name="CSS" src={CSS} />
					<Icon name="JavaScript" src={JavaScript} />
					<Icon name="React" src={ReactImg} />
					<Icon name="Github" src={Github} />
					<Icon name="NodeJS" src={Node} />
					<Icon name="MongoDB" src={Mongo} />
					<Icon name="Tailwind CSS" src={Tailwind} />
				</div>
			</div>
		</div>
	);
};

export default Skills;
