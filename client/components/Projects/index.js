import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

import Modal from './ProjectModal';
import useScrollLock from '../../utils/scrollLock';
import useWindowDimensions from '../../utils/useWindowDimensions';
import { useRouter } from 'next/router';

const Projects = ({ projectsRef }) => {
	const [showModal, setShowModal] = useState(true);
	const { width, height } = useWindowDimensions();

	useEffect(() => {
		if (width <= 500 || height <= 700) {
			setShowModal(false);
		} else {
			setShowModal(true);
		}
	}, [width, height]);

	const router = useRouter();
	const projects = [
		{
			name: 'E-commerce site',
			thumbnail: './thumbnail_ecommerce.png',
			technologies: ['Stripe', 'EmailJS', 'Mailchimp', 'Redux', 'NextJS'],
			url: '/ecommerce',
			description:
				' This was my first big web development project: a web-store built using NextJS, Stripe, MongoDB and other frameworks. It has a normal shop, but also a ticket and booking feature. It also has integrated email functionality and a newsletter. It was originally made for a restaurant.',
		},
		{
			name: 'Meeting location calculator',
			thumbnail: './thumbnail_mlc.png',
			url: '/mlc',
			technologies: ['NextJS', 'ExpressJS', 'LeafletJS', 'React-PDF'],
			description:
				'This program calculates the most environmentally friendly meeting point.  If people from multiple countries  want to have a meeting, this program is able to calculate the airport to which the combined CO2 emissions are minimised.',
		},
		{
			name: 'Bookmarking app',
			thumbnail: './thumbnail_bookmark.png',
			url: '/bookmarks',
			technologies: ['GraphQL', 'TypeORM', 'PostgreSQL', 'TypeScript'],
			description:
				'This is a bookmarking app. I often come across interesting resources online that I want to save for later. I have not yet found a good cross platform, frictionless solution with a good export feature for saving links. It will support import and export, web/native app and extensions, notes, folders and link rotting prevention.',
		},
		{
			name: 'Learning management system',
			thumbnail: './thumbnail_lms.png',
			technologies: ['Redux', 'S3-Buckets', 'NextJS', 'ExpressJS', 'SCSS'],
			url: '/lms',
			description:
				'This projects is a learning management system that features resource upload, posts, calendar with lessons and events and an admin panel. We got the idea for this project, because our school had on service for resource and information sharing and another for the timetable. So we wanted to combine both into one app.',
		},
		{
			name: 'Beziér Curves',
			thumbnail: './thumbnail_beziercurves.png',
			technologies: ['NextJS', 'SVG'],
			url: '/beziercurves',
			description:
				'On this website the user can play around with bézier curves. This app shows every dot and line involved in the process of forming one of these curves. To furthermore show how these curves are made there is an animation that moves the dot that "draws" the curve.',
		},
		{
			name: 'Citric acid cycle',
			thumbnail: './thumbnail_citricacidcycle.png',
			technologies: ['NextJS', 'SVG'],
			url: '/citricacidcycle',
			description:
				'This is a website made to explain the citric acid cycle with an interactive graph. I made this website as a graded project for my biology class. The content is written in german.',
		},
	];

	const { lockScroll } = useScrollLock();

	const [pos, setPos] = useState({});

	const [activeProject, setActiveProject] = useState(null);

	const displayModal = (project) => {
		lockScroll();
		setActiveProject(project);
		window.scrollTo(0, projectsRef.current.offsetTop + projectsRef.current.offsetHeight / 2 - window.innerHeight / 2);
		// projectsRef.current.scrollIntoView({ block: 'center' });
	};

	return (
		<div ref={projectsRef} className='flex items-center justify-center w-screen min-h-screen'>
			{activeProject && <Modal pos={pos} setActiveProject={setActiveProject} project={activeProject} />}
			<div className='flex flex-col items-center justify-start w-10/12 min-h-1000px rounded-2xl'>
				<div className='my-4 md:my-10 flex flex-col items-center'>
					<h1 className='mb-2 text-2xl font-bold text-center md:text-5xl text-sky-900'>My Featured Projects</h1>
					<p className='text-lg font-semibold text-center text-zinc-400'>Click on project thumbnail for more information</p>
				</div>
				<div className='my-10 grid md:grid-cols-2 xl:grid-cols-3 gap-y-0 h-fit grid-w-row gap-0 justify-items-center'>
					{projects.map((project, i) => (
						<div
							key={i}
							onClick={(e) => {
								setPos(e);
							}}
							className='flex items-center justify-cente lg:p-5 mb-6 lg:mb-0 h-fit rounded-xl testClass'>
							<div className='flex flex-col w-full'>
								<div onClick={() => (showModal ? displayModal(project) : router.push(project.url))} className='cursor-pointer block hover:block p-2px '>
									<motion.img whileHover={{ scale: 1.02 }} className='w-full h-auto rounded-xl customBorder' src={project.thumbnail} />
								</div>

								<p className='mt-2 text-xl font-semibold text-center text-zinc-700'>{project.name}</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Projects;
