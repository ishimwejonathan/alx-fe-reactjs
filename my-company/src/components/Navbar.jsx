import { Link } from 'react-router-dom';

const navStyle = {
  display: 'flex',
  gap: '16px',
  alignItems: 'center',
  justifyContent: 'center',   // ✅ Added
  padding: '12px 16px',
  backgroundColor: '#0d47a1',
};
const linkStyle = { color: 'white', textDecoration: 'none', fontWeight: 600 };

function Navbar() {
  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/about" style={linkStyle}>About</Link>
      <Link to="/services" style={linkStyle}>Services</Link>
      <Link to="/contact" style={linkStyle}>Contact</Link>
    </nav>
  );
}
export default Navbar;
