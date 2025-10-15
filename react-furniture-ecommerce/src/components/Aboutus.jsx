import React from 'react'
import Header from './Header/Header'
import './css/aboutus.css'


function Aboutus() {
  return (
    <div style={{backgroundColor:'white'}}>
        <Header pageName={"About Us"}/>

        <div className="aboutSection">

       

        <div className="aboutus-content">
            <div className="aboutus-left">
                <span style={{fontWeight:"bold",fontSize:'35px'}}>Furniture Shop Location</span>
                <span style={{fontWeight:"bold",fontSize:'large'}}>Yangon Myanmar</span>
                 <span>since - 1896 <br />
                 <span style={{marginTop:'1rem',display:'block'}}>Our designer already made a lot of beautiful prototipe 
                    of rooms that inspire you.
                     Our designer already made a lot of beautiful prototipe
                      of rooms that inspire you. Our designer already made a lot of
                       beautiful prototipe of rooms that inspire you. Our designer 
                       already made a lot of beautiful prototipe of rooms that inspire you.
                       </span>
                       </span>

            </div>
            <div className="aboutus-right">
                      <div style={{marginTop: "1rem",height:'100%'}}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30554.709564387955!2d96.15637232657144!3d16.809545506998056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1ecc8f3749e61%3A0x9e8be4b57c0f92d1!2sTamwe%20Township%2C%20Yangon!5e0!3m2!1sen!2smm!4v1760517868711!5m2!1sen!2smm"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map"
            ></iframe>
          </div>
                

            </div>
        </div>

     


    </div> 


       <div className="about-me">
            <div className="about-me-left">
                 <img src="/slider-img/founder.png" alt=""/>
            </div>
            <div className="about-me-right">
                <h1 style={{fontWeight:'bold'}}>Luxury Golden Furniture</h1>
                 <h1 style={{fontWeight:'bold'}}>Mr.David</h1>
                <h3>since - 1986</h3>
            <h3>Our designer already made a lot of 
                beautiful prototipe of rooms that inspire you.
                 Our designer already made a lot of beautiful prototipe 
                 of rooms that inspire you.</h3>

            </div>
         
        </div>


        
        <div className="about-me-footer">
            <div className="aboutme-desc">
                  <div className="aboutme-desc-icon">
                <i class="fa-solid fa-award"></i>

                </div>
                <div className="aboutme-desc-icon-text">
                    <span>High Quality</span>
                 
                    <p>crafted from top materials</p>
                </div>
            </div>

             <div className="aboutme-desc">
                <div className="aboutme-desc-icon">
                      <i class="fa-regular fa-circle-check"></i>
           
                </div>
                <div className="aboutme-desc-icon-text">
                    <span>Warranty Protection</span>
           
                    <p>crafted from top materials</p>
                </div>
            </div>

             <div className="aboutme-desc">
                <div className="aboutme-desc-icon">
                     <i class="fa-solid fa-cart-flatbed"></i>
                </div>
                <div className="aboutme-desc-icon-text">
                    <span>Free Shipping</span>
                    <p>crafted from top materials</p>
                </div>
            </div>



             <div className="aboutme-desc">
                <div className="aboutme-desc-icon">
                      <i class="fa-solid fa-headset"></i>
                </div>
                <div className="aboutme-desc-icon-text">
                    <span>24 / 7 Support</span>
                    <p>crafted from top materials</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Aboutus