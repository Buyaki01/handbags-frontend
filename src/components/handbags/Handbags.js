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

    <article class="new-releases pt-2 pb-5">
      <div class="hot-releases-title pt-3">
          <h4> Hot new releases </h4>
      </div>
      <div class="card new-releases1">
        <div class="new-releases-img">
          <a href="handbags.html"> <img class="card-img-top img-responsive w-100" src="asset/images/moreimg6.png" alt="" /> </a>
        </div>
        <div class="card-body">
            <h4 class="card-title"> <a href="#"> <span class="money"> Sh. 1200 </span> </a></h4>
            <p class="card-text"> Sling Bag, Leather </p>
            <div class="review">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i> 1 review
            </div>
        </div>
      </div>

      <div class="card new-releases2 pt-5 pl-5">
        <div class="new-releases-img">
          <a href="handbags.html"> <img class="card-img-top img-responsive w-50 pt-3 pl-3" src="asset/images/hotrelease2.png" alt="Card image" /> </a>
        </div>
        <div class="card-body">
          <h4 class="card-title"> <span class="money"> Sh.280 </span> </h4>
          <p class="card-text"> <a href="#"> Top-handle Bag, Designer </a> </p>
          <div class="review">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i> 1 review
          </div>
        </div>
      </div>
      <div class="card new-releases3 pt-5 pl-5">
        <div class="new-releases-img">
          <a href="handbags.html"><img class="card-img-top img-responsive w-50 pt-3 pl-3" src="asset/images/hotrelease1.png" alt="" /> </a>
        </div>
        <div class="card-body">
          <h4 class="card-title"> <span class="money"> Sh.480 </span> </h4>
          <p class="card-text"> <a href="#"> Wristlets, Imported </a> </p>
          <div class="no-review">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i> no review
          </div>
        </div>
      </div>
    </article>
  </main>
);

export default Handbags;
