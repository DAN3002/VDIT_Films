const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000

const firebaseSetup = require('./startup/firebaseSetup');
const filmsRouter = require('./routers/filmRouter');

const app = express();
firebaseSetup();

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.use(filmsRouter);

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
