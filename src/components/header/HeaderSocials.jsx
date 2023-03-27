import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://github.com/jarison102" target="_blank"><BsGithub/></a>
        <a href="https://www.linkedin.com/in/jarison-stived-mican-cespedes-a03ab5259/" target="_blank"><BsLinkedin/></a>
        <a href="https://www.instagram.com/stived_t/" target="_blank"><BsInstagram/></a>
        <a href="https://twitter.com/MicanStiven" target="_blank"><BsTwitter/></a>
        <a href="https://www.facebook.com/jarison.micancespedes/" target="_blank"><BsFacebook/></a>


    </div>
  )
}

export default HeaderSocials