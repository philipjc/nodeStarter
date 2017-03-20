import bodyParser from 'body-parser';
import express from 'express';
import cors from 'cors';

module.exports = app => {

  app.set('port', 3000);
  app.set('json spaces', 4);
  app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:4000','http://localhost:3000/socket.io/?EIO=3&transport=polling&t=LhTA4qq'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorisation']
  }));
  app.use(bodyParser.json());
  // app.use(app.auth.initialize());
  app.use((req, res, next) => {
    // delete req.body.id;
    next(); // next moves to the next middleware or the route handler
  });

};

// read more docs on allowing CORS headers from a server
// https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS
