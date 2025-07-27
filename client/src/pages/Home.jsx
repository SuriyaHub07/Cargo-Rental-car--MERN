import React from 'react'
import Hero from '../components/Hero'
import CarCard from '../components/CarCard'
import { dummyCarData } from '../assests/assets'
import FeaturedSection from '../components/FeaturedSection'
import Banner from '../components/Banner'
import Testimonial from '../components/Testimonial'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'


 
const Home = () => {

  let car =dummyCarData;
  console.log("home:",car)
return (
    <div>
        <Hero/>
        <FeaturedSection/>
        <Banner/>
        <Testimonial/>
        <NewsLetter/>
        <Footer/>

    </div>
  )
}

export default Home