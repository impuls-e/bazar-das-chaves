/* eslint-disable graphql/template-strings */
import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import { Container, AboutContent } from "./styles";

const About = () => {
  const data = useStaticQuery(graphql`
    query AboutImage {
      allInstaNode(
        sort: { fields: timestamp, order: DESC }
        limit: 1
        filter: { caption: { regex: "/#bazardaschaveslocal/" } }
      ) {
        edges {
          node {
            localFile {
              childImageSharp {
                fluid(quality: 70, maxWidth: 600, maxHeight: 600) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  `);

  return (
    <>
      <Container id="sobre">
        <AboutContent>
          <div
            data-sal="slide-up"
            data-sal-delay="200"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
            <h3>Sobre Nós</h3>
            <p>
              Localizado na Rua Felipe Schmidt, no coração de Florianópolis, o
              Bazar das Chaves e Carimbos é uma empresa com mais de 20 anos de
              mercado. Possuímos um atendimento diferenciado e estamos sempre
              buscando os melhores produtos para o nosso cliente.
            </p>
          </div>
          <aside
            data-sal="slide-up"
            data-sal-delay="200"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
            <Img
              fluid={
                data.allInstaNode.edges[0].node.localFile.childImageSharp.fluid
              }
              alt="An image apresentation from current project"
            />
          </aside>
        </AboutContent>
      </Container>
    </>
  );
};
export default About;
