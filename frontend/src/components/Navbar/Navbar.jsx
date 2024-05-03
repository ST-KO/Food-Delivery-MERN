import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {
  
  const [menu, setMenu] = useState("home");

  const {getTotalCartAmount, token, setToken} = useContext(StoreContext);
  
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <nav className='navbar'>
        <Link to='/'><img className='logo' src={assets.logo} alt="logo" /></Link>
        <ul className='navbar-menu'>
          
          <Link 
            to="/"
            onClick={() => setMenu('home')}
            className={menu === 'home' ? 'active' : ''}
          >Home</Link>
          
          <a
            href='#explore-menu'
            onClick={() => setMenu('menu')}
            className={menu === 'menu' ? 'active' : ''}
          >Menu</a>

          <a
            href='#app-download'
            onClick={() => setMenu('mobile-app')}
            className={menu === 'mobile-app' ? 'active' : ''}
          >Mobile-App</a>

          <a
            href='#footer'
            onClick={() => setMenu('contact-us')}
            className={menu === 'contact-us' ? 'active' : ''}
          >Contact Us</a>
          
        </ul>
        <div className='navbar-right'>
          <img src={assets.search_icon} alt="search icon" />
          <div className='navbar-search-icon'>
            <Link to="/cart"><img src={assets.basket_icon} alt="basket icon" /></Link>
            <div className={getTotalCartAmount() > 0 ? 'dot' : ''}></div>
          </div>
          {
            !token ? 
            <button onClick={() => setShowLogin(true)}>Sign In</button> :
            <div className='navbar-profile'> 
              <img src={assets.profile_icon} alt="profile icon" />
              <ul className='navbar-profile-dropdown'>
                <li>
                  <img src={assets.bag_icon} alt="bag icon" />
                  <p>Orders</p>
                </li>
                <hr />
                <li onClick={logout}>
                  <img src={assets.logout_icon} alt="logout icon" />
                  <p>Logout</p>
                </li>
              </ul>
            </div>
          }
          
        </div>
    </nav>
  );
}

export default Navbar;