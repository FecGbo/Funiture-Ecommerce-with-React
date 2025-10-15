import React from 'react'
import ImageSlider from './ImageSlider'
import Bestselling from './BestSelling/Bestselling'
import Latestsale from './BestSelling/Latestsale'
import Midsection from './Midsection/Midsection'

function Home() {

  return (
    <div>
        <ImageSlider/>



    <Latestsale showTitle={true}/>
        <Midsection/>
    <Bestselling showTitle={true}/>
  
    </div>
  )
}

export default Home