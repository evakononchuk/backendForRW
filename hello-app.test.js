'use strict';

const app = require('./app');

test('Takes name from query parameter, returns "Hello ${name}"', async () => {
  const response = await app.inject({
    method: 'GET',
    url: '/?name=Ted',
  });

  expect(response.statusCode).toBe(200);
  expect(response.query).toBe('Hello Ted');
});
