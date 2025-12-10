import { useState } from 'react'
import styles from './Skills.module.css'
import Card from './Card.jsx'

const skills = [
	"Languages",
	"WebDev",
	"Tools",
	"AI/ML"
]

const skillTable = {
	"Languages":"skillsProgramming",
	"WebDev":"skillsAI",
	"Tools":"skillsDevOps",
	"AI/ML":"skillsDB"
}

function Skills() {
	const [activeSkill, setActiveSkill] = useState(null);
	function changeView(skillName) {
		for (var i = 0;i<4;i++) {
			var currentSkill = document.getElementById(skillTable[skills[i]])
			console.log(currentSkill)
			var currentSkillID = currentSkill.id+"Cards"
			document.getElementById(currentSkillID).style.display = 'none'
		}
		document.getElementById(skillTable[skillName]+"Cards").style.display = 'grid';
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
							<button key={skillName} type="button" onClick={() => {changeView(skillName);setActiveSkill(skillName);}} className={[styles.CategoryButton, activeSkill === skillName ? styles.activeButton : ''].join(' ')} id={skillTable[skillName]}>{skillName}</button>
							))}
						</div>
						<div className={styles.skills}>
							<div className={`${styles.skillSection} ${styles.skillsProgramming}`} id="skillsProgrammingCards">
								<Card title="Python" ></Card>
								<Card title="JavaScript" ></Card>
								<Card title="C#" ></Card>
								<Card title="C++"></Card>
								<Card title="SQL" ></Card>
							</div>
							<div className={`${styles.skillSection} ${styles.skillsAI}`} id="skillsAICards">
								<Card title="HTML" ></Card>
								<Card title="CSS" ></Card>
								<Card title="React.js" ></Card>
							</div>
							<div className={`${styles.skillSection} ${styles.skillsDevOps}`} id="skillsDevOpsCards">
								<Card title="Git" ></Card>
								<Card title="Linux" ></Card>
							</div>
							<div className={`${styles.skillSection} ${styles.skillsDB}`} id="skillsDBCards">
								<Card title="Basic Python ML" ></Card>
								<Card title="Local LLM experience" ></Card>
							</div>
						</div>
					</div>
				</div>

			</div>
		</>
	)
}

export default Skills

