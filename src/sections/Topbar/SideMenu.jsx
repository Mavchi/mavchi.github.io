import './SideMenu.scss';

import '../../data';

export default function SideMenu({ menuOpen, setMenuOpen }) {
  return (
    <div className={'sidemenu ' + (menuOpen && 'active')}>
      <ul>
        <li onClick={() => setMenuOpen(false)}>
          <a href='#intro'>Home</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href='#about'>About</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href='#projects'>Projects</a>
        </li>
        <li onClick={() => setMenuOpen(false)}>
          <a href='#contact'>Contact</a>
        </li>
      </ul>
    </div>
  );
}
