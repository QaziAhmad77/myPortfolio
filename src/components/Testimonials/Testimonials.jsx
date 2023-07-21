import './Testimonials.scss';
import umair from '../../Images/umair.PNG';
import farrukh from '../../Images/farrukh.jpeg';
import hashir from '../../Images/hashir.jpeg';

const Testimonials = () => {
  const data = [
    {
      id: 1,
      name: 'Umair Syed',
      title: 'Software Engineer',
      img: umair,
      icon: 'assets/twitter.png',
      desc: ' Qazi Ahmad dedication and problem-solving abilities are commendable, making him a valuable asset to our team. He consistently delivers high-quality work, and his passion for coding is truly inspiring.',
    },
    {
      id: 2,
      name: 'Farrukh Adeel',
      title: 'Node JS Developer',
      img: farrukh,
      icon: 'assets/youtube.png',
      desc: 'I had the pleasure of working with Qazi Ahmad on a complex project, and his commitment to delivering top-notch solutions never ceased to impress me. His positive attitude and eagerness to tackle challenges head-on make him a standout developer ',
      featured: true,
    },
    {
      id: 3,
      name: 'Hashir Asmat',
      title: 'MERN Stack Developer',
      img: hashir,
      icon: 'assets/linkedin.png',
      desc: 'Qazi Ahmad has a keen eye for detail and consistently delivers flawless applications. Working with him was a delight, as he always brings fresh ideas to the table and ensures every project is a success. ',
    },
  ];
  return (
    <div className="testimonials" id="testimonial">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((item) => {
          return (
            <div className={item.featured ? 'card featured' : 'card'}>
              <div className="top">
                <img className="user" src={item.img} alt="" />
              </div>
              <div className="center">{item.desc}</div>
              <div className="bottom">
                <h3>{item.name}</h3>
                <h4>{item.title}</h4>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
