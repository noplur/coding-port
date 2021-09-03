import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./contact.css";
import emailjs from 'emailjs-com';

function ContactForm() {

    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);

        emailjs.sendForm('service_jr7kpfc', 'template_cwc9efd', e.target, 'user_mJoVBCQMEgdqUJCOzKkkW')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      setErrorMessage('Your message has been sent to Aaron!');
     
      }

    function handleChange(e) {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            // isValid conditional statement
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
              setErrorMessage(`${e.target.name} is required.`);
            } else {
              setErrorMessage('');
            }
          }
          if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value });
          }
    }
      

return (
    <section>
        <h1 className="contactme">Contact me</h1>
        <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name" className="name">Name:</label>
            <input type="text" name="name" className="text-name" placeholder="Your Name" defaultValue={name} onBlur={handleChange} />
        </div>
        <div>
            <label htmlFor="email" className="email">Email:</label>
            <input type="email" name="email" className="text-email" placeholder="Your Email" defaultValue={email} onBlur={handleChange} />
        </div>
        <div>
            <label htmlFor="message" className="message">Message:</label>
            <textarea name="message" className="text-message" rows="10" placeholder="Your Message" defaultValue={message} onBlur={handleChange} />
        </div>
        {errorMessage && (
            <div>
                <p className="error-text">{errorMessage}</p>
            </div>
            )}
        <button type="submit" className="submit-button" value="Send Message">Submit</button>
        </form>
        <div>
        <p class="emailcontacttext">
                ... Or e-mail Aaron: <a href = "mailto: aaronrosenblattphoto@gmail.com" target="_blank" className="emailcontactlink">aaronrosenblattphoto@gmail.com</a>
            </p>
        </div>
    </section>
    );
}

export default ContactForm;