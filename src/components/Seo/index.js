import React from 'react';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
const SEO = () => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: {
          title,
          titleTemplate,
          description,
          siteUrl,
          siteImage,
          twitterUsername,
        },
      },
    }) => {
      const image = `${siteUrl}${siteImage}`
      return (
        <>
          <Helmet title={title} titleTemplate={titleTemplate}>
            <meta
              name='google-site-verification'
              content='FdK0L5prquMXg4djTcVSAth67wA8GbJCciJs9q5ZBew'
            />
            <meta name='description' content={description} />
            <meta name='image' content={image} />
            <meta charSet='utf-8' />
            {siteUrl && <meta property='og:url' content={siteUrl} />}
            
            <meta property='og:type' content='website' />

            {title && <meta property='og:title' content={title} />}
            {description && (
              <meta property='og:description' content={description} />
            )}
            {image && (
              <meta
                property='og:image'
                content='https://scontent.ffln1-1.fna.fbcdn.net/v/t1.0-9/91273606_3300776629951515_1865864948798717952_n.png?_nc_cat=111&_nc_sid=85a577&_nc_ohc=TVNGuGO30KwAX8oZxti&_nc_ht=scontent.ffln1-1.fna&oh=9a5862f1adf886cf63972dadd11b4271&oe=5EB0EDF8'
              />
            )}

            {image && <meta property='og:image:url' content={image} />}

            {image && (
              <meta property='og:image:type' content='image/jpeg' />
            )}
            <meta name='twitter:card' content='summary_large_image' />
            {twitterUsername && (
              <meta name='twitter:creator' content={twitterUsername} />
            )}
            {title && <meta name='twitter:title' content={title} />}
            {description && (
              <meta name='twitter:description' content={description} />
            )}
            {image && <meta name='twitter:image' content={image} />}
          </Helmet>
        </>
      );
    }}
  />
);
export default SEO;
SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  pathname: PropTypes.string,
};
SEO.defaultProps = {
  title: null,
  description: null,
  image: null,
  pathname: null,
};
const query = graphql`
  query SEO {
    site {
      siteMetadata {
        title,
        titleTemplate,
        description,
        siteUrl,
        siteImage,
        twitterUsername,
      }
    }
  }
`;
