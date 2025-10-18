import React, { useContext, useState } from 'react'
import '../BestSelling/bestselling.css'
import { CartContext } from './CartProvider';
// import SuccessMessage from './SuccessMessage';

function Productcard({product,setShowSuccess}) {

const {addToCart}=useContext(CartContext);
const {removeFromCart}=useContext(CartContext);
// const [showSuccess,setShowSuccess]=useState(false);


const handleAddToCart=()=>{
  addToCart(product);
  if (typeof setShowSuccess === 'function') {
    setShowSuccess(true);
    // alert('Added to cart successfully!');
    setTimeout(() => setShowSuccess(false), 1200);
  }
}


  return (
      <div className='cards'>
        <div className="addCartbtn">

          <button onClick={handleAddToCart}><b> Add To Cart</b></button>
            {/* {showSuccess && <SuccessMessage />} */}
                <img src={product.img} alt="" />
                <div className='product-desc'>
                    <h2>{product.name}</h2>
                    <p>{product.desc}</p>
                    <h2>{`MMK ${product.price}`}</h2>

                </div>

                </div>

    </div>
  )
}

export default Productcard