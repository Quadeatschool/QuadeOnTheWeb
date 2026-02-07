import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';

// We will create these next!
const Gallery = () => <div><h2>My Professional Gallery</h2><p>Photos coming soon...</p></div>;
const Contact = () => <div><h2>Contact Me</h2><p>Google Form integration coming soon...</p></div>;

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;