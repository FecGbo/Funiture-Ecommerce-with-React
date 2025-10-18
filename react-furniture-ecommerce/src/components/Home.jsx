import React from 'react'
import ImageSlider from './ImageSlider'
import Bestselling from './BestSelling/Bestselling'
import Latestsale from './BestSelling/Latestsale'
import Midsection from './Midsection/Midsection'

function Home({setShowSuccess}) {

  return (
    <div>
        <ImageSlider/>



    <Latestsale showTitle={true} setShowSuccess={setShowSuccess}/>
        <Midsection/>
    <Bestselling showTitle={true} setShowSuccess={setShowSuccess}/>
  
    </div>
  )
}

export default Home