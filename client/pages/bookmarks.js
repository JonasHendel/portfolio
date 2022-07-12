import ProjectInfoHeader from '../components/ProjectInfoHeader.js';

import styles from '../styles/ProjectInfo.module.css';

// image: './logos/'

const bookmarks = () => {
	const techstack = [
		{
			name: 'TypeGraphQL',
			image: './logos/TypeGraphQL.jpeg',
		},
		{
			name: 'GraphQL',
			image: './logos/Graphql.png',
		},
		{
			name: 'Apollo GraphQL',
			image: './logos/apollogql.svg',
		},
		{
			name: 'TypeORM',
			image: './logos/typeorm.png',
		},
		{
			name: 'PostgreSQL',
			image: './logos/postgresql.png',
		},
		{
			name: 'JSON web token',
			image: './logos/jwt.png',
		},
		{
			name: ' Framer motion',
			image: './logos/framermotion.jpeg',
		},
		{
			name: 'Swift',
			image: './logos/swift.png',
		},
		{
			name: 'ExpressJS',
			image: './logos/expressjs.png',
		},
		{
			name: 'TypeScript',
			image: './logos/typescript.png',
		},
		{
			name: 'NextJS',
			image: './logos/nextjs.png',
		},
		{
			name: 'ReactJS',
			image: './logos/ReactJS.png',
		},
	];
	return (
		<div className={styles.outerContainer}>
			<div className={styles.innerContainer}>
				<ProjectInfoHeader title={'Bookmarks'} techstack={techstack} />
				<p className={styles.text}>
					As the name suggests this is a bookmarking app that I am still working on. I often come across interesting resources online that I want to save for later. I have not yet found a
					good cross-platform, frictionless solution with a good export feature for saving links. Another problem that I face is forgetting links I have bookmarked. The services will support
					import and export, web/native app and extensions, notes, folders, and link rotting prevention.
				</p>
				<img className={styles.image} style={{ width: 900 }} src='./bm2.png' />
				<h3 className={styles.functionalityHeading}>How does it work?</h3>
				<p className={styles.subHeading}>Shortcuts</p>
				<p className={styles.text}>
					I want it to be really easy to navigate the app: You can just paste when viewing the home screen and it will automatically open the "create bookmark" form. The URL field will
					contain whatever was pasted. To save the bookmark you press "command + enter"
				</p>
				<img className={styles.image} src='./bm1.png' />
				<p className={styles.subHeading}>Automatic title and favicon</p>
				<p className={styles.text}>
					A title for the bookmark will be required. Since I want the bookmarking process to go fast, I have written a function that automatically fetches the site title. This can then be
					edited if wanted but is the default title. The site's favicon is also fetched.
				</p>
				<p className={styles.subHeading}>Organising Bookmarks</p>
				<p className={styles.text}>
					There are two ways to organize bookmarks: categories and folders. Why not just folders? I have made the experience that things get lost in folders. You save it there but then
					forget about it. And you won't find it unless you open that exact folder or search the bookmark title. Categories are there to increase the chance that you see a bookmark that you
					may have forgotten or don't remember the exact title for. They allow for a broader search.
				</p>
				<p className={styles.subHeading}>Safari extension</p>
				<p className={styles.text}>The bookmarking experience is supposed to be seamless. I have written an Ios Share Extension in Swift to enable a native feel when bookmarking links.</p>
				<p className={styles.subHeading}>Random links</p>
				<p className={styles.text}>
					One of the main focuses of this app is reminding people of their bookmarks. The user will get a random suggestion of three bookmarks every time he refreshes the site.
				</p>
				<p className={styles.subHeading}>GraphQL</p>
				<p className={styles.text}>decided to go with GraphQL to prevent over/under fetching and to simplify dealing with the client-side fetching.</p>

				<h3 className={styles.heading}>Upcoming features</h3>
				<p className={styles.subHeading}>Export/Import bookmarks</p>
				<p className={styles.text}>
					I'm planning to add exporting and importing functionality. The importing is essential to make it easier for the user to switch from browser bookmarks to this website. Exporting is
					important so the user does not completely rely on the website being up forever.
				</p>
				<p className={styles.subHeading}>Archive links</p>
				<p className={styles.text}>
					Just because you can find an article under a URL now, does not mean you will be able to find it forever. The website will save a copy from the site when it is bookmarked to prevent
					this. You can then view the site directly in the app.
				</p>
				<p className={styles.subHeading}>Shared folder</p>
				<p className={styles.text}>
					Another feature I'm planning on integrating is shared folders. This will allow users to save bookmarks to shared folders. This will for example be useful when a team researches and
					wants to have a central place for links
				</p>
				<p className={styles.subHeading}>OAuth</p>
				<p className={styles.text}>For now, I have integrated Authentication using JSON web tokens. In the future, I want to use OAuth instead.</p>
				<p className={styles.subHeading}>React Native App</p>
				<p className={styles.text}>I will code a React Native app to make it easier for mobile users to use the program.</p>

				<h3 className={styles.heading}>What did I learn?</h3>
				<p className={styles.text}>
					This is my first big project where I use GraphQL, TypeORM, and TypeScript. I also learned how to make apple app extensions. I also used this project to get more familiar with
					different authentication methods.
				</p>
				<h3 className={styles.heading}>Concluding thoughts</h3>

				<p className={styles.text}>
					Even though it is not finished yet, it is the project I use the most. I also find great joy in designing and developing this website. I also enjoy that I learn a lot about
					different frameworks and libraries while making a useful app.
				</p>
			</div>
		</div>
	);
};

export default bookmarks;
