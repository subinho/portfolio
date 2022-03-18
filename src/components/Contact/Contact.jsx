import React, { useRef } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';

import { AiOutlineMail, AiFillGithub, AiFillLinkedin, AiOutlineWhatsApp } from 'react-icons/ai'
import { BsMessenger } from 'react-icons/bs'

const Contact = () => {

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
      <section className='contact padd_page'>
          <div className="content_container">
              <h2>Contact</h2>
              {/* Form */}
              <form ref={form} onSubmit={sendEmail}>
                <input type='text' name='name' placeholder='Your Name' required />
                <input type='email' name='email' placeholder='Your Email' required />
                <textarea name="message" id="" cols="30" rows="30" placeholder="Enter your message" required></textarea>
                <button type="submit" className='contact-btn'>Send Message</button>
              </form>
              {/* Socials */}
              <div className="contact--socials">

                <div className='contact--social'>
                  <a href='mailto:stepansubrt@icloud.com' target='_blank'><AiOutlineMail size={'4em'} color={'white'} /></a>
                </div>
                <div className='contact--social'>
                  <a href='https://m.me/stepan.subrt.52' target='_blank'><BsMessenger size={'4em'} color={'white'}/></a>
                </div>
                <div className='contact--social'>
                  <a href='https://github.com/subinho' target='_blank'><AiFillGithub size={'4em'} color={'white'} /></a>
                </div>
                <div className='contact--social'>
                  <a href='#' target='_blank'><AiFillLinkedin size={'4em'} color={'white'} /></a>
                </div>
                <div className='contact--social'>
                  <a href='https://api.whatsapp.com/send?phone=+420774237299' target='_blank'><AiOutlineWhatsApp size={'4em'} color={'white'} /></a>
                </div>

              </div>
            
          </div>
      </section>
  )
}

export default Contact