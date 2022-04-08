import React from 'react'
import './Introduction.css'
import img from '../../images/intro-image.svg'
import Sidebar from '../Sidebar/Sidebar'
import { Link } from 'react-scroll'

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
          <div className='btn--container'>
            <Link to="projects" spy={true} smooth={true} offset={50} duration={500} className='btn--primary'>PROJECTS</Link>
          </div>

        </div>
          <div className='scroll_down'></div>
    </section>
  )
}

export default Introduction