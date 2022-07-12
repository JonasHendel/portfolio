import ProjectInfoHeader from '../components/ProjectInfoHeader.js';

import styles from '../styles/ProjectInfo.module.css';

const ecommerce = () => {
	const techstack = [
		{
			name: 'Stripe',
			image: './logos/stripe.png',
		},
		{
			name: 'MongoDB',
			image: './logos/mongodb.png',
		},
		{
			name: 'EmailJS',
			image: './logos/emailjs.jpeg',
		},
		{
			name: 'SendGrid',
			image: './logos/sendgrid.png',
		},
		{
			name: 'JSON web token',
			image: './logos/jwt.png',
		},
		{
			name: 'Mailchimp',
			image: './logos/mailchimp.png',
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
				<ProjectInfoHeader title={'E-Commerce Store'} techstack={techstack} />
				<p className={styles.text}>
					This was my first big web development project: a web-store built using NextJS, Stripe, MongoDB and other frameworks. It has a normal shop, but also a ticket and booking feature. It
					also has integrated email functionality and a newsletter. It was originally made for a restaurant.
				</p>
				<h3 className={styles.functionalityHeading}>How does it work?</h3>
				<p className={styles.subHeading}>The store</p>
				<p className={styles.text}>
					The store works like every other internet store. You can add items to your cart, log in and then pay for your items. You will then receive a confirmation email with order details.
				</p>
				<p className={styles.subHeading}>Course Tickets</p>
				<p className={styles.text}>
					On this website you can also buy tickets for cooking courses. The purchase process is quite similar to when buying a product, with the difference being the confirmation email. This
					one contains the ticket that has to be shown at entry.
				</p>
				<p className={styles.subHeading}>Event booking</p>
				<p className={styles.text}>
					To book an event you have to fill out some information, which is then sent to the site owner via email. The owner will then respond via mail, to sort out further details. Payment
					is not done on the website.
				</p>
				<p className={styles.subHeading}>Authentication</p>
				<p className={styles.text}>The user authentication is made using json web tokens.</p>
				<p className={styles.subHeading}>Admin panel</p>
				<p className={styles.text}>
					An admin can add/manage products, events, courses, recipes and users.
					<br />
					<br />
					So the host of the course can verify the tickets, they are also shown in the admin panel.
				</p>
				<p className={styles.subHeading}>NextJS Serverless</p>
				<p className={styles.text}>
					I decided to use NextJS Serverless instead of a backend server, to make hosting really simple (on Vercel). I didn't run into any complications and was able to do everything I
					wanted to do.
				</p>
				<p className={styles.subHeading}>Email</p>
				<p className={styles.text}>
					There are several email integrations on this site: One of them is the Order confirmation. To make this feature I used send grid. For the newsletter I used Mailchimp. And lastly I
					used EmailJs for the contact form.
				</p>
				<h3 className={styles.heading}>What did I learn?</h3>
				<p className={styles.text}>
					I learned a lot about React and NextJs. It was also my first time integrating a payment system. The project introduced me to stripe and to working with email integrations. I taught
					myself how to automatically send emails on from the server, letting the user send emails from the site and also how to setup a newsletter using Mailchimp. This was also one of my
					first times working with MongoDB and Authentication.
				</p>
				<h3 className={styles.heading}>Concluding thoughts</h3>
				<p className={styles.text}>
					I really dislike the design of this website. I invested a lot of time in the code but I didn't care much about the design. Since this project I have learned the importance of a
					clean UI. However this project got me introduced to so many new topics and is therefore an important part of my web development career.
				</p>
			</div>
		</div>
	);
};

export default ecommerce;
