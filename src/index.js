import express from 'express';
// import functions from 'firebase-functions';
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Worldasds!');
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
