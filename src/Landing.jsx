import styles from './Landing.module.css'

function Landing() {
	return (
		<>
			<div className={styles.landing}>
				<div className={styles.contentMain}>
					<span className={styles.name}>I'm Athiban Sharon.</span><br />
					<h6>Programmer, Designer, Tinkerer.</h6>
				</div>
			</div>
		</>
	)
}

export default Landing
