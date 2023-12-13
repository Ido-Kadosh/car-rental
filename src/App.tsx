import Hero from './components/Hero'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Models from './pages/Models'
import Testimonials from './pages/Testimonials'
import Team from './pages/Team'
import Contact from './pages/Contact'

const App = () => {
	return (
		<main className="main-app">
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/about" element={<About />}></Route>
					<Route path="/models" element={<Models />}></Route>
					<Route path="/testimonials" element={<Testimonials />}></Route>
					<Route path="/team" element={<Team />}></Route>
					<Route path="/contact" element={<Contact />}></Route>
				</Routes>
			</Router>
		</main>
	)
}

export default App
