const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


// Crear una aplicación Express
const app = express();

app.use(cors());  // Esto habilita CORS para todas las rutas

// Configurar body-parser para recibir JSON
app.use(bodyParser.json());

// Conectar con MongoDB (usando la URI de conexión)
mongoose.connect('mongodb://localhost:27017/miBaseDeDatos', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

// Definir un esquema de datos
const datosSchema = new mongoose.Schema({
    nombre: String,
    correo: String,
    equipo: String,
    telefono: Number,
    ciudad: String,
    direccion: String,
    comentarios: String
});

// Crear un modelo basado en el esquema
const Datos = mongoose.model('Datos', datosSchema);

// API EN EXPRESS

// Ruta para recibir los datos desde el frontend y guardarlos en la base de datos
//ENDPOINTS
app.post('/guardar', (req, res) => {
    const nuevoDato = new Datos(req.body);

    nuevoDato.save()
        .then(() => res.status(200).send('Datos guardados correctamente'))
        .catch(err => res.status(500).send('Error al guardar los datos: ' + err));
});

// Ruta para obtener todos los datos de la base de datos
app.get('/obtener', (req, res) => {
    Datos.find()  // Obtiene todos los documentos de la colección "Datos" "Mongoose"
        .then(datos => res.status(200).json(datos))  // Si todo va bien, devuelve los datos en formato JSON
        .catch(err => res.status(500).send('Error al obtener los datos: ' + err));  // Manejo de errores
});

// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});