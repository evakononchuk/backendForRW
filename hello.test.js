'use strict';

const app = require('./app');

test('When query parameter is not provided returns "Hello world"', async () => {
  const response = await app.inject({
    method: 'GET',
    url: '/',
  });

  expect(response.statusCode).toBe(200);
  expect(response.query).toBe('Hello world');
});
