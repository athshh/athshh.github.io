import styles from './About.module.css'
import { ParallaxLayer, Parallax } from '@react-spring/parallax'

function About() {
	return (
		<>
			<div className={styles.parent}></div>
				<div className={styles.mainContent}>
					<h1>About me.</h1>
					<div className={styles.container}>
						<div className={styles.containerItem} style={{ marginTop: "2rem", textAlign:"justify",textJustify:"auto" }}>
							I like to experiment around with cutting edge tech. These days, I'm focused on improving my programming skills and experiment with new tech like AI. <b>I strive to not just be a jack of all trades, but even a master of them all.</b>
						</div>
						<div className={styles.containerItem}>
							<div className={styles.timelineOuter}>
								<div className={styles.timeline}>
									<div className={styles.outer}>
										<div className={styles.card}>
											<div className={styles.info}>
												<h3 className={styles.title}>2019-2020</h3>
												<h4>Baby Steps</h4>
												<p>Learnt Python, MYSQL, and how to connect the two.</p>
											</div>
										</div>
										<div className={styles.card}>
											<div className={styles.info}>
												<h3 className={styles.title}>2021</h3>
												<h4>The Builder's Phase</h4>
												<p>Picked up C# and MSForms. Started learning Linux & webdev.</p>
											</div>
										</div>
										<div className={styles.card}>
											<div className={styles.info}>
												<h3 className={styles.title}>2022-2023</h3>
												<h4>The Project Era</h4>
												<p>Became the IT guy for school events. Started learning AI. Further developed my webdev skills.</p>
											</div>
										</div>
										<div className={styles.card}>
											<div className={styles.info}>
												<h3 className={styles.title}>2024-Present</h3>
												<h4>Refinement & Direction</h4>
												<p>Focused on advanced programming skills, to create systems that are clean, fast and just work.</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
		</>
	)
}

export default About

