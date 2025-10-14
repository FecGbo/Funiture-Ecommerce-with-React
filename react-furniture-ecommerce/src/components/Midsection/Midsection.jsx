import React from 'react'
import './midsection.css'

function Midsection() {
  return (
    <section>
        <div className="section-left">
            <img src="/slider-img/section.png" alt=""/>
        </div>

        <div className="section-right">
            <h1 style={{fontWeight:'bold'}}>Luxury Golden Furniture</h1>
            <h3>Our designer already made a lot of 
                beautiful prototipe of rooms that inspire you.
                 Our designer already made a lot of beautiful prototipe 
                 of rooms that inspire you.</h3>

            <div className="section-btn">
                <button>Shop</button>
            </div>

        </div>


    </section>
  )
}

export default Midsection