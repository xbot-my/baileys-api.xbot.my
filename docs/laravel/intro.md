---
slug: intro
title: Introduction
---

# Laravel Baileys API

Laravel SDK and Service Provider for Baileys API integration.

## Features

- Laravel Service Provider
- Facade for easy access
- Artisan commands for WhatsApp operations
- Queue job support for async message sending
- Event system for WhatsApp events

## Installation

```bash
composer require xbot-my/laravel-baileys-api
```

## Quick Start

```php
use Xbot\BaileysApi\Facades\WhatsApp;

// Send a message
WhatsApp::message('60123456789@s.whatsapp.net', 'Hello from Laravel!');

// Create a group
WhatsApp::createGroup('Project Team', ['60123456789', '60123456780']);
```

## Documentation Coming Soon

This package is currently under development. Check back soon for full documentation!

[← Back to Home](/)
