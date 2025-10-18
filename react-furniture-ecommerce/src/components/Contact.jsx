import React from 'react'
import Header from './Header/Header'
import Input from './Input/Input'
import './css/contact.css'
function Contact() {
  return (
    <>
   
      <Header pageName={"Contact"} />

      <div className="contact-container">
        <div className="contact-header">
             <span>Get In Touch With Us</span>
             <p>For More Information About Our Product & Services.</p>
             <p> Please Feel Free To Drop Us An Email.
                 Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
        </div>

        <div className="contact-body">
            <div className="contact-left">
                <div className="contact-icon">
                   <i class="fa-solid fa-location-dot" style={{fontWeight:'bold'}}></i>


                    <div className="contact-desc">
                    <span style={{fontWeight:'bold'}}>Address</span>
                    <p>236 5th SE Avenue,</p>
                    <p>Yangon NY10000,</p>
                    <p>Myanmar</p>
                </div>  
        
            </div>
                <div className="contact-icon">
                    <i class="fa-solid fa-phone" style={{fontWeight:'bold'}}></i>


                    <div className="contact-desc">
                    <span style={{fontWeight:'bold'}}>Phone</span>
                    <p>Mobile:+(95) 322479645</p>
                    <p>Hotline:+(95) 322479645</p>
                </div>  
        
            </div>
                <div className="contact-icon">
                <i class="fa-solid fa-clock" style={{fontWeight:'bold'}}></i>


                    <div className="contact-desc">
                    <span style={{fontWeight:'bold'}}>Working Time</span>
                    <p>Monday-Friday: 9:00 - 22:00</p>
                    <p>Saturday-Sunday: 9:00 - 21:00</p>
                  
                </div>  
        
            </div>
             

            </div>

            <div className="contact-right">
                 <Input label={"Your name"} placeholder={"Abc"} type={"text"}/>
                 <br />
                 <Input label={"Email address"} placeholder={"Abc@def.com"} type={"text"}/> 
                 <br />
                 <Input label={"Subject"} placeholder={"This is an optional"} type={"text"}/> 
                 <br />
               <div className="textarea">
                <label htmlFor="">Message</label>
                <textarea name="" id="" placeholder="Hi! i'd like to ask about"></textarea>
               </div>

                <div className="sent-btn">
                       <button>
                Submit
            </button>
                </div>
            </div>

         
        </div>


      </div>
    



    </>
  )
}

export default Contact