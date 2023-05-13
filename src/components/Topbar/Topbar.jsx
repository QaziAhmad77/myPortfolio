import './Topbar.scss';
import { Link } from 'react-router-dom';

const Topbar = (props) => {
  const { menuOpen, setMenuOpen, color, setColor } = props;
  console.log(color, 'color');
  return (
    // <div className={'topbar' + (menuOpen && 'active')} id="topbar">
    // <div className={'topbar' + (menuOpen ? ' active' : '')} id="topbar">
    <div className={`topbar ${menuOpen ? 'active' : ''}`}>
      <div className="wrapper">
        <div className="left">
          <Link href="/intro">Ahmad</Link>
          {/* <div className="itemContainer">
            <i className="fa fa-user"></i>
            <span>+091 03331602121</span>
          </div>
          <div className="itemContainer">
            <i className="fa-solid fa-envelope"></i>
            <span>qaziahmad1877@gmail.com</span>
          </div> */}
        </div>
        <div className="right">
          <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
