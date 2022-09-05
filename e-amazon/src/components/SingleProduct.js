import React from 'react'
import "./Styles.css"
import { CartState } from '../Context'
const SingleProduct = ({pro}) => {
  const {cart,setCart} =CartState()
  
  return (
    <div className='products' >
   <img src={pro.image} alt={pro.name}/>
   <div className='productDesc'>
    <span style={{fontWeight:700}}>{pro.name}</span>
    <span>₹ {pro.price.substring(0, 3)}</span>
   </div>
    {!cart.includes(pro)?
  (<button className='add' onClick={()=>setCart([...cart,pro])}>Add to Cart</button>):
   (<button className='remove' onClick={()=>setCart(cart.filter((c)=>c.id!==pro.id))}>Remove From Cart</button>)
}</div>
  )
}

export default SingleProduct