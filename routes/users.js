'use strict';

async function routes (fastify, options) {
  //GET/users/:name
  fastify.get('/:name', async (req, res) => {
    res.send({
      name: "John"
    });
  });
};

module.exports = routes;