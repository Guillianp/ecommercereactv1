import React from "react";
import withLayout from "../../hoc/WithPageLayout";
import './Contact.css';

// Form Validation

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
        window.alert("Enter your first name."); 
        firstName.focus(); 
        return false; 
    } 

    if (lastName.value === "") { 
        window.alert("Enter your last name."); 
        lastName.focus(); 
        return false; 
    } 

    if (email.value === "") { 
        window.alert( 
          "Enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 

    if (phone.value === "") { 
        window.alert( 
          "Enter your phone number."); 
        phone.focus(); 
        return false; 
    } 

    if (message.value === "") { 
        window.alert("Enter your comment"); 
        message.focus(); 
        return false; 
    } 
    return true; 
}

class Contact extends React.Component {
    render() {

      return (
        <div className="wrapper">
                
        {/* <   Contact Information */}
            <section className="hero clear">
                <h1>Contact</h1> 
                <h2>Contact email: care@humandesign.com</h2>
                <h2>5538 Daniels St. Chino, CA 91710</h2>
            </section>

        {/* Contact Page form */}
            <div className="contact">
                <form name="contactForm" action="/" onSubmit= "return formValidation()">
                    <label>
                        FIRST NAME
                        <input name="first-name" type="text" className="form-name" minlength="2" placeholder="First Name" required/>
                    </label>

                    <label>
                        LAST NAME
                        <input name="last-name" type="text" className="form-name" minlength="2" placeholder="Last Name" required/>
                    </label>
                       
                    <label>
                        EMAIL
                        <input name="email" type="email" className="email" placeholder="E-mail" required/>
                    </label>

                    <label>
                        PHONE
                        <input name="phone" type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" className="phone" placeholder="000-000-000" required/>
                    </label>
                        
                    <label>
                        COMMENTS
                        <textarea name="message" className="message" placeholder="Comments" rows="5" required></textarea>
                    </label>

                    <input type="submit" className="form-control submit" value="Submit" />
                    
                    </form>
            </div> 
               
        </div>
      )
    }
  }

  
  
  export default withLayout(Contact)

