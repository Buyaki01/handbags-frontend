import React from 'react';

const Handbags = () => (
  <main className="container-fluid">
    <nav className="top-nav pb-3">
      <div className="nav-logo">
        <h1>
          <i className="fas fa-shopping-bag" />
          Handbag Collections
        </h1>
      </div>
      <div className="nav-link-icons">
        <ul className="nav-links">
          <li className="handbags-link">
            {/* <a href="#"> Handbags </a> */}
          </li>
          {/* <li class="handbag-details-link"> <a href="#"> Handbag Details </a></li> */}
          <li className="nav-icons">
            <button type="button" className="fas fa-bars collaps"> </button>
            <i className="fas fa-heart" />
            {/* <a href="#">
              <i className="fas fa-shopping-cart" />
            </a> */}
          </li>
        </ul>
      </div>
    </nav>
    <div className="main-content">
      <div className="main-content-title pt-5">
        <h2 className="text-nowrap"> Affordable Handbags</h2>
        <h4 className="text-nowrap"> Quality handbags just for you </h4>
        {/* <a href="#" className="btn view-more-btn">
          <span> View More </span>
        </a> */}
      </div>
      <div className="main-content-img">
        <img src="../assets/images/mainimg.png" alt="" className="img-responsive w-100" />
      </div>
    </div>
  </main>
);

export default Handbags;
