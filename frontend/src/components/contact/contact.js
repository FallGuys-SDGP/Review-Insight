import React from "react";
import "../../components/contact/contact.css";
import contact from "../../images/background/contact.jpg";

function Contact() {
    return (
        <div class="contact">

            <div class="backgroundImage">
                <p class="pageName">Want to get in touch? we would love to hear from you here's how you can reach us..</p>
                <img src={contact} alt="contact" width="100%" height="500" />
            </div>
            <div calss="form">
                <div class="formContent">
                    <div class="formContainer">
                        <form name="feed-form" onsubmit="return validateForm()" method="POST">
                        
                            <div className="text-field" >
                                <label for="email">Email</label>
                                <input type="text" id="email" name="youremail" placeholder="Your Email"></input>
                            </div>

                          
                            <div className="text-field">
                                <label for="message">Message</label>
                                <textarea id="message" name="yourmessage" placeholder="Write Somthing..." height="200px"></textarea>
                            </div>
                            
                            <input type="submit" value="Submit" />
                        </form>
                    </div>

                </div>


            </div>
        </div>
    );
}
export default Contact;