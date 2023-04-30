import Topbar from './components/Topbar/Topbar';
import Intro from './components/Intro/Intro';
import Portfolio from './components/Portfolio/Portfolio';
import Works from './components/Works/Works';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import { useState } from 'react';

const Router = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro />
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
    </>
  );
};

export default Router;
