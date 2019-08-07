export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d4a9814c715fd13e3e08f35',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-3ttakekz',
                  apiId: '46725437-202d-4be2-a7fb-29924966b855'
                },
                {
                  buildHookId: '5d4a981467d716faa18698f8',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-mp94n3zj',
                  apiId: '9b6c69bc-e63d-4dd6-b477-d6e2935138f0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ElAndy94/sanity-gatsby-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gatsby-blog-web-mp94n3zj.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
