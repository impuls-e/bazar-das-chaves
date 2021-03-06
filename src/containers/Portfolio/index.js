/* eslint-disable graphql/template-strings */
import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";
import { IoMdHeart } from "react-icons/io";
import { FaComment } from "react-icons/fa";

import { Container, PortfolioContent, Insta } from "./styles";

const Portfolio = ({ limit }) => {
  const data = useStaticQuery(graphql`
    query Portfoliosquery {
      allInstaNode(sort: { fields: timestamp, order: DESC }, limit: 3) {
        edges {
          node {
            id
            likes
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

  const portfolios = data.allInstaNode.edges;
  return (
    <>
      <Container id="portfolios">
        <PortfolioContent>
          <h3
            data-sal="slide-up"
            data-sal-delay="300"
            data-sal-easing="ease"
            data-sal-duration="1000"
          >
            Saiba mais no nosso Instagram{" "}
            <a
              class="insta"
              href="https://www.instagram.com/bazardaschavesecarimbos/"
            >
              @bazardaschavesecarimbos
            </a>
          </h3>

          {portfolios.slice(0, limit).map((portfolio) => (
            <div
              data-sal="slide-up"
              data-sal-delay="300"
              data-sal-easing="ease"
              data-sal-duration="1000"
              key={portfolio.node.id}
            >
              <a
                target="_blank"
                href={`https://www.instagram.com/p/${portfolio.node.id}/`}
              >
                <Img
                  fluid={portfolio.node.localFile.childImageSharp.fluid}
                  alt="An image apresentation from current portfolio"
                />
                <Insta>
                  <span>
                    <IoMdHeart />
                    <strong>{portfolio.node.likes}</strong>
                  </span>

                  {portfolio.node.comments && (
                    <span>
                      <FaComment />
                      <strong>{portfolio.node.comments}</strong>
                    </span>
                  )}
                </Insta>
              </a>
            </div>
          ))}
        </PortfolioContent>
      </Container>
    </>
  );
};
export default Portfolio;
