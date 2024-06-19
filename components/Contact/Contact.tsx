import './Contact.scss';
import React, { useRef } from 'react';
/*import emailjs from 'emailjs-com';

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_USER_ID')
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
      }, (error) => {
          console.log(error.text);
          alert('Failed to send the message, please try again.');
      });
  };
*/

export const Contact = () => {

	return (
		<>
            <div>
                <form id="contact" className="contact">
                    <p className="contact-title">Contact Me:</p>
                    <br></br>
                    <p className="contact-field">s&#x61;mu&#x65;lp&#x61;pin&#x65;&#x61;u08&#x40;gm&#x61;il.&#x63;om</p>
                    <div className="contact-field">
                        <a href="https://www.linkedin.com/in/samuel-papineau-06669a15b/">
                            <svg className="linkedin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#ffffff" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg>
                        </a>
                    </div>
                </form>
                {/*

                ----- Will hold off on this for the time being until I set up a proper SMTP server

                <form id="contact" className="contact">
                    <p className="contact-title">Contact Me</p>
                    <p className="contact-field">Name</p>
                    <input className="contact-value" placeholder="John Doe"/>
                    <p className="contact-field">Email</p>
                    <input className="contact-value" placeholder="email@gmail.com"/>
                    <p className="contact-field">Message</p>
                    <textarea className="contact-textarea" placeholder="Type your message here."></textarea>
                    <input className="contact-button" type="submit" value="Submit"></input>
                </form>*/}
            </div>
		</>
	);
};

export default Contact;