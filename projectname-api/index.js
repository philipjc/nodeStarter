import express from 'express';
import http from 'http';
import io from 'socket.io';

import consign from 'consign'; // loads files in order

const app = express();
const httpserver = http.Server(app);
const socket = io(httpserver);

consign()
  // .include('libs/config.js')
  // .then('db.js')
  // .then('auth.js')
  .then('libs/middleware.js')
  .then('routes')
  .then('libs/boot.js')

  .then('fileRead.js')
  .into(app);


socket.on('connection', (socket) => {
  console.log('connected');

  socket.on('disconnect', () => {
    console.log('disconnected');
  });

  socket.on('bullshit', (msg) => {
    console.log(msg);
  });
});
