---
slug: usage
title: Usage Examples
sidebar_position: 2
---

# Usage Examples

## Authentication

All API endpoints require an API key:

```
Authorization: Bearer your-api-key-change-in-production
```

## Send Text Messages

### cURL

```bash
curl -X POST http://localhost:3000/api/messages \
  -H "Authorization: Bearer your-api-key" \
  -H "Content-Type: application/json" \
  -d '{
    "to": "60123456789@s.whatsapp.net",
    "message": { "text": "Hello from API!" }
  }'
```

### JavaScript (Node.js)

```javascript
const axios = require('axios');

async function sendMessage(phoneNumber, text) {
  const response = await axios.post('http://localhost:3000/api/messages', {
    to: `${phoneNumber}@s.whatsapp.net`,
    message: { text }
  }, {
    headers: { 'Authorization': 'Bearer your-api-key' }
  });
  return response.data;
}

// Usage
sendMessage('60123456789', 'Hello from API!');
```

### Python

```python
import requests

def send_message(phone_number, text):
    response = requests.post(
        'http://localhost:3000/api/messages',
        headers={'Authorization': 'Bearer your-api-key'},
        json={
            'to': f'{phone_number}@s.whatsapp.net',
            'message': {'text': text}
        }
    )
    return response.json()

# Usage
send_message('60123456789', 'Hello from API!')
```

## Send Media Messages

### JavaScript

```javascript
const FormData = require('form-data');
const fs = require('fs');
const axios = require('axios');

async function sendImage(phoneNumber, imagePath, caption) {
  const form = new FormData();
  form.append('to', `${phoneNumber}@s.whatsapp.net`);
  form.append('file', fs.createReadStream(imagePath));
  form.append('caption', caption || '');

  const response = await axios.post(
    'http://localhost:3000/api/messages',
    form,
    {
      headers: {
        ...form.getHeaders(),
        'Authorization': 'Bearer your-api-key'
      }
    }
  );
  return response.data;
}

// Usage
sendImage('60123456789', './photo.jpg', 'Check this out!');
```

## Create Group

### JavaScript

```javascript
async function createGroup(groupName, participants) {
  const response = await axios.post('http://localhost:3000/api/groups', {
    title: groupName,
    participants: participants.map(p => `${p}@s.whatsapp.net`)
  }, {
    headers: { 'Authorization': 'Bearer your-api-key' }
  });
  return response.data;
}

// Usage
createGroup('Project Team', ['60123456789', '60123456780']);
```

## Database Queries

### Get Chat List

```bash
curl http://localhost:3000/api/chats \
  -H "Authorization: Bearer your-api-key"
```

### Get Messages from Chat

```bash
curl "http://localhost:3000/api/messages?chatId=60123456789@s.whatsapp.net&limit=10" \
  -H "Authorization: Bearer your-api-key"
```

### Get Contact

```bash
curl http://localhost:3000/api/contacts/60123456789@s.whatsapp.net \
  -H "Authorization: Bearer your-api-key"
```

## WhatsApp ID Formats

- **Individual**: `[country_code][phone]@s.whatsapp.net` (e.g., `60123456789@s.whatsapp.net`)
- **Group**: `[timestamp]-[id]@g.us` (e.g., `123456789-123345@g.us`)
- **Broadcast**: `[timestamp]@broadcast`
- **Status**: `status@broadcast`
