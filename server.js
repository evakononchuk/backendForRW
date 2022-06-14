'use strict';
const app = require('./app');

app.listen({ port: 3000 }, err => {
  if (err) {
    app.log.error(err);
    process.exit(1);
  }
});
