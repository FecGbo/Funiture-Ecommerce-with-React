import React, { useEffect } from 'react'
import './imageSlider.css'
const images=[
  "/slider-img/img-1.jpg",
  "/slider-img/img-2.jpg",
  "/slider-img/img-3.jpg",
  "/slider-img/img-4.jpg",
]

function ImageSlider() {
  const [currentIndex,setCurrentIndex]=React.useState(0);
  // auto-slide 
  useEffect(()=>{
    const interval=setInterval(()=>{
      setCurrentIndex((prevIndex)=>(prevIndex+1)%images.length)

    },4000)
    return ()=>clearInterval(interval);

  },[])
  // go to specific slide

  const goToSlide=(index)=>{
    setCurrentIndex(index)
  }

  return (
    <div className='slider-container'>
      <img
        src={images[currentIndex]}
        alt={`Slide ${currentIndex}`}
   
      />

      {/* Dots */}
      <div style={{ marginTop: "10px" }} className='dot'>
        {images.map((_, index) => (
          <span
            key={index}
            onClick={() => goToSlide(index)}
            style={{
              display: "inline-block",
              height: "25px",
              width: "25px",
              margin: "0 5px",
              borderRadius: "50%",
              backgroundColor: currentIndex === index ? "black" : "lightgray",
              cursor: "pointer",
            }}
          ></span>
        ))}
      </div>
    </div>
  )
}

export default ImageSlider