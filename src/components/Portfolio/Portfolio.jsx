import { useEffect, useState } from 'react';
import './Portfolio.scss';
import html from '../../Images/html.png';
import css from '../../Images/css.webp';
import tailwind from '../../Images/tailwind2.png';
import react from '../../Images/react3.jpg';
import nodejs from '../../Images/nodejs.png';
import js from '../../Images/js5.jpg';
import github from '../../Images/github.jpg';

const Portfolio = () => {
  const list = [
    {
      image: html,
      title: 'HTML Experience',
      desc: 'I have been working with HTML for the past 2 years, creating webpages and structuring content.',
    },
    {
      image: css,
      title: 'CSS Styling Skills',
      desc: 'Proficient in CSS, utilizing it to style and design visually appealing websites and applications.',
    },
    {
      image: tailwind,
      title: 'Embracing Tailwind CSS',
      desc: 'Recently adopted Tailwind CSS for efficient and rapid UI development, streamlining my workflow.',
    },
    {
      image: react,
      title: 'Passionate About React',
      desc: " I've been actively developing with React, building interactive and dynamic user interfaces.",
    },
    {
      image: nodejs,
      title: 'Node.js for Scalability',
      desc: 'Utilizing Node.js to build scalable and server-side applications,enhancing the performance.',
    },
    {
      image: js,
      title: 'Node.js for Scalability',
      desc: 'I have been working with HTML for the past 2 years, creating webpages and structuring content.',
    },
    {
      image: github,
      title: 'Collaboration with GitHub',
      desc: 'Leveraging GitHub for version control and collaborative development, ensuring seamless teamwork.',
    },
  ];
  return (
    <div className="portfolio" id="portfoloio">
      <h1 style={{ textAlign: 'center', color: 'white', fontSize: '3rem' }}>
        Technologies I can work With
      </h1>
      <div className="card">
        {list.map((item) => {
          return (
            <div className="container">
              <div className="imageBox">
                <img src={item.image} alt="" />
              </div>
              <div className="content">
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
