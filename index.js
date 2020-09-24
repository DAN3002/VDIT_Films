const express = require('express');
const functions =  require('firebase-functions');
const path = require('path');

const firebaseSetup = require('./startup/firebaseSetup');
const filmsRouter = require('./routers/filmRouter');

const app = express();
firebaseSetup();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(filmsRouter);

app.listen(3000);
// exports.app = functions.https.onRequest(app);
