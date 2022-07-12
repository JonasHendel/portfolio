import styles from '../styles/ProjectInfo.module.css';
import { useRouter } from 'next/router';

const ProjectInfoHeader = ({ title, techstack }) => {
	const router = useRouter();
	return (
		<div className={styles.titleSection}>
			<button className={styles.return} onClick={() => router.back()}>
				Return
			</button>
			<h1>{title}</h1>
			<h2>By Jonas Hendel</h2>
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
