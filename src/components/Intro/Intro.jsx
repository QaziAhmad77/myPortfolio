import './Intro.scss';
import { Link } from 'react-router-dom';
import { useRef, useState } from 'react';
import Typewriter from 'typewriter-effect';
import man from "../../Images/man.png"


const Intro = (props) => {
  const text = useRef();
  const { color, setColor } = props;
  return (
    <div className={`intro ${color ? 'active' : ''}`} id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src={man} alt="" />
        </div>
        <div className="iconContainer">
          <Link to="https://www.instagram.com/ahmad302420/">
            <div className="fa fa-instagram insta"></div>
          </Link>
          <Link to="linkedin.com/in/qazi-ahmad-b4124b203">
            <div className="fa fa-linkedin linkedin"></div>
          </Link>
          <Link to="https://github.com/QaziAhmad77">
            <div className="fa fa-github github"></div>
          </Link>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi 🖐️, I'm</h2>
          <h1>Qazi Ahmad</h1>
          <h3>
            <span ref={text}>
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                  delay: 40,
                  strings: [
                    'Computer Systems Engineer',
                    'Mern Stack Developer',
                    'Tech Enthusiast',
                  ],
                }}
              />
            </span>
          </h3>
          <p>
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 20,
                pauseFor: 9999999,
                strings: [
                  'Hello, my name is Ahmad and I am a MERN stack developer. I specialize in building full-stack web applications using MongoDB, Express.js, React, and Node.js. With my expertise in these technologies, I am able to design and develop dynamic web applications that are responsive, scalable, and efficient. I am doing Computer Systems Engineering from UET Peshawar and I am passionate about using technology to solve real-world problems.',
                ],
              }}
            />
          </p>
          <div className="btns">
            <div className="btn">
              <button className="btn1">Download CV</button>
              <button className="btn2">Contact</button>
            </div>
          </div>
        </div>
        <div className="dots">
          <Link to="/portfolio" className="link">
            <i className="fa-solid fa-circle"></i>
          </Link>
          <Link to="/works" className="link">
            <i className="fa-solid fa-circle"></i>
          </Link>
          <Link to="/testimonials" className="link">
            <i className="fa-solid fa-circle"></i>
          </Link>
        </div>
        <div className={`${color ? 'Toggle' : 'toggle'}`}>
          <i
            className="fa-regular fa-lightbulb"
            onClick={() => setColor(!color)}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Intro;
