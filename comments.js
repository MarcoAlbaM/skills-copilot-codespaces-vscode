// Create web server
// Import the required modules
const http = require('http');

// Define the hostname and port number
const hostname = 'localhost';
const port = 3000;

// Create the server
const server = http.createServer((req, res) => {
  // Set the response header
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Send a response to the client
  res.end('Hello, world!');
});

// Start the server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
