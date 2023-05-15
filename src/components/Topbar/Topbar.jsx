import './Topbar.scss';
import { Link } from 'react-router-dom';
import Testimonials from './../Testimonials/Testimonials';
import { useState } from 'react';

const Topbar = (props) => {
  const { menuOpen, setMenuOpen, color, setColor } = props;
  const [currentColor, setCurrentColor] = useState('');
  console.log(color, 'color');
  return (
    // <div className={'topbar' + (menuOpen && 'active')} id="topbar">
    // <div className={'topbar' + (menuOpen ? ' active' : '')} id="topbar">
    <div className={`topbar ${menuOpen ? 'active' : ''}`}>
      <div className="wrapper">
        <div className="left">
          <Link className="link" to="/">
            Ahmad
          </Link>
          {/* <div className="itemContainer">
            <i className="fa fa-user"></i>
            <span>+091 03331602121</span>
          </div>
          <div className="itemContainer">
            <i className="fa-solid fa-envelope"></i>
            <span>qaziahmad1877@gmail.com</span>
          </div> */}
        </div>
        <div className="routes">
          <Link
            className="routeLink Portfolio"
            to="/portfolio"
            onClick={() => setColor('blue')}
            style={{ backgroundColor: color === 'blue' ? '#79b8f3' : '' }}
          >
            Portfolio
          </Link>
          <Link
            className="routeLink Works"
            to="/works"
            onClick={() => setColor('green')}
            style={{ backgroundColor: color === 'green' ? '#79b8f3' : '' }}
          >
            Works
          </Link>
          <Link
            className="routeLink Testimonial"
            to="/testimonials"
            onClick={() => setColor('red')}
            style={{ backgroundColor: color === 'red' ? '#79b8f3' : '' }}
          >
            Testimonial
          </Link>
          <Link
            className="routeLink Contact"
            to="/contact"
            onClick={() => setColor('purple')}
            style={{ backgroundColor: color === 'purple' ? '#79b8f3' : '' }}
          >
            Contact
          </Link>
        </div>
        {/* Animated navbar which is dispaly:none
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Topbar;
