import React from 'react'
import './Projects.css'
import data from './data'
import { AiFillGithub } from 'react-icons/ai'
import { FiExternalLink } from 'react-icons/fi'
const Projects = () => {
  return (
      <section className='projects padd_page' id='projects'>
        <div className='content_container'>
            <h2>Projects</h2>
            <div className='projects--container'>
                {
                    data.map(({image, title, github, live}, index) => (
                        <div className='project' key={index}>
                            <div className="project--info">
                                <h3>{title}</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, aliquam! Voluptate, nostrum quos natus illo facilis molestias autem accusantium, asperiores possimus, enim aspernatur quam ullam nisi nemo corporis dicta non!</p>
                                <div className='project--links'>
                                        <a href={live} target='_blank'>Live <FiExternalLink /></a>
                                        <a href={github} target='_blank'>Github <AiFillGithub /></a>
                                </div>
                            </div>
                            <div>
                                <img src={image} alt='' className='project--image'/>
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