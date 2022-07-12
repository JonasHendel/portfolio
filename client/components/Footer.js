import React from 'react';
import { Phone, GitHub, AtSign, Twitter, MapPin } from 'react-feather';

const Footer = () => {
	return (
		<div className='flex justify-center w-screen h-28 bg-slate-800'>
			<div className='flex items-center w-5/6 h-full text-white font-md justify-evenly'>
				<p>Jonas N. Hendel</p>
				<div className='flex'>
					<MapPin className='mr-2' />
					<p>Oslo, Norway</p>
				</div>
				<div className='flex'>
					<Phone className='mr-2' />
					<p>+47 913 86 515</p>
				</div>
				<div className='flex'>
					<AtSign className='mr-2' />
					<p>jonasnhendel@gmail.com</p>
				</div>
				<div className='flex'>
					<GitHub className='mr-2' />
					<p>@jonashendel</p>
				</div>
				<div className='flex'>
					<Twitter className='mr-2' />
					<p>@jonashendel</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
