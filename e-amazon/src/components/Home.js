import React from 'react'
import "./Home.css"
import Products from './Products'


const Home = () => {
  return (
    <div className='home'>
        <div className="container">
        <img
          className="image"
          src="https://www.whatspaper.com/wp-content/uploads/2021/09/hd-stranger-things-wallpaper-whatspaper-1.jpg"
          alt=""
        />
        <div className="row">
        <Products id="1" name="Potato" price={30} available={1} vendor= "Himachal Pvt Ltd" category="Vegtables" image=
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7h3FOuPhgNqd5fh0wlLIe10a7agHjIUM8kA&usqp=CAU"/>
         
        <Products id="2" name= "Banana"
    price={50}
    available={1}
    category="Fruits"
    vendor= "Organic farms"
    image=
      "https://img.freepik.com/premium-photo/banana-bunch-isolated_88281-1027.jpg?w=2000"/>
         
         
          
        </div>
        <div className="row">
        <Products name= "Drumsticks"
    id="3"
    price={20}
    available={0}
    category="Vegetables"
    vendor="Mallikarjuna farms"
    image=
      "https://cdn.shopify.com/s/files/1/0441/1929/4112/products/drumstick_700x700.jpg?v=1606780221"/>
         
        <Products  name="Orange"
    id="4"
    price={25}
    available={1}
    vendor= "Nagpur farms"
    category= "Fruits"
    image=
      "https://www.collinsdictionary.com/images/full/orange_342874121.jpg"/>
         
         
          
        </div>
        </div>
    </div>
  )
}

export default Home