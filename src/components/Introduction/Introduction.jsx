import React from 'react'
import './Introduction.css'
import img from '../../images/intro-image.svg'
import Sidebar from '../Sidebar/Sidebar'
import { BsGithub, BsLinkedin, BsMessenger, BsWhatsapp} from 'react-icons/bs'
import { AiOutlineMail } from 'react-icons/ai'

const Introduction = () => {
  return (
    <section className='introduction full_page' id='home'>
        <Sidebar />
        <div className="introduction--image">
          <img src={img}/>
        </div>
        <div className="introduction--main">
          <h3>Hello, I'm</h3>
          <h1>ŠTĚPÁN ŠUBRT</h1>
          <p>WEB DEVELOPER</p>
          <button className="btn-primary"><a href='#projects'>PROJECTS</a></button>
        </div>
          <div className='scroll_down'></div>
    </section>
  )
}

export default Introduction