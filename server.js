'use strict';
const fastify = require('fastify')();

fastify.get('/', async (request, reply) => {
  const name = request.query.name;
  reply.send(name ? `Hello ${name}` : 'Hello world');
});

const start = async () => {
  try {
    await fastify.listen(3000);
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
