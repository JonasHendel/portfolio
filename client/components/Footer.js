import React from 'react';
import { Phone, GitHub, AtSign, Twitter, MapPin } from 'react-feather';

const Footer = () => {
	return (
		<div className='flex flex-col  justify-center w-screen h-fit lg:h-28 bg-slate-800'>
			<div className='flex flex-col lg:flex-row items-center lg:w-5/6 h-full text-white font-md justify-evenly'>
				<p className='my-4 lg:mb-0'>Jonas N. Hendel</p>
				<div className='flex mb-4 lg:mb-0'>
					<MapPin className='mr-2' />
					<p>Oslo, Norway</p>
				</div>
				<div className='flex mb-4 lg:mb-0'>
					<Phone className='mr-2' />
					<p>+47 913 86 515</p>
				</div>
				<div className='flex mb-4 lg:mb-0'>
					<AtSign className='mr-2' />
					<p>jonasnhendel@gmail.com</p>
				</div>
				<div className='flex mb-4 lg:mb-0'>
					<GitHub className='mr-2' />
					<p>@jonashendel</p>
				</div>
				<div className='flex mb-4 lg:mb-0'>
					<Twitter className='mr-2' />
					<p>@jonashendel</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
