import React from 'react'
import { assets } from '../assests/assets'

const Banner = () => {
  return (
    <div className=' h-65 flex justify-between align-center h-50  py-8 px-4 rounded-lg  bg-gradient-to-r from-[#0558FE] to-[#A9CFFF] max-w-280 ml-10'>
        <div className='text-white mx-20 '>
       <h1 className='text-3xl font-medium '>Do you own a luxury Car?</h1>
        <p className='mt-2'>Monetize your vehicle effortlessely by listing it on carRental</p>
       <p className='max-x-130'>We take care of insurance,driver veritification and secure payments _ so you can earn passive income,stress-free</p>
       <button className='bg-white px-7 py-3 rounded-lg text-blue-500 max-w-200 mt-2 transition-all text-sm cursor-pointer'>
        List Your Car
       </button>
        </div>
        <img src={assets.banner_car_image} alt='bannerimg' className='max-h-45 mt-1'/>
    </div>
  )
}

export default Banner