import React from 'react'
import {useState} from 'react'
import { assets, cityList } from '../assests/assets'

const Hero = () => {
    const[pickUpLocation,setPickUpLocation]=useState('')
  return (
    <div className='h-screen flex flex-col items-center justify-center gap-14 bg-slate-200 text-center'>
        <h1 className='text-4xl font-semibold'>Luxury cars on Rent </h1>
        <form className='flex  justify-between bg-white w-full max-w-180  items-start rounded-full py-4 pl-2 shadow=[opx-8px-20px-rgba(0,0,0,0,0.1)] '>
            <div className='flex flex-col items-start gap-1 py-2 pl-5'>
                <select required value={pickUpLocation} onChange={(e)=>setPickUpLocation(e.target.value)}>
                    <option>Pickup Location</option>
                    {cityList.map((city)=>{
                        return(
                            <option key={city}value={city}>{city}</option>
                        );
                    })}
                </select>
                <p className='text-gray-400'>{pickUpLocation?pickUpLocation:'Please select location'}</p>
               
            </div>
             <div className='flex flex-col items-start gap-1 py-2 pl-5'>
                <label htmlFor='pickUp-date'>Pick-up Date</label>
                <input type="date" id='pickup-date' min={new Date().toISOString().split("T")[0]} className='text-sm text-gray-500' required/>
            </div>
             <div className='flex flex-col items-start gap-1 py-2 pr-5'>
                <label htmlFor='Return-date'>Return Date</label>
                <input type="date" id='return-date'  className='text-sm text-gray-500' required/>
            </div>
            <div className='flex items-center mt-3'>
            <button className=' flex items-center justify-center px-10 py-2 gap-2 text-xl text-white bg-blue-500 rounded-full mr-6 hover:bg-blue-700'>
                <img src={assets.search_icon} alt='search-icon ' className='brightness-[3]'/>
                Search
            </button>
            </div>
            
        </form>
        <img src={assets.main_car} alt='main_car' className='max-h-74' /> 
    </div>
  )
}

export default Hero