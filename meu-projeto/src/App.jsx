import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skils from './pages/Skils';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import { useEffect } from 'react';

function ScrollToSection() {
  const { pathname } = useLocation();

  useEffect(() => {
    const sectionId = pathname === '/' ? 'home' : pathname.slice(1); // remove /
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <Navbar />
      <ScrollToSection />
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="skils"><Skils /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
      <section id="footer"><Footer /></section>

      <Routes>
        <Route path="/" element={null} />
        <Route path="/about" element={null} />
        <Route path="/skils" element={null} />
        <Route path="/projects" element={null} />
        <Route path="/contact" element={null} />
      </Routes>
    </>
  );
}

export default App;
