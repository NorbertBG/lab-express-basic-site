const express = require('express');
const { request } = require('http');

const app = express();

app.use(express.static('public'));


app.get('/', (request, response) => response.sendFile(__dirname + '/views/home-page.html'));

app.get('/labrador', (request, response) => response.sendFile(__dirname + '/views/labrador-retriever.html'));

app.get('/teckel', (request, response) => response.sendFile(__dirname + '/views/teckel-page.html'));


app.listen(3020)
