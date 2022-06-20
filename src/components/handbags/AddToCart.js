import React from 'react';
import Navbar from './Navbar.js';
import { FaRegTrashAlt, FaArrowLeft } from "react-icons/fa";

const AddToCart = () => (
  <article>
    <Navbar />

    {/* Use a Card instead */}
    
    <div className='flex justify-center'>
      <div className='row m-3 grid gap-y-6'>
        <div className='col-lg-7 shadow-lg mb-4'>
          <h3 className='m-2 border-b p-2 addToCartHeading'> Cart(2) </h3>
          <div className='row p-3'>
            <div className='col-lg-4'>
              <img src="https://www.pngkey.com/png/full/371-3719602_see-more-photos-to-dior-handbags-price-miss.png" alt="" class="img-responsive w-50" />
            </div>
            <div className='col-lg-4 text-black-500'>
              <h4> Top-handle Bag, Designer </h4>
            </div>
            <div className='col-lg-4 text-black-500'>
              <h2> sh. 1200 </h2>
            </div>
          </div>
          <hr />
          <div className='row p-3'>
            <div className='flex justify-between'>
              <div className='flex reactIcons'>
                <FaRegTrashAlt /> 
                <span className="remove-btn">REMOVE</span> 
              </div>
              <div>
                <button className='btn btn-lg'> <a> + </a>  </button> <span> 1 </span>
                <button className='btn btn-lg ml-3'> <a> - </a> </button>
              </div>
            </div>
          </div>
        </div>

        <div className='col-lg-4 col-lg-offset-1 shadow-lg p-3'>
          <h2 className='addToCartHeading'> Cart Summary</h2>
          <hr/>
          <h5> Total: <span> sh. 12990 </span> </h5>

          <button className='btn btn-lg mt-4'>
            <a> CHECKOUT (sh. 12990) </a>
          </button>
        </div>
      </div>
    </div>
  </article>
)
export default AddToCart;