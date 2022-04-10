import React, { useRef, useContext } from 'react'
import { ThemeContext } from '../../App';
import './Contact.css'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { darkTheme } = useContext(ThemeContext)
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_q8cg82r', 'template_w2l7jdt', form.current, '5qvn6GySWAnCPqAi5')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset();
  }


  return (
      <section className={darkTheme ? 'contact padd_page dark' : 'contact padd_page'} id='contact'>
          <div className="content_container">
              <h2>Contact</h2>

              <form ref={form} onSubmit={sendEmail} >
                  <input type='text' name='name' placeholder='Your Name' required />
                  <input type='email' name='email' placeholder='Your Email' required />
                <textarea name="message" id="" cols="30" rows="30" placeholder="Enter your message" required></textarea>
                <button type="submit" className='contact-btn'>Send Message</button>
              </form>

            </div>
            
      </section>
  )
}

export default Contact