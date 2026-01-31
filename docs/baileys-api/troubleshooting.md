---
slug: troubleshooting
title: Troubleshooting
sidebar_position: 5
---

# Troubleshooting

## QR Code Not Displaying

**Problem**: QR code doesn't appear when you request it.

**Solution**:

```bash
# Check logs for errors
docker compose logs -f api

# Verify services are running
docker compose ps
```

## Connection Issues

**Problem**: WhatsApp connection keeps dropping or won't connect.

**Solution**:

```bash
# Check connection status
curl http://localhost:3000/api/auth/state \
  -H "Authorization: Bearer your-api-key"

# Get new QR code
curl http://localhost:3000/api/auth/qr \
  -H "Authorization: Bearer your-api-key"

# Restart the service
docker compose restart api
```

## Database Lock Errors (SQLite)

**Problem**: SQLite database is locked.

**Solution**:

```bash
# Stop services
docker compose down

# Remove lock files
rm -f ./data/*.db-*

# Start services
docker compose up -d
```

## Performance Issues

**Problem**: Slow response times or high resource usage.

**Solution**:

- Use PostgreSQL instead of SQLite for production
- Increase Redis memory limit
- Check resource usage: `docker stats`
- Enable database connection pooling

## Redis Connection Errors

**Problem**: Cannot connect to Redis.

**Solution**:

```bash
# Check Redis is running
docker compose ps redis

# Check Redis logs
docker compose logs redis

# Restart Redis
docker compose restart redis
```

## Auth State Lost

**Problem**: WhatsApp session keeps getting deleted.

**Solution**:

- Ensure `BAILEYS_AUTH_INFO_PATH` volume is persisted
- Check disk space: `df -h`
- Verify volume mounts in docker-compose.yml

## Get Help

If you're still experiencing issues:

- [Check GitHub Issues](https://github.com/xbot-my/baileys-api/issues)
- [Join Discord Community](https://discord.gg/)
- [Open a new issue](https://github.com/xbot-my/baileys-api/issues/new)
