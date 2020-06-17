import React from 'react';

import Footer from '../../components/Footer'
import { Container } from './styles'

import {FiInstagram, FiPhone} from 'react-icons/fi'
import {AiOutlineMail} from 'react-icons/ai'
import {FaWhatsapp} from 'react-icons/fa'

const Contact = () => {
  return (
    <>    
      <Container id="contato" >
        <h3>Entre em Contato</h3>
        <div>
          <h4>Contato</h4>
          <a href="tel:(48)3224-1849"><FiPhone/> (48) 3224-1849</a>
          <a href="https://wa.me/5548996979837"><FaWhatsapp/> (48) 99697-9837</a>
          <a href="mailto:bazardaschavesecarimbos@gmail.com"><AiOutlineMail/> bazardaschavesecarimbos@gmail.com</a>
          <a href="https://www.instagram.com/bazardaschavesecarimbos/"><FiInstagram/> Instagram</a>
        </div>
        <div>
          <h4>Endereço</h4>
          <p>Rua. Felipe Schmidt, 70 Centro.</p>
          <p>Florianópolis – Sc.</p>
          <p>Cep: 88010-000.</p>
        </div>
        <div>
          <h4>Horário de Funcionamento</h4>
          <p>Segunda à Sexta: 08:00 – 19:00.</p>
          <p>Sábado: 09:00 - 13:00.</p>
          <p>Domingo: Fechado.</p>
        </div>
      </Container>
      <Footer />
    </>
  );
}
export default Contact