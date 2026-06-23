import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Card from "./components/Card";
import Navbar from "./components/Navbar";

import cardData from "./data/cardData.js";
import products from "./data/products.js";

import { useState } from "react";
import IndiviualCard from "./components/IndiviualCard.jsx";

function App() {
  const cartItems = []

  const [quantity, setQuantity] = useState(0);
  const [Products, setProducts] = useState(products);
  const [cart, setCart] = useState([]);

  const addCart = (id)=>{
    const update = Products.filter((pr)=>pr.id==id)
    // cartItems.unshift(update)
    setCart([...cart,update])
    console.log(cart)
  }

  

  const updateCardQantity = (id,op=1) => {
    console.log(id)
    const update = Products.map((pr)=>{
      if(pr.id==id && pr.stoke>pr.quantity){
        return {...pr,quantity : pr.quantity+op}
      }
      return pr
    })
    setProducts(update)
  }

  return (
    <div style={{}}>
      <Navbar />

       <div
        style={{
          width : "80%",
          margin : "20px auto",
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          padding: "10px",
          justifyContent : "space-between"
        }}
      >
        {Products.map((pro) => (
          <IndiviualCard key={pro.id} pro={pro} increaseQuantity ={updateCardQantity} addCart={addCart}/>
        ))}
      </div>

      
    </div>
  );
}

export default App;
