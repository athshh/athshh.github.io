import { useState } from 'react'
import styles from './Skills.module.css'
import Card from './Card.jsx'

const skills = [
    "Languages",
    "WebDev",
    "Tools",
    "AI/ML"
]

function Skills() {
    const [activeSkill, setActiveSkill] = useState("Languages"); 

    return (
        <>
            <div className={styles.mainContent}>
                <h1 style={{ marginBottom: "48px", color: "black" }}>Skills.</h1>
                <div className={styles.container}>
                    <div className={styles.containerItem} style={{ marginTop: "2rem", textAlign: "justify", textJustify: "auto" }} >
                        <p>Over the years, I have collected a diverse range of skills. From regular programming, to AI, the list goes on and will keep growing. I've listed them here.</p>
                    </div>
                    <div className={styles.containerItem}>
                        <div className={styles.btnGroup}>
                            {skills.map((skillName) => (
                                <button 
                                    key={skillName} 
                                    type="button" 
                                    onClick={() => setActiveSkill(skillName)} 
                                    className={[styles.CategoryButton, activeSkill === skillName ? styles.activeButton : ''].join(' ')}
                                >
                                    {skillName}
                                </button>
                            ))}
                        </div>
                        
                        <div className={styles.skills}>
                            {/* NOTICE: All divs below now use the SAME class: styles.skillGrid */}
                            
                            {activeSkill === "Languages" && (
                                <div className={styles.skillGrid}>
                                    <Card title="Python" />
                                    <Card title="JavaScript" />
                                    <Card title="C++" />
                                    <Card title="SQL" />
                                </div>
                            )}

                            {activeSkill === "WebDev" && (
                                <div className={styles.skillGrid}>
                                    <Card title="HTML" />
                                    <Card title="CSS" />
                                    <Card title="JavaScript" />
                                    <Card title="React.js" />
                                </div>
                            )}

                            {activeSkill === "Tools" && (
                                <div className={styles.skillGrid}>
                                    <Card title="Git" />
                                    <Card title="Linux" />
                                </div>
                            )}

                            {activeSkill === "AI/ML" && (
                                <div className={styles.skillGrid}>
                                    <Card title="Basic Python ML" />
                                    <Card title="Local LLM experience" />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills
