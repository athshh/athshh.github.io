import styles from './Card.module.css'

function Card({ logo, title, description}) {
	return (
		<>
			<div className={styles.container} >
				<div className={styles.imageContainer}>
					<img src={logo} />
				</div>
				<div className={styles.textContainer}>
					<h3>{title}</h3>

				</div>
			</div>
		</>
	)
}

export default Card 
