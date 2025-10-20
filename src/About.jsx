import styles from './About.module.css'
import Card from './Card.jsx'

function About() {
	return (
		<>
			<div className={styles.mainContent}>
				<h1>About me.</h1>
				<div className={styles.childContent}>
					<div className={styles.cardContainer}>
						<div className={styles.containerItem}><Card /></div>
						<div className={styles.containerItem}>
							<h2>2019</h2>
						</div>
						<div className={styles.containerItem}><Card /></div>
						<div className={styles.containerItem}>
							<h2>2020</h2>
						</div>
					</div>
					<div className={styles.aboutText}>
						Hey, I’m Athiban — a developer who loves building things that are fast, functional, and a little bit fun. I enjoy turning ideas into clean code and learning new tech along the way.

						I work mostly with JavaScript, React, and Python, but I’m always exploring how things work under the hood — from backend logic to system design. When I’m not coding, you’ll probably find me playing piano or listening to jazz.
					</div>
				</div>
			</div>
		</>
	)
}

export default About

