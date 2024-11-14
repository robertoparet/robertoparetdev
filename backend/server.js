require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
const contactRoute = require('./api/contact');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Usar la ruta de contacto
app.use('/api/contact', contactRoute);

// Exportar la aplicación para que Vercel la maneje
module.exports = app;
