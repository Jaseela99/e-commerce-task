import React from 'react'
import { CartState } from '../Context';
import SingleProduct from './SingleProduct';
import "./Styles.css"

const Home = () => {
  const {products} =CartState()
  
  return (
    <div className='productContainer'>{products.map((pro)=>(
      <SingleProduct pro={pro} key={pro.id} />
    ))}</div>
  )
}

export default Home

