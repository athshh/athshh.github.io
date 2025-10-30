import styles from './ProjectCard.module.css'
import Logo from './assets/NewMUN-logo-new_trans.png'

function ProjectCard(logo, title, description, link) {
	return (
		<>
			<div className={styles.container} >
				<div className={styles.imageContainer}>
					<img src={Logo} />
				</div>
				<div className={styles.textContainer}>
					<h3>NewMUN official website</h3>
					<p>I made the MUN website for my school.</p>
				</div>
			</div>
		</>
	)
}

export default ProjectCard 
