import logo from './assets/logo.png'
import styles from './Navbar.module.css'

function Navbar() {
	return (
		<>
			<div>
				<img src={logo} />
				<button>Skills</button>
				<button>Projects</button>
				<button>Experience</button>
				<button>Contact</button>
			</div>
		</>
	)
}
export default Navbar
