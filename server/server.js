const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');
const app = express();
const http = require('http');
const { Server } = require('socket.io');

dotenv.config();
connectDB();

app.use(cors());
app.use(express.json()); 

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: '*', 
    methods: ['GET', 'POST'],
  },
});

let connectedUsers = {};

io.on('connection', (socket) => {
  console.log(`⚡ New client connected: ${socket.id}`);

  socket.on('join', (userId) => {
    connectedUsers[userId] = socket.id;
    console.log(`User ${userId} joined with socket ID: ${socket.id}`);
  });

  socket.on('sendMessage', ({ to, message, from }) => {
    const receiverSocket = connectedUsers[to];
    if (receiverSocket) {
      io.to(receiverSocket).emit('receiveMessage', { message, from });
    }
  });

  socket.on('disconnect', () => {
    console.log(`🚪 Client disconnected: ${socket.id}`);
    Object.keys(connectedUsers).forEach((key) => {
      if (connectedUsers[key] === socket.id) {
        delete connectedUsers[key];
      }
    });
  });
});

app.post('/test-post', (req, res) => {
  console.log('Body received on /test-post:', req.body);
  res.json({ message: 'POST /test-post successful', body: req.body });
});


app.use('/api/users', require('./routes/userRoutes'));

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.get('/read', (req, res) => {
  res.send('read api');
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
