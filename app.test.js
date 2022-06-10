'use strict';

const data = require('./app');

test('Query reguest validation', async () => {
  expect(request.query.name).toBe(true);
});

/*const test = async () => {const app = data();
  const response = await app.inject({method: 'GET', url: '/'});
  console.log('status code: ', response.statusCode);
  console.log('body: ', response.body);
};
test();*/