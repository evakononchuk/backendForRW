'use strict';

const app = require('./app');

describe('Using query parameters', () => {
  test('Without query parameters - returns "Hello world"', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/',
    });
    expect(response.statusCode).toBe(200);
    expect(response.query).toBe('Hello world');
  });
  test('Gets name from query parameters, returns "Hello ${name}"', async () => {
    const response = await app.inject({
      method: 'GET',
      query: {
        name: 'Ted',
      },
    });
    expect(response.query).toBe('Hello Ted');
  });
});
