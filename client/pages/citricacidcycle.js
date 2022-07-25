import ProjectInfoHeader from '../components/ProjectInfoHeader.js';

import styles from '../styles/ProjectInfo.module.css';

const beziercurves = () => {
	const techstack = [
		{
			name: 'ReactJS',
			image: './logos/reactjs.png',
		},
		{
			name: 'NextJS',
			image: './logos/nextjs.png',
		},
		{
			name: 'SVG',
			image: './logos/svg.png',
		},
	];
	return (
		<div className={styles.outerContainer}>
			<div className={styles.innerContainer}>
				<ProjectInfoHeader
					title={'Citric Acid Cycle'}
					githubUrl={'https://github.com/JonasHendel/Citratzyklus'}
					techstack={techstack}
				/>
				<p className={styles.text}>
					This is a website made to expslain the citric acid cycle with an interactive
					graph. I made this website as a graded project for my biology class. The content
					is written in german.
				</p>
				<h3 className={styles.functionalityHeading}>How does it work?</h3>
				<p className={styles.subHeading}>The graph</p>
				<p className={styles.text}>
					The functionality is not that complicated. We have a component with some text
					and then the highlight of the site: The interactive graph. You can hover over
					each step of the process. A more detailed description of the step is then
					displayed. You can also find information about the catalyzing enzyme, the
					chemical reaction, activator, and inhibitor. The graph is made with SVGs.
				</p>

				<img className={styles.image} src='./cac1.png' />

				<h3 className={styles.heading}>What did I learn?</h3>

				<p className={styles.text}>
					I learned about working with SVGs. This was my first time. I had to teach myself
					how to use adobe illustrator, integrate an SVG into ReactJS and make it
					interactive.
				</p>
				<h3 className={styles.heading}>Concluding thoughts</h3>

				<p className={styles.text}>
					Even though it was a pretty simple project I learned a lot about working with
					SVGs which has definitely helped me in later projects. In case you are wondering
					whether the content is correct: My teacher gave me an A for the project ;).###
					Technology
				</p>
			</div>
		</div>
	);
};

export default beziercurves;
