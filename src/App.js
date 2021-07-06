import './App.scss';

import { useState } from 'react';

import Topbar from './sections/Topbar/Topbar';
import SideMenu from './sections/SideMenu/SideMenu';
import Hero from './sections/Hero/Hero'
import About from './sections/About/About';
import Projects from './sections/Projects/Projects';

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
      </div>
    </div>
  );
}

export default App;
