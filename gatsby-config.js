module.exports = {
  siteMetadata: {
    title: 'imprevo',
    author: 'Evgeniy Mokeev',
    description: 'Frontside Varial Kickflip Developer',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'imprevo',
        short_name: 'imprevo',
        start_url: '/',
        background_color: '#1b1f22',
        theme_color: '#1b1f22',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
};
