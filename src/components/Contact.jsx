import React from 'react';

const Contact = () => {
	return (
		<div
			name="contact"
			className="w-full bg-EbonyClay flex justify-center items-center p-4"
		>
			<form
				method="POST"
				action="https://getform.io/f/3e74d442-d6fa-4b07-835c-e3acfa8a684b"
				className="flex flex-col max-w-[600px] w-full"
			>
				<div className="pb-4 pt-[4.5rem]">
					<p className="text-4xl font-bold inline border-b-4 border-BondiBlue text-BondiBlue">
						Contact
					</p>
					<p className="text-Gallery py-4">
						\\ Submit the form below or shoot me an email -
						nuriksabagas@gmail.com
					</p>
				</div>
				<input
					className="bg-Gallery p-2 focus-visible"
					type="text"
					placeholder="Name"
					name="name"
				/>
				<input
					className="my-4 p-2 bg-Gallery focus-visible"
					type="email"
					placeholder="Email"
					name="email"
				/>
				<textarea
					className="bg-Gallery p-2 focus-visible"
					name="message"
					rows="8"
					placeholder="Message"
				></textarea>
				<button className="text-Gallery border-2 hover:bg-BondiBlue hover:border-BondiBlue px-4 py-3 my-8 mx-auto flex items-center">
					Let's Collaborate
				</button>
			</form>
		</div>
	);
};

export default Contact;
