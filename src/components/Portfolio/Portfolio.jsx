import { useEffect, useState } from 'react';
import './Portfolio.scss';
import PortfolioList from './../PortfolioList/PortfolioList';

const Portfolio = () => {
  const list = [
    {
      image: 'src/Images/html.png',
      title: 'HTML Experience',
      desc: 'I have been working with HTML for the past 2 years, creating webpages and structuring content.',
    },
    {
      image: 'src/Images/css.webp',
      title: 'CSS Styling Skills',
      desc: 'Proficient in CSS, utilizing it to style and design visually appealing websites and applications.',
    },
    {
      image: 'src/Images/tailwind2.png',
      title: 'Embracing Tailwind CSS',
      desc: 'Recently adopted Tailwind CSS for efficient and rapid UI development, streamlining my workflow.',
    },
    {
      image: 'src/Images/react3.jpg',
      title: 'Passionate About React',
      desc: " I've been actively developing with React, building interactive and dynamic user interfaces.",
    },
    {
      image: 'src/Images/nodejs.png',
      title: 'Node.js for Scalability',
      desc: 'Utilizing Node.js to build scalable and server-side applications,enhancing the performance.',
    },
    {
      image: 'src/Images/js5.jpg',
      title: 'Node.js for Scalability',
      desc: 'I have been working with HTML for the past 2 years, creating webpages and structuring content.',
    },
    {
      image: 'src/Images/github.jpg',
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
