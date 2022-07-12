import styles from './About.module.css';
import { motion } from 'framer-motion';

const ThirdComponent = () => {
	return (
		<div className={styles.innerCard}>
			<motion.div
				className={styles.bc}
				style={{ marginRight: 10 }}
				// whileHover={{ boxShadow: '0px 8px 48px #eeeeee, 0px 4px 8px rgb(66, 71, 76, 0.06), 0px 0px 1px rgb(66, 71, 76, 0.32)', background: 'white' }}
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1, transition: { duration: 0.2, delay: 0.2 } }}
				transition={{ duration: 0.2 }}
				viewport={{ once: true }}>
				<h2 className='text-2xl text-cyan-700 font-semibold'>Why do I code?</h2>
				<p className='text-lg font-medium text-slate-700 leading-8'>
					I have always had two interests in particular. One one hand, I like the STEM subjects. What I like about these is that they are fundamental to understanding the world, but also
					that without them human progress as we know it today would be unthinkable. I also like doing things where I end up with a useful product. I worked a lot with wood when I was young,
					built things with construction kits and later also made texture packs for computer games. When a good friend though me a little about coding, I soon knew: This is what I want to
					do. On the one hand, this field is extremely diverse and can be combined with other natural sciences. In addition, you end up with a, in most cases, useful program. Since I started
					with coding/computer science the reasons why I do it has never changed. It just feels so good to code, when you finally fix that bug, to learn alot and to have a nice product in
					the end.
				</p>
			</motion.div>
			<motion.div
				className={styles.smallerCard}
				style={{ marginLeft: 10 }}
				// whileHover={{ boxShadow: '0px 8px 48px #eeeeee, 0px 4px 8px rgb(66, 71, 76, 0.06), 0px 0px 1px rgb(66, 71, 76, 0.32)', background: 'white' }}
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1, transition: { duration: 0.2, delay: 0.4 } }}
				transition={{ duration: 0.2 }}
				viewport={{ once: true }}>
				<h2 className='text-2xl text-cyan-700 font-semibold'>Currently working on:</h2>
				<p className='text-lg font-medium text-slate-700 leading-8'>
					Currently I am working on a bookmarking app. I often come across interesting resources online that I want to save for later. I have not yet found a good cross platform,
					frictionless solution with a good export feature for saving links. It will support import and export, web/native app and extension, notes, folders and link rotting prevention.
				</p>
			</motion.div>
		</div>
	);
};
export default ThirdComponent;
