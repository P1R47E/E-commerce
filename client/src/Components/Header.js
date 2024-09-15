import React from 'react'
import { cartImage, logoDark, shoppingCart } from "../assets/index";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => {
    const userInfo = useSelector((state) => state.fig.userInfo);
    const productData = useSelector((state) => state.fig.productData);
  return (
    <div className="w-full h-20 bg-white border-b-[1px] border-b-gray-800 font-titleFont sticky top-0 z-50">
       <div className='max-w-screen-xl mx-auto h-full flex items-center justify-between'>
         <Link to='/'> 
           <div>
            <img className='w-20' src = {logoDark} alt="logoDark" />
            </div>
         </Link>
 
            <div className='flex items-center gap-8'>
                <ul className='flex items-center gap-8'>
                    <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Home</li>
                    <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Pages</li>
                    <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Element</li>
                    <li className='text-base text-black font-bold hover:text-orange-900 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300'>Block</li>
                </ul>
               <Link to ='/cart'>
                  <div className='relative'>
                      <img className='w-7' src= {cartImage} alt="cartimage" />
                      <span className='absolute w-6 top-0 left-1 text-sm flex items-center justify-center font-semibold'>
                          {productData.length}
                      </span>
                  </div>
               </Link>
                <Link to = "/login">
                <img className='w-8 h-8 rounded-full' src={
                  userInfo?userInfo.image:shoppingCart} alt="shopping cart">   
                </img>
                </Link>
                {
                  userInfo && <p className='text-base font-titleFont font-semibold underline underline-offset-2'>{userInfo.name}</p>
                }
            </div>
        </div>
       
    </div>

  )
}

export default Header
