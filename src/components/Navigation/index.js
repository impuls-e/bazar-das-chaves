import React, {useState} from 'react';

import './styles.js';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';


import { Header, MenuLink, HamburguerMenu, Logo } from './styles'

const Navigation = () => {
  const [click, setClick] = useState(false)
  const [hamburguer, setHamburguer] = useState(false)

  const clickStyle = click ? "click" : ""

  function handleClick() {
    setHamburguer(!hamburguer)
    setClick(!click)
  }


  const data = useStaticQuery(graphql`
    query ImgHeader {
      icon: file(relativePath: { eq: "key-icon.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  return (
    <Header>
      
      <Logo className={`logo `} to="/" title="Vai para Home">
        <Img
          fluid={data.icon.childImageSharp.fluid}
          alt="An image apresentation from current project"
        />
      </Logo>
      <HamburguerMenu
        onClick={handleClick}
        className={`hamburguermenu ${clickStyle}  `}
      >
        <div></div>
        <div></div>
        <div></div>
      </HamburguerMenu>
      <ul className={`menu ${clickStyle}`}>
        <li>
          <MenuLink onClick={handleClick} to="/" title="Vai para Home">
            Home
          </MenuLink>
        </li>
        <li>
          <MenuLink
            onClick={handleClick}
            to="#sobre"
            title="Vai para sobre nós"
          >
            Sobre
          </MenuLink>
        </li>
        <li>
          <MenuLink
            onClick={handleClick}
            to="#services"
            title="Vai para nossos servicos"
          >
            Serviços
          </MenuLink>
        </li>
        <li>
          <MenuLink onClick={handleClick} to="/contato" title="Vai para página de contato">
            Contato
          </MenuLink>
        </li>
      </ul>
    </Header>
  );
}
export default Navigation