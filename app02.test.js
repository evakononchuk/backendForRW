'use strict';

const app = require('./app');

test('Query reguest validation', async () => {
  const response = await app.inject({
    method: 'GET',
    url: '/',
  });

  expect(response.statusCode).toBe(200);
  expect(response.payload).toBe('Hello world');
});
