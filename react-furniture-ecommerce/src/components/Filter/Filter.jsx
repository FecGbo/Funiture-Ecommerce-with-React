import React, { useEffect, useState } from 'react'
import "./filter.css"
import Bestselling from '../BestSelling/Bestselling'


function Filter({setShowSuccess}) {
    const[showFilter,setShowFilter]=useState(true);
 //detect mobile size
 useEffect(()=>{
    const handleResize=()=>{
        if(window.innerWidth <=600){
            setShowFilter(false);
        }else{
            setShowFilter(true)
        }
    };
    handleResize();
    window.addEventListener('resize',handleResize)
    return ()=>window.removeEventListener('resize',handleResize);
 },[]);

  return (
    <>
    <div className='filter-head'>
        <div className="filter-left">
           <button onClick={()=>setShowFilter((prev)=>!prev) }
             className="filter-toggle-btn" aria-label="Toggle filter">
             <i className="fa-solid fa-filter"></i>
           </button>
            <p>Filter</p>
            <button>
                <i className="fa-solid fa-grip"></i>

            </button>

        </div>
        <div className="filter-right">
            <input type="text" placeholder='Searching' />
            <div className="sort-by">
                <p>Sort by</p>
                <select>
                    <option value="">Lower to Higher</option>
                    <option value="">Higher to Lower</option>
                </select>
            </div>
        </div>
    </div>


 <div className="filter-content">
 <div className={`filter-content-left${showFilter ? ' open' : ' closed'}`}>
      <span style={{fontSize:"16px",fontWeight:"bold",opacity:"0.5"}}>Searching Information</span>
      <div className="price-filter">
        <span>Price</span>

        <div className="price-input">
            <label>Min:</label>
            <input type="text" placeholder='Min' />
        </div>
          <div className="price-input">
            <label>Max:</label>
            <input type="text" placeholder='Max' />
        </div>

      </div>
      <div className="category-filter">
        <span style={{fontWeight:'bold'}}>Filter</span>
        <span style={{opacity:'0.5',fontWeight:'bold'}}>Furnitures</span>

        <div className="category-check">
            <div className="check-box">
                <input type="checkbox" />
            <label>Table</label>
            </div>

                <div className="check-box">
                <input type="checkbox" />
            <label>Table</label>
            </div>

                <div className="check-box">
                <input type="checkbox" />
            <label>Table</label>
            </div>

                <div className="check-box">
                <input type="checkbox" />
            <label>Table</label>
            </div>
            

    
        </div>

      </div>

    </div>
    <div className="filter-content-right">
    <Bestselling showTitle={false} setShowSuccess={setShowSuccess} />
    </div>


 </div>


 {/* <div className="pagination" style={{backgroundColor:"white"}}>
    <ul> <li>Go</li></ul>
 </div> */}
 </>



  )
}

export default Filter