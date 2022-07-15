import { useRef } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

import useOnClickOutside from '../../utils/outerClick';
import useScrollLock from '../../utils/scrollLock';
import styles from '../../styles/ProjectModal.module.css';
import autoprefixer from 'autoprefixer';

const ProjectModal = ({ pos, project, setActiveProject }) => {
	const modalRef = useRef();
	const { unlockScroll } = useScrollLock();

	const closeModal = () => {
		unlockScroll();
		setActiveProject(null);
	};

	useOnClickOutside(modalRef, () => closeModal());

	return (
		<>
			<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.09 }} className={styles.container}></motion.div>
			{/* // 	<motion.div initial={{scale: 0.95}} animate={{ scale: 1 }} transition={{ duration: 0.09 }} ref={ref} className='w-4/6 h-96 bg-white'>
		 		<h1>{project.name} </h1>
			</motion.div>
     <div className={styles.container} >
       <motion.div initial={{width: "265px", left: "880px"}}  className={styles.card}>
         <img className={styles.image} ref={ref} src="./thumbnail_beziercurves.png"/>
       </motion.div>
     </div> */}
			<motion.div
				ref={modalRef}
				initial={{ width: pos.target.clientWidth, left: pos.target.offsetLeft, top: pos.target.offsetTop }}
				animate={{ width: '500px', height: '670px', left: '0px', right: '0px', marginLeft: 'auto', marginRight: 'auto', top: 'auto' }}
				transition={{ type: 'just', duration: 0.2 }}
				className={styles.card}>
				<motion.img className={styles.image} src={project.thumbnail} />
				<motion.div initial={{ height: '0%' }} animate={{ height: '100%' }} transition={{ type: 'spring', stiffness: 100, delay: 0.05, duration: 0.02 }} className={styles.information}>
					<div className='w-full h-full p-7 flex flex-col justify-start'>
						<div>
							<h1 className='font-semibold text-xl'>{project.name}</h1>
							<div className='flex mb-4 mt-3'>
								{project.technologies.map((technology) => (
									<div className='bg-indigo-100 h-fit w-fit px-3 mr-2 text-sm text-center rounded-md border border-indigo-400 text-indigo-800'>
										<p>{technology}</p>
									</div>
								))}
							</div>
							<p className='text-slate-500 h-32'>{project.description}</p>
						</div>
						<div className='w-full flex items-center mt-6 justify-end '>
							<button className='text-red-600 text-center mr-4' onClick={closeModal}>
								Close
							</button>

							<Link href={project.url}>
								<a onClick={unlockScroll} href={project.url} className='py-2  w-48 justify-self-end text-center self-end bg-sky-50 border border-blue-600 text-blue-600 rounded-md'>
									Read more
								</a>
							</Link>
						</div>
					</div>
				</motion.div>
			</motion.div>
		</>
	);
};

export default ProjectModal;
