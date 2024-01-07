import React from 'react'
import Welcome from '../welcome/Welcome'
import Partner from '../partner/Partner'
import Booking from '../booking/Booking'
import Ambiance from '../ambiance/Ambiance'
import Delivery from '../delivery/Delivery'
import FilterdDishes from '../FilterdDishes/FilterdDishes'
import {AllMenus} from '../../components/allmenuContext/AllmenuContext'

const Home = () => {
  return (
   <>
   
  

  <Welcome></Welcome>
  <Partner></Partner>
  <Booking></Booking>
  <FilterdDishes></FilterdDishes>
  <Ambiance></Ambiance>
  <Delivery></Delivery>



   </>
  )
}

export default Home