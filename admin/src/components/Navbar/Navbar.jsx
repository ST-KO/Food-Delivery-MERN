import React from 'react';
import './Navbar.css';
import {assets} from '../../assets/assets';

const Navbar = () => {
  return (
    <section className='navbar'>
        <img className='logo' src={assets.logo} alt="logo" />
        <img className='profile' src={assets.profile_image} alt="profile" />
    </section>
  );
};

export default Navbar;