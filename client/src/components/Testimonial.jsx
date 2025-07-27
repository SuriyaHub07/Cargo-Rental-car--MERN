import React from 'react'
import Title from './Title'
import { assets } from '../assests/assets';

const Testimonial = () => {
    const testimonials = [
        { name: "Emma Rodriguez", 
            address: "Barcelona, Spain", 
            image: assets.testimonial_image_1, 
            testimonial:"I've rented cars form various companies , but the experience with carRental was expentional"
        },
        { name: "Suriya", 
            address: "NewYork,USA", 
            image: assets.testimonial_image_2, 
            testimonial:"CarRental made by trip so much easier.the car was delivered right to my door,my customer service was fanasatic!"
        },
        { name: "Sagar", 
            address: "Barcelona, Spain", 
            image: assets.testimonial_image_1, 
            testimonial:"I've rented cars form various companies , but the experience with carRental was expentional"
        },
    ];
  return (
    <div>
        <div className="py-28 px-6 ">
        
         <Title title="what our Customer say" subtitle="Discover why discering travelers choose stayVenture for their luxury accomdations around the world ."/>

            <div className="grid grid-cols-3 gap-8 mt-18">
                {testimonials.map((testimonial,INDEX) => (
                    <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-lg hover:-translate-y-1 transition-all duration-500">
                        <div className="flex items-center gap-3">
                            <img className="w-12 h-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
                            <div>
                                <p className="font-playfair text-xl">{testimonial.name}</p>
                                <p className="text-gray-500">{testimonial.location}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 mt-4">
                            {Array(5).fill(0).map((_ , index) => (
                                <img key={index}src={assets.star_icon} alt="star" />
                                
                            ))}
                        </div>
                        <p className="text-gray-500 max-w-90 mt-4 font-light ">"{testimonial.testimonial}"</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Testimonial