'use strict';

const fastify = require('fastify');
const app = fastify();

function data() {
  app.get('/', async (request, reply) => {
    const name = request.query.name;
    reply.send(name ? `Hello ${name}` : 'Hello world');
  });
  return app;
}

module.exports = data;