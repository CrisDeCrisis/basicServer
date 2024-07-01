const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./src/router/user.routes.js');

// Inicializaciones
const app = express();
const PORT = process.env.PORT || 3000;

// Middelewares
app.use(express.json());
app.use(morgan('dev'));
app.use(cors());

// Rutas
app.use('/api/user', router);

// Inicializar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});