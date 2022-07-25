import styles from '../styles/ProjectInfo.module.css';
import { useRouter } from 'next/router';

const ProjectInfoHeader = ({ title, techstack, githubUrl }) => {
	const router = useRouter();
	return (
		<div className={styles.titleSection}>
			<button className={styles.return} onClick={() => router.back()}>
				Return
			</button>
			<h1>{title}</h1>
			<h2>By Jonas Hendel</h2>
			{githubUrl && (
				<a className='underline text-sm mb-10 text-blue-600 mt-3' href={githubUrl}>
					GitHub Repo
				</a>
			)}
			<div className={styles.logos}>
				{techstack.map((technology) => (
					<div className={styles.logoCard}>
						<img className={styles.logoImage} src={technology.image} />
						<p>{technology.name}</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProjectInfoHeader;
