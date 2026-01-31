import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'cf4'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'c7d'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '3b8'),
            routes: [
              {
                path: '/docs/baileys-api/changelog',
                component: ComponentCreator('/docs/baileys-api/changelog', '5e3'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/baileys-api/guides/configuration',
                component: ComponentCreator('/docs/baileys-api/guides/configuration', 'dc5'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/baileys-api/guides/deployment',
                component: ComponentCreator('/docs/baileys-api/guides/deployment', 'bbf'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/baileys-api/guides/usage',
                component: ComponentCreator('/docs/baileys-api/guides/usage', '7b3'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/baileys-api/guides/websocket',
                component: ComponentCreator('/docs/baileys-api/guides/websocket', '20c'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/baileys-api/intro',
                component: ComponentCreator('/docs/baileys-api/intro', 'b18'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/baileys-api/quick-start',
                component: ComponentCreator('/docs/baileys-api/quick-start', '367'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/baileys-api/troubleshooting',
                component: ComponentCreator('/docs/baileys-api/troubleshooting', '434'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/laravel/installation',
                component: ComponentCreator('/docs/laravel/installation', '67e'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/laravel/intro',
                component: ComponentCreator('/docs/laravel/intro', '961'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/laravel/usage',
                component: ComponentCreator('/docs/laravel/usage', '841'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/manager/deployment',
                component: ComponentCreator('/docs/manager/deployment', '944'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/manager/features',
                component: ComponentCreator('/docs/manager/features', '2cc'),
                exact: true,
                sidebar: "docs"
              },
              {
                path: '/docs/manager/intro',
                component: ComponentCreator('/docs/manager/intro', '079'),
                exact: true,
                sidebar: "docs"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '070'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
