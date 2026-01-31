/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docs: [
    {
      type: 'category',
      label: 'Baileys API',
      items: [
        { type: 'doc', id: 'baileys-api/intro', label: 'Introduction' },
        { type: 'doc', id: 'baileys-api/quick-start', label: 'Quick Start' },
        {
          type: 'category',
          label: 'Guides',
          items: [
            { type: 'doc', id: 'baileys-api/guides/deployment', label: 'Deployment' },
            { type: 'doc', id: 'baileys-api/guides/usage', label: 'Usage Examples' },
            { type: 'doc', id: 'baileys-api/guides/configuration', label: 'Configuration' },
            { type: 'doc', id: 'baileys-api/guides/websocket', label: 'WebSocket Events' },
          ],
        },
        { type: 'doc', id: 'baileys-api/troubleshooting', label: 'Troubleshooting' },
        { type: 'doc', id: 'baileys-api/changelog', label: 'Changelog' },
      ],
    },
    {
      type: 'category',
      label: 'Laravel SDK',
      link: { type: 'doc', id: 'laravel/intro' },
      items: [
        { type: 'doc', id: 'laravel/intro', label: 'Introduction' },
        { type: 'doc', id: 'laravel/installation', label: 'Installation' },
        { type: 'doc', id: 'laravel/usage', label: 'Usage' },
      ],
    },
    {
      type: 'category',
      label: 'Manager',
      link: { type: 'doc', id: 'manager/intro' },
      items: [
        { type: 'doc', id: 'manager/intro', label: 'Introduction' },
        { type: 'doc', id: 'manager/deployment', label: 'Deployment' },
        { type: 'doc', id: 'manager/features', label: 'Features' },
      ],
    },
  ],
};

export default sidebars;
