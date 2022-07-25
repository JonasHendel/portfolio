import ProjectInfoHeader from '../components/ProjectInfoHeader.js';

import styles from '../styles/ProjectInfo.module.css';

const mlc = () => {
	const techstack = [
		{
			name: 'ReactJS',
			image: './logos/reactjs.png',
		},
		{
			name: 'NextJS',
			image: './logos/nextjs.png',
		},
		{
			name: 'ExpressJS',
			image: './logos/expressjs.png',
		},
		{
			name: 'LeafletJS',
			image: './logos/leaflet.jpeg',
		},
		{
			name: 'React-Pdf',
			image: './logos/reactpdf.png',
		},
	];
	return (
		<div className={styles.outerContainer}>
			<div className={styles.innerContainer}>
				<ProjectInfoHeader
					title={'Meeting Location Calculator'}
					githubUrl={'https://github.com/JonasHendel/mlc'}
					techstack={techstack}
				/>
				<p className={styles.text}>
					This program calculates a meeting point where the emissions of the flights to it
					are minimal. I am aware that it might not be 100% obvious what exactly the
					program does just yet but I hope it will be clearer after an example: If a
					company has offices in multiple countries and wants to have a meeting with
					participants from each office, this program is able to calculate the airport to
					which the combined CO2 emissions are minimised.
				</p>
				<h3 className={styles.functionalityHeading}>How does it work?</h3>
				<p className={styles.subHeading}>The geodesic median</p>
				<p className={styles.text}>
					All start points are passed to the geodesic median function. This function then
					calculates the point, to where to sum of the distances is minimal. There is a
					direct connection between emissions and distances flown. Therefore this is a
					good start for further calculations. This{' '}
					<a href='https://twitter.com/jonashendel/status/1520433319472627713?s=20&t=NlUucwLjSkJuX-JGe7hmkw'>
						Twitter thread
					</a>{' '}
					I wrote further explains how the algorithm works.
					<img className={styles.image} src='./mlc1.png' />
				</p>
				<p className={styles.subHeading}>Considering long-haul flights</p>
				<p className={styles.text}>
					For short/medium-haul flights the geodesic median can be calculated with even
					weights for each start point. Yet, if a long haul trip is included, the goal is
					to minimize the distance of this flight, while keeping the number of long haul
					flights minimal. This is important because the airplanes used for long-haul
					flights usually emit more than twice the amount of CO2 than the airplanes used
					for short/medium-haul flights. So if there is a long-haul flight, the meeting
					point is recalculated using weights and certain stoppers to ensure minimal
					emissions.
				</p>
				<p className={styles.subHeading}>Find the closest Airports</p>
				<p className={styles.text}>
					The meeting point has to be an airport since airplanes can't land anywhere. I
					have written a function that calculates the n closest airports to any
					coordinates in the world. It uses the haversine formula and an array of all
					commercial airports.
				</p>
				<p className={styles.subHeading}>Calculate emissions and distances</p>
				<p className={styles.text}>
					The calculated meeting point (airport) is then passed into a function that
					calculates CO2 emissions and distances for every flight to the median point from
					the start points. Finding good data was the most complicated part of this
					function. Eventually I found a dataset with the emission data for almost every
					airplane there is. However I don't know the exact airplane model for every trip,
					so I had to figure out which airplanes are the most popular for short, medium
					and long haul flights. I then calculated the average emeissions for each
					category.
				</p>
				<p className={styles.subHeading}>PDF</p>
				<p className={styles.text}>
					I also added a PDF functionality using react-pdf to enable the user to save and
					export more detailed information about the trips.
				</p>
				<img className={styles.image} src='./mlc2.png' />

				<h3 className={styles.heading}>What did I learn?</h3>

				<p className={styles.text}>
					What I learned about the most was geometry and how to find good data. A big part
					of the project was reading papers, researching for data, and validating this
					data.
					<br />
					<br />I also learned about working with maps, longitude/latitude, and spheres.
					More precisely I learned about the Leaflet library.
				</p>
				<h3 className={styles.heading}>Concluding thoughts</h3>

				<p className={styles.text}>
					This is my most complicated project until now, but also the one I enjoyed
					working on the most. I really like how it has a direct connection to the real
					world and how it can solve a real problem. I wished I would have had access to
					an API to get more detailed information about emissions, routes, and airplane
					model but for this I would need direct contact with an aviation company or
					enough budget for one of their APIs.
				</p>
			</div>
		</div>
	);
};

export default mlc;
