---
slug: quick-start
title: Quick Start
sidebar_position: 2
---

# Quick Start

Get started in 5 minutes with Docker Compose.

## Prerequisites

- Docker >= 20.10
- Docker Compose >= 2.0

## 1. Clone and Configure

```bash
git clone https://github.com/xbot-my/baileys-api.git
cd baileys-api
cp .env.example .env
```

Edit `.env` with your settings:

```env
API_KEY=your-api-key-change-in-production
BAILEYS_AUTH_INFO_PATH=./baileys_auth_info
DATABASE_TYPE=sqlite
```

## 2. Start Services

```bash
docker compose up -d
```

## 3. Check Status

```bash
docker compose logs -f api
```

## 4. Get QR Code

```bash
curl http://localhost:3000/api/auth/qr \
  -H "Authorization: Bearer your-api-key"
```

Scan the QR code with WhatsApp to authenticate.

## 5. Send Your First Message

```bash
curl -X POST http://localhost:3000/api/messages \
  -H "Authorization: Bearer your-api-key" \
  -H "Content-Type: application/json" \
  -d '{
    "to": "60123456789@s.whatsapp.net",
    "message": { "text": "Hello from API!" }
  }'
```

## Next Steps

- [Deployment Guide](/docs/baileys-api/guides/deployment) - Production deployment
- [Usage Examples](/docs/baileys-api/guides/usage) - More code examples
- [WebSocket Events](/docs/baileys-api/guides/websocket) - Real-time notifications
