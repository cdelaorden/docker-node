var express = require('express');

function WebAppFactory(httpConfig, CounterService, SQLCounterService){

  var app = express();

  app.use(function(req,res,next){
    console.log(req.method, '-', req.path);
    next();
  })

  app.get('/', (req, res) => res.send('Hi! Try /redis and /mysql routes'));

  app.get('/redis', function(req, res){
    CounterService.increment().then(value => {
      res.send(`REDIS value is ${value}`).end();
    });
  });

  app.get('/mysql', function(req, res){
    SQLCounterService.increment().then(value => {
      res.send(`MySQL value is  ${value}`).end();
    })
  });


  function start(){
    app.listen(httpConfig.port, httpConfig.host, function(err){
      console.log('Express listening on ', httpConfig.port);
    });
  }


  return {
    start,
    app
  }


}

module.exports = WebAppFactory;