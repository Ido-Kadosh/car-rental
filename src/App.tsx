import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Models from './pages/Models'
import Team from './pages/Team'
import Testimonials from './pages/Testimonials'

const App = () => {
	return (
		<main className="main-app w-full">
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
				<Footer />
			</Router>
		</main>
	)
}

export default App
