import { Link } from "react-router-dom";
import logo from "../assets/zaibatsulogo.svg";

function Navbar() {
  return (
    <header className='navbar__container'>
      <nav className='navbar__nav'>
        <img src={logo} alt='Logo' width='64' height='69' />
        <h1 className='navbar__heading'>Iron Fist Companion</h1>
        <ul className='navbar__list'>
          <li className='navbar__item'>
            <Link to='/' className='navbar__link'>
              Home
            </Link>
          </li>
          {/* <li className='navbar__item'>
            <Link to='/about' className='navbar__link'>
              About
            </Link>
          </li> */}

          {/* <li className='navbar__item'>
            <Link to='/support' className='navbar__link'>
              Support
            </Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
