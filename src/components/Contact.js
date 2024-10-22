import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css';

function Contact() {
  const form = useRef();
  const [showMessage, setShowMessage] = useState(false); // State to control message visibility

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_w2nj67c', // Replace with your EmailJS service ID
      'template_w8qgybl', // Replace with your EmailJS template ID
      form.current,
      'lI1rhtjThXZJBs2wF' // Replace with your EmailJS user ID (public key)
    )
    .then((result) => {
      console.log(result.text);
      setShowMessage(true); // Show success message
      setTimeout(() => {
        setShowMessage(false); // Hide message after 10 seconds
      }, 5000);
    }, (error) => {
      console.log(error.text);
      alert("An error occurred, please try again.");
    });

    e.target.reset(); // Resets the form after submission
  };

  return (
    <div className='contact-container'>
      {showMessage && (
        <div className='success-message'>Your message has been sent!</div>
      )}
      <form ref={form} onSubmit={sendEmail} className='contact-form'>
        <h1>Get in Touch</h1>
        <input type='text' name='user_name' placeholder='Name' required />
        <input type='email' name='user_email' placeholder='Email' required />
        <input type='text' name='subject' placeholder='Subject' required />
        <textarea name='message' placeholder='Type your message here...' required />
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default Contact;
