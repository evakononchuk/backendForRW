'use strict';
const fastify = require('fastify');

fastify.get('/', async (request, reply) => {
  const name = location.search;
  reply.send(name ? console.log('Hello ${name}') : console.log('Hello world'));
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
