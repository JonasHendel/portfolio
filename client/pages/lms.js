import ProjectInfoHeader from '../components/ProjectInfoHeader.js';

import styles from '../styles/ProjectInfo.module.css';

const lms = () => {
	const techstack = [
		{
			name: 'Redux',
			image: './logos/redux.png',
		},
		{
			name: 'MongoDB',
			image: './logos/mongodb.png',
		},
		{
			name: 'Multer-S3',
			image: './logos/multer.png',
		},
		{
			name: 'Digital Ocean Buckets',
			image: './logos/digitalocean.png',
		},
		{
			name: 'JSON web token',
			image: './logos/jwt.png',
		},
		{
			name: 'AWS-SDK',
			image: './logos/aws-sdk.jpg',
		},
		{
			name: 'SCSS',
			image: './logos/sass.png',
		},
		{
			name: 'ExpressJS',
			image: './logos/expressjs.png',
		},
		{
			name: 'ReactJS',
			image: './logos/reactjs.png',
		},
		{
			name: 'NextJS',
			image: './logos/nextjs.png',
		},
		{
			name: 'Framer Motion',
			image: './logos/framermotion.jpeg',
		},
	];
	return (
		<div className={styles.outerContainer}>
			<div className={styles.innerContainer}>
				<ProjectInfoHeader
					title={'Learning Management System'}
					techstack={techstack}
					githubUrl={'https://github.com/JonasHendel/lms'}
				/>
				<p className={styles.text}>
					This is a project I made together with a good friend. It is a learning
					management system that features resource upload, posts, a calendar with lessons
					and events, and an admin panel. We got the idea for this project because our
					school had one service for resource and information sharing and another for the
					timetable. So we wanted to combine both into one app.
				</p>
				<h3 className={styles.functionalityHeading}>How does it work?</h3>
				<p className={styles.subHeading}>The calendar</p>
				<p className={styles.text}>
					The calendar can display two different things: Repeating lessons and one-time
					events.
					<br />
					Each lesson has a reference to a course, a start and end time, weekday, and
					location. Other than the lessons, the event start and end time contain a date.
					This is because the events don't repeat themselves but have one specific start
					and end time. Also, note that events overwrite the lessons and have a teal
					color.
				</p>
				<img className={styles.image} style={{ width: '900px' }} src='./lms1.png' />
				<p className={styles.subHeading}>The resources</p>
				<p className={styles.text}>
					To upload and save resources we used digital oceans s3 buckets. This way we
					could easily support a variety of filetypes. We used the AWS-SDK and Multer-S3
					to save the files to our buckets.
				</p>
				<p className={styles.subHeading}>Account creation and authentication</p>
				<p className={styles.text}>
					For Authentication we used json web tokens. <br />
					<br />
					For authentication, we used JSON web tokens. Since it is a learning management
					system, every account will be connected to an organization. To ensure that only
					specific people could create an account, the admin had to create an initial
					account. The admin only enters the name and other optional information like
					grade and then receives a one-time code for the user. When the user wants to
					register, he has to enter the code. Using the code the user is fetched from the
					database and can be updated with a password and email. The code is then
					invalidated.
				</p>
				<img className={styles.image} src='./lms2.png' />
				<p className={styles.subHeading}>The admin features</p>
				<p className={styles.text}>An admin can view, edit and create users</p>

				<img className={styles.image} style={{ width: '900px' }} src='./lms3.png' />
				<p className={styles.text}>...and courses</p>
				<img className={styles.image} style={{ width: '900px' }} src='./lms4.png' />

				<h3 className={styles.heading}>What did I learn?</h3>

				<p className={styles.text}>
					We had plenty of global state, so I used this project as an opportunity to learn
					state management with redux.
					<br />
					<br />
					I learned that a relational database would have been a smarter pick because the
					data like lessons and events are very personalized to the user (relational).
					However, I learned about working with the aggregate function of Mongoose and
					MongoDB.
					<br />
					<br />
					This was also my first time working with file upload. It was really fun working
					with multer-s3, the AWS-SDK, and digital ocean buckets to make this
					functionality.
				</p>
				<h3 className={styles.heading}>Concluding thoughts</h3>

				<p className={styles.text}>
					Even though this project is far from perfect and production-ready, it taught me
					a lot. If I would have to remake it, I would pick a relational database like
					PostgreSQL. This is one of the projects that I didn't "finish", in the sense
					that it is not a fully working product. It is a featured project because it was
					a substantial part of my web development journey and exposed me to many new
					concepts.
				</p>
			</div>
		</div>
	);
};

export default lms;
