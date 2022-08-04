import React from "react";
import "./Products.css";
import { useStateValue } from "./StateProvider";


const Products = ({name,id,price,available,vendor,category,image}) => {
  const dispatch = useStateValue()
  const AddToCart = ()=>{
    //dispatch item in to data layer
    dispatch({
      type:"ADD_TO_CART",
      item:{
        name:name,
        id:id,
        price:price,
        available:available,
        vendor:vendor,
        category:category,
        image:image,
      }
    })
  }

  return (
    <div>
    
        <div className="product">
          <div className="info">
            <div className="names">
              <p>{name}</p>
              <p>{vendor}</p>
              <p>{category}</p>
            </div>

            <p className="price">
              <small>₹</small>
              <strong>{price}</strong>
            </p>
            
          </div>

          <img src={image} alt="veg" />
         <div className="end">

          <button onClick={AddToCart}>Add to Cart</button>
          <p>{available ? "Instock" : "Out Of stock"}</p>
         </div>
        </div>
    </div>
  );
};

export default Products;
