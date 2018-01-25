const express = require('express');
const app = express();

app.get('/', (req, res)=>{
  res.send('index.html');
});

app.get('/about', (req, res)=>{
  res.send('about.html');
});

app.get('/blog', (req, res)=>{
  res.send('blog.html');
});

app.get('/contact', (req, res)=>{
  res.send('contact.html');
});

app.get('/services', (req, res)=>{
  res.send('services.html');
});

const port = 3000 || process.env.PORT
app.listen(port, ()=> {
  console.log('App running on port ' + port);
});