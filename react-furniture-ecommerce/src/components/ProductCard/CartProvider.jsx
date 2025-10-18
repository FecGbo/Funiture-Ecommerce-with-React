import React, { createContext, useState } from 'react'





export const CartContext=createContext();

function CartProvider({children}) {
  const [cart,setCart]=useState([]);

  const addToCart=(product)=>{
    // setCart([...cart,product]); this duplicates items
    setCart((prev)=>{
      const existing=prev.find((item)=>item.id===product.id);
      if(existing){
         return prev.map((item)=>
          item.id===product.id ? {...item,quantity:item.quantity +1} : item
      );
      }else{
        return [...prev,{...product,quantity:1}];
      }
    });
  }

  const removeFromCart = (id) => {
    setCart(prev => prev.filter(item => item.id !== id));
  }

  return (
    <CartContext.Provider value={{cart,addToCart,removeFromCart}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartProvider