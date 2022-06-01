import React from 'react';

const Articles = () => {
	const [articles, setarticles] = React.useState([]);
	React.useEffect(() => {
		fetch('https://dev.to/api/articles?username=mrpuppeteer&page=1&per_page=3')
			.then(res => res.json())
			.then(res => {
				setarticles(res);
			});
	}, []);

	return (
		<div className="grid gap-8 px-4 max-w-[1000px] md:w-full mx-auto">
			{articles.map(article => {
				return (
					<div
						key={article.id}
						className="flex flex-col sm:flex-row border-2 border-BrightGray"
					>
						<div className="sm:max-w-[240px]">
							<a href={article.url}>
								<img src={article.social_image} alt={article.title} />
							</a>
						</div>
						<div className="ml-4 p-4">
							<a
								href={article.url}
								className="text-2xl mb-2 tracking-tight text-EbonyClay hover:text-BondiBlue"
							>
								{article.title}
							</a>
							<p>{article.readable_publish_date}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};

const Blog = () => {
	return (
		<div name="blog" className="w-full text-EbonyClay bg-Gallery p-4 pb-16">
			<div className="max-w-[1000px] mx-auto p-4">
				<div className="pb-4 pt-[4.5rem]">
					<p className="text-4xl font-bold inline border-b-4 text-BondiBlue border-BondiBlue">
						Blog
					</p>
					<p className="py-6">\\ Check out some of my latest blog</p>
				</div>

				<Articles />
			</div>
		</div>
	);
};

export default Blog;
