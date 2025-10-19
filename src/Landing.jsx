import styles from './Landing.module.css'

function Landing() {
	return (
		<>
			<div className={styles.landing}>
				<div className={styles.contentMain}>
					Hello!<br />
					<span className={styles.name}>I'm Athiban Sharon!</span><br />
					<h6>scroll to continue!</h6>
				</div>
			</div>
		</>
	)
}

export default Landing
