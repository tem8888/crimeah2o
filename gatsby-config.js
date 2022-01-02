/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  siteMetadata: {
    siteUrl: `https://crimea-h2o.ru`,
    title: "Единая доставка воды в Крыму",
    description: "Производим доставку питьевой воды в Симферополе и Симферопольском районе. Мы предлагаем вам, большой ассортимент вкусной и качественной воды, которая прекрасно подходит, как для питья, так и для приготовления пищи. Покупая у нас воду, вы получаете самые лучшие цены и бесплатную доставку.",
    keywords: `доставка воды в Симферополе, заказ воды, бесплатная доставка воды, Симферополь, вода в бутылях, вода 19 литров`
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `products`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    "gatsby-transformer-remark",
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    'gatsby-plugin-robots-txt',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "CrimeaH2O",
        short_name: "CrimeaH2O",
        start_url: "/",
        background_color: "#f7f0eb",
        theme_color: "#a2466c",
        display: "standalone",
        icon: "src/images/favicon.png",
      },
    },
  ],
  flags: {
    DEV_SSR: false,
  },
}
