const http = require('http');
const fs = require('fs');
const path = require('path');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  // Serve the HTML page for the root request
  if (req.url === '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    
    const htmlContent = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Alberta Travel Site</title>
      </head>
      <body>
          <h1>Hello from Alberta Travels!</h1>
          <p>Welcome to the Alberta Travel site</p>
          <img src="/banff.jpg" alt="Banff Image" style="max-width:40%; height:80px;">
      </body>
      </html>
    `;
    
    res.end(htmlContent);
  } 
  // Serve the image file
  else if (req.url === '/banff.jpg') {
    const filePath = path.join(__dirname, 'public', 'banff.jpg');
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.statusCode = 404;
        res.end('Image not found');
      } else {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'image/jpeg');
        res.end(data);
      }
    });
  } 
  // Handle 404 for other requests
  else {
    res.statusCode = 404;
    res.end('404 Not Found');
  }
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
