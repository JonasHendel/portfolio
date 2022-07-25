import ProjectInfoHeader from '../components/ProjectInfoHeader.js';

import styles from '../styles/ProjectInfo.module.css';

const beziercurves = () => {
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
			name: 'SVG',
			image: './logos/svg.png',
		},
	];
	return (
		<div className={styles.outerContainer}>
			<div className={styles.innerContainer}>
				<ProjectInfoHeader
					title={'Bezier Curves'}
					githubUrl={'https://github.com/JonasHendel/beziercurves'}
					techstack={techstack}
				/>
				<p className={styles.text}>
					On this website the user can play around with bézier curves. One might say that
					you can do this in almost every design/illustration app. However, this app shows
					every dot and line involved in the process of forming one of these curves. It
					features both quadratic (3 control points) and cubic (4 control points) bézier
					curves. To furthermore show how these curves are made there is an animation that
					moves the dot that "draws" the curve.
				</p>
				<h3 className={styles.functionalityHeading}>How does it work?</h3>
				<p className={styles.subHeading}>The curve</p>
				<p className={styles.text}>
					The steps to create a bézier curve are the same for n control points. However,
					the more control points you have, to more calculations you have to do. Therefore
					I'm going to explain how quadratic bézier curves are made:
				</p>
				<ul>
					<li>
						<p className={styles.listElement}>
							<span className={styles.dot}></span>Quadratic béziers have 3 control
							points (P1, P2, P3).
						</p>
						<img className={styles.image} src='./bc1.png' />
					</li>
					<li>
						<p className={styles.listElement}>
							<span className={styles.dot}></span>You can calculate two points (red)
							in between P1, P2 and P3, P2 with the function (1-t)*P1+t*P2 where{' '}
							<br /> 0 &#60;= t &#60;=1.
						</p>
						<img className={styles.image} src='./bc2.png' />
					</li>
					<li>
						<p className={styles.listElement}>
							<span className={styles.dot}></span>Using the same function we can now
							use these two red points to calculate the final point (blue).
						</p>
						<img className={styles.image} src='./bc3.png' />
					</li>
					<li>
						<p className={styles.listElement}>
							<span className={styles.dot}></span>If you now change t from 0 to 1 the
							final point will move along a curve. Our bézier curve.
						</p>
						<img className={styles.image} src='./bc4.png' />
					</li>
				</ul>
				<p className={styles.subHeading}>The animation</p>
				<p className={styles.text}>
					The animation was quite easy. I just had to incrementally change t between 0 and
					1. I added an interval that adds or subtracts 0.001 to t every 5 ticks.
					<br />
					<br />
					One thing I had to consider, was stopping as soon as t was equal to 0 or 1 and
					then respectively either increase or decrease the value again.
				</p>
				<p className={styles.subHeading}>Making the control points moveable</p>
				<p className={styles.text}>
					To make the curve interactive I added a handlePointerDown, handlePointerMove,
					and a handlePointerUp function to every control point. The 3 functions are
					updating the position of the points accordingly. A useEffect hook is set to run
					and calculate the new curve every time a control point changes.
					<br />
					<br />
					One problem that occurred cured when making the control points draggable, was
					their size. Initially, you had to be really precise to move the points. To solve
					this I added a bigger circle above every control point, this is the element that
					is actually being moved. The position for both points are the same, it is only
					the radius that varies.
				</p>
				<img className={styles.image} src='./bc5.png' />
				<h3 className={styles.heading}>What did I learn?</h3>

				<p className={styles.text}>
					I learned how bézier curves work. The fact that you can create a perfectly
					smooth curve from just three points might sound counterintuitive at first, but
					after playing around with these curves on GeoGebra (or now on the website) it
					starts to make sense.
					<br />
					<br />
					Furthermore, I improved my knowledge of SVGs and learned that an external
					animation library is not always the best choice: If you already have the
					functions to calculate the next position of the element, why not just update it
					directly?
					<br />
					<br />
					In addition, I hadn't worked a lot with draggable content before. So getting my
					hands dirty with this was an interesting experience.
				</p>
				<h3 className={styles.heading}>Concluding thoughts</h3>

				<p className={styles.text}>
					This was a fun 3 day project. It taught me a lot about working with SVGs in
					React whilst not being too complicated. In my opinion it is also pretty
					beautiful to look at.
				</p>
			</div>
		</div>
	);
};

export default beziercurves;
