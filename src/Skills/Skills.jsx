import { useState } from 'react'
import styles from './Skills.module.css'
import Card from './Card.jsx'

const skills = [
	"Programming",
	"AI/ML",
	"DevOps",
	"Databases"
]

const skillTable = {
	"Programming":"skillsProgramming",
	"AI/ML":"skillsAI",
	"DevOps":"skillsDevOps",
	"Databases":"skillsDB"
}

function Skills() {
	const [activeSkill, setActiveSkill] = useState(null);
	function changeView(skillName) {
		for (var i = 0;i<4;i++) {
			var currentSkill = document.getElementById(skillTable[skillName])
			console.log(currentSkill)
			var currentSkillID = skillTable[currentSkill]
			console.log(currentSkillID)
		}
		console.log(oldActive);
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
							<button key={skillName} type="button" onClick={() => {setActiveSkill(skillName); changeView(skillName);}} className={[styles.CategoryButton, activeSkill === skillName ? styles.activeButton : ''].join(' ')} id={skillTable[skillName]}>{skillName}</button>
							))}
						</div>
						<div className={styles.skills}>
							<div className={styles.skillsProgramming} id="skillsProgrammingCards">
								<Card title="hi" description="hello"></Card>
								<Card title="hi" description="hello"></Card>
							</div>
							<div className={styles.skillsAI} id="skillsAICards">
								<Card title="hi" description="2123e"></Card>
								<Card title="hi" description="212o"></Card>
							</div>
							<div className={styles.skillsDevOps} id="skillsDevOpsCards">
								<Card title="hi" description="1"></Card>
								<Card title="hi" description="2"></Card>
							</div>
							<div className={styles.skillsDB} id="skillsDBCards">
								<Card title="hi" description="2"></Card>
								<Card title="hi" description="3"></Card>
							</div>
						</div>
					</div>
				</div>

			</div>
		</>
	)
}

export default Skills

