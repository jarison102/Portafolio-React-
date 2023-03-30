import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

function Experience() {
  return (
    <section id='experience'>
      <h5>Cuakes son mis skills</h5>
      <h2>My experiencia</h2>
      <div className='container experience__container'>
        <div className='expirience__frontend'>
          <h3>Frontend Developer</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>HTML</h4>
              <small className='text-light'>Experiencia</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>React</h4>
              <small className='text-light'>Experiencia</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Java</h4>
              <small className='text-light'>Experiencia</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Boostrap</h4>
              <small className='text-light'>Experiencia</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>css</h4>
              <small className='text-light'>Experiencia</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>JavaScript</h4>
              <small className='text-light'>Experiencia</small>
              </div>
            </article>
          </div>

        </div>  
        <div className='expirience__backend'>
        <h3>Backend Developer</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>Python</h4>
              <small className='text-light'>Experiencia</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon' />
              <div>
              <h4>Node js</h4>
              <small className='text-light'>Experiencia</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>MongoDB</h4>
              <small className='text-light'>Experiencia</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>PHP</h4>
              <small className='text-light'>Experiencia</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
              <h4>MYSQL</h4>
              <small className='text-light'>Experiencia</small>
              </div>
            </article>
          </div>
          
          </div>
      </div>
    
    </section>
  )
}

export default Experience