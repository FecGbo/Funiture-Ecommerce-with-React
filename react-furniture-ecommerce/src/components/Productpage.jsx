import React from 'react'
import Header from './Header/Header'
import Filter from './Filter/Filter'
function Productpage({setShowSuccess}) {
  return (
    <div>
      <Header pageName={"Products"} />
      <Filter setShowSuccess={setShowSuccess} />
      

    </div>
  )
}

export default Productpage