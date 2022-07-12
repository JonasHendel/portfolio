import styles from './About.module.css';
import FirstComponent from './FirstComp';
import SecondComponent from './SecondComponent';
import ThirdComponent from './ThirdComponent';

const About = () => {
	return (
		<div className={styles.container}>
			{/* <h1 className='text-4xl font-normal text-sky-900 my-10 md:mt-20 md:mb-12 text-center'>About me</h1> */}

			<div className='flex flex-col items-center my-10 md:mt-20 md:mb-12'>
				<FirstComponent />
				<SecondComponent />
				<ThirdComponent />
			</div>
		</div>
	);
};

export default About;
