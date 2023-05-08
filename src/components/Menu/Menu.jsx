import { Link } from 'react-router-dom';
import './Menu.scss';

const Menu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`menu ${menuOpen ? 'active' : ''}`}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link to="/works">Works</Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link to="/testimonials">Testimonials</Link>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
