import Link from 'next/link';
import { useState, useEffect } from 'react';
import styles from '../styles/ProjectInfo.module.css';
import useWindowDimensions from '../utils/useWindowDimensions.js';

const projectData = [
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
	// {
	// 	name: 'Citric acid cycle',
	// 	thumbnail: './thumbnail_citricacidcycle.png',
	// 	technologies: ['NextJS', 'SVG'],
	// 	url: '/citricacidcycle',
	// 	description:
	// 		'This is a website made to explain the citric acid cycle with an interactive graph. I made this website as a graded project for my biology class. The content is written in german.',
	// },
];

const projects = () => {
	return (
		<div className='min-h-screen mb-40 flex flex-col py-10 items-center'>
			<h1 className='text-5xl text-center font-bold mt-10 mb-5'>
				Featured <span className='text-sky-900'>Projects</span>
			</h1>
			{projectData.map((project, index) => (
				<Project project={project} index={index} />
			))}
		</div>
	);
};

const Project = ({ project, index }) => {
	const [showImageAbove, setShowImageAbove] = useState(false);

	const { width } = useWindowDimensions();

	useEffect(() => {
		if (width <= 1024) {
			setShowImageAbove(true);
		} else {
			setShowImageAbove(false);
		}
	}, [width]);

	const isOdd = index % 2 !== 0;
	return (
		<div className='flex justify-center mt-9'>
			{isOdd ? (
				<div className='bg-slate-50 py-20 flex justify-center'>
					<div className='flex flex-col lg:flex-row justify-evenly items-center w-4/5'>
						<div className='flex flex-col justify-between md:w-4/5 lg:w-2/5'>
							<div className='flex items-center lg:items-start lg:text-left text-center flex-col'>
								{showImageAbove && (
									<img className={styles.projectImage} src={project.thumbnail} />
								)}
								<p className='font-semibold text-4xl mt-10 lg:mt-0 text-slate-800'>
									{project.name}
								</p>
								<p className='mt-5 text-slate-500 text-xl'>{project.description}</p>
							</div>
							<Link href={project.url}>
								<a className='text-blue-600 text-lg text-center lg:text-left mt-4'>
									Read more
								</a>
							</Link>
						</div>
						{!showImageAbove && (
							<img className={styles.projectImage} src={project.thumbnail} />
						)}
					</div>
				</div>
			) : (
				<div className='py-20 flex justify-center'>
					<div className='flex flex-col lg:flex-row justify-evenly items-center w-4/5'>
						<img className={styles.projectImage} src={project.thumbnail} />

						<div className='flex flex-col justify-between md:w-4/5 lg:w-2/5'>
							<div className='flex items-center lg:items-start lg:text-left text-center flex-col'>
								<p className='font-semibold text-4xl mt-10 lg:mt-0 text-slate-800'>
									{project.name}
								</p>
								<p className='mt-5 text-slate-500 text-xl'>{project.description}</p>
							</div>
							<Link href={project.url}>
								<a className='text-blue-600 text-lg text-center lg:text-left mt-4'>
									Read more
								</a>
							</Link>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default projects;
