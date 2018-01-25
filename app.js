const express = require('express');
const app = express();
var path = require('path');

app.use(express.static(path.join(__dirname, 'src')));

app.get('/', (req, res)=>{
  res.sendFile('index.html');
});

app.get('/about', (req, res)=>{
  res.sendFile('about.html');
});

app.get('/blog', (req, res)=>{
  res.sendFile('blog.html');
});

app.get('/contact', (req, res)=>{
  res.sendFile('contact.html');
});

app.get('/services', (req, res)=>{
  res.sendFile('services.html');
});

const port = 3000 || process.env.PORT
app.listen(port, ()=> {
  console.log('App running on port ' + port);
});