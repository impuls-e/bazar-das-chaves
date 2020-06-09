const config = require('./data/config');

module.exports = {
  siteMetadata: {
    title: 'Bazar das Chaves e Carimbos',
    titleTemplate: 'Bazar das Chaves e Carimbos - Qualidade e Confiança',
    description:
      'O Bazar das Chaves e Carimbos é uma empresa já conhecida com mais de 20 anos de mercado, com atendimento diferenciado sempre buscando o melhor para o cliente.',
    url: 'https://bazardaschaves.netlify.app/',
    siteUrl: 'https://bazardaschaves.netlify.app/', // No trailing slash allowed!
    image: `${__dirname}/src/img/bazar-icon.png`, // Path to your image you placed in the 'static' folder
    twitterUsername: '@$impulsewks',
    author: 'impulseworks',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-141117092-14',
        // this option places the tracking script into the head of the DOM
        head: true,
        // other options
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        description: config.siteDescription,
        start_url: '/',
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'standalone',
        icon: 'src/images/key-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'pt-BR',
      },
    },

    `gatsby-plugin-advanced-sitemap`,
    {
      resolve: 'gatsby-plugin-extract-schema',
      options: {
        dest: `${__dirname}/path/to/schema.json`,
      },
    },
    `gatsby-plugin-next-seo`,

    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://bazardaschaves.netlify.app/',
        sitemap: 'https://bazardaschaves.netlify.app/',
        env: {
          development: {
            policy: [{ userAgent: '*', disallow: ['/'] }],
          },
          production: {
            policy: [{ userAgent: '*', allow: '/' }],
          },
        },
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
