import { Link } from "react-router-dom";
import logo from "../assets/zaibatsulogo.svg";

function Navbar() {
  return (
    <div className='navbar__container'>
      <nav className='navbar__nav'>
        <ul className='navbar__list'>
          <li className='navbar__item'>
            <Link to='/' className='navbar__link'>
              Home
            </Link>
          </li>
          <li className='navbar__item'>
            <Link to='/about' className='navbar__link'>
              About
            </Link>
          </li>

          <li className='navbar__item'>
            <img src={logo} alt='' />
          </li>

          <li className='navbar__item'>
            <Link to='/fighters' className='navbar__link'>
              Fighters
            </Link>
          </li>
          <li className='navbar__item'>
            <Link to='/support' className='navbar__link'>
              Support
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
