import styles from './About.module.css';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const FirstComponent = () => {
	const ref = useRef();

	const [height, setHeight] = useState(624);

	const handleResize = () => {
		console.log('resize');
		if (!ref.current) return;
		setHeight(ref.current.clientHeight);
	};

	useEffect(() => {
		console.log('mount');
		handleResize();
		window.addEventListener('resize', handleResize, false);
	}, []);

	return (
		<div className={styles.innerCard}>
			<motion.div
				ref={ref}
				className={styles.firstCard}
				// whileHover={{ boxShadow: '0px 8px 48px #eeeeee, 0px 4px 8px rgb(66, 71, 76, 0.06), 0px 0px 1px rgb(66, 71, 76, 0.32)', background: 'white' }}
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1, transition: { duration: 0.2, delay: 0.4 } }}
				transition={{ duration: 0.2 }}
				viewport={{ once: true }}>
				<h2 className='text-2xl text-cyan-700 font-semibold'>Who am I?</h2>
				<p className='text-lg font-medium text-slate-700 leading-8'>
					Hey, my name is Jonas and I have been writing code for about 2 years now. Most of my life I have lived in Oslo but I also have strong connections to Germany due to being born and
					having family there. My development journey started out with Python but I soon found my way to web development. I think a beautiful UI/UX is essential for a good program. Therfore
					I also enjoy this part of making a website. Other than learning computer related things, I find joy in learning both maths and physics. What interests me about these two subjects
					is their ability to describe the world and accelerate the advancement of humanity. What also is great about them, is how good they can be combinated with computer science. Other
					than to code I like to kickbox, workout and read in my freetime.
				</p>
			</motion.div>
			<motion.div
				className={styles.sc}
				style={{ height: height }}
				// whileHover={{ boxShadow: '0px 8px 48px #eeeeee, 0px 4px 8px rgb(66, 71, 76, 0.06), 0px 0px 1px rgb(66, 71, 76, 0.32)', background: 'white' }}
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1, transition: { duration: 0.2, delay: 0.4 } }}
				viewport={{ once: true }}
				transition={{ duration: 0.2 }}>
				<div className={styles.languages}>
					<h2 className='text-xl text-pink-700 font-semibold'>Languages</h2>
					<ul className='flex flex-wrap justify-evenly  text-slate-700'>
						<li className='w-1/3 text-center text-lg font-medium'>Norwegian (C2)</li>
						<li className='w-1/3 text-center text-lg font-medium'>German (C2)</li>
						<li className='w-1/3 text-center text-lg font-medium'>English (C1)</li>
					</ul>
				</div>
				<div className={styles.technologies}>
					<h2 className='text-xl text-pink-700 font-semibold'>Technologies</h2>
					<ul className='flex flex-wrap justify-evenly  text-slate-700'>
						<li className='w-1/3 text-center text-lg font-medium'>JavaScript</li>
						<li className='w-1/3 text-center text-lg font-medium'>Python</li>
						<li className='w-1/3 text-center text-lg font-medium'>ReactJS</li>
					</ul>
					<ul className='flex flex-wrap justify-evenly text-slate-700'>
						<li className='w-1/3 text-center text-lg font-medium'>NextJS</li>
						<li className='w-1/3 text-center text-lg font-medium'>ExpressJS</li>
						<li className='w-1/3 text-center text-lg font-medium'>NodeJS</li>
					</ul>
					<ul className='flex flex-wrap justify-evenly text-slate-700'>
						<li className='w-1/3 text-center text-lg font-medium'>HTML</li>
						<li className='w-1/3 text-center text-lg font-medium'>CSS</li>
						<li className='w-1/3 text-center text-lg font-medium'>TailwindCSS</li>
					</ul>
					<ul className='flex flex-wrap justify-evenly text-slate-700'>
						<li className='w-1/3 text-center text-lg font-medium'>MongoDB</li>
						<li className='w-1/3 text-center text-lg font-medium'>PostgreSQL</li>
						<li className='w-1/3 text-center text-lg font-medium'>Redux</li>
					</ul>
					<ul className='flex flex-wrap justify-evenly text-slate-700'>
						<li className='w-1/3 text-center text-lg font-medium'>GraphQL</li>
						<li className='w-1/3 text-center text-lg font-medium'>JSON</li>
						<li className='w-1/3 text-center text-lg font-medium'>SVG</li>
					</ul>
				</div>
				<div className={styles.interests}>
					<h2 className='text-xl text-pink-700 font-semibold'>Interests</h2>
					<ul className='flex flex-wrap justify-evenly text-slate-700'>
						<li className='w-1/3 text-center text-lg font-medium'>Coding</li>
						<li className='w-1/3 text-center text-lg font-medium'>Design</li>
						<li className='w-1/3 text-center text-lg font-medium'>Maths</li>
					</ul>
					<ul className='flex flex-wrap justify-evenly text-slate-700'>
						<li className='w-1/3 text-center text-lg font-medium'>Physics</li>
						<li className='w-1/3 text-center text-lg font-medium'>Kickboxing</li>
						<li className='w-1/3 text-center text-lg font-medium'>Startups</li>
					</ul>
				</div>
			</motion.div>
		</div>
	);
};
export default FirstComponent;
