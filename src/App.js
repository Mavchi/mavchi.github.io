import './App.scss';

import { useState } from 'react';

import Topbar from './sections/Topbar/Topbar';
import SideMenu from './sections/Topbar/SideMenu';
import Hero from './sections/Hero/Hero'
import About from './sections/About/About';
import Projects from './sections/Projects/Projects';
import Contact from './sections/Contact/Contact'

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='app'>
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <SideMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} /> 
      <div className='sections'>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
  