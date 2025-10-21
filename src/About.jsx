import styles from './About.module.css'
import Card from './Card.jsx'
import { ParallaxLayer, Parallax } from '@react-spring/parallax'

function About() {
	return (
		<>
			<div className={styles.mainContent}>
				<h1>About me.</h1>
				I'm Athiban Sharon. I'm a student, and I am an avid tinkerer, programmer, and computer science enthusiast. I've given a small timeline of my journey I am and have been on, discovering the various things in this field.
				<div className={styles.timelineOuter}>
				<div className={styles.timeline}>
					<div className={styles.outer}>
						<div className={styles.card}>
							<div className={styles.info}>
								<h3 className={styles.title}>2019-2020</h3>
								<h4>Baby Steps</h4>
								<p>Started coding in Python and experimenting with scripts. Learnt MySQL too, and paired it with my python skills.</p>
							</div>
						</div>
						<div className={styles.card}>
							<div className={styles.info}>
								<h3 className={styles.title}>2021</h3>
								<h4>The Builder's Phase</h4>
								<p>Picked up C# and MSForms. Built simple accounting tools. Honed my front-end webdev skills. Also, this was when i first started learnnig about Linux.</p>
							</div>
						</div>
						<div className={styles.card}>
							<div className={styles.info}>
								<h3 className={styles.title}>2022-2023</h3>
								<h4>The Project Era</h4>
								<p>Quarantine ended and I immediately became a prominent piece in the IT wing of my school, helping with a lot of different IT tasks. The project I am most proud of during this era, was the website I made for my school's MUN conference. This also was the start of my interest in AI and other technical fields.</p>
							</div>
						</div>
						<div className={styles.card}>
							<div className={styles.info}>
								<h3 className={styles.title}>2024-Present</h3>
								<h4>Refinement & Direction</h4>
								<p>Now, I'm laser focused on improving my programming skills, and learning to create systems, that are clean, fast and Just Work™. Also working more on my webdev side.</p>
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

