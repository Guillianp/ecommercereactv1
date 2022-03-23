import React from "react";
import withLayout from "../../hoc/WithPageLayout";
import './Contact.css';


const formValidation = () => { 
    var firstName =  
        document.forms["contactForm"]["first-name"]; 
    var lastName =  
        document.forms["contactForm"]["last-name"]; 
    var email =  
        document.forms["contactForm"]["email"]; 
    var phone =  
        document.forms["contactForm"]["phone"]; 
    var message =  
        document.forms["contactForm"]["message"]; 

    if (firstName.value === "" && lastName.value === "" && email.value === "" && phone.value === "" && message.value === "") { 
        alert("Please fill out our contact form."); 
        firstName.focus();
        lastName.focus();
        email.focus();
        phone.focus();
        message.focus();
        return false; 
    }

    if (firstName.value === "") { 
        window.alert("Please enter your first name."); 
        firstName.focus(); 
        return false; 
    } 

    if (lastName.value === "") { 
        window.alert("Please enter your last name."); 
        lastName.focus(); 
        return false; 
    } 

    if (email.value === "") { 
        window.alert( 
          "Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 

    if (phone.value === "") { 
        window.alert( 
          "Please enter your phone number."); 
        phone.focus(); 
        return false; 
    } 

    if (message.value === "") { 
        window.alert("Please enter your message"); 
        message.focus(); 
        return false; 
    } 
    return true; 
}

class Contact extends React.Component {
    render() {

      return (
        <div className="wrapper">
                <main>
                    <section className="hero clear">
                        <h2>Contact us!</h2>
                    </section>
                    <section className= "contact">
                        <h3>Reach out to us know if you have any questions or concerns.</h3>
                    <div className="contact-form">
                    <form name="contactForm" action="/" onSubmit= "return formValidation()">
                        <label>
                            Name
                        <input name="first-name" type="text" className="form-name" minlength="2" placeholder="First Name" required/>
                       </label><br/>
                       <label>
                            Last Name
                        <input name="last-name" type="text" className="form-name" minlength="2" placeholder="Last Name" required/>
                       </label><br/>
                        <label>
                            Email
                        <input name="email" type="email" className="email" placeholder="Your Email" required/>
                        </label><br/>
                        <label>
                            Phone
                        <input name="phone" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" className="phone" placeholder="123-456-7890" required/>
                        </label><br/>
                        <label>
                            Leave us a message
                        <textarea name="message" className="message" placeholder="Message" rows="5" required></textarea>
                        </label><br/>
                        <input type="submit" className="form-control submit" value="Submit" />
                    </form>
                    </div> 
                </section>
            </main>
        </div>
      )
    }
  }
  
  export default withLayout(Contact)