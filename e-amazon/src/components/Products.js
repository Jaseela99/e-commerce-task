import React from "react";
import "./Products.css";

export const productList = [
  {
    name: "Potato",
    id: 1,
    price: 30,
    available: 1,
    vendor: "Himachal Pvt Ltd",
    category: "Vegtables",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7h3FOuPhgNqd5fh0wlLIe10a7agHjIUM8kA&usqp=CAU",
    rating: 5,
  },

  {
    name: "Banana",
    id: 2,
    price: 50,
    available: 1,
    category: "Fruits",
    vendor: "Organic farms",
    image:
      "https://img.freepik.com/premium-photo/banana-bunch-isolated_88281-1027.jpg?w=2000",
    rating: 5,
  },

  {
    name: "Drumsticks",
    id: 3,
    price: 20,
    available: 0,
    category: "Vegetables",
    vendor: "Mallikarjuna farms",
    image:
      "https://cdn.shopify.com/s/files/1/0441/1929/4112/products/drumstick_700x700.jpg?v=1606780221",
    rating: 5,
  },

  {
    name: "Orange",
    id: 4,
    price: 25,
    available: 1,
    vendor: "Nagpur farms",
    category: "Fruits",
    image:
      "https://www.collinsdictionary.com/images/full/orange_342874121.jpg",
    rating: 5,
  },
];
const Products = () => {
const [cart,setCart]=React.useState([])
  const AddToCart=(id)=>{
    productList.filter((pro)=>{
if(pro.id===id){
  setCart(pro)
}
    })
  
  }

  return (
    <div>
      {productList.map((pro) => (
        <div className="product">
          <div className="info">
            <div className="names">
              <p>{pro.name}</p>
              <p>{pro.vendor}</p>
              <p>{pro.category}</p>
            </div>

            <p className="price">
              <small>₹</small>
              <strong>{pro.price}</strong>
            </p>
            
          </div>

          <img src={pro.image} alt="" />
         <div className="end">

          <button onClick={AddToCart}>Add to Cart</button>
          <p>{pro.available ? "Instock" : "Out Of stock"}</p>
         </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
