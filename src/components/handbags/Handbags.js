import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar.js';
import Reviews from '../reviews/Reviews.js';
import Location from './Location.js';
import Footer from './Footer.js'

const Handbags = () => (
  <div>
    <main className="container-fluid">
      <Navbar />
      <div className="main-content">
        <div className="main-content-title pt-5">
          <h2 className="text-nowrap"> Affordable Handbags</h2>
          <h4 className="text-nowrap"> Quality handbags just for you </h4>
          {/* <a href="#" className="btn view-more-btn">
            <span> View More </span>
          </a> */}
        </div>
        <div className="main-content-img">
          <img src="./assets/images/mainimg.png" alt="" className="img-responsive w-100" />
        </div>
      </div>

      <article class="new-releases pt-2 pb-5">
        <div class="hot-releases-title pt-3">
            <h4> Hot new releases </h4>
        </div>
        <div class="card new-releases1">
          <div class="new-releases-img">
            <a href="handbags.html"> <img class="card-img-top img-responsive w-100" src="../assets/images/moreimg6.png" alt="" /> </a>
          </div>
          <div class="card-body">
              <h4 class="card-title"> <a href="#"> <span class="money"> Sh. 1200 </span> </a></h4>
              <p class="card-text"> 
                <Link to="/details"> Sling Bag, Leather 
                </Link>
              </p>
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
            <a href="handbags.html"> <img class="card-img-top img-responsive w-50 pt-3 pl-3" src="./assets/images/hotrelease2.png" alt="" /> </a>
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
            <a href="handbags.html"><img class="card-img-top img-responsive w-50 pt-3 pl-3" src="../assets/images/hotrelease1.png" alt="" /> </a>
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

      <article class="top-rated pt-2 pb-5">
        <div class="top-rated-title text-white">
          <h3>Top rated</h3>
        </div>
        <div class="card top-rated1 pl-3 pt-5 pr-2">
          <a href="handbags.html"> <img class="card-img-top img-responsive w-100" src="https://www.pngkey.com/png/full/371-3719602_see-more-photos-to-dior-handbags-price-miss.png" alt="" /> </a>
          <div class="card-body">
            <h4 class="card-title"> <span class="money"> Sh.800 </span> </h4>
            <p class="card-text"> <a href="#"> Hobo Bags, Wooven </a></p>
            <div class="no-review">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i> No review
            </div>
          </div>
        </div>
        <div class="card top-rated2 pl-3 pt-5 pr-2">
          <a href="handbags.html"> <img class="card-img-top img-responsive w-100" src="https://www.freepnglogos.com/uploads/bag-png/bag-women-shoulder-bags-png-transparent-images-29.png" alt="" /> </a>
          <div class="card-body">
            <h4 class="card-title"> <span class="money"> Sh.2000 </span> </h4>
            <p class="card-text"> <a href="#"> Totes, Designer </a> </p>
            <div class="review">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i> 7 reviews
            </div>
          </div>
        </div>
        <div class="card top-rated3 pl-3 pt-5 pr-2">
          <a href="handbags.html"> <img class="card-img-top img-responsive w-100" src="https://www.pngkey.com/png/full/776-7766410_vuitton-burberry-handbags-leather-louis-burberr-handbag-tote.png" alt="" /> </a>
          <div class="card-body">
            <h4 class="card-title"> <span class="money"> Sh.2000 </span> </h4>
            <p class="card-text"> <a href="#"> Totes, Designer </a> </p>
            <div class="review">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i> 10 reviews
            </div>
          </div>
        </div>
      </article>

      <article class="more-img pt-5 pb-5">
        <div class="card more-img1 pt-4 pl-2">
          <a href="handbags.html"> <img class="card-img-top img-responsive w-100" src="../assets/images/moreimg1.png" alt="" /> </a>
          <div class="card-body">
            <h4 class="card-title"> <span> Sh.940 </span> </h4>
            <p class="card-text"> <a href="#"> Shoulder Handbag, Imported </a> </p>
            <div class="no-review">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i> no review
            </div>
          </div>
        </div>
        <div class="card more-img2 pt-4 pl-2">
          <a href="handbags.html"> <img class="card-img-top img-responsive w-100" src="../assets/images/moreimg2.png" alt="" /> </a>
          <div class="card-body">
            <h4 class="card-title"> <span class="money"> Sh.1200 </span> </h4>
            <p class="card-text"> <a href="#"> Hobo Bags, Designer </a> </p>
            <div class="review">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i> 21 reviews
            </div>
          </div>
        </div>
        <div class="card more-img3 pt-4 pl-2">
          <a href="handbags.htmls"> <img class="card-img-top img-responsive w-100" src="../assets/images/moreimg6.png" alt="" /> </a>
          <div class="card-body">
            <h4 class="card-title"> <span class="money"> Sh.800 </span> </h4>
            <p class="card-text"> <a href="#"> Travelling Bag, Leather </a> </p>
            <div class="review">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i> 1 review
            </div>
          </div>
        </div>

        <div class="card more-img4 pt-4 pl-2">
          <a href="handbags.html"> <img class="card-img-top img-responsive w-100" src="../assets/images/mainimg.png" alt="" /> </a>
          <div class="card-body">
            <h4 class="card-title"> <span class="money"> Sh.890 </span> </h4>
            <p class="card-text"> <a href="#"> Handbag Official, Leather </a> </p>
            <div class="no-review">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i> No review
            </div>
          </div>
        </div>
        <div class="card more-img5 pt-4 pl-2">
          <a href="handbags.html"> <img class="card-img-top img-responsive w-100" src="../assets/images/moreimg4.png" alt="" /> </a>
          <div class="card-body">
            <h4 class="card-title"> <span class="money"> Sh.450 </span> </h4>
            <p class="card-text"> <a href="#"> Shoulder Bag, Imported </a> </p>
            <div class="review">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i> 1 review
            </div>
          </div>
        </div>
        <div class="card more-img6 pt-4 pl-2">
          <a href="handbags.html"> <img class="card-img-top img-responsive w-100" src="../assets/images/moreimg6.png" alt="" /> </a>
          <div class="card-body">
            <h4 class="card-title"> <span class="money"> Sh.340 </span> </h4>
            <p class="card-text"> <a href="#"> Wallet, Designer </a> </p>
            <div class="no-review">
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i>
              <i class="fas fa-star"></i> No review
            </div>
          </div>
        </div>

        <a href="handbags.html" class="btn view-more-btn more-img7 mt-3"> View More </a>
      </article>
      {/* <Reviews />
      <Location /> */}
    </main>
    <div>
      <Footer />
    </div>
  </div>
);

export default Handbags;
