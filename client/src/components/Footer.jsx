import React from 'react'
import { assets } from '../assests/assets'

const Footer = () => {
  return (
    <div className='text-gray-500/80 pt-8 px-6 md:px-16 lg:px-24 xl:px-32 mt-20'>
            <div className='flex flex-wrap justify-between items-start gap-12 md:gap-8 pb-6 border-slate-300 '>
                <div>
                    <img src={assets.logo} alt="logo" className='mb-4 h-8 md:h-9' />
                    <p className='max-w-80 mt-3'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
                    </p>
                    <div className='flex items-center gap-3 mt-6'>
                        <a href="#"><img src={assets.facebook_logo} alt="facebook" className='w-5 h-5 '/></a>
                        <a href="#"><img src={assets.instagram_logo} alt="facebook" className='w-5 h-5 '/></a>
                        <a href="#"><img src={assets.twitter_logo} alt="facebook" className='w-5 h-5 '/></a>
                        <a href="#"><img src={assets.gmail_logo} alt="facebook" className='w-5 h-5 '/></a>
                        <a href="#"><img src={assets.facebook_logo} alt="facebook" className='w-5 h-5 '/></a>
                    </div>
                </div>

                <div>
                    <h2 className='text-base font-medium text-gray-800 uppercase'>Quick Links</h2>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Browser Cars</a></li>
                        <li><a href="#">List your card</a></li>
                        <li><a href="#">About Us</a></li>
                       
                    </ul>
                    
                </div>
                  <div>
                    <h2 className='text-base font-medium text-gray-800 uppercase'>Resources</h2>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>
                        <li><a href="#">Help Center</a></li>
                        <li><a href="#">Term of services</a></li>
                        <li><a href="#">Privacy policy</a></li>
                        <li><a href="#">Insurance</a></li>
                       
                    </ul>
                    
                </div>
                <div>
                    <h2 className='text-base font-medium text-gray-800 uppercase'>Contact</h2>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>
                        <li>111 Luxury Drive</li>
                        <li>India</li>
                        <li>+91 6382028612</li>
                        <li>suriyapersonal2797@gmail.com</li>
                       
                    </ul>
                    
                </div>
               
            </div>
            <hr className='border-blue-300 mt-8' />
            <div className='flex flex-col md:flex-row gap-2 items-center justify-between py-5'>
                <p>© {new Date().getFullYear()} Brand . All rights reserved.</p>
                <ul className='flex items-center gap-4'>
                    <li><a href="#">Privacy</a></li>
                    <li>|</li>
                    <li><a href="#">Terms</a></li>
                    <li>|</li>
                    <li><a href="#">Cookies</a></li>
                </ul>
            </div>
        </div>
  )
}

export default Footer