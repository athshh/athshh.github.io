import styles from './Skills.module.css'
import Card from './Card.jsx'

function Skills() {
	return(
	<>
			<div className={styles.mainContent}>
				<h1 style={{ marginBottom: "48px",color:"black"}}>Skills.</h1>
				<div className={styles.container}>
					<div className={styles.containerItem} style={{ marginTop: "2rem", textAlign:"justify",textJustify:"auto" }} >
						<p>Over the years, I have collected a diverse range of skills.From regular programming, to AI, the list goes on and will keep growing. I've listed them here.</p>
					</div>
					<div className={styles.containerItem}>
						<div className={styles.btnGroup}>
							<button>Programming</button>
							<button>Programming</button>
							<button>Programming</button>
							<button>Programming</button>
						</div>
					</div>	
				</div>

			</div>
	</>
	)
}

export default Skills 

