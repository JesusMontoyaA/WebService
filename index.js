const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>Mi Web Service</title>
      <style>
        body {
          /* Usamos Flexbox para centrar vertical y horizontalmente */
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          background-color: #f0f0f0; /* Un color de fondo suave */
          font-family: sans-serif;
        }
        h1 {
          color: steelblue; /* El color que pediste */
          font-size: 3rem;  /* Un poco más grande */
        }
      </style>
    </head>
    <body>
      <h1>Holaaaa Lola, Jaguar yuuuuuuuu!</h1>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});