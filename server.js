const express = require('express');
const app = express();
const PORT = 80;

app.get('/', (req, res) => {
  res.send('<h1>¡Bienvenido a mi servidor web en Docker con Node.js!</h1>');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
