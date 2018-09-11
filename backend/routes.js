const processor = require('./processor');

const setup = server => {
  server.get('/', (req, res) => {
    res.send('ydz was here');
  });

  server.get('/square/:num', (req, res) => {
    const num = req.params.num;
    const squared = processor.square(num);

    res.send(squared);
  });
};

module.exports = { setup };
