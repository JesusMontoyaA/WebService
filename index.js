const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Ruta principal o de bienvenida (sin cambios)
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <title>Bienvenido!!</title>
      <style>
        body { font-family: sans-serif; text-align: center; padding-top: 50px; }
        code { background-color: #a9ebadff; padding: 3px 5px; border-radius: 4px; }
      </style>
    </head>
    <body>
      <h1>Escribe tu nombre</h1>
    </body>
    </html>
  `);
});

// Ruta que acepta un parámetro y responde con una página HTML estilizada
app.get('/saludar/:nombre', (req, res) => {
  // 1. Obtenemos los datos dinámicos
  const nombreRecibido = req.params.nombre;
  const timestamp = new Date().toISOString();

  // 2. Creamos la respuesta HTML completa como un string
  const htmlResponse = `
    <!DOCTYPE html>
    <html lang="es">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Saludo</title>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Fira+Code&family=Roboto&display=swap');
        
        body {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
          background-color: #1e1e1e; /* Fondo oscuro */
          font-family: 'Roboto', sans-serif;
          color: #d4d4d4;
        }

        .card {
          background-color: #252526;
          border: 1px solid #333;
          border-radius: 10px;
          padding: 25px;
          width: 90%;
          max-width: 500px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
        }

        h1 {
          color: #569cd6; /* Azul claro */
          margin-top: 0;
          border-bottom: 1px solid #444;
          padding-bottom: 15px;
        }

        .data-entry {
          margin-bottom: 12px;
          font-family: 'Fira Code', monospace; /* Fuente de tipo código */
          font-size: 1.1em;
        }

        .key {
          color: #9cdcfe; /* Azul cielo para la clave */
        }
        
        .value {
          color: #ce9178; /* Naranja para el valor */
        }
      </style>
    </head>
    <body>
      <div class="card">
        <h1>Respuesta del Servicio</h1>
        <div class="data-entry">
          <span class="key">"saludo":</span>
          <span class="value">"¡Hola, ${nombreRecibido}!"</span>
        </div>
        <div class="data-entry">
          <span class="key">"parametro_recibido":</span>
          <span class="value">"${nombreRecibido}"</span>
        </div>
        <div class="data-entry">
          <span class="key">"timestamp":</span>
          <span class="value">"${timestamp}"</span>
        </div>
      </div>
    </body>
    </html>
  `;

  // 3. Enviamos la respuesta HTML
  res.send(htmlResponse);
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);

});