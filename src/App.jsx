import Navbar from './Navbar.jsx'
import Landing from './Landing/Landing.jsx'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Stars from './assets/stars.png'
import FirstGradient from './assets/firstgrad.png'
import Projects from './Projects/Projects.jsx'
import SecondGradient from './assets/secondgrad.png'
import styles from './App.module.css'
import About from './About/About.jsx'
import ThirdGradient from './assets/thirdgrad.png'
import Skills from './Skills/Skills.jsx'

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
				<ParallaxLayer offset={0} factor={1.5} speed={2.0} style={{ position: "relative" }}>
					<div id="wrapper">
						<div className={styles.landingBG} id="move">
							<div className={styles.circle} ></div>
						</div>
						<div className={styles.landingFG}>
							<Landing />
						</div>
					</div>
				</ParallaxLayer>
				<ParallaxLayer offset={0.5} factor={2.6} speed={1.5} style={{ backgroundImage: `url(${FirstGradient})` }}>
					<About />
				</ParallaxLayer>
				<ParallaxLayer offset={0.5} factor={2.6} speed={1.2} style={{backgroundImage:`url(${SecondGradient})`,position:"relative"}} className={styles.thirdLayer}>
					<Projects />
				</ParallaxLayer>

				<ParallaxLayer offset={0.1} factor={2.6} speed={1.4} style={{backgroundImage:`url(${ThirdGradient})`,position:"relative",pointerEvents:'none'}} className={styles.fourthLayer}>
					<Skills />
				</ParallaxLayer>
			</Parallax >
		</>
	)
}

export default App
