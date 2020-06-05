import React from 'react';
import { FaWhatsapp, FaExternalLinkAlt } from 'react-icons/fa';
import './styles.css';
import { SocialProfileJsonLd } from 'gatsby-plugin-next-seo';

export default function Intro() {
  return (
    <>
      <SocialProfileJsonLd
        type='Person'
        name='Impulse'
        url='https://geluxeletrica.com.br/'
        sameAs={[
          'https://www.facebook.com/bazardaschaves',
          'https://instagram.com/bazardaschaves',
        ]}
      />
      <div className='container intro'>
      <h1>Bazar das Chaves e Carimbos</h1>
      <h2>Confiança e qualidade</h2>
        <div className='introduction'>
          <ul>
            <li>Empresa</li>
            <li>Atendimento</li>
            <li>Serviços</li>
            <li>Redes Sociais</li>
          </ul>
          <nav>
            <h2>Entre em Contato</h2>
            <h3>Florianópolis - SC</h3>
            <a href='https://wa.me/554899697-9837'>
              <div className='whats'>
                <FaWhatsapp></FaWhatsapp>
              </div>
              <span>
                (48) 99697-9837 <FaExternalLinkAlt />
              </span>
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
