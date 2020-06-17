import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from "gatsby-image"

import { Container } from './styles'

const About = () => {
  const data = useStaticQuery(
    graphql`
      query About {
        file(relativePath: { eq: "about.png" }) {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );
  return (
    <>    
      <Container >
        <h3>Sobre Nós</h3>
        <p>Localizado na Rua Felipe Schmidt, no coração de Florianópolis, o Bazar das Chaves e Carimbos é uma empresa com mais de 20 anos de mercado. Possuímos um atendimento diferenciado e estamos sempre buscando os melhores produtos para o nosso cliente.</p>
        <aside>   
          <Img
            fluid={data.file.childImageSharp.fluid}
            alt="An image apresentation from current project"
          />
        </aside>     
      </Container>
    </>
  );
}
export default About