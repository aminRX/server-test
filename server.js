const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('El sordo es joto funcionando en puerto 3000\n');
});

server.listen(3000, () => {
  console.log('Servidor ejecutándose en http://localhost:3000');
});