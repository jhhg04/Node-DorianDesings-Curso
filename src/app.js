// req = request -> Peticion del cliente
// res = response -> Respuesta del servidor
// cliente -> Navegador
// express -> Interactua modulo http de node

const express = require('express');
const path = require('path');
const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// ROUTES
// app.use(require('./routes/index.routes'))
const routes = require('./routes/index.routes');
app.use(routes);

// STATIC FILES
app.use(express.static(path.join(__dirname, '../public')));

app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../public/404.html'));
});

app.listen(5000, () => {
  console.log('Server a la espera de conexiones');
});
