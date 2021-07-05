import './App.scss';

import { useState } from 'react';

import Topbar from './components/Topbar/Topbar';
import SideMenu from './components/SideMenu/SideMenu';
import Hero from './components/Hero/Hero'
import About from './components/About/About';
import Projects from './components/Projects/Projects';

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
