import React from 'react'
import Header from '../Header/Header'
import Input from '../Input/Input'
import '../css/checkout.css'

function Checkout() {
  return (
    <div>
        <Header pageName={"Checkout"} />
      <div className="checkout-cont">


        <div className="checkout-form">
 
            <form action="">
                <div className="check-mail">
                  <Input label={"Email"} type={"email"} placeholder={"Enter your email address"} />
                </div>
                


                 <div className="cvc">
                                  <Input label={"Card information"} type={"number"} placeholder={"1234 1234 1234 1234"} />

                                  <div className="cvc-child">
                                     <input type="text" placeholder="MM / YY" />
                                      <input type="text" placeholder='CVC' /> 
                                  </div>
                
                 </div>

                <Input label={"Cardholder name"} type={"text"} placeholder={"Full name on card"} />

                <button>Pay Now</button>
            </form>
        </div>

        <div className="checkout-img">
          <img src="/slider-img/payment.png" alt="" />
          
        </div>
          

        </div>







    </div>
  )
}

export default Checkout