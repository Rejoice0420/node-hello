const http = require('http');
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  
  // HTML response with heading and image
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
        <img src="/banff.jpg" alt="Placeholder Image" style="max-width:100%; height:auto;">
    </body>
    </html>
  `;
  
  res.end(htmlContent);
});

server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
