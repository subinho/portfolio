import React from 'react'
import './Sidebar.css'
import { BsGithub, BsLinkedin, BsMessenger, BsWhatsapp} from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'

const Sidebar = () => {
  return (
      <>

          <div className="introduction--socials">
            <a href='#'><BsLinkedin /></a>
            <a href='#'><BsGithub /></a>
            <a href='#'><AiOutlineMail /></a>
            <a href='#'><BsMessenger /></a>
            <a href='#'><BsWhatsapp /></a>
          </div>

      </>
  )
}

export default Sidebar