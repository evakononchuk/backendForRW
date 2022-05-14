'use strict';
const fastify = require('fastify')();

fastify.register(require('./routes/users'), { prefix: '/users' });

fastify.listen(3000, function (err, adrress) {
  if (err) {
    console.log(err);
    process.exit(1);
  } else {
    console.log('Server is running up on port 3000');
  }
});