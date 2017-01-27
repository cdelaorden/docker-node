var express = require('express');

function WebAppFactory(httpConfig, CounterService, SQLCounterService){

  var app = express();

  app.use(function(req,res,next){
    console.log(req.method, '-', req.path);
    next();
  })

  app.get('/', function(req, res) {
    res.send('Hi! Try <a href="/redis">Redis</a> and <a href="/mysql">MySQL</a> routes')
  });

  app.get('/redis', function(req, res){
    CounterService.increment().then(function(value){
      res.send('REDIS value is <span class="value">' + value + '</span>').end();
    });
  });

  app.get('/mysql', function(req, res){
    SQLCounterService.increment().then(function(value){
      res.send('MySQL value is <span class="value">' + value + '</span>').end();
    })
  });


  function start(){
    app.listen(httpConfig.port, httpConfig.host, function(err){
      console.log('Express listening on ', httpConfig.port);
    });
  }

  return {
    start: start,
    app: app
  }
}

module.exports = WebAppFactory;