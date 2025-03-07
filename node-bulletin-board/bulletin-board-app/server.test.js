const http = require('http');
const app = require('./server'); // Import your Express app

describe('GET /', () => {
  it('responds with the bulletin board welcome message', (done) => {
    const server = app.listen(0, () => { // Start the server on a random port
      const port = server.address().port;
      http.get(`http://localhost:${port}`, (res) => {
        let data = '';

        // Collect the response data
        res.on('data', (chunk) => {
          data += chunk;
        });

        // Check the response when the request ends
        res.on('end', () => {
          expect(res.statusCode).toBe(200);
          expect(data).toContain('Welcome to the Bulletin Board'); // Check for the welcome message
          server.close(); // Close the server
          done();
        });
      });
    });
  }, 10000); // Increase timeout to 10000 ms
});