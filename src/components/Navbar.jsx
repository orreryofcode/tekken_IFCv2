import logo from "../assets/zaibatsulogo.svg";

function Navbar() {
  return (
    <div className='navbar__container'>
      <nav className='navbar__nav'>
        <ul className='navbar__list'>
          <li className='navbar__item'>
            <a href='' className='navbar__link'>
              Home
            </a>
          </li>
          <li className='navbar__item'>
            <a href='' className='navbar__link'>
              About
            </a>
          </li>

          <li className='navbar__item'>
            <img src={logo} alt='' />
          </li>

          <li className='navbar__item'>
            <a href='' className='navbar__link'>
              Fighters
            </a>
          </li>
          <li className='navbar__item'>
            <a href='' className='navbar__link'>
              Support
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
