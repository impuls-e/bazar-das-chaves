/* eslint-disable graphql/template-strings */
import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from "gatsby-image"

import { Container } from './styles'

const Services = () => {
  const data = useStaticQuery(graphql`
    query ServicesQuery {
      allMdx (filter: { frontmatter: { tag: { eq: "services" } } }) {
        edges {
          node {
            id
            frontmatter {
              title
              description
              imgUrl {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const services = data.allMdx.edges


  return (
    <>    
      <Container id="services">
        <h3>Nossos Serviços</h3>

        {services.map(service => (
          <div
            key={service.node.id}
          >
              <Img
                fluid={service.node.frontmatter.imgUrl.childImageSharp.fluid}
                alt="An image apresentation from current service"
              />
              <h4>{service.node.frontmatter.title}</h4>
              <p>{service.node.frontmatter.description}</p>
              
          </div>
        ))} 
      </Container>
    </>
  );
}
export default Services