const server = require('./server');
const config = require('./config');

const run = async function() {
  await server.run(config.port);
};

run();
