import React from 'react'
import SingleProduct from './SingleProduct'
import { CartState } from '../Context'
import "./Styles.css"
const CartPage = () => {
  const {cart} =CartState()
  const [total,setTotal] =React.useState()
  React.useEffect(()=>{
setTotal(cart.reduce((acc,curr)=>acc+Number(curr.price),0))
  },[cart])
  return (
    <div>
      <span style={{fontSize:30}}>My Cart</span>
    <br/>
    <span style={{fontSize:30}}> Total:Rs{total}</span>
    <div className='productContainer'>
{cart.map((pro)=>
<SingleProduct pro={pro} key={pro.id} />)}
    </div>
    </div>
  )
}

export default CartPage

