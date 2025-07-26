import { useState } from 'react'
import Navbar from '../src/components/Navbar'
import {Route, Routes, useLocation} from 'react-router-dom'
import Home from './pages/Home';
import MyBookings from './pages/MyBookings';
import CarDetails from './pages/CarDetails';
import Cars from './pages/Cars';

const App = () => {

  const [showLogin,setShowLogin]=useState(false);
  const isOwnerPath =useLocation().pathname.startsWith('/owner')
  return (
    <>
      {!isOwnerPath &&<Navbar setShowLogin={setShowLogin}/>}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/carDetails/:id' element={<CarDetails/>}/>
        <Route path='/cars' element={<Cars/>}/>
        <Route path='/my-bookings' element={<MyBookings/>}/>
      </Routes>
    </>
  )
}

export default App