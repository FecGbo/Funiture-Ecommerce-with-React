import React from 'react'
import '../BestSelling/bestselling.css'

function Productcard({product}) {
  return (
      <div className='cards'>
                <img src={product.img} alt="" />
                <div className='product-desc'>
                    <h2>{product.name}</h2>
                    <p>{product.desc}</p>
                    <h2>{`MMK ${product.price}`}</h2>

                </div>

    </div>
  )
}

export default Productcard