import React from 'react'
import Header from '../Header/Header'
import '../css/register.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Register() {
        const [error, setError] = useState("");
  return (
   <>
     <Header pageName={"Customer Register"} />


          <div className="register-content">
        <div className="register-left">

            <img src="/slider-img/image-3.png" alt="" />
        </div>


        <div className="register-right">
            <span style={{fontSize:'40px'}}> <b> Register </b></span>
          
          <form>
             
            <input placeholder="Customer Name" />
            <input placeholder="Customer Email" />
            <input placeholder="Customer DOB" />
            <input placeholder="Customer Phone" />
            <input placeholder="Customer Address" />
            <input placeholder="Customer Password" />
            <input placeholder="Customer Password" />
            <input  placeholder="Password" type="password" />
            <input type="file" placeholder='Customer Image' style={{colo:'black'}}/>

            
            {/* <div className="check-remember">
                <div className="check">
                                    <input type="checkbox" />
                <label htmlFor="">Keep me logged in</label>
                </div>

                <label htmlFor="">Forget password?</label>
   
             
            </div> */}
            <button type="submit">Register</button>

            <p> <span style={{opacity:"0.5"}}> Already have an account? </span><span><b> <Link to='/.login'>Sign in</Link> </b></span>  </p>
            {error && <div style={{ color: 'red'}}>{error}</div>}
        </form>
          
        </div>

        </div>


   </>
  )
}

export default Register