import React from 'react'
import './Introduction.css'
import img from '../../images/intro-image.svg'

const Introduction = () => {
  return (
    <section className='introduction full_page'>
        <div className="introduction--image">
          <img src={img}/>
        </div>
        <div className="introduction--main">
          <h3>Hello, I'm</h3>
          <h1>ŠTĚPÁN ŠUBRT</h1>
          <p>WEB DEVELOPER</p>
          <button className="btn-primary"><a href='#'>PROJECTS</a></button>
        </div>
          <div className='scroll_down'></div>
    </section>
  )
}

export default Introduction