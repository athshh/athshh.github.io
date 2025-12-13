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
					<ProjectCard logo={NewMUNLogo} title="NewMUN Website" description="New Indian School, Bahrain MUN website." projLink="https://github.com/athshh/newmun_main" />
					<ProjectCard logo={PyVaultLogo} title="PyVault" description="Password manager, encrypted notepad and encrypted file vault." projLink="https://github.com/athshh/pyvault" />
					<ProjectCard logo={PyVaultLogo} title="khinsider.py" description="A video game sountrack downloader. (I maintain the repo)" projLink="https://github.com/killshott3r/khinsider" />
				</div>

			</div>
		</>

	)
}

export default Landing
