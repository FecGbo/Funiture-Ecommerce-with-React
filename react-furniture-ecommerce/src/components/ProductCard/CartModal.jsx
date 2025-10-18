import React from 'react';
import '../css/cartmodal.css';
import { CartContext } from './CartProvider';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

function CartModal({ cart,closeModal }) {
  const { removeFromCart } = useContext(CartContext);


  const navigate = useNavigate();


  return (
    <div className="cart-modal">
      {/* <h4>Cart Items</h4> */}
      {cart.length === 0 ? (
        <div className="no-cart-container">
          <img src="/slider-img/empty-cart.png" alt="" className='no-cart' />
          <p> <b>Your cart is empty.</b></p>

          <div className="no-cart-text">
              <p style={{margin:'0'}}>Add somethings to make  </p>
             <span>happy......!</span>

          </div>

          <button onClick={() => navaigate("/.product")}>Continue Shopping</button>

          
        </div>
      ) : (
        <div style={{ listStyle: 'none', padding: "1rem" }} className='cart-list'>
          <h3 style={{margin:'0'}}>Shopping Cart</h3>
       

          {cart.map((item, idx) => (
            <div key={idx} style={{ marginBottom: '0.5rem' }} className='cart-item'>
               <div className="cart-img">
                <img src={item.img} alt={item.name} style={{ width: '50px', height: '50px', objectFit: 'cover'}} />
               </div>
                <div className="cart-details">
                    {item.name}
                    <div className="cart-price">
                       {item.quantity} X MMK {item.price}

                    </div>
                        
                </div>

                <div className="remove-item">
                  <i class="fa-solid fa-circle-xmark" style={{color:'red'}} onClick={()=>removeFromCart(item.id)}></i>
                </div>
            </div>
          

          
          ))}
            

            <div className="cart-btn">

    <button onClick={()=>{
      navigate('/.bag')
      closeModal();
      }}>PROCESS TO BAG</button>
            <button>CONTINUE SHOPPING</button>

            </div>
          




        </div>
      )}
    </div>
  );
}

export default CartModal;