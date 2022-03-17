import React from 'react'
import './Projects.css'
import data from './data'

const Projects = () => {
  return (
      <section className='projects padd_page'>
        <div className='content_container'>
            <h2>Projects</h2>
            <div className='projects_container'>
                {
                    data.map(({image, title, github, live}) => (
                        <div className='project'>
                            <h3>{title}</h3>
                            <div className='project_container--image'>
                                <img src={image} alt='' className='project--image'/>
                            </div>
                            <div className='project--links'>
                                    <a href={live} target='_blank'>Live</a>
                                    <a href={github} target='_blank'>Github</a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
      </section>
  )
}

export default Projects