import express from 'express';
import ejs from 'ejs';

import * as functions from 'firebase-functions';

import { firebaseSetup } from './startup';
import { filmsRouter } from './routers';

const app = express();
firebaseSetup();

app.set('view engine', 'ejs');
app.use(filmsRouter);

exports.app = functions.https.onRequest(app);
