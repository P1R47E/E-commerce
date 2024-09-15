import React, { useEffect, useState } from 'react'
import {useSelector} from "react-redux";
import { emptyCart } from '../assets';
import CartItem from '../Components/CartItem';
import {toast,ToastContainer} from 'react-toastify'
const Cart = () => {
   const userInfo = useSelector((state) => state.fig.userInfo);
   const productData = useSelector((state) => state.fig.productData);
   const [totalAmt,setTotalAmt] = useState(" ");
   const [payNow,setPayNow] = useState(false);

   useEffect(() =>{
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price.toFixed(2));
   },[productData]);
   const handleCheckout = () =>{
    if(userInfo){
      setPayNow(true);
    }
    else{
      toast.error("please sign in to checkout")
    }

   }
  return (
    <div>
      <img className='w-full h-60 0bject-cover' src = {emptyCart} alt='emptyCartImage' />
      <div className='max-w-screen-xl mx-auto py-20 flex'>
        <CartItem />
        <div className='w-1/3 bg-[#fafafa] py-6 px-4'>
          <div className='flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6'>
            <h2 className='text-2xl font-medium'>Cart totals</h2>
            <p className='flex items-center gap-4 text-base'>
              Subtotal{" "}
              <span className='font-titleFont font-bold text-lg'>
                ETB{totalAmt}
              </span>
            </p>
            <p className='flex items-start gap-4 text-base'>
              Shipping{" "}
              <span>
                lorem ipsum dolor sit amet consectetur adipisicing elit.quos, veritatis.
              </span>
            </p>
          </div>
          <p className='font-titleFont font-semibold flex justify-between mt-6'>
            {" "}
            total <span className='text-xl font-bold'>
              ETB{totalAmt}
            </span>
            </p>
            <button onClick={handleCheckout} className='text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duratio-300 '>proceed to checkout</button> 
        </div>
      </div>
      <ToastContainer 
        position = "top-left"
        autoClose = {2000}
        hideProgressBar = {false}
        newestOnTop = {false}
        closeOnclick
        trl = {false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"/>
    </div>
  )
}

export default Cart
