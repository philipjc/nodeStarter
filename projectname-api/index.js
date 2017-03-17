console.log('Node is running');
// console.log(module);

import express from 'express';
import consign from 'consign'; // loads files in order

const app = express();

consign()
  // .include('libs/config.js')
  // .then('db.js')
  // .then('auth.js')
  .then('libs/middleware.js')
  .then('routes')
  .then('libs/boot.js')

  .then('fileRead.js')
  .into(app);
