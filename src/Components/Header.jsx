import React from 'react';
import classes from './Header.module.css';
import logo from '../assests/svg/logoipsum-logo-38.svg';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header className={classes.header + ' jumbotron text-center'}>
      <nav className='navbar navbar-expand-lg navbar-light bg-light'>
        <div className='container-fluid'>
          <img className=' navbar-brand' src={logo} alt='logo' />
        </div>
        <div className='collapse navbar-collapse pe-5' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <Link to='/home' className='btn btn-primary btn-sm me-2'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to="about" className='btn btn-dark btn-sm me-2'>
                About
              </Link>
            </li>
            <li className='nav-item'>
              <Link to="products" className='btn btn-warning btn-sm'>
                Inventory
              </Link>
            </li>
          </ul>
        </div>
        {/* ADD NAV HERE */}
      </nav>
    </header>
  );
};

export default Header;
