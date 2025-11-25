import { useState } from 'react'
import styles from './Skills.module.css'
import Card from './Card.jsx'

const skills = [
	"Programming",
	"AI/ML",
	"DevOps",
	"Databases"
]


function Skills() {
	const [activeSkill, setActiveSkill] = useState(null);
	function test() {
		alert("hello world");
	}
	return (
		<>
			<div className={styles.mainContent}>
				<h1 style={{ marginBottom: "48px", color: "black" }}>Skills.</h1>
				<div className={styles.container}>
					<div className={styles.containerItem} style={{ marginTop: "2rem", textAlign: "justify", textJustify: "auto" }} >
						<p>Over the years, I have collected a diverse range of skills.From regular programming, to AI, the list goes on and will keep growing. I've listed them here.</p>
					</div>
					<div className={styles.containerItem}>
						<div className={styles.btnGroup}>
							{skills.map((skillName) => (
							<button key={skillName} type="button" onclick={() => setActiveSkill(skillName)} className={[styles.CategoryButton, activeSkill === skillName ? styles.activeButton : ''].join(' ')}>{skillName}</button>
							))}
						</div>
					</div>
				</div>

			</div>
		</>
	)
}

export default Skills

