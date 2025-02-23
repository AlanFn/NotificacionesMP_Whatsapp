require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const twilio = require('twilio');

const app = express();
app.use(bodyParser.json());

app.post('/webhook', async (req, res) => {
    const pago = req.body;
	
	console.log({pago})
	res.sendStatus(200);
});

// Iniciar servidor
app.listen(3000, () => console.log('Servidor escuchando en http://localhost:3000'));