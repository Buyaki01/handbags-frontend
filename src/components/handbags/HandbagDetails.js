import React from 'react';
import Navbar from './Navbar.js';
import { FaArrowLeft } from "react-icons/fa";

const HandbagDetails = () => (
  <div>
    <Navbar />
    <div className='reactIcons m-3'>
      <FaArrowLeft />
    </div>
    <div className="max-w-sm w-full lg:max-w-full lg:flex mt-8">
      <div className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" title="Woman holding a mug">
      </div>
      <div className="image-details border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl mb-2">Can coffee make you a better developer?</div>
          <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
          <button className='btn btn-lg'> ADD TO CART </button>
        </div>
      </div>
    </div>
  </div>
)

export default HandbagDetails;