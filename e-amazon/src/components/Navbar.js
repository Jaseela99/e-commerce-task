import React from 'react'
import "./Navbar.css"
import {Link} from "react-router-dom"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {productList} from './Products';


const Navbar = () => {

const [data,setData]=React.useState("")
  const searchProduct=()=>{
productList.filter((pro)=>{
if(data=" "){
  return pro
}else if(pro.name===data||pro.category===data){
return pro
}
})
  }
  return (
    <div className='navbar' >
      <Link to="/" > <img
          className="logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        /></Link>
    

      {/* searchbar */}
      <div className="search">
        <input className="searchInput" type="text" onChange={(e)=>setData(e.target.value)} />
        <SearchIcon className="searchIcon" onClick={searchProduct} />
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
            <Link to="/checkout"><ShoppingCartIcon /></Link>
          </div>
      </div>
    </div>
  )
}

export default Navbar