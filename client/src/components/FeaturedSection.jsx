import React from 'react'
import Title from './Title'
import { assets, dummyCarData } from '../assests/assets'
import CarCard from './CarCard'
import { useNavigate } from 'react-router-dom'

const FeaturedSection = () => {
    const navigate = useNavigate();
  return (
    <div className='flex flex-col items-center py-24 px-6 '>
        <div>
           <Title title='Featured Vechicles' subtitle='Explore our selection of permium vehicles avaliable for your next adventure.'/>
        </div>
        <div className='grid grid-cols-3 gap-5 mt-10'>
         {dummyCarData.slice(0,6).map((car)=>(
            <div key={car.id}>
             <CarCard car={car}/>
            </div>
         ))}
        </div>
        <button  onClick={()=>{
            navigate('/cars'); scrollTo(0,0)
        }}className='flex items-center justify-center gap-2 px-6 py-2 border border-borderColor hover:bg-gray-50 rounded-md mt-18 cursor-pointer'>
            Explore all cars <img src={assets.arrow_icon} alt="arrow"/> 
        </button>
    </div>
  )
}

export default FeaturedSection