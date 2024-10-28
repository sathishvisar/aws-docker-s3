import { Server } from 'socket.io';

let io;

export const initSocket = (server) => {
  io = new Server(server);

  io.on('connection', (socket) => {
    console.log('A user connected:', socket.id);

    socket.on('chat message', (msg) => {
      io.emit('chat message', msg);
    });

    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
    });
  });
};

export const getSocket = () => {
  if (!io) throw new Error('Socket not initialized!');
  return io;
};
