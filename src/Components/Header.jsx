import React from 'react';
import classes from './Header.module.css';
import logo from '../assests/svg/logoipsum-logo-38.svg';
const Header = () => {
  return (
    <header className={classes.header + ' jumbotron text-center mb-5'}>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container-fluid'>
          <img className=' navbar-brand' src={logo} alt='logo' />
        </div>
        <div className='collapse navbar-collapse pe-5' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <button className='btn btn-success btn-sm'>
                Home
              </button>
            </li>
          </ul>
        </div>
        {/* ADD NAV HERE */}
      </nav>
    </header>
  );
};

export default Header;
