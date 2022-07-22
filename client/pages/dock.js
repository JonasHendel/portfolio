import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
const dock = () => {
	const dockItems = [
		{
			name: 'Home',
			icon: '',
		},
		{
			name: 'Home',
			icon: '',
		},
		{
			name: 'Home',
			icon: '',
		},
		{
			name: 'Home',
			icon: '',
		},
		{
			name: 'Home',
			icon: '',
		},
	];

	const [hovered, setHovered] = useState();
	return (
		<div className='relative w-screen h-screen'>
			<div className='absolute left-0 right-0 flex items-end justify-between h-16 ml-auto mr-auto customShadow w-fit bottom-6 rounded-2xl dock'>
				{dockItems.map((item, index) => (
					<Icon index={index} hovered={hovered} setHovered={setHovered} />
				))}
			</div>
		</div>
	);
};

const Icon = ({ index, hovered, setHovered }) => {
	const iconRef = useRef();

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

	return (
		<motion.div
			className='cursor-pointer'
			onMouseEnter={() => setHovered(index)}
			onMouseLeave={() => setHovered()}
		>
			<div ref={iconRef} className='icon'></div>
		</motion.div>
	);
};

export default dock;
