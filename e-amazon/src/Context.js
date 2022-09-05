import React from 'react'
import { faker } from '@faker-js/faker';
import {createContext,useContext} from "react"
export const Cart =createContext()
const Context = ({children}) => {
    const [cart,setCart]=React.useState([])
    const productArray=[...Array(20)].map((p)=>({
      id:faker.datatype.uuid(),
      name:faker.commerce.product(),
      description:faker.commerce.productDescription(),
      price:faker.commerce.price(),
      image:faker.image.image()
    }))
    const [products] =React.useState(productArray)
  return (
    <Cart.Provider value={{cart,setCart,products}}>
{children}
    </Cart.Provider>
  )
}

export const CartState = () => {
  return useContext(Cart);
};

export default Context