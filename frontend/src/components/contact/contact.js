import React from "react";
import "../../components/contact/contact.css";
import contact from "../../images/background/contact.jpg";

function Contact() {
    return (
        <div class="contact">
            <h1 className="ContactDetails">Contact us</h1>
            <div class="formset">
            <form name="feed-form" onsubmit="return validateForm()" method="GET">
                <input class="input" type="text" name="Name" placeholder="Name"></input>
                <input class="input" type="text" id="email" name="youremail" placeholder="Your Email"></input>
                <input class="input" id="message" name="yourmessage" placeholder="Write Somthing..." height="200px"></input>
                <input class="button" type="submit" value="Submit" />
            </form>
            </div>
        </div>
    );
}
export default Contact;