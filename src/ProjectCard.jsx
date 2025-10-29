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
					<p>I fully made the website for the MUN conference of the school I studied in, even with the pressures of high school exams.</p>
				</div>
			</div>
		</>
	)
}

export default ProjectCard 
