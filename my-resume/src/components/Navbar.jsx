import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from '../assets/logo.png';

function Navbar() {
  return (
    <nav className="site-nav">
      <div className="site-brand-wrap">
        <img className="site-logo" src={logo} alt="Portfolio logo" />
        <h2 className="site-brand">My Portfolio</h2>
      </div>
      <div className="site-links">
        <Link to="/">Home</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;

