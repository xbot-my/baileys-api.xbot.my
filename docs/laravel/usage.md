---
slug: usage
title: Usage
---

# Usage

## Basic Usage

### Send Message

```php
use Xbot\BaileysApi\Facades\WhatsApp;

WhatsApp::message('60123456789@s.whatsapp.net', 'Hello from Laravel!');
```

### Send Media

```php
WhatsApp::image('60123456789@s.whatsapp.net', '/path/to/image.jpg', 'Caption here');
```

### Create Group

```php
WhatsApp::createGroup('Project Team', ['60123456789', '60123456780']);
```

## Queue Jobs

### Dispatch Message Job

```php
use Xbot\BaileysApi\Jobs\SendMessageJob;

SendMessageJob::dispatch('60123456789@s.whatsapp.net', 'Hello from queue!');
```

## Events

### Listen for Message Events

```php
// In App\Providers\EventServiceProvider

use Xbot\BaileysApi\Events\NewMessage;
use App\Listeners\HandleNewMessage;

protected $listen = [
    NewMessage::class => [
        HandleNewMessage::class,
    ],
];
```

## Documentation Coming Soon

Full usage guide coming soon!

[← Back to Laravel Docs](/docs/laravel/intro)
