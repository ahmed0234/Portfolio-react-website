import React from 'react'
import './contact.css'

const Contact = () => {
  return (
    <div className='contact' id='Contact'>
        <div className="container contact__section">

                <div className="contact__main-title">
                    <h1>Get in Touch</h1>
                </div>


                <div className="contact__wrapper">

                        <div className="contact__content contact__content-1">
                            <h1>ADDRESS</h1>
                            <p>4th Floor, Plot No.22,<br />
                                        145 Murphy Canyon Rd. <br />
                                        San Diego CA 2028 </p>
                        </div>


                        <div className="contact__content contact__content-2">


                            <p><i class="fa-solid fa-phone"></i>03355144371</p>
                            <p><i class="fa-regular fa-building"></i>(060) 555 545 555</p>
                            <p><i class="fa-regular fa-envelope" id='third'></i>ahmedkiller0234@gmail.com</p>
                                
                  




                        </div>

                        <div className="contact__content contact__content-3">

                                    <h1>FOLLOW ME</h1>
                                    <div className="contact-icons">
                                        <a href="#">
                                                <i class="fa-brands fa-instagram"></i>

                                        </a>
                                        <a href="#">
                                                
                                              <i class="fa-brands fa-facebook"></i>

                                        </a>
                                        <a href="#">
                                               
                                    <i class="fa-brands fa-whatsapp"></i>

                                        </a>
                                        <a href="#">
                                                
                                                          <i class="fa-brands fa-github"></i>

                                        </a>

                                        <a href="#">
                                        <i class="fa-brands fa-x-twitter"></i>
                                        </a>
                                    </div>


                        </div>








                </div>









            
        </div>  
    </div>
  )
}

export default Contact
