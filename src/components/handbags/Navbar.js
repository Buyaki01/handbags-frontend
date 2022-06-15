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
            <span className='ml-3'> Cart </span>
            <span class="relative right-0 -top-2 -left-12 rounded-full bg-lime-300 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">5
    </span>
          </div>
        </li>
      </ul>
    </div>
  </nav>
)

export default Navbar;