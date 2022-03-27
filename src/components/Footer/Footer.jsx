import React from 'react'
import './Footer.css'
import { AiOutlineMail, AiFillGithub, AiFillLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
      <section className="footer">
          <div className="content_container footer_container">

            <div className="footer--me">
                <h3>Štěpán Šubrt</h3>
                <p>WEB DEVELOPER</p>
            </div>
            
            <ul className="footer--nav">
                <li><a href='#'>HOME</a></li>
                <li><a href='#'>PROJECTS</a></li>
                <li><a href='#'>ABOUT</a></li>
                <li><a href='#'>CONTACT</a></li>
            </ul>

            <ul className="footer--contact">
              <AiOutlineMail />
              <AiFillGithub />
              <AiFillLinkedin />
            </ul>
            
          </div>
      </section>
  )
}

export default Footer