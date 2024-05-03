import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import { assets } from '../../assets/assets';

const Sidebar = () => {
  return (
    <section className='sidebar'>
        <div className='sidebar-options'>
            <NavLink to="/add" className="sidebar-option">
                <img src={assets.add_icon} alt="add icon" />
                <p>Add Items</p>
            </NavLink>
            <NavLink to='/list' className="sidebar-option">
                <img src={assets.order_icon} alt="order icon" />
                <p>List Items</p>
            </NavLink>
            <NavLink to="/orders" className="sidebar-option">
                <img src={assets.order_icon} alt="order icon" />
                <p>Orders</p>
            </NavLink>
        </div>
    </section>
  );
};

export default Sidebar;