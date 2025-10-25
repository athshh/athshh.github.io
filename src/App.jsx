import Navbar from './Navbar.jsx'
import Landing from './Landing.jsx'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Stars from './assets/stars.png'
import Skyline from './assets/skyline.png'
import styles from './App.module.css'
import About from './About.jsx'

function App() {
	const move = document.getElementById("move");

	document.body.onpointermove = event => {
		const { clientX, clientY } = event;

		move.animate({
			left: `${clientX}px`,
			top: `${clientY}px`

		}, { duration: 1000, fill: "forwards" })

	}
	return (
		<>
			<Parallax pages={5}>
				<ParallaxLayer offset={0} factor={1.5} speed={2.0}>
					<div className={styles.landingBG} id="move">
						<style></style>
						<div className={styles.circle} style={{
							aspectRatio: '1',
							left: '50%',
							right: '50%',
							transform: 'translate(-50%, -50%)',
							height: '0',
							width: '0',
							backgroundColor: 'rgba(0, 0, 0, 0.7)',
							border: 'none',
							borderRadius: '100%',
							boxShadow: '0 0 128px 100px rgba(0, 0, 0, 0.7)'
						}}></div>
					</div>
					<div className={styles.landingFG}>
						<Landing />
					</div>
				</ParallaxLayer>
				<ParallaxLayer offset={0.5} factor={2} speed={1.5} style={{ backgroundImage: `url(${Skyline})` }}>
					<About />
				</ParallaxLayer>

			</Parallax >
		</>
	)
}

export default App
