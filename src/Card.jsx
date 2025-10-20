import styles from './Card.module.css'
import test from './assets/logo.png'

function Card({title, content,image}) {
	return(
	<>
			<div className={styles.card}>
				<img src={test} / >
				<h4>Learning Python</h4>
				<p>I learnt Python. A beautiful language back then, still beautiful now.</p>
			</div>
	</>
	)
}

export default Card
