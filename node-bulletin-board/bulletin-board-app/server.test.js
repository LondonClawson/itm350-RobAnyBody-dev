const http = require('http');
const app = require('./server'); // Import your Express app

describe('GET /', () => {
  it('responds with Hello World', (done) => {
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
          expect(data).toContain('Hello World'); // Adjust this based on your server's response
          server.close(); // Close the server
          done();
        });
      });
    });
  });
});