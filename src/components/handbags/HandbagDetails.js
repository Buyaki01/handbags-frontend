import React from 'react';
import Navbar from './Navbar.js';
import { FaArrowLeft } from "react-icons/fa";

const HandbagDetails = () => (
  <div>
    <Navbar />
    <div className='reactIcons m-3'>
      <FaArrowLeft />
    </div>
    <div class="row m-3">
      <div className='col-7'>
        <div className="max-w-sm w-full lg:max-w-full lg:flex">
          <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden">
          </div>
          <div className="image-details border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <img src="https://www.pngkey.com/png/full/371-3719602_see-more-photos-to-dior-handbags-price-miss.png" alt="" class="img-responsive w-50" />
              <div className="text-gray-900 font-bold text-xl mb-2">Hobo Bags, Wooven - shs.800 </div>
              <h6> Brand: <span class="text-sm"> Dior </span> | Similar products from Dior </h6>
              <div class="no-review">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i> No review
              </div>
              <hr />
              <p> Shs. 1200 </p>
              <hr />
              <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
              <button className='btn btn-lg'> ADD TO CART </button>
            </div>
          </div>
        </div>
      </div>
      <div className='col-4 col-offset-1 border'>
        <div>
          <h4> DELIVERY & STATUS </h4>
          <hr/>
          <p> Eligible for free delivery for orders above Ksh 699 in Nairobi, Kiambu, and Mombasa (excluding medium and large items) </p>
          <hr/>
          <h6> Choose your Location </h6>
        </div>
      </div>
    </div>
  </div>
)

export default HandbagDetails;