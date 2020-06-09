import React from "react";

import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/Seo";
import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

export default function IndexPage() {
  Layout.propTypes = {
    children: PropTypes.node.isRequired
  };
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <Layout>
      <SEO title={data.site.siteMetadata.title}  />
      <Navigation siteTitle={data.site.siteMetadata.title} />
      <Hero />
      {/* <Footer /> */}
    </Layout>
  );
}
