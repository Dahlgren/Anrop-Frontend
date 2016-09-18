var express = require('express');
var proxy = require('express-http-proxy');
var path = require('path');
var webpack = require('webpack');
var app = express();

var isDevelopment = (process.env.NODE_ENV !== 'production');
var staticPath = path.join(__dirname, 'build');

app.use(express.static(staticPath))

app.use('/api/users', proxy('https://www.anrop.se', {
  forwardPath: function(req, res) {
    return '/api/users' + require('url').parse(req.url).path;
  }
}));

app.use('/api', proxy('https://anrop-api.herokuapp.com'));

app.use('/images', proxy('https://www.anrop.se', {
  forwardPath: function(req, res) {
    return '/images' + require('url').parse(req.url).path;
  }
}));

app.get('/*', function (req, res) {
  res.sendFile('index.html', {
    root: staticPath
  });
});

app.listen(process.env.PORT || 8080, function (err) {
  if (err) { console.log(err) };
  console.log('Listening at localhost:8080');
});
