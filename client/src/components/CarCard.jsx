 import React from 'react'
import { assets } from '../assests/assets';
import { useNavigate } from 'react-router-dom';
 
  
 
 const CarCard = ({car}) => {
    const currency = import.meta.env.VITE_CURRENCY
    const navigate = useNavigate()

   return (
     <div onClick={()=>{navigate(`/cars-details/{$car._id}`); scrollTo(0,0)}} className='group rounded-xl overFlow-hidden shadow-lg hover:translate-y-1 transition-all duration-500 cursor-pointer'>
     
        <div className='relative h-50 overflow-hidden'>
            <img src={car.image} alt='car-image' className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'/>
            {car.isAvaliable && <p className='absolute top-4 left-4 bg-blue-600 text-white text-xs px-2.5 py-1 rounded-full'>Avaliable Now</p>}
            <div className='absolute bottom-4 right-4 bg-black backdrop-blur-sm text-white px-3 py-2 rounded-lg'>
            <span className='font-semibold'>{currency}{car.pricePerDay}</span>
            <span className='text-sm text-white'>/ day</span>
        </div>
        </div>
        <div className='p-4 '>
            <div className='flex justify-betwwen items-start mb-2'>
                <div>
                    <h3 className='text-lg font-medium'>{car.brand} {car.model}</h3>
                    <p>{car.category} . {car.year}</p>
                </div>
             </div>
            <div className='mt-4 grid grid-cols-2 grid-y-2 gap-2text-gray-600'>
             <div className='flex items-center text-sm text-muted-foreground'>
                <img src={assets.users_icon} alt='' className='h-4 mr-2'/>
                <span>{car.seating_capcity} Seats</span>
             </div>
             <div className='flex items-center gap-1 text-sm text-muted-foreground ml-5'>
                <img src={assets.fuel_icon} alt='' className='h-4 mr-2'/>
                <span>{car.fuel_type} Seats</span>
             </div>
             <div className='flex items-center text-sm text-muted-foreground '>
                <img src={assets.car_icon} alt='' className='h-4 mr-2'/>
                <span>{car.transmission} Seats</span>
             </div>
             <div className='flex items-center gap-2 text-sm text-muted-foreground ml=5'>
                <img src={assets.location_icon} alt='' className='h-4  ml-5'/>
                <span>{car.location} Seats</span>
             </div>
             
            </div>
        </div>
     </div>
   )
 }
 
 export default CarCard;