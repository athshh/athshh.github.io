import Navbar from './Navbar.jsx'
import Landing from './Landing.jsx'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import Stars from './assets/pexels-umkreisel-app-956999.jpg'

function App() {
	return (
		<>
			<Parallax pages={5}>
				<ParallaxLayer offset={0} factor={1.5} speed={1} style={{ backgroundImage: `url(${Stars})`}}>
					<Landing />
				</ParallaxLayer>
			</Parallax >
		</>
	)
}

export default App
