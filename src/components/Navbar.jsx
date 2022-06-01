import React, { useState } from 'react';
import {
	FaBars,
	FaTimes,
	FaGithub,
	FaDiscord,
	FaFacebook,
	FaTwitter,
} from 'react-icons/fa';
import Logo from '../assets/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const handleClick = () => setNav(!nav);

	return (
		<div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-EbonyClay text-BondiBlue">
			<div>
				<img src={Logo} alt="Logo" style={{ width: '50px' }} />
			</div>

			{/* menu */}
			<ul className="hidden md:flex">
				<li>
					<Link to="home" smooth={true} duration={500}>
						Home
					</Link>
				</li>
				<li>
					<Link to="about" smooth={true} duration={500}>
						About
					</Link>
				</li>
				<li>
					<Link to="skills" smooth={true} duration={500}>
						Skills
					</Link>
				</li>
				<li>
					<Link to="blog" smooth={true} duration={500}>
						Blog
					</Link>
				</li>
				<li>
					<Link to="contact" smooth={true} duration={500}>
						Contact
					</Link>
				</li>
			</ul>

			{/* hamburger */}
			<div onClick={handleClick} className="md:hidden z-10">
				{!nav ? <FaBars /> : <FaTimes />}
			</div>

			{/* mobile menu */}
			<ul
				className={
					!nav
						? 'hidden'
						: 'absolute top-0 left-0 w-full h-screen bg-Gallery flex flex-col justify-center items-center'
				}
			>
				<li className="py-6 text-4xl">
					<Link onClick={handleClick} to="home" smooth={true} duration={500}>
						Home
					</Link>
				</li>
				<li className="py-6 text-4xl">
					<Link onClick={handleClick} to="about" smooth={true} duration={500}>
						About
					</Link>
				</li>
				<li className="py-6 text-4xl">
					<Link onClick={handleClick} to="skills" smooth={true} duration={500}>
						Skills
					</Link>
				</li>
				<li className="py-6 text-4xl">
					<Link onClick={handleClick} to="blog" smooth={true} duration={500}>
						Blog
					</Link>
				</li>
				<li className="py-6 text-4xl">
					<Link onClick={handleClick} to="contact" smooth={true} duration={500}>
						Contact
					</Link>
				</li>
			</ul>

			{/* social icons */}
			<div className="hidden lg:flex fixed flex-col top-[35%] left-0">
				<ul>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#171515]">
						<a
							className="flex justify-between items-center w-full text-Gallery"
							href="https://github.com/MrPuppeteer/"
						>
							Github <FaGithub size={30} />
						</a>
					</li>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#4267b2]">
						<a
							className="flex justify-between items-center w-full text-Gallery"
							href="https://facebook.com/mrpppteer"
						>
							Facebook <FaFacebook size={30} />
						</a>
					</li>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#5865f2]">
						<a
							className="flex justify-between items-center w-full text-Gallery"
							href="https://discordapp.com/users/462162942683643905"
						>
							Discord <FaDiscord size={30} />
						</a>
					</li>
					<li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#1da1f2]">
						<a
							className="flex justify-between items-center w-full text-Gallery"
							href="https://twitter.com/mrpppteer"
						>
							Twitter <FaTwitter size={30} />
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
