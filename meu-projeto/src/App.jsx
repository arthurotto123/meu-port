import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './pages/Navbar'
import Home from './pages/Home';
import About from './pages/About';
import Skils from './pages/Skils';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

function App() {
  return (
    <Router>
     <Navbar/>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skils" element={<Skils />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App;