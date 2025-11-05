import styles from './Projects.module.css'
import ProjectCard from './ProjectCard'
import NewMUNLogo from './assets/NewMUN-logo-new_trans.png'
import PyVaultLogo from './assets/1762348328096.jpg'

function Landing() {
	return (
		<>
			<div className={styles.mainContent}>
				<h1 style={{ marginBottom: "48px",color:"black"}}>Projects.</h1>
				<div className={styles.projects}>
					<ProjectCard logo={NewMUNLogo} title="NewMUN Official Website" description="I made the MUN website for my school." projLink="https://github.com/athshh/newmun_main" />
					<ProjectCard logo={PyVaultLogo} title="PyVault" description="Password manager, encrypted notepad and encrypted file vault." projLink="https://github.com/athshh/pyvault" />
					<ProjectCard logo={PyVaultLogo} title="coming soon." description="coming soon." projLink="#" />
					<ProjectCard logo={PyVaultLogo} title="coming soon." description="coming soon." projLink="#" />
				</div>

			</div>
		</>

	)
}

export default Landing
