import Navbar from './Navbar.jsx'
import Landing from './Landing.jsx'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Stars from './assets/pexels-umkreisel-app-956999.jpg'
import Skyline from './assets/skyline.png'
import styles from './App.module.css'
import About from './About.jsx'

function App() {
	return (
		<>
			<Parallax pages={5}>
				<ParallaxLayer offset={0} factor={1.5} speed={2.0} style={{backgroundColor: `black`, backgroundImage: `url(${Stars})`}}>
					<Landing />
				</ParallaxLayer>
				<ParallaxLayer offset={0.5} factor={2} speed={1.5} style={{backgroundImage: `url(${Skyline})`}}>
					<About />
				</ParallaxLayer>
			</Parallax >
		</>
	)
}

export default App
