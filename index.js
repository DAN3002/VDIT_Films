const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;

const firebaseSetup = require('./startup/firebaseSetup');
firebaseSetup();

const filmsRouter = require('./routers/filmRouter');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(filmsRouter);

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
