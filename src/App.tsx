import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Navbar } from './components/Navbar'
import { ContactPage } from './pages/ContactPage'
import { HomePage } from './pages/HomePage'
import { ModelsPage } from './pages/ModelsPage'
import { TeamPage } from './pages/TeamPage'
import { TestimonialsPage } from './pages/TestimonialsPage'

const App = () => {
	return (
		<main className="main-app w-full">
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<HomePage />}></Route>
					<Route path="/models" element={<ModelsPage />}></Route>
					<Route path="/testimonials" element={<TestimonialsPage />}></Route>
					<Route path="/team" element={<TeamPage />}></Route>
					<Route path="/contact" element={<ContactPage />}></Route>
				</Routes>
				<Footer />
			</Router>
		</main>
	)
}

export default App
