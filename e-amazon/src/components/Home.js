import React from 'react'
import "./Home.css"
import Products from './Products'


const Home = () => {
  return (
    <div className='home'>
       <div className='row'>
         <Products/>
        </div>
    </div>
  )
}

export default Home