import React from 'react'
import "./Home.css"
import Products from './Products'


const Home = ({cart}) => {
  return (
    <div className='home'>
       <div className='row'>
         <Products cart={cart}/>
        </div>
    </div>
  )
}

export default Home