import React, { useContext } from 'react'
import { ThemeContext } from '../../App'
import './About.css'

const About = () => {
    const { darkTheme } = useContext(ThemeContext)

  return (
      <section className={darkTheme ? 'about padd_page dark' : 'about padd_page'} id='about'>
          <div className='content_container'>
            <h2>ABOUT ME</h2>
            <div className="about--container">

                <div className="about--info">
                    <h3>Hello</h3>
                    <div className="about--desc">
                        <p>My name is Štěpán Šubrt and I am Full-Stack Developer. I am focusing on solving problems, creating new websites and developing my knowledge.</p>
                        <p>I am currently looking for a job and I will be glad to hear from you.</p>
                    </div>
                </div>

                <div className="about--skills">
                    <h3>Skills</h3>
                    <div className="about--experience">
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>SCSS</p>
                        <p>JavaScript</p>
                        <p>React</p>
                        <p>Redux</p>
                        <p>Node</p>
                        <p>MySQL</p>
                        <p>Firebase</p>
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