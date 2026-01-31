---
slug: deployment
title: Deployment
sidebar_position: 1
---

# Deployment Guide

**Docker containerized deployment is the only supported method.**

## Database Options

Choose your preferred database with dedicated compose files:

| File | Database | Command |
|------|----------|---------|
| `docker-compose.yml` | SQLite (default) | `docker compose up -d` |
| `docker-compose-pgsql.yml` | PostgreSQL 16 | `docker compose -f docker-compose-pgsql.yml up -d` |
| `docker-compose-mysql.yml` | MySQL 8.0 | `docker compose -f docker-compose-mysql.yml up -d` |
| `docker-compose-mariadb.yml` | MariaDB 11.4 | `docker compose -f docker-compose-mariadb.yml up -d` |

**SQLite** is recommended for development and single-instance deployments.
**PostgreSQL** is recommended for production with multiple instances.

## Production Deployment

### Environment Variables

```env
NODE_ENV=production
API_KEY=your-strong-api-key-here
CORS_ORIGINS=https://yourdomain.com

# Redis (if using external Redis)
REDIS_HOST=redis.example.com
REDIS_PASSWORD=your-redis-password

# Database (PostgreSQL example)
DATABASE_TYPE=postgres
DATABASE_HOST=postgres.example.com
DATABASE_PORT=5432
DATABASE_USERNAME=baileys
DATABASE_PASSWORD=strong-password
DATABASE_DATABASE=baileys_api
DATABASE_SYNCHRONIZE=false
```

### Reverse Proxy (nginx)

```nginx
server {
    listen 443 ssl http2;
    server_name api.example.com;

    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    location /events/ {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_set_header Host $host;
    }
}
```

### Persistence

Ensure these volumes are persisted:

```yaml
volumes:
  baileys_auth_info:  # WhatsApp session data
  postgres_data:      # Database data
  redis_data:         # Redis cache
```

## Multi-Instance Deployment

For multiple WhatsApp numbers, run separate instances with shared Redis and PostgreSQL:

```yaml
# Instance 1
environment:
  BAILEYS_AUTH_INFO_PATH: /app/instance1_auth
  REDIS_DB: 0

# Instance 2
environment:
  BAILEYS_AUTH_INFO_PATH: /app/instance2_auth
  REDIS_DB: 1
```

## Monitoring

Check health status:

```bash
curl http://localhost:3000/api/health
```

Monitor logs:

```bash
docker compose logs -f api
```
