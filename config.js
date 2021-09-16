const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://determined-dijkstra-95a0e8.netlify.app/',
    gaTrackingId: null,
    trailingSlash: false,
  },
  header: {
    logo: 'https://res.cloudinary.com/papu/image/upload/v1630568346/logo/logo_yplglb.png',
    logoLink: 'https://determined-dijkstra-95a0e8.netlify.app/',
    title:
      "<a href='https://determined-dijkstra-95a0e8.netlify.app/'>Xformation</a>",
    githubUrl: 'https://github.com/hasura/gatsby-gitbook-boilerplate',
    helpUrl: '',
    tweetText: '',
    social: `
    <li>
		    <a href="https://twitter.com/hasurahq" target="_blank" rel="noopener">
		      <div class="twitterBtn">

		      </div>
		    </a>
		  </li>
			<li>
		    <a href="https://discordapp.com/invite/hasura" target="_blank" rel="noopener">
		      <div class="discordBtn">

		      </div>
		    </a>
		  </li>
      `,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/codeblock',
      '/xformblock',
    ],
    collapsedNav: [
      '/codeblock', // add trailing slash if enabled above
    ],
    links: [{ text: 'Xformation', link: 'https://determined-dijkstra-95a0e8.netlify.app/' }],
    frontline: false,
    ignoreIndex: true,
    title:
      "<a href='https://determined-dijkstra-95a0e8.netlify.app/'>Xformation </a><div class='greenCircle'></div><a href='https://determined-dijkstra-95a0e8.netlify.app/'>documentation</a>",
  },
  siteMetadata: {
    title: 'Gatsby Gitbook Boilerplate | Hasura',
    description: 'Documentation built with mdx. Powering hasura.io/learn ',
    ogImage: null,
    docsLocation: 'https://github.com/hasura/gatsby-gitbook-boilerplate/tree/master/content',
    favicon: 'https://graphql-engine-cdn.hasura.io/img/hasura_icon_black.svg',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
