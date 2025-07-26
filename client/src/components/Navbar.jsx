import React from 'react'
import { assets, menuLinks } from '../assests/assets'
import{Link, useLocation,useNavigate} from 'react-router-dom'

const Navbar = ({setShowLogin}) => {
    const location = useLocation();
    const navigate=useNavigate()
  return (
    <div className={ `text-center flex item-center justify-between  text-gray-600 bg-slate-100  py-3  px-10 ${location.pathname==='/'?'bg-slate-200':'bg-white'}`} >
        <Link to='/'>
        <img src={assets.logo} alt='logo' className='py-5'/>
        </Link>
        <div className={`flex items-center space-x-6  gap-5 transition-all duration-300 z-50 py-1`} >
        {menuLinks.map((link,index)=>{ 
            return(
            <Link key={index} to={link.path}>
                {link.name}
            </Link>
            );
        })}
        <div className='relative flex items-center text-sm gap-2 border-slate- 300 max-w-56'>
            <input type='text' placeholder='Search products' className=' border border-gray-700 rounded-full  w-full py-1 px-3'/>
            <img className='absolute right-3'src={assets.search_icon} alt='search_icon'></img>
        </div>
        <div className='flex gap-6'>
            <button className='cursor-pointer' onClick={()=>navigate("/owner")}>Dashboard</button>
            <button className='bg-blue-500 px-8 py-2 rounded-lg text-white w-full hover:bg-blue-700' onClick={()=>setShowLogin(true)}>Login</button>
        </div>
        </div>
        
        
    </div>
  )
}

export default Navbar