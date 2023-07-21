import './Works.scss';
import { Link } from 'react-router-dom';
import img from '../../Images/project.jpg';
import arrow from '../../Images/rem.png';
import { useState } from 'react';

const Works = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: '1',
      icon: './assets/mobile.png',
      title: 'Tailwind RealEstate Project',
      desc: 'A stunning Tailwind RealEstate project showcasing the best in the industry. ',
      img: 'https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930',
      lnk: 'https://tailwind-css-green.vercel.app/?vercelToolbarCode=lBdIR1Jg8HLFN_7',
    },
    {
      id: '2',
      icon: './assets/globe.png',
      title: 'Movie App',
      desc: 'Dive into the world of entertainment with this feature-packed Movie App.',
      img: 'https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg',
      lnk: 'https://rtk-movies-site-lujmptu1d-qaziahmad77.vercel.app/?vercelToolbarCode=9GFH1cZKW0Oi4Yw',
    },
    {
      id: '3',
      icon: './assets/writing.png',
      title: 'Advance ToDo List',
      desc: 'Stay organized and supercharge your productivity with our Advance ToDo List.',
      img: 'https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg',
      lnk: 'https://to-do-list-nine-liard.vercel.app/?vercelToolbarCode=3jqk-Ztnv1ncWUm',
    },
    {
      id: '3',
      icon: './assets/writing.png',
      title: 'E-commerce store',
      desc: 'Explore a vast collection and shop your favorites at our E-commerce store.',
      img: 'https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg',
      lnk: 'https://rtk-ecommerce-hu1u-8swaozcm8-qaziahmad77.vercel.app/',
    },
  ];

  const handleClick = (way) => {
    way === 'left'
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  return (
    <div className="works" id="works">
      <h1
        style={{
          fontSize: '3rem',
          color: 'white',
          position: 'absolute',
          top: '100px',
        }}
      >
        Projects
      </h1>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((item) => {
          return (
            <div className="container">
              <div className="item">
                <div className="left">
                  <div className="leftContainer">
                    <div className="imgContainer">
                      <img src={item.icon} alt="" />
                    </div>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <span>
                      <Link style={{ color: 'blue' }} to={item.lnk}>
                        Click Here to see
                      </Link>
                    </span>
                  </div>
                </div>
                <div className="right">
                  <img src={img} alt="" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <img
        src={arrow}
        className="arrow left"
        alt=""
        onClick={() => handleClick('left')}
      />
      <img
        src={arrow}
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
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
    </div>
  );
};

export default Works;
