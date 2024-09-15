import React, { useState } from 'react'
import { Banner1, Banner2, Banner3, Banner4 } from '../assets';
import { HiArrowLeft } from "react-icons/hi2";
import { HiArrowRight } from "react-icons/hi2";

const Banner = () => {
    const [currentSlide,setCurrentSlide] = useState(0);
    const data = [
        Banner1,
        Banner2,
        Banner3,
        Banner4
    ];
    const prevSlide = () => {
        setCurrentSlide (currentSlide === 0?3:(prev)=>prev-1);
    }
    const nextSlide = () => {
        setCurrentSlide (currentSlide === 3? 0:(prev)=>prev+1);
    }
  return (
    <div className="w-full h-auto overflow-x-hidden">
      <div className='wscreen h-[650px] relative'>
        <div style={{ transform: `translateX(-${currentSlide * 100}vw)`}} className='w-[400vw] h-full flex transition-transform duration-1000'>
            <img className="w-screen h-full object-cover" src = {data[0]} alt="firstimage" loading='priority'></img>
            <img className="w-screen h-full object-cover" src = {data[1]} alt="firstimage" ></img>
            <img className="w-screen h-full object-cover" src = {data[2]} alt="firstimage" ></img>
            <img className="w-screen h-full object-cover" src = {data[3]} alt="firstimage" ></img>
        </div>
        <div className='absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44'>
            <div onClick={prevSlide} className='w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300'>
            <HiArrowLeft/>
            </div>
            <div onClick={nextSlide} className='w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300'>
            <HiArrowRight/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
