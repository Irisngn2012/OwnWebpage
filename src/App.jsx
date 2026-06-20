import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import SakuraPetals from './components/SakuraPetals'
import Home from './pages/Home'
import About from './pages/About'
import Experience from './pages/Experience'
import Competitions from './pages/Competitions'
import Extracurricular from './pages/Extracurricular'
import CV from './pages/CV'
import Posts from './pages/Posts'
import BlogPost from './pages/BlogPost'
import Personal from './pages/Personal'
import Contact from './pages/Contact'
import './App.css'

function App() {
  return (
    <Router>
      <div className="app">
        <SakuraPetals />
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/competitions" element={<Competitions />} />
            <Route path="/extracurricular" element={<Extracurricular />} />
            <Route path="/cv" element={<CV />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:slug" element={<BlogPost />} />
            <Route path="/personal" element={<Personal />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
