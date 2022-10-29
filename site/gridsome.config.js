// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'SCVS',
  icon: {
    touchicon: './src/assets/favicon.png'
  },
  siteUrl: 'https://scvs.owasp.org',
  settings: {
    web: false,
    twitter: 'https://twitter.com/OWASP_SCVS',
    github: 'https://github.com/OWASP/Software-Component-Verification-Standard',
    nav: {
      links: [
        { path: '/scvs/', title: 'Get Started' },
        { path: '/bom-maturity-model/', title: 'BOM Maturity Model' }
      ]
    },
    sidebar: [
      {
        name: 'scvs-1.0',
        sections: [
          {
            title: 'OWASP SCVS v1.0',
            items: [
              '/scvs/frontispiece/',
              '/scvs/preface/',
              '/scvs/using-scvs/',
              '/scvs/assessment-and-certification/',
              '/scvs/v1-inventory/',
              '/scvs/v2-software-bill-of-materials/',
              '/scvs/v3-build-environment/',
              '/scvs/v4-package-management/',
              '/scvs/v5-component-analysis/',
              '/scvs/v6-pedigree-and-provenance/',
              '/scvs/guidance-open-source-policy/',
              '/scvs/appendix-a-glossary/',
              '/scvs/appendix-b-references/'
            ]
          }
        ]
      }
    ]
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        baseDir: './content',
        path: '**/*.md',
        typeName: 'MarkdownPage',
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['noopener', 'noreferrer'],
          plugins: [
            '@gridsome/remark-prismjs'
          ]
        }
      }
    },

    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        purgeConfig: {
          // Prevent purging of prism classes.
          whitelistPatternsChildren: [
            /token$/
          ]
        }
      }
    },

      /*
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'G-08FW44EP0T'
      }
    },

       */

    {
      use: '@gridsome/plugin-sitemap',
      options: {
      }
    }

  ],
  chainWebpack: config => config.mode('development')
}
