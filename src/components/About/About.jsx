import React from 'react'
import './About.css'

const About = () => {
  return (
      <section className='about padd_page' id='about'>
          <div className='content_container'>
            <h2>ABOUT ME</h2>
            <div className="about--container">

                <div className="about--info">
                    <h3>Hello</h3>
                    <div className="about--desc">
                        <p>My name is Štěpán Šubrt and I am mostly a self-taught Frontend Web Developer. I am focusing on solving problems, creating new websites and developing my knowledge.</p>
                        <p>I am currently looking for a job and I will be glad to hear from you.</p>
                    </div>
                </div>

                <div className="about--skills">
                    <h3>Skills</h3>
                    <div className="about--experience">
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>JavaScript</p>
                        <p>React</p>
                        <p>Redux</p>
                        <p>Node</p>
                        <p>MySQL</p>
                        <p>Git</p>
                        <p>GitHub</p>
                        <p>Python</p>
                    </div>
                </div>


            </div>

                {/* <img src={image} alt='' /> */}
          </div>
      </section>
  )
}

export default About