import React, { useEffect } from 'react'
import './ContactUs.css'
import address from '../ContactUsPage/svg/address.svg'
import email from '../ContactUsPage/svg/email.svg'
import phone from '../ContactUsPage/svg/phone.svg'
import { Link } from 'react-router-dom';



function ContactUs() {

    const [result, setResult] = React.useState("send massage");
  
    const sendMassage = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "9e9f0aed-8d4a-468c-a5c1-12588da456cb");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };

    const openWindow = () => {
        window.open("https://maps.app.goo.gl/JrsMdZTq9aFRL1sd8");
      };

    return (

        <div className="ContactUsBox bg-slate-900 ">

            <div className="boxContainer" >
                <h1>Contact Us</h1>
                <div className="contactText">
                    <p className='text-center'>
                        Have a question or need assistance? Reach out to our dedicated team via the contact form below. We're here to help make your educational journey a seamless and enriching experience.
                    </p>
                </div>
                <div className="box bg-slate-900 ">
                    <div className="BoxLeft">
                        <div className="address">
                            <div className="addressIcon">
                                <img src={address} alt='address' />
                            </div>
                            <div className="Ofice-address">
                                <p><strong>Address</strong></p>
                                SAVITRI KRISHANA SECONDARY SCHOOL
                                <br />
                                WARD NO. 16 SUNDAR MOHALLA <br />
                                Satal kheri <br />
                                Rajasthan, India - 326519
                            </div>
                        </div>
                        <div className="email">
                            <div className="emailIcon">
                                <img src={email} alt='email' />
                            </div>
                            <div className="emailAddress">
                                <p><strong>Email</strong></p>
                                <p>skbvm.secosatalkheri@gmail.com</p>
                            </div>
                        </div>
                        <div className="phone">
                            <div className="phoneIcon">
                                <img src={phone} alt='phone' />
                            </div>
                            <div className="phoneNo">
                                <p><strong>Phone</strong></p>
                                <p>+91 8619101995</p>
                                <p>+91 9829503629 </p>
                            </div>
                        </div>
                        <div className="mapLink">
                            <button type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
                                <Link to='/Contact' onClick={openWindow}>
                                    map
                                </Link>
                            </button>
                        </div>
                    </div>
                    <div className="BoxRight">
                        <div className="contactright">
                            <div>
                            <form onSubmit={sendMassage}>
                            <input type="hidden" name="apikey" value="9e9f0aed-8d4a-468c-a5c1-12588da456cb"/>
                                    <div className="form">
                                        <div className="formcss">
                                            <input
                                                name="Name"
                                                className="inputbox"
                                                type="text"
                                                placeholder="Name"
                                            />
                                            <input
                                                name="Number"
                                                className="inputbox"
                                                type="text"
                                                placeholder="Contact"
                                            />
                                            <input
                                                name="Email"
                                                className="inputbox"
                                                type="email"
                                                placeholder="Email ID"
                                            />
                                        </div>
                                        <div className="massageBox">
                                            <label>Message</label>
                                            <textarea
                                                name="Message"
                                                className="textarea"
                                                id=""
                                                cols="30"
                                                rows="4"
                                            >
                                            </textarea>
                                            <button type="submit" className="formbutton my-2">
                                                Send Message
                                            </button>
                                        </div>
                                    </div>
                                </form>
                                <span>{result}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ContactUs
