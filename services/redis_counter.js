const RedisCounterServiceFactory = function(redisConfig, redis){
  var _isReady = false,
      client;

  function start(){
    client = redis.createClient(redisConfig.port, redisConfig.host);

    client.on('connect', function() {
      console.log('Redis client connected!');
      _isReady = true;
    });
    client.on('disconnect', function() {
      _isReady = false;
    });
  }

  function stop(){
    if(_isReady){
      client.quit();
    }
  }

  function increment(){
    return new Promise(function(resolve, reject){
      client.incr(redisConfig.counterKey, function(err, counter){
        return err ? reject(err) : resolve(counter);
      });
    });
  }

  function getCounter(){
    return new Promise(function(resolve, reject){
      client.get(redisConfig.conterKey, function(err, counter){
        return err ? reject(err) : resolve(counter);
      });
    });
  }

  start();

  return {
    start: start,
    stop: stop,
    increment: increment,
    getCounter: getCounter
  }

}

module.exports = RedisCounterServiceFactory;