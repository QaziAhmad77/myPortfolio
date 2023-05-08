import { useEffect, useState } from 'react';
import './Portfolio.scss';
import PortfolioList from './../PortfolioList/PortfolioList';

import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from '../../common/data';

const Portfolio = () => {
  const [selected, setSelected] = useState('featured');
  const [data, setData] = useState([]);
  const list = [
    { id: 'featured', title: 'Featured' },
    { id: 'web', title: 'Web App' },
    { id: 'mobile', title: 'Mobile App' },
    { id: 'design', title: 'Design' },
    { id: 'content', title: 'Content' },
  ];
  useEffect(() => {
    switch (selected) {
      case 'featured':
        setData(featuredPortfolio);
        break;
      case 'web':
        setData(webPortfolio);
        break;
      case 'mobile':
        setData(mobilePortfolio);
        break;
      case 'design':
        setData(designPortfolio);
        break;
      case 'content':
        setData(contentPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);
  return (
    <div className="portfolio" id="portfoloio">
      <h1>Portfolio</h1>
      <ul>
        {list.map((item) => {
          return (
            <PortfolioList
              key={item.id}
              title={item.title}
              selected={selected}
              setSelected={setSelected}
              id={item.id}
            />
          );
        })}
      </ul>
      <div className="container">
        {data.map((item) => {
          return (
            <div className="item">
              <img src={item.img} alt="" />
              <h3>{item.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
