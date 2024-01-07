import React from 'react'
import {BrowserRouter as Router , Route , Routes} from 'react-router-dom'
import Header from '../components/Header/Header'
import Footer from '../components/footer/Footer'
import Home from '../pages/Home/Home'
import Dishes from '../pages/dishes/Dishes'
import Booking from '../pages/booking/Booking'
import AboutUs from '../pages/About us/AboutUs'
import NotFound from '../pages/not found/NotFound'


const LayoutRoutees = () => {
  return (
  
      
    <Router>
        <Header/>
        <Routes>
            <Route exact path='/' element={<Home/>} /> 
            <Route exact path='/Food-explore-Website' element={<Home/>} /> 
            <Route path='/dishes' element={<Dishes/>} /> 
            <Route path='/Services' element={<Booking/>} /> 
            <Route path='/about' element={<AboutUs/>} /> 
            <Route path='/*' element={<NotFound/>} /> 
        </Routes>
        <Footer/>
    </Router>
    
  )
}

export default LayoutRoutees