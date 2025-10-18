import React, { useEffect, useState } from 'react'
import { data } from 'react-router-dom';

import Productcard from '../ProductCard/Productcard';
function Bestselling({showTitle=true,setShowSuccess}) {
    const [products,setProducts]=useState([]);
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        fetch('/products.json')
        .then((response)=>response.json())
        .then((data)=>{
            setProducts(data);
            setLoading(false);
        }).catch((e)=>console.log('Error loading product:',e))
    },[]);
    if(loading)return <p>Loading Products.........</p>
 return (
    <div style={{ fontFamily:"Arial, sans-serif",textAlign:"center",background:"white",color:"black"}} className='product'>
     { showTitle && <h1>Best Selling Products</h1>}
      <div className='cards-container'>
        {products.slice(0,8).map((item)=>(
            //  <div key={item.id} className='cards'>
            //     <img src={item.img} alt="" />
            //     <div className='product-desc'>
            //         <h2>{item.name}</h2>
            //         <p>{item.desc}</p>
            //         <h2>{`MMK ${item.price}`}</h2>

            //     </div>

            //  </div>
            <Productcard key={item.id} product={item} setShowSuccess={setShowSuccess}/>
        ))}
    
      </div>
    </div>
  );
}

export default Bestselling