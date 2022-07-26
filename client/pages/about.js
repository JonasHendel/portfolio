import styles from '../styles/ProjectInfo.module.css';
import { useRouter } from 'next/router';
const about = () => {
	const router = useRouter();
	return (
		<div className={styles.outerContainer}>
			<div className={styles.innerContainer}>
				<div className={styles.aboutTitleSection}>
					<h1 className='text-5xl font-bold mt-10 mb-5 '>
						About <span className='text-sky-900'>Me</span>
					</h1>
					<div className=''>
						<div className='mt-5 bg-sky-100 pl-2 py-2 pr-2 xs:pr-4 flex flex-col xs:flex-row items-center border border-sky-800 rounded-xl'>
							<img src='./profile_picture.png' className='w-24 xs:mr-4 rounded-lg' />
							<div className='text-sm flex items-center xs:items-start flex-col justify-evenly  '>
								<p className='text-sky-800 font-bold text-lg'>Jonas Hendel</p>
								<p className='text-sky-500'>Oslo, Norway</p>
								<p className='text-sky-500'>+47 913 86 515</p>
								<p className='text-sky-500'>jonasnhendel@gmail.com</p>
							</div>
						</div>
					</div>
				</div>
				<p className={styles.text}>
					My name is Jonas and I have been writing code for about 2 years now. For most of
					my life I have lived in Oslo but I also have strong connections to Germany due
					to being born and having family there. My development journey started out with
					Python but I soon found my way to web development. I think a beautiful UI/UX is
					essential for a good program. Therefore I also enjoy this part of making a
					website. Other than learning computer-related things, I find joy in learning
					both maths and physics. What interests me about these two subjects is their
					ability to describe the world and accelerate the advancement of humanity. What
					also is great about them, is how good they can be combined with computer
					science. Other than to code I like to kickbox, workout, and read in my free
					time.
				</p>
				<h3 className={styles.heading}>What are my ambitions?</h3>
				<p className={styles.text}>
					My ambition is always to get a deep understanding of whatever I do. Right now
					that is web development and maths, but really, every aspect of developing and
					computer science excites me.
					<br />
					<br />
					In the future I want to work on projects that have a use case in the real world:
					A technical solution that makes life easier/better.
				</p>
				<h3 className={styles.heading}>How do I learn to code?</h3>

				<p className={styles.text}>
					I learn by reading texts and by watching videos. The latter really helped me and
					is still very useful when I want to learn a new topic. Seeing how another person
					does something and copying it, helps me get an understanding/intuition for
					programming languages, frameworks and libraries.
					<br />
					<br />
					When I get more advanced in a certain area I switch over to texts. I have found
					that most advanced knowledge is transmitted in blog articles or documentation.
					As I mentioned I always start out with a video tutorial to get introduced to the
					topic. From there on I start using what I just learned in a project. Then I
					learn whenever I need to figure out how to do something.
					<br />
					<br />
					Occasionally I sit down and read the documentation to further understand what is
					possible with the tool. I have found that this is the most important part of
					learning. Learning what is possible to do.
				</p>
				<h3 className={styles.heading}>Why do I code?</h3>

				<p className={styles.text}>
					I have always had two interests in particular. One one hand, I like the STEM
					subjects. What I like about these is that they are fundamental to understanding
					the world, but also that without them human progress as we know it today would
					be unthinkable.
					<br />
					<br />
					I also like doing things where I end up with a useful product. I worked a lot
					with wood when I was young, built things with construction kits and later also
					made texture packs for computer games.
					<br />
					<br />
					When a good friend taught me a little about coding, I soon knew: This is what I
					want to do. On the one hand, this field is extremely diverse and can be combined
					with other natural sciences. In addition, you end up with a, in most cases,
					useful program. Since I started with coding/computer science the reasons why I
					do it has never changed.
					<br />
					<br />
					It just feels so good to code, finally fix that bug, learn a lot, and to have a
					nice product in the end.
				</p>
				<h3 className={styles.heading}>Currently working on:</h3>

				<p className={styles.text}>
					Currently I am working on a bookmarking app. I often come across interesting
					resources online that I want to save for later. I have not yet found a good
					cross platform, frictionless solution with a good export feature for saving
					links. It will support import and export, web/native app and extension, notes,
					folders and link rotting prevention.
				</p>
			</div>
		</div>
	);
};

export default about;
