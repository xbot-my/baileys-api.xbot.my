---
slug: deployment
title: Deployment
---

# Deployment

## Prerequisites

- Node.js 18+
- Baileys API instance running

## Build

```bash
npm install
npm run build
```

## Start

```bash
npm start
```

## Environment Variables

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXT_PUBLIC_API_KEY=your-api-key
```

## Docker Deployment

```bash
docker build -t baileys-api-manager .
docker run -p 3001:3000 baileys-api-manager
```

## Documentation Coming Soon

Full deployment guide coming soon!

[← Back to Manager Docs](/docs/manager/intro)
