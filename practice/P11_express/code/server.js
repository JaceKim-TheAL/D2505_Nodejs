const express = require('express');
const app = express();

const server = app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);


app.get('/', function(req, res) {
  res.render('index.html', { title: 'Home Page' })
});

app.get('/about', function(req, res) {
  res.render('about.html', { title: 'About Page' })
});



