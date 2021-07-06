import './Topbar.scss'

import Topmenu from '../Topmenu/Topmenu'

export default function Topbar({ menuOpen, setMenuOpen }) {
    return (
      <div className={'topbar ' + (menuOpen && 'active')}>
        <div className='wrapper'>
          <div className='left'>
            <a href='#intro' className='logo'>
              Aleksi Khlebnikov
            </a>
          </div>
          <div className='right'>
            <Topmenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          </div>
        </div>
      </div>
    );
}
