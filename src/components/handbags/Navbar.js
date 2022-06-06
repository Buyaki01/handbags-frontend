import React from 'react';
import { FaUser, FaShoppingCart } from "react-icons/fa";

const Navbar = () => (
  <nav className="top-nav pb-3">
    <div className="nav-logo">
      <h1>
        <i className="fas fa-shopping-bag" />
        Handbag Collections
      </h1>
    </div>
    <div className="nav-link-icons">
      <ul className="nav-links">
        <input type="text" placeholder=" Search.." />
        <li className="nav-icons ml-3">
          <div className='d-flex'> 
            <FaUser /> 
            <span className='ml-1'> Account </span>
          </div>
        </li>
        <li className="nav-icons ml-3">
          <div className='d-flex'>
            <FaShoppingCart />
            <span className='ml-1'> Cart </span>
          </div>
        </li>
      </ul>
    </div>
  </nav>
)

export default Navbar;