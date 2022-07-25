import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import useWindowDimensions from '../utils/useWindowDimensions';

const Dock = () => {
	const dockItems = [
		{
			name: 'Home',
			icon: './icons/HouseIcon.svg',
			url: '/',
			external: false,
		},
		{
			name: 'Projects',
			icon: './icons/FolderIcon.svg',
			url: '/projects',
			external: false,
		},
		{
			name: 'About',
			icon: './icons/UserIcon.svg',
			url: '/about',
			external: false,
		},
		{
			name: 'GitHub',
			icon: './icons/GitHubIcon.svg',
			url: 'https://github.com/JonasHendel',
			external: true,
		},
		{
			name: 'Twitter',
			icon: './icons/TwitterIcon.svg',
			url: 'https://twitter.com/jonashendel',
			external: true,
		},
		{
			name: 'Mail',
			icon: './icons/MailIcon.svg',
			url: 'mailto: jonasnhendel@gmail',
			external: true,
		},
	];

	const [hovered, setHovered] = useState();

	return (
		<div className='fixed left-0 right-0 flex items-end justify-between bg-white h-16 ml-auto mr-auto customShadow w-fit bottom-6 rounded-2xl dock'>
			{dockItems.map((item, index) => (
				<Icon item={item} index={index} hovered={hovered} setHovered={setHovered} />
			))}
		</div>
	);
};

const Icon = ({ item, index, hovered, setHovered }) => {
	const iconRef = useRef();

	const { width } = useWindowDimensions();

	useEffect(() => {
		if (hovered === index) {
			iconRef.current.style.marginBottom = '18px';
			iconRef.current.style.transform = 'scale(1.2)';
		} else if (hovered - 1 === index || hovered + 1 === index) {
			iconRef.current.style.marginBottom = '14px';
			iconRef.current.style.transform = 'scale(1)';
		} else {
			iconRef.current.style.marginBottom = '8px';
			iconRef.current.style.transform = 'scale(1)';
		}
	}, [hovered]);

	const [show, setShow] = useState(false);

	useEffect(() => {
		if (width <= 400 && index >= 4) {
			setShow(true);
		} else setShow(false);
	}, [width]);

	return (
		<motion.div
			style={{ display: show && 'none' }}
			className='cursor-pointer flex flex-col justify-center items-center'
			onMouseEnter={() => setHovered(index)}
			onMouseLeave={() => setHovered()}
		>
			<div className='w-16'>
				{hovered == index && (
					<div className='iconTitleContainer'>
						<motion.p
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							className='iconTitle'
						>
							{item.name}
						</motion.p>
					</div>
				)}
				{item.external ? (
					<a href={item.url} target='_blank'>
						<img src={item.icon} ref={iconRef} className='icon' />
					</a>
				) : (
					<Link href={item.url}>
						<img src={item.icon} ref={iconRef} className='icon' />
					</Link>
				)}
				{/* <div ref={iconRef} className='icon'>

      </div> */}
			</div>
		</motion.div>
	);
};

export default Dock;
