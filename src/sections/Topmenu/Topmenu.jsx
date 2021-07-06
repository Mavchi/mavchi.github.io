import './Topmenu.scss'

export default function Topmenu({ menuOpen, setMenuOpen }) {
    return (
      <div className={'hamburger ' + (menuOpen && 'active')} onClick={() => setMenuOpen(!menuOpen)}>
        <span className='line1'></span>
        <span className='line2'></span>
        <span className='line3'></span>
      </div>
    );
}
