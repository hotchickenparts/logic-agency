export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '5f4551b6d4d610ee797d1e52',
                  title: 'Sanity Studio',
                  name: 'logic-agency-studio',
                  apiId: '4e5b4906-5307-4da4-9ad8-d56c0a528d24'
                },
                {
                  buildHookId: '5f4551b6d817aa300c019e83',
                  title: 'Portfolio Website',
                  name: 'logic-agency',
                  apiId: 'c23ca4c1-26f2-409a-af28-ba6f1e4fbb29'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/hotchickenparts/logic-agency',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://logic-agency.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
