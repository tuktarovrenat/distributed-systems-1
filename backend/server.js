const fastify = require('fastify');
const routes = require('./routes');

const run = async function(port) {
  const server = fastify();
  routes.setup(server);

  try {
    await server.listen(port, '0.0.0.0');
    console.log('server is listening at: ' + port);
  } catch (err) {
    console.error('failed to listen on port: ' + port);
    console.error(err);
    process.exit(1);
  }
};

module.exports = { run };
