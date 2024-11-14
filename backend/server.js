require('dotenv').config();  // Esto carga las variables del archivo .env

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Server started');
  });
  

// Configuración de nodemailer usando las variables de entorno
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,  // Usar variable de entorno para el usuario
    pass: process.env.EMAIL_PASS,  // Usar variable de entorno para la contraseña
  },
});

// Ruta para manejar el formulario
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER, // Usar la variable de entorno para el destino
    subject: `Mensaje de ${name}`,
    text: `Nombre: ${name}\nCorreo: ${email}\nMensaje: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).json({ message: 'Hubo un error al enviar el mensaje.', error });
    }
    res.status(200).json({ message: 'Mensaje enviado con éxito.' });
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
