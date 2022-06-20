import React from 'react'
import './Footer.css'
import { Link } from 'react-scroll'
import { BsGithub, BsLinkedin, BsMessenger, BsWhatsapp} from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'

const Footer = () => {
  return (
      <section className="footer">
          <div className="content_container">

              <div className="footer--me">
                  <h3>Štěpán Šubrt</h3>
                  <p>WEB DEVELOPER</p>
              </div>
              
              <ul className="footer--nav">
                <li>
                  <Link to="home" spy={true} smooth={true} offset={0} duration={500} >HOME</Link>
                </li>
                <li>
                  <Link to="projects" spy={true} smooth={true} offset={50} duration={500} >PROJECTS</Link>
                </li>
                <li>
                  <Link to="about" spy={true} smooth={true} offset={50} duration={500} >ABOUT</Link>
                </li>
                <li>
                  <Link to="contact" spy={true} smooth={true} offset={50} duration={500} >CONTACT</Link>
                </li>
              </ul>

              <div className="footer--contact">
                <a href='https://www.linkedin.com/in/%C5%A1t%C4%9Bp%C3%A1n-%C5%A1ubrt-19b981242/' target='_blank'><BsLinkedin /></a>
                <a href='https://github.com/subinho' target='_blank'><BsGithub /></a>
                <a href='mailto:stepansubrt@icloud.com' target='_blank'><AiOutlineMail /></a>
                <a href='https://m.me/stepan.subrt.52' target='_blank'><BsMessenger /></a>
                <a href='https://api.whatsapp.com/send?phone=+420774237299' target='_blank'><BsWhatsapp /></a>             
              </div>
              
            </div>
      </section>
  )
}

export default Footer