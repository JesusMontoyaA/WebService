const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Ruta raíz (sirve tu HTML)
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>Mi Web Service</title>
      <style>
        body {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          background-color: #9aec79ff;
          font-family: sans-serif;
        }
        h1 {
          color: seablue;
          font-size: 3rem;
        }
      </style>
    </head>
    <body>
      <h1>Jesus Manuel Montoya Arredondooo - 22031240</h1>
    </body>
    </html>
  `);
});

// Nueva ruta JSON (recibe un parámetro por query)
app.get('/saludo', (req, res) => {
  const nombre = req.query.nombre || "invitado"; // si no mandan nombre, usa "invitado"
  
  res.json({
    mensaje: `Hola, ${nombre}! Bienvenido a mi API.`,
    longitud: nombre.length,
    status: "success"
  });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
