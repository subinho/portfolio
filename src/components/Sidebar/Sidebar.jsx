import React from 'react'
import './Sidebar.css'
import { BsGithub, BsLinkedin, BsMessenger, BsWhatsapp} from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'

const Sidebar = () => {
  return (
      <>

          <div className="introduction--socials">
            <a href='https://www.linkedin.com/in/%C5%A1t%C4%9Bp%C3%A1n-%C5%A1ubrt-19b981242/' target='_blank'><BsLinkedin /></a>
            <a href='https://github.com/subinho' target='_blank'><BsGithub /></a>
            <a href='mailto:stepansubrt@icloud.com' target='_blank'><AiOutlineMail /></a>
            <a href='https://m.me/stepan.subrt.52' target='_blank'><BsMessenger /></a>
            <a href='https://api.whatsapp.com/send?phone=+420774237299' target='_blank'><BsWhatsapp /></a>
          </div>

      </>
  )
}

export default Sidebar