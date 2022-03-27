import React, { useRef } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';

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


{/* 
                //Socials
                <div className="contact--socials">

                  <div className='contact--social'>
                    <AiOutlineMail color={'white'} size={'4rem'}/>
                    <p>stepansubrt@icloud.com</p>
                    <a href='mailto:stepansubrt@icloud.com' target='_blank'>Send a message</a>
                  </div>
                  <div className='contact--social'>
                    <BsMessenger color={'white'} size={'4rem'}/>
                    <p>Štěpán Šubrt</p>
                    <a href='https://m.me/stepan.subrt.52' target='_blank'>Send a message</a>
                  </div>
                  <div className='contact--social'>
                    <AiFillGithub color={'white'} />
                    <p>@subinho_</p>
                    <a href='https://github.com/subinho' target='_blank'>Send a message</a>
                  </div> 
                  <div className='contact--social'>
                    <AiFillLinkedin color={'white'} size={'4rem'}/>
                    <p>Štěpán Šubrt</p>
                    <a href='#' target='_blank'>Send a message</a>
                  </div>
                  <div className='contact--social'>
                    <AiOutlineWhatsApp color={'white'} size={'4rem'}/>
                    <p>+420 774 237 299</p>
                    <a href='https://api.whatsapp.com/send?phone=+420774237299' target='_blank'>Send a message</a>
                  </div>
              </div> */}