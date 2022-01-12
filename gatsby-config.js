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
    description: `Доставка питьевой воды в Симферополе. Мы предлагаем вам большой ассортимент вкусной и качественной воды, которая прекрасно подходит, как для питья, 
    так и для приготовления пищи. Наша вода кристально чистая, а цена в Симферополе одна из самых низких. Заказ воды: г. Симферополь, тел. +7(978) 869-0005, +7(978) 869-0009. 
    Режим работы: пн-вс 08:00 - 18:00. Доставка бесплатная.`,
    keywords: `доставка воды симферополь, купить воду, вода симферополь, доставка воды, заказ воды, доставка питьевой воды, вода в бутылках, вода 19 литров, единая доставка воды, доставка воды в Крыму`
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
