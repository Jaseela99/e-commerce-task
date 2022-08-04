import React from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useStateValue } from './StateProvider';


const Navbar = () => {
  
 const cart = useStateValue()
 const [data,setData] =React.useState("")
 const searchFromCart=(cart)=>{
  cart.filter(item => {
    if (data === "") {
      return item;
    } else if (item.name.toLowerCase().includes(data.toLowerCase())) {
      return item;
    }
  });
 }

  return (
    <div className='navbar' >
      <Link to="/" > <img
          className="logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="logo"
        /></Link>
    

      {/* searchbar */}
      <div className="search">
        <input className="searchInput" type="text"  onChange={(e)=>setData(e.target.value)}/>
        <SearchIcon className="searchIcon" onClick={searchFromCart(cart)} />
      </div>
      {/* added options */}
      <div className="nav">
        
    
          <div  className="option">
            <span className="optionOne">Guest</span>
            <span className="optionTwo">Sign In</span>
          </div>
        

        <div className="option">
          <span className="optionOne">Your</span>
          <span className="optionTwo">Prime</span>
        </div>

        <div className="option">
          <span className="optionOne">Returns</span>
          <span className="optionTwo">& Orders</span>
        </div>
        {/* added basket icon */}
        {/* when cart is clicked it should go to checkout page */}
        
          <div className="optionCart">
            <Link to="/checkout"><ShoppingCartIcon />
            </Link>
          </div>
      </div>
    </div>
  )
}

export default Navbar