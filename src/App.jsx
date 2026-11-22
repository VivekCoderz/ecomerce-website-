import "./App.css";
import Navbar from "./components/Navbar";

import products from "./data/products.js";

import { useState } from "react";
import IndiviualCard from "./components/IndiviualCard.jsx";

function App() {
  const [Products, setProducts] = useState(products);
  const [cart, setCart] = useState([]);

  const addCart = (id)=>{
    // find() returns the product object; filter() returned a one-element array
    const update = Products.find((pr)=>pr.id==id)
    setCart([...cart,update])
  }

  

  const updateCardQantity = (id,op=1) => {
    console.log(id)
    const update = Products.map((pr)=>{
      const next = pr.quantity + op
      // Stay within 0..stock. The old check (stoke > quantity) also blocked
      // the "-" button once quantity reached the stock limit.
      if(pr.id==id && next >= 0 && next <= pr.stoke){
        return {...pr,quantity : next}
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
