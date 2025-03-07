const http = require('http');
const app = require('./server');

describe('GET /', () => {
  it('responds with the bulletin board welcome message', (done) => {
    const server = app.listen(0);
    const connections = {};

    // Track all connections
    server.on('connection', (conn) => {
      const key = `${conn.remoteAddress}:${conn.remotePort}`;
      connections[key] = conn;
      conn.on('close', () => {
        delete connections[key];
      });
    });

    server.on('listening', () => {
      const port = server.address().port;
      const req = http.get(`http://localhost:${port}`, (res) => {
        let data = '';

        res.on('data', (chunk) => {
          data += chunk;
        });

        res.on('end', () => {
          try {
            expect(res.statusCode).toBe(200);
            expect(data).toContain('Welcome to the Bulletin Board');
            done();
          } catch (error) {
            done(error);
          } finally {
            // Close server and destroy connections
            server.close(() => {
              Object.values(connections).forEach(conn => conn.destroy());
            });
          }
        });
      });

      // Handle request errors
      req.on('error', (err) => {
        done(err);
        server.close(() => {
          Object.values(connections).forEach(conn => conn.destroy());
        });
      });
    });
  }, 10000);
});