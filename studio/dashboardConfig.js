export default {
  widgets: [
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
                  buildHookId: '5f610a0619eca516ffffca50',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-3wzfydsn',
                  apiId: '9a26a5d7-62fb-47d5-a676-c089378ff759'
                },
                {
                  buildHookId: '5f610a06de76b71516a5d316',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-bpkd5rvy',
                  apiId: '5803a16d-0f01-4542-834e-5c5b19eeea92'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/vnys/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-bpkd5rvy.netlify.app', category: 'apps'}
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
