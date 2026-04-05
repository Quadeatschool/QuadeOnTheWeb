import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contact from './components/Contact/Contact';
import protagonistImage from './assets/Protagonist.png';

const Gallery = () => (
  <div>
    <h2>My Professional Gallery</h2>
    <p>Photos coming soon...</p>
  </div>
);

function App() {
  return (
    <Router>
      <Navbar />
      <section className="hero-banner" aria-label="Protagonist banner">
        <img src={protagonistImage} alt="Protagonist" />
      </section>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
