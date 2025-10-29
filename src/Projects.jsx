import styles from './Projects.module.css'
import ProjectCard from './ProjectCard'

function Landing() {
	return (
		<>
			<div className={styles.mainContent}>
				<h1 style={{ marginBottom: "48px" }}>Projects.</h1>
				<div className={styles.projects}>
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
					<ProjectCard />
				</div>

			</div>
		</>

	)
}

export default Landing
