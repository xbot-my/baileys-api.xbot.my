---
slug: configuration
title: Configuration
sidebar_position: 3
---

# Configuration

## Environment Variables

Create a `.env` file or use environment variables with Docker:

```env
# Application
NODE_ENV=development
PORT=80
API_KEY=your-api-key-change-in-production
CORS_ORIGINS=*

# Baileys Configuration
BAILEYS_AUTH_INFO_PATH=./baileys_auth_info
BAILEYS_PRINT_QR_IN_TERMINAL=true
BAILEYS_BROWSER_PLATFORM=ubuntu
BAILEYS_BROWSER_NAME=Chrome
BAILEYS_SYNC_FULL_HISTORY=true
BAILEYS_MARK_ONLINE_ON_CONNECT=true

# Logger
LOGGER_LEVEL=info

# Redis
REDIS_HOST=redis
REDIS_PORT=6379

# Database (SQLite default)
DATABASE_TYPE=sqlite
DATABASE_PATH=/app/data/baileys.db
```

## Dynamic Configuration API

Runtime configuration changes without restart:

### Get All Configurations

```bash
curl http://localhost:3000/api/configs \
  -H "Authorization: Bearer your-api-key"
```

### Update Configuration

```bash
curl -X POST http://localhost:3000/api/configs \
  -H "Authorization: Bearer your-api-key" \
  -H "Content-Type: application/json" \
  -d '{
    "key": "baileys.authPath",
    "value": "/custom/path",
    "type": "string",
    "category": "baileys"
  }'
```

### Delete Configuration (Reset to Default)

```bash
curl -X DELETE http://localhost:3000/api/configs/app.port \
  -H "Authorization: Bearer your-api-key"
```

## Configuration Reference

| Key | Type | Default | Description |
|-----|------|---------|-------------|
| `app.port` | number | 80 | Application port |
| `app.nodeEnv` | string | development | Environment (development/production) |
| `app.apiKey` | string | - | API authentication key |
| `app.corsOrigins` | array | [*] | CORS allowed origins |
| `baileys.authPath` | string | ./baileys_auth_info | Authentication state path |
| `baileys.printQRInTerminal` | boolean | false | Print QR in terminal |
| `baileys.browser.platform` | string | ubuntu | Browser platform |
| `baileys.browser.name` | string | Chrome | Browser name |
| `baileys.syncFullHistory` | boolean | true | Sync full message history |
| `baileys.markOnlineOnConnect` | boolean | false | Show online on connect |
| `logger.level` | string | info | Log level (debug/info/warn/error) |
