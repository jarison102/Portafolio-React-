import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {AiOutlineUsergroupAdd} from 'react-icons/ai'
import {VscFolderLibrary} from 'react-icons/vsc'
const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about_container'>
      <div className='about__me'>
        <div className='about__me-image'>
          <img src={ME} alt="About Image"/>
          </div>
          </div>

          <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
            <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>1+ año trabajando</small>
            </article>

            <article className='about__card'>
            <AiOutlineUsergroupAdd className='about__icon'/>
              <h5>Clientes</h5>
              <small>11+</small>
            </article>

            <article className='about__card'>
            <VscFolderLibrary className='about__icon'/>
              <h5>Proyects</h5>
              <small>40+ Completados</small>
            </article>
          </div>

          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id odio aliquid perspiciatis molestias unde eveniet doloremque? Delectus quos, fuga nesciunt laboriosam aut facilis nisi mollitia officia rerum? Nobis, quas voluptatem.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About