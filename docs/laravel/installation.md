---
slug: installation
title: Installation
---

# Installation

## Requirements

- Laravel 10.x or 11.x
- PHP 8.2 or higher
- Baileys API instance running

## Install via Composer

```bash
composer require xbot-my/laravel-baileys-api
```

## Publish Configuration

```bash
php artisan vendor:publish --provider="Xbot\BaileysApi\BaileysApiServiceProvider"
```

## Environment Variables

Add to your `.env` file:

```env
BAILEYS_API_URL=http://localhost:3000
BAILEYS_API_KEY=your-api-key
```

## Documentation Coming Soon

Full installation guide coming soon!

[← Back to Laravel Docs](/docs/laravel/intro)
