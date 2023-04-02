import React from 'react'
import './footer.css'
import {BsFacebook} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'

const Footer = () => {
  return (
      <footer>
      <a href="#" className='footer__logo'>Stived</a>  

      <ul className='permalinks'>
        <li><a href="#">Inicio</a></li>
        <li><a href="#about">Sobre mi</a></li>
        <li><a href="#experience">Experiencia</a></li>
        <li><a href="#services">Servicios</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonios</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
      
      <div className='footer__socials'>
        <a href="https://www.instagram.com/stived_t/" target="_blank"><BsInstagram/></a>
        <a href="https://twitter.com/MicanStiven" target="_blank"><BsTwitter/></a>
        <a href="https://www.facebook.com/jarison.micancespedes/" target="_blank"><BsFacebook/></a>
      </div>
      <div className='footer__copyright'>
        <small>&copy; Stived Todos los derechos reservados</small>
      </div>
      </footer>
  )
}

export default Footer