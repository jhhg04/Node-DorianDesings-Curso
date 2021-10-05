const http = require('http');

// req = request -> Peticion del cliente
// res = response -> Respuesta del servidor
// cliente -> Navegador

const server = http.createServer((req, res) => {
  console.log('Un cliente se ha conectado');
  res.writeHead(200, { 'Content-Type': 'text/html; charset-utf-8' });
  res.write('La conexión ha sido correcta');
  res.end();
});

server.listen(5000, () => {
  console.log('Server a la espera de conexiones');
});
