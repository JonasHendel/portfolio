import styles from './About.module.css';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

const SecondComponent = () => {
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
				className={styles.smallerCard}
				ref={ref}
				style={{ marginRight: 10 }}
				// whileHover={{ boxShadow: '0px 8px 48px #eeeeee, 0px 4px 8px rgb(66, 71, 76, 0.06), 0px 0px 1px rgb(66, 71, 76, 0.32)', background: 'white' }}
				transition={{ duration: 0.2 }}
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1, transition: { duration: 0.2, delay: 0.2 } }}
				viewport={{ once: true }}>
				<h2 className='text-2xl text-cyan-700 font-semibold'>What are my ambitions?</h2>
				<p className='text-lg font-medium text-slate-700 leading-8'>
					I wan't to get an even deeper understanding of ReactJS and how it works under the hood. Furthermore I aim to improve my knowledge around SQL databases. My ambition is to make more
					projects like the meeting location calculator. Projects that are more math/science based and have a direct connection to the real world.
				</p>
			</motion.div>
			<motion.div
				className={styles.bc}
				style={{ marginLeft: 10, height: height }}
				// whileHover={{ boxShadow: '0px 8px 48px #eeeeee, 0px 4px 8px rgb(66, 71, 76, 0.06), 0px 0px 1px rgb(66, 71, 76, 0.32)', background: 'white' }}
				transition={{ duration: 0.2 }}
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1, transition: { duration: 0.2, delay: 0.4 } }}
				viewport={{ once: true }}>
				<h2 className='text-2xl text-cyan-700 font-semibold'>How do I learn to code?</h2>
				<p className='text-lg font-medium text-slate-700 leading-8'>
					I have learned by reading texts and by watching videos. The latter really helped me and is still very useful when I want to learn a new topic. Seeing how another person does
					something and copying it, helps me get an understanding/intuition for programming languages, frameworks and libraries. When I get more advanced in a certain area I switch over to
					texts. I have found that most advanced knowledge is transmitted in blog articles or documentation. As I mentioned I always start out with a video tutorial to get introduced to the
					topic. From there on I start using what I just learned in a project. Then I learn whenever I need to figure out how to do something. Occasionally I sit down and read the
					documentation to further understand what is possible with the tool. I have found that this is the most important part of learning. Learning what is possible to do.
				</p>
			</motion.div>
		</div>
	);
};
export default SecondComponent;
