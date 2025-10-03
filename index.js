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
          font-family: sans-serif; 
          text-align: center; 
          padding-top: 50px; 
          background-color: #f4f4f4; 
          color: #333;
        }
        code { 
          background-color: #e1e1e1; 
          padding: 4px 6px; 
          border-radius: 4px; 
          font-family: monospace;
        }
        h1 {
          color: #0056b3;
        }
      </style>
    </head>
    <body>
      <h1>Ola lola, jaguar yu, te voy a saludar por tu nombre</h1>
    </body>
    </html>
  `);
});
app.get('/saludar/:nombre', (req, res) => {
  const nombreRecibido = req.params.nombre;

  const respuestaJson = {
    saludo: ¡Hola, ${nombreRecibido}!,
    parametro_recibido: nombreRecibido,
    timestamp: new Date().toISOString() 
  };
  res.json(respuestaJson);
});
app.listen(PORT, () => {
  console.log(Servidor escuchando en el puerto ${PORT});
});
