const express = require('express');
const app = express();
const route1 = require('./routes/route1');
const route2 = require('./routes/route2');
const bodyParser = require('body-parser');
const path = require('path');
// const bodyParser = require('body-parser');

const port = 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

// middleware
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended:false}));
app.use('/route1', route1);
app.use('/route2', route2);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
})

app.use((req, res) => {
  res.status(404).send('<h1> UH OH ... </h1>');
})

// 
// const getPath = (name) => {
  // return __dirname + '/' + name;
// }
// 
// app.use(bodyParser.urlencoded());
// 
// app.use('/home', (req, res, next) => {
  // res.sendFile(getPath('_t2.html'));
// 
// });
// 
// app.get('/sendMess', (req, res, next) => {
  // console.log(req.body);
  // res.redirect('/home');
// });
// app.use('/test1', (req, res, next) => {
//   res.send('Current middleware');
// });

// app.use('/test2', (req, res, next) => {
//   res.send('Next middleware'); 
// });