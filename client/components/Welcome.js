import { GitHub, ArrowDown } from 'react-feather';
import { motion, useAnimation } from 'framer-motion';
import { useEffect, useState } from 'react';

import useInterval from '../utils/useInterval';
import CubicBezier from './BezierCurve';

const Welcome = ({ projectsRef }) => {
	const [url, setUrl] = useState('https://github.com/JonasHendel');

	const controls = useAnimation();

	const variants = {
		githubToTwitter: {
			d: [
				'M15.4996 23.0653C15.4243 18.0447 16.0016 18.3278 14.5501 16.1381C21.9167 15.6331 22.0633 8.13324 19.5955 5.47522C20.1889 2.98603 19.581 2.1287 19.3475 1.58751C17.4825 1.68567 17.3058 2.19611 15.3818 3.15809C15.3818 3.15809 13.6719 2.70431 12 2.70431C10.3281 2.70431 8.69413 3.15809 8.69413 3.15809C6.77016 2.19611 6.59347 1.68567 4.7284 1.58751C4.49491 2.1287 3.88708 2.98603 4.48041 5.47522C2.01261 8.13324 2.15926 15.6331 9.52586 16.1381C8.07431 18.3278 8.65165 18.0447 8.57634 23.0653',
				'M0.987834 18.9547C3.38115 20.5 8.99442 22.0035 13.5575 19.9158C18.1205 17.8282 21.5592 12.6877 20.7241 6.57381C22.3198 5.3913 22.8562 3.81321 23.0489 3.00323C20.8969 4.24074 21.2756 3.94283 19.839 4.39875C19.839 4.39875 18.262 3.10535 16.5901 3.10535C14.9182 3.10535 13.4028 4.33716 13.4028 4.33716C12.6637 5.13784 12 5.94677 12 8.41754C6.39685 8.7101 3.95787 5.11856 2.99397 3.93682C1.4696 7.86323 1.39261 14.4072 8.01914 16.9227C5.98177 18.5213 3.1927 19.0301 1.04034 18.8911',
			],
			transition: {
				ease: 'easeInOut',
				duration: 2,
			},
		},
		twitterToGithub: {
			d: [
				'M0.987834 18.9547C3.38115 20.5 8.99442 22.0035 13.5575 19.9158C18.1205 17.8282 21.5592 12.6877 20.7241 6.57381C22.3198 5.3913 22.8562 3.81321 23.0489 3.00323C20.8969 4.24074 21.2756 3.94283 19.839 4.39875C19.839 4.39875 18.262 3.10535 16.5901 3.10535C14.9182 3.10535 13.4028 4.33716 13.4028 4.33716C12.6637 5.13784 12 5.94677 12 8.41754C6.39685 8.7101 3.95787 5.11856 2.99397 3.93682C1.4696 7.86323 1.39261 14.4072 8.01914 16.9227C5.98177 18.5213 3.1927 19.0301 1.04034 18.8911',
				'M15.4996 23.0653C15.4243 18.0447 16.0016 18.3278 14.5501 16.1381C21.9167 15.6331 22.0633 8.13324 19.5955 5.47522C20.1889 2.98603 19.581 2.1287 19.3475 1.58751C17.4825 1.68567 17.3058 2.19611 15.3818 3.15809C15.3818 3.15809 13.6719 2.70431 12 2.70431C10.3281 2.70431 8.69413 3.15809 8.69413 3.15809C6.77016 2.19611 6.59347 1.68567 4.7284 1.58751C4.49491 2.1287 3.88708 2.98603 4.48041 5.47522C2.01261 8.13324 2.15926 15.6331 9.52586 16.1381C8.07431 18.3278 8.65165 18.0447 8.57634 23.0653',
			],
			transition: {
				ease: 'easeInOut',
				duration: 2,
			},
		},
	};

	useInterval(() => {
		if (url === 'https://github.com/JonasHendel') {
			controls.start('githubToTwitter');
			setUrl('https://twitter.com/jonashendel');
		} else {
			controls.start('twitterToGithub');
			setUrl('https://github.com/JonasHendel');
		}
	}, 5000);

	const executeScroll = () => {
		projectsRef.current.scrollIntoView();
	};

	return (
		<>
			<div className='h-fit lg:h-screen relative w-screen overflow-hidden flex lg:items-center justify-evenly'>
				<div className='lg:w-2/5 flex justify-end'>
					<div className='flex flex-col items-center my-16 lg:mt-0 lg:items-start'>
						<div className='mb-10 lg:mb-4 '>
							<p className='font-extrabold text-7xl text-center lg:text-left mb-2 text-black'>
								Jonas
							</p>
							<p className='font-extrabold text-7xl text-center lg:text-left text-sky-800'>
								Hendel
							</p>
						</div>
						<div className='mb-10 '>
							<p className='text-3xl text-center lg:text-left font-light mb-2 text-zinc-600 '>
								Fullstack web developer
							</p>
							<p className='text-3xl text-center lg:text-left font-light mb-2 text-zinc-600 '>
								based in Oslo.
							</p>
						</div>
						<a href={url} target='_blank' className='flex cursor-pointer items-center'>
							<svg
								style={{
									width: 24,
									height: 24,
									borderRadius: 0,
								}}
							>
								<motion.path
									style={{
										stroke: '#52525b',
										strokeWidth: 2,
										strokeLinecap: 'round',
										fill: 'transparent',
									}}
									d='M15.4996 23.0653C15.4243 18.0447 16.0016 18.3278 14.5501 16.1381C21.9167 15.6331 22.0633 8.13324 19.5955 5.47522C20.1889 2.98603 19.581 2.1287 19.3475 1.58751C17.4825 1.68567 17.3058 2.19611 15.3818 3.15809C15.3818 3.15809 13.6719 2.70431 12 2.70431C10.3281 2.70431 8.69413 3.15809 8.69413 3.15809C6.77016 2.19611 6.59347 1.68567 4.7284 1.58751C4.49491 2.1287 3.88708 2.98603 4.48041 5.47522C2.01261 8.13324 2.15926 15.6331 9.52586 16.1381C8.07431 18.3278 8.65165 18.0447 8.57634 23.0653'
									animate={controls}
									variants={variants}
								/>
							</svg>
							<p className='text-xl ml-2 text-zinc-600'>@jonashendel </p>
						</a>
					</div>
				</div>
				<div className='w-3/5 justify-self-end h-full hidden lg:block'>
					<CubicBezier />
				</div>
				{/* <motion.div
					onClick={executeScroll}
					whileTap={{ scale: 0.8, transition: { duration: 0.1 } }}
					className='absolute hidden lg:block cursor-pointer ml-auto mr-auto left-0 right-0 w-8 bottom-20'
				>
					<ArrowDown size={'auto'} />
				</motion.div> */}
			</div>
		</>
	);
};

export default Welcome;
