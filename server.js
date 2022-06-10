<<<<<<< HEAD
"use strict";
const fastify = require("fastify")();

fastify.get("/", async (request, reply) => {
  const name = request.query.name;
  reply.send(name ? `Hello ${name}` : "Hello world");
});
=======
'use strict';

const server = require('./app');
>>>>>>> 1a44738 (- server.js was divided into files:.js app and server.js)

server.listen(3000, err, address) => {
  if (err) {
    server.log.error(err);
    process.exit(1);
  };
};
