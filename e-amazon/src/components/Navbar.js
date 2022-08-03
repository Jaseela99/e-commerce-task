import React from 'react'
import "./Navbar.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const Navbar = () => {

  return (
    <div className='navbar' >
        <img
          className="logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        />
    

      {/* searchbar */}
      <div className="search">
        <input className="searchInput" type="text" />
        <SearchIcon className="searchIcon" />
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
            <ShoppingCartIcon />
            <span className=" cartCount">0</span>
          </div>
      </div>
    </div>
  )
}

export default Navbar