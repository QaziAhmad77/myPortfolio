import Topbar from './components/Topbar/Topbar';
import Intro from './components/Intro/Intro';
import Portfolio from './components/Portfolio/Portfolio';
import Works from './components/Works/Works';
import Testimonials from './components/Testimonials/Testimonials';
import Contact from './components/Contact/Contact';
import Menu from './components/Menu/Menu';
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

const Router = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [color, setColor] = useState(false);

  return (
    <>
      <Topbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        color={color}
        setColor={setColor}
      />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Intro color={color} setColor={setColor} /> <Portfolio />{' '}
                <Works /> <Testimonials /> <Contact />
              </>
            }
          />
          {/* <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/works" element={<Works />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </div>
    </>
  );
};

export default Router;
