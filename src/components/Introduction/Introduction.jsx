import React from 'react'
import './Introduction.css'

const Introduction = () => {
  return (
    <section className='introduction full_page'>
        <h1>Štěpán Šubrt</h1>
        <p>WEB DEVELOPER</p>
        <div className='introduction--nav'>
            <a href='#'>HOME</a>
            <a href='#'>PROJECTS</a>
            <a href='#'>ABOUT</a>
            <a href='#'>CONTACT</a>
        </div>
        <div className='scroll_down'></div>
    </section>
  )
}

export default Introduction