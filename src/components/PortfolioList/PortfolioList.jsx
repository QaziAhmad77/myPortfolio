import './PortfolioList.scss';

const PortfolioList = ({ title, selected, setSelected, id }) => {
  const active = selected === id;
  console.log(active,"active")
  return (
    <li
      className={active ? 'portfolioList active' : 'portfolioList'}
      onClick={() => {
        setSelected(id);
      }}
    >
      {title}
    </li>
  );
};

export default PortfolioList;
