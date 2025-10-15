import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer>
        <div className="footer-left">
            <h2>Funiro.</h2>
            <div className="footer-desc">
                <p>400 University Drive Suite 200</p>
                <p>Coral Gables,</p>
                <p>FL 33134 USA</p>
            </div>
        </div>

        <div className="footer-right">
            <div className="footer-right-one">
                <ul>
                    <li>Links</li>
                    <li>Home</li>
                    <li>Product</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>

            <div className="footer-right-two">
                <ul>
                    <li>Customer Care</li>
                    <li>Payment Options</li>
                    <li>Returns</li>
                    <li>Privacy Policies</li>
                </ul>
            </div>

            <div className="footer-right-three">
                <p>Payment Information</p>
                <div className="payment">
                  <i class="fa-solid fa-sack-dollar"></i>
                    <i class="fa-brands fa-cc-visa"></i>
                    <i class="fa-brands fa-cc-mastercard"></i>
                </div>
            </div>


        </div>




    </footer>
  )
}

export default Footer