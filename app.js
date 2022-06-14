'use strict';

const fastify = require('fastify');
const app = fastify();

app.get('/', async (request, reply) => {
  const name = request.query.name;
  reply.send(name ? `Hello ${name}` : 'Hello world');
});

module.exports = app;
