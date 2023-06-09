import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.jpg'
import HeaderSocials  from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className='container header_container'>
          <h5>Hola Yo Soy</h5>
          <h1>Jarison Stived Mican</h1>
          <h5 className='text-light'>Fullstack Developer</h5>
          <CTA/>
          <HeaderSocials/>
          <div className='me'>
            <img src={ME} alt='me'/>
          </div>
          <a href="#contact" className='scroll_down'>Scroll Dow</a>


      </div>
    </header>
  )
}

export default Header