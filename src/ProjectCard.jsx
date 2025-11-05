import styles from './ProjectCard.module.css'

function ProjectCard({ logo, title, description, projLink }) {
	return (
		<>
			<div className={styles.container} >
				<div className={styles.imageContainer}>
					<img src={logo} />
				</div>
				<div className={styles.textContainer}>
					<h3>{title}</h3>
					<p>{description}
					</p>
					<a href={projLink}>
						<button className={styles.ProjectLink}>GitHub</button>

					</a>

				</div>
			</div>
		</>
	)
}

export default ProjectCard 
