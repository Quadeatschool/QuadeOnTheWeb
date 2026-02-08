import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <h2 style={{ display: 'inline', marginRight: '20px' }}>My Portfolio</h2>
      <Link to="/" style={{ marginRight: '10px' }}>Home</Link>
      <Link to="/gallery" style={{ marginRight: '10px' }}>Gallery</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;