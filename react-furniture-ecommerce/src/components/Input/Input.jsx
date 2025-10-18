import React from 'react'
import '../css/Input.css'

function Input({label,placeholder,type,...props}) {
  return (
  <>
 <div className="input-field">
    <label htmlFor="">{label}</label>
    <input type={type} placeholder={placeholder} />
 </div>
  
  </>
  )
}

export default Input