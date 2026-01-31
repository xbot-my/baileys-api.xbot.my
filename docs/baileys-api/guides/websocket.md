---
slug: websocket
title: WebSocket Events
sidebar_position: 4
---

# WebSocket Events

Connect to the WebSocket at: `/api/events`

## Connection

### JavaScript (Socket.IO Client)

```javascript
const { io } = require('socket.io-client');

const socket = io('http://localhost:3000/api/events', {
  auth: { token: 'your-api-key' }
});

// Subscribe to specific events
socket.emit('subscribe', ['messages.upsert', 'connection.update']);

socket.on('connect', () => console.log('Connected'));
socket.on('disconnect', () => console.log('Disconnected'));
```

### Python

```python
import socketio

# Create client
sio = socketio.Client()

# Authentication
sio.connect('http://localhost:3000/api/events',
            auth={'token': 'your-api-key'})

# Subscribe to events
sio.emit('subscribe', ['messages.upsert', 'connection.update'])

@sio.on('connect')
def on_connect():
    print('Connected')

@sio.on('disconnect')
def on_disconnect():
    print('Disconnected')

# Keep running
sio.wait()
```

## Available Events

| Event | Description |
|-------|-------------|
| `connection.update` | Connection status changes |
| `auth.qr` | QR code generated |
| `auth.pairing-code` | Pairing code generated |
| `creds.update` | Credentials updated |
| `messages.upsert` | New messages received |
| `messages.update` | Messages updated |
| `messages.reaction` | Message reactions |
| `messages.delete` | Messages deleted |
| `chats.upsert` | New chats created |
| `chats.update` | Chats updated |
| `groups.upsert` | New groups created |
| `groups.update` | Groups updated |
| `group-participants.update` | Group participants changed |
| `contacts.upsert` | New contacts added |
| `contacts.update` | Contacts updated |
| `presence.update` | Online status updates |
| `call` | Call events |

## Event Payloads

### messages.upsert

```javascript
socket.on('messages.upsert', (data) => {
  const message = data.messages[0];
  console.log(`New message from ${message.key.remoteJid}`);
  console.log(message.message?.conversation || 'Media message');
});
```

### connection.update

```javascript
socket.on('connection.update', (update) => {
  console.log('Connection status:', update.connection);
  // Possible values: 'open', 'close', 'connecting'
});
```

### presence.update

```javascript
socket.on('presence.update', (update) => {
  const { id, presences } = update;
  console.log(`User ${id} is now ${presences.available ? 'online' : 'offline'}`);
});
```
