import React from 'react'
import './contact.css'
import {MdAttachEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from  'emailjs-com'

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_w9dbt7h', 'template_h99u7dp', form.current, 'sYtgX2XyX7OTukoAR')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
      <h5>Get in Touch</h5>
      <h2>Contactame</h2>
      <div className='container contact__container'>
        <div className='contact__options'>
        <article className='contact__option'>
          <MdAttachEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>Jarimices@gmaill.com</h5>
          <a href="mailto:jarimices@gmail.com" target='_blank'>Enviar Mensaje</a>
        </article>

        <article className='contact__option'>
          <BsMessenger className='contact__option-icon'/>
          <h4>Messenger</h4>
          <h5>Jarison Stived</h5>
          <a href="https://m.me/jarison.micancespedes" target='_blank'>Enviar Mensaje</a>
        </article>

        <article className='contact__option'>
          <BsWhatsapp className='contact__option-icon'/>
          <h4>Whatsapp</h4>
          <h5>+57 3216692365</h5>
          <a href="https://api.whatsapp.com/send?phone=573216692365" target='_blank'>Enviar Mensaje</a>
        </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Tu nombre completo' required/>
          <input type="email" name='email' placeholder='Tu Correo' required/>
          <textarea name="message" id="7" placeholder='Tu mensaje' required></textarea>
          <button type='submit' className='btn btn-primary'>Enviar</button>
        </form>

      </div>
    </section>
  )
}

export default Contact