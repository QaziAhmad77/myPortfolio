import './Intro.scss';
import { Link } from 'react-router-dom';

const Intro = () => {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="src/Images/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Qazi Ahmad</h1>
          <h3>Mern Stack Developer <span></span></h3>
        </div>
        <Link to="/portfolio" className='link'>
          <img src="src/Images/downarrow.png" alt="" />
        </Link>
      </div>
    </div>
  );
};

export default Intro;
