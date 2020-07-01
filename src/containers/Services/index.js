/* eslint-disable graphql/template-strings */
import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

import { Container, ServiceContent } from "./styles";

const Services = () => {
  const data = useStaticQuery(graphql`
    query ServicesImages {
      allInstaNode(
        sort: { fields: timestamp, order: DESC }
        limit: 12
        filter: { caption: { regex: "/#bazardaschavesservicos/" } }
      ) {
        edges {
          node {
            id
            caption
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

  const services = data.allInstaNode.edges;
  const extractTitleFromCaption = (caption) =>
    caption.substr(0, caption.indexOf("\n"));
  const extractTDescriptionFromCaption = (caption) =>
    caption.substr(
      caption.indexOf("\n"),
      caption.indexOf("\n#") - caption.indexOf("\n")
    );

  return (
    <>
      <Container id="services">
        <ServiceContent>
          <h3
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
            Nossos Serviços
          </h3>
          {services.map((service) => (
            <div
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-easing="ease"
              data-sal-duration="1000"
              key={service.node.id}
            >
              <Img
                fluid={service.node.localFile.childImageSharp.fluid}
                alt="An image apresentation from current service"
              />
              <h4>{extractTitleFromCaption(service.node.caption)}</h4>
              <p>{extractTDescriptionFromCaption(service.node.caption)}</p>
            </div>
          ))}
        </ServiceContent>
      </Container>
    </>
  );
};
export default Services;
