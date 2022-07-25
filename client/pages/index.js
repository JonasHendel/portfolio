import Head from 'next/head';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';
import styles from '../styles/Home.module.css';
import Welcome from '../components/Welcome';
import Projects from '../components/Projects';
import About from '../components/About/index';
import Footer from '../components/Footer';

export default function Home() {
	const projectsRef = useRef();
	return (
		<div>
			<Head>
				<title>Jonas Hendel</title>
				<meta name='description' content='Jonas Hendel portfolio' />
				<meta name='viewport' content='width=device-width, initial-scale=1.0' />
				<link rel='icon' href='/favicon.ico' />
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
				{/* <link href='https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap' rel='stylesheet' /> */}
				{/* <link
					href='https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap'
					rel='stylesheet'
				></link> */}
			</Head>
			<div className='relative w-full h-screen overflow-hidden bgImage'>
				{/* <img className='absolute w-screen contrast-150' src='/Vector.svg' layout="fill"/> */}
				<Welcome projectsRef={projectsRef} />
			</div>
		</div>
	);
}
